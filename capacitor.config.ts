
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.8789a5d8bb0c45b2a919e2ceacecc3e3',
  appName: 'sopora-client',
  webDir: 'dist',
  server: {
    url: 'https://8789a5d8-bb0c-45b2-a919-e2ceacecc3e3.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0D1B2A',
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#0D1B2A'
    }
  }
};

export default config;
