import "@mdi/font/css/materialdesignicons.css"; // Import Material Design Icons
import "vuetify/styles"; // Import Vuetify styles
import { createVuetify } from "vuetify"; // Import createVuetify function


import * as components from "vuetify/components"; // Import Vuetify components
import * as directives from "vuetify/directives"; // Import Vuetify directives

const customLightBlue = {
    base: "#03A9F4", // Base color for light-blue
  
  };
// Define your custom dark theme
const customDarkTheme = {
  dark: true,
  colors: {
    background: "#15202b",
    surface: "#15202b",
    primary: "#3f51b5", // Override with your custom primary color
    secondary: "#03dac6", // Override with your custom secondary color
    error: "#f44336",
    info: "#2196F3",
    success: "#4caf50",
    warning: "#fb8c00",
    lightBlue: customLightBlue.base,
    lighten5: "#E1F5FE", // Lightest shade
    lighten4: "#B3E5FC",
    lighten3: "#81D4FA",
    lighten2: "#4FC3F7",
    lighten1: "#29B6F6",
    darken1: "#039BE5",
    darken2: "#0288D1",
    darken3: "#0277BD",
    darken4: "#01579B", // Darkest shade
    accent1: "#80D8FF", // Optional accent colors
    accent2: "#40C4FF",
    accent3: "#00B0FF",
    accent4: "#0091EA",
  },
};

// Create and export the Vuetify instance
export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi", // Set the default icon font to Material Design Icons
  },
  theme: {
    defaultTheme: "customDarkTheme", // Set the default theme to your custom dark theme
    themes: {
      customDarkTheme, // Register your custom dark theme
      dark: {
        colors: {
          primary: "#1976D2", // Default dark theme colors
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
      light: {
        colors: {
          primary: "#1976D2", // Default light theme colors
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
});