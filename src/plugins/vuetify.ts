/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const light = {
  dark: false,
  colors: {
    background: '#000000',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const dark = {
  light: false,
  colors: {
    primary: '#dd0000',
    // info: '#000000',
  },
  variables: {
    'theme-primary-overlay-multiplier': 3, // nivel de iluminación al hacer hover en elementos btn primary
    'theme-info-overlay-multiplier': 3, // nivel de iluminación al hacer hover en elementos btn info
    'theme-warning-overlay-multiplier': 3, // nivel de iluminación al hacer hover en elementos btn warning
    // 'theme-on-background': '#1a2728', // color del texto sobre background
    // 'theme-on-surface': '#1a2728', // color del texto sobre surface
    'disabled-opacity': 0.9,
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light,
      dark,
    },
  }
})
