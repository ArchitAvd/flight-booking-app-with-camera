import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'flight-booking',
  webDir: 'www',
  plugins: {
    Camera: {
      allowEditing: false,
      resultType: 'base64',
      quality: 90,
    },
  },
};

export default config;
