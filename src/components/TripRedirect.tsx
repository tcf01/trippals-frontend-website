"use client";

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const TripRedirect: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();

  useEffect(() => {
    // Try to open the app first
    const appScheme = `trippals://trip/${roomId}`;

    // Create a hidden iframe to try opening the app
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = appScheme;
    document.body.appendChild(iframe);

    // Set a timer to redirect to app stores if app doesn't open
    const redirectTimer = setTimeout(() => {
      // Remove the iframe
      document.body.removeChild(iframe);

      // Detect device and redirect to appropriate store
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);

      // Log device detection
      console.log('🔍 Device Detection:', {
        userAgent: navigator.userAgent,
        isIOS: isIOS,
        isAndroid: isAndroid,
        deviceType: isIOS ? 'iOS' : isAndroid ? 'Android' : 'Desktop/Other'
      });

      if (isIOS) {
        // Redirect to App Store
        const appStoreUrl = 'https://apps.apple.com/app/trippals/id6469631029';
        console.log('📱 Redirecting iOS user to App Store:', appStoreUrl);
        window.location.href = appStoreUrl;
      } else if (isAndroid) {
        // Redirect to Google Play Store
        const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.trippals.app';
        console.log('🤖 Redirecting Android user to Google Play Store:', playStoreUrl);
        window.location.href = playStoreUrl;
      } else {
        return;
      }
    }, 1500); // Wait 1.5 seconds for app to potentially open

    // Cleanup function
    return () => {
      clearTimeout(redirectTimer);
      // Remove iframe if component unmounts
      try {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      } catch (e) {
        // Ignore errors if iframe was already removed
      }
    };
  }, [roomId]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px 20px',
        maxWidth: '400px'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#4CAF50',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          animation: 'spin 1s linear infinite'
        }}>
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: '3px solid white',
            borderTop: '3px solid transparent'
          }}></div>
        </div>

        <h1 style={{
          color: '#333',
          fontSize: '24px',
          marginBottom: '16px',
          fontWeight: '600'
        }}>
          Opening TripPals...
        </h1>

        <p style={{
          color: '#666',
          fontSize: '16px',
          lineHeight: '1.5',
          marginBottom: '20px'
        }}>
          We&apos;re redirecting you to the TripPals app. If the app doesn&apos;t open automatically,
          We&apos;ll take you to the app store to download it.
        </p>

        <div style={{
          fontSize: '14px',
          color: '#999'
        }}>
          Room ID: {roomId}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default TripRedirect;
