# TripPals Frontend Deployment Guide

## Prerequisites

### 1. AWS Lightsail Instance Setup
- Create a Lightsail instance (Ubuntu/Amazon Linux)
- Configure security groups to allow HTTP (port 80) and HTTPS (port 443)
- Note down your instance's public IP address

### 2. Server Preparation
SSH into your Lightsail instance and run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (LTS version)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install serve globally (for serving static React builds)
sudo npm install -g serve

# Install Git
sudo apt install git -y

# Clone your repository
git clone https://github.com/tcf01/trippals-frontend-website.git
cd trippals-frontend-website

# Install dependencies
npm install
```

### 3. Local Setup
1. Download your Lightsail SSH key (`lightsail-ssh-key.pem`)
2. Place it in your project root directory
3. Set proper permissions: `chmod 600 lightsail-ssh-key.pem`

## Configuration

### Update the deployment script:
Edit `deploy-lightsail.sh` and update these variables:

```bash
SSH_KEY="lightsail-ssh-key.pem"        # Your SSH key filename
USERNAME="bitnami"                     # Your server username (usually 'bitnami' or 'ubuntu')
HOST="47.130.14.219"                   # Your Lightsail instance IP
PROJECT_DIR="trippals-frontend-website" # Directory name on server
```

## Deployment Process

### 1. First-time Setup
```bash
# Make script executable (already done)
chmod +x deploy-lightsail.sh

# Run deployment
./deploy-lightsail.sh
```

### 2. What the Script Does

1. **Status Check**: Checks current PM2 processes and port usage
2. **Cleanup**: Stops existing services and frees port 3000
3. **Git Pull**: Pulls latest changes from your GitHub repository
4. **Build**: Installs dependencies and builds the React app
5. **Deploy**: Starts the app using PM2 with `serve` for static file serving
6. **Verification**: Checks if the app is running correctly

### 3. Key Differences from Next.js Script

- Uses `npm run build` instead of Next.js build
- Uses `serve` to serve static files instead of `npm start`
- Builds to `build/` directory instead of `.next/`
- Uses `main` branch instead of `master`

## Post-Deployment

### Access Your App
- Your app will be available at: `http://YOUR_LIGHTSAIL_IP`
- Example: `http://47.130.14.219`

### Useful Commands

```bash
# Check PM2 status
ssh -i lightsail-ssh-key.pem bitnami@YOUR_IP 'pm2 list'

# View logs
ssh -i lightsail-ssh-key.pem bitnami@YOUR_IP 'pm2 logs trippals-frontend'

# Restart app
ssh -i lightsail-ssh-key.pem bitnami@YOUR_IP 'pm2 restart trippals-frontend'

# Stop app
ssh -i lightsail-ssh-key.pem bitnami@YOUR_IP 'pm2 stop trippals-frontend'
```

## Troubleshooting

### Common Issues

1. **Permission Denied**
   ```bash
   chmod 600 lightsail-ssh-key.pem
   ```

2. **Port Already in Use**
   - The script automatically kills processes on port 3000
   - Check manually: `netstat -tlnp | grep :3000`

3. **Build Fails**
   - Check Node.js version: `node --version`
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

4. **App Not Accessible**
   - Check Lightsail security groups
   - Ensure port 3000 is open
   - Check PM2 status: `pm2 list`

### Manual Deployment Steps

If the script fails, you can deploy manually:

```bash
# SSH into server
ssh -i lightsail-ssh-key.pem bitnami@YOUR_IP

# Navigate to project
cd trippals-frontend-website

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build project
npm run build

# Start with PM2
pm2 start serve --name trippals-frontend -- -s build -l 3000

# Save PM2 config
pm2 save
```

## Environment Variables

The script creates a `.env.production` file with:
```bash
REACT_APP_SITE_URL=http://YOUR_LIGHTSAIL_IP
GENERATE_SOURCEMAP=false
```

Add any additional environment variables as needed.

## Security Notes

- Keep your SSH key secure and never commit it to Git
- Consider setting up HTTPS with Let's Encrypt
- Regularly update your server and dependencies
- Monitor your app logs for any issues

## Next Steps

1. Set up a custom domain (optional)
2. Configure HTTPS with SSL certificate
3. Set up automated deployments with GitHub Actions
4. Configure monitoring and logging


