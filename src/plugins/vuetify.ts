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
    'theme-info-overlay-multiplier': 3, // nivel de iluminación al hacer hover en elementos btn info
    'theme-warning-overlay-multiplier': 3, // nivel de iluminación al hacer hover en elementos btn warning
    // 'theme-on-background': '#1a2728', // color del texto sobre background
    // 'theme-on-surface': '#1a2728', // color del texto sobre surface
    'disabled-opacity': 0.9,
}

const light = {
    dark: false,
    colors: {
        // background: '#FFFFFF',
        // surface: '#FFFFFF',
        // primary: '#B71C1C',
        // 'primary-darken-1': '#3700B3',
        // secondary: '#03DAC6',
        // 'secondary-darken-1': '#018786',
        // error: '#B00020',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FB8C00',
    }
}

const dark = {
    light: false,
    colors: {
        //primary: '#dd0000',
        // info: '#000000',
    },
    variables,
}

const armyLight = {
    dark: false,
    colors: {
        // Estilos ya utilizados (referencia)
        background: "#ededed",
        // surface: "#b1b1b1",
        primary: "#B71C1C",
        secondary: "#424242",
        // accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#008000",
        // warning: "#FFC107",
    }
}

const armyDark = {
    dark: false,
    colors: {
        // Estilos ya utilizados (referencia)
        primary: "#B71C1C",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
    }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light,
            dark,
            armyLight,
            armyDark,
        },
    }
})
