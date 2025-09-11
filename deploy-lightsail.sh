#!/bin/bash

# Deploy TripPals Frontend to Lightsail Script
# Adapted for React (Create React App) project

set -e

# Configuration
SSH_KEY="lightsail-ssh-key.pem"
USERNAME="bitnami"
HOST="13.229.86.7" 
PROJECT_DIR="trippals-frontend-website"
FRONTEND_DIR="trippals-frontend-website"

echo "🚀 Starting TripPals deployment to Lightsail..."

# Function to run commands on remote server
run_remote() {
    ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$USERNAME@$HOST" "$1"
}

echo "📋 Step 1: Connecting to server and checking current status..."

# Check current status
run_remote "
    echo '🔍 Checking current processes...'
    echo '=== PM2 Status ==='
    npx pm2 list
    
    echo '=== Port 3000 Usage ==='
    netstat -tlnp | grep :3000 || echo 'Port 3000 is free'
    
    echo '=== Current Directory ==='
    pwd
"

echo "📋 Step 2: Killing process on port 3000 and stopping PM2 service..."

# Kill process on port 3000 and stop PM2 service
run_remote "
    echo '🔄 Stopping PM2 service trippals-frontend...'
    npx pm2 delete trippals-frontend 2>/dev/null || echo 'No PM2 process to delete'
    
    echo '🔍 Checking for processes on port 3000...'
    PID=\$(netstat -tlnp | grep :3000 | awk '{print \$7}' | cut -d'/' -f1)
    if [ ! -z \"\$PID\" ]; then
        echo \"Killing process \$PID on port 3000...\"
        kill -9 \$PID
    else
        echo 'No process found on port 3000'
    fi
    
    echo '✅ Step 2 completed'
"

echo "📋 Step 3: Pulling latest changes from git..."

# Pull latest changes from git
run_remote "
    echo '📁 Changing to project directory...'
    cd $PROJECT_DIR
    
    echo '📥 Pulling latest changes from main branch...'
    git pull origin main
    
    echo '✅ Step 3 completed'
"

echo "📋 Step 4: Installing dependencies..."

# Install dependencies only (no build needed for development server)
run_remote "
    echo '📁 Changing to project directory...'
    cd $PROJECT_DIR
    
    echo '📦 Installing npm dependencies with legacy peer deps...'
    npm install --legacy-peer-deps
    
    echo '✅ Step 4 completed'
"

echo "📋 Step 5: Verifying project setup..."

# Verify project is ready
run_remote "
    echo '📁 Staying in project directory...'
    cd $PROJECT_DIR
    
    echo '🔍 Verifying project setup...'
    if [ -f 'package.json' ] && [ -d 'src' ]; then
        echo '✅ Project structure is correct'
        echo '✅ Step 5 completed - ready for PM2'
    else
        echo '❌ Project structure is incorrect'
        exit 1
    fi
"

echo "📋 Step 6: Installing PM2 and starting service..."

# Install PM2 and start service
run_remote "
    echo '📦 Installing PM2 globally...'
    npm install -g pm2 2>/dev/null || echo 'PM2 already installed'
    
    echo '🏠 Changing to home directory...'
    cd ~
    
    echo '🚀 Starting PM2 service with development environment...'
    cd $PROJECT_DIR
    
    echo '🔧 Setting up environment variables...'
    # Check if .env.local exists, if not create it with basic config
    if [ ! -f .env.local ]; then
        echo 'Creating .env.local file...'
        cat > .env.local << 'EOF'
# Development environment variables
REACT_APP_SITE_URL=https://trip-pals.com
GENERATE_SOURCEMAP=true
EOF
        echo '✅ Created .env.local file'
    fi
    
    NODE_ENV=development npx pm2 start npm --name trippals-frontend -- start
    
    echo '⏳ Waiting 10 seconds for app to start...'
    sleep 10
    
    echo '🔍 Checking if PM2 process is running...'
    if npx pm2 list | grep -q 'trippals-frontend.*online'; then
        echo '✅ PM2 process is online'
    else
        echo '❌ PM2 process failed to start'
        npx pm2 logs trippals-frontend --lines 10
        exit 1
    fi
    
    echo '💾 Saving PM2 configuration...'
    npx pm2 save
    
    echo '✅ Step 6 completed'
"

echo "📋 Final verification..."

# Final verification
run_remote "
    echo '🔍 Final status check...'
    echo '=== PM2 Status ==='
    npx pm2 list
    
    echo '=== Port 3000 Usage ==='
    netstat -tlnp | grep :3000 || echo 'Port 3000 is free'
    
    echo '=== App Health Check ==='
    if curl -s http://localhost:3000 > /dev/null; then
        echo '✅ Application is running and accessible'
    else
        echo '❌ Application is not accessible'
    fi
"

echo "✅ TripPals deployment completed successfully!"
echo "🌐 Your application should be available at: http://$HOST"
echo "📊 PM2 status: ssh -i $SSH_KEY $USERNAME@$HOST 'npx pm2 list'"
echo "📝 PM2 logs: ssh -i $SSH_KEY $USERNAME@$HOST 'npx pm2 logs trippals-frontend'"
