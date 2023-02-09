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

const variables = {
    'theme-primary-overlay-multiplier': 3, // nivel de iluminación al hacer hover en elementos btn primary
    'theme-info-overlay-multiplier': 3,
    'theme-warning-overlay-multiplier': 3,
    'theme-secondary-overlay-multiplier': 3,
    'theme-success-overlay-multiplier': 3,
    'theme-error-overlay-multiplier': 3,
    // 'theme-on-background': '#1a2728', // color del texto sobre background
    // 'theme-on-surface': '#1a2728', // color del texto sobre surface
    'disabled-opacity': 0.9,
}

const light = {
    dark: false,
    colors: {
        background: "#ededed",
        primary: "#B71C1C",
        secondary: "#424242",
        info: "#2196F3",
        success: "#008000",
        error: "#FF5252",
    },
    variables,
}

const dark = {
    light: false,
    colors: {
        background: "#000000",
        primary: "#fb2424",
        secondary: "#808080",
        info: "#2196F3",
        success: "#4CAF50",
        error: "#FF5252",
    },
    variables,
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light,
            dark,
        },
    }
})
