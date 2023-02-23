<script setup lang="ts">
    import { ref } from 'vue';
    import { useTheme, useDisplay } from 'vuetify';
	import { SunHighIcon, MoonIcon } from 'vue-tabler-icons';
    import { useRouter } from 'vue-router';

    import logo from '@/assets/images/logo.png'
    import bgLight from '@/assets/images/pages/auth-v2-register-illustration-light.png'
    import bgDark from '@/assets/images/pages/auth-v2-register-illustration-dark.png'

    const theme = useTheme()
    const { name } = useDisplay()
    const router = useRouter()

    const visible = ref(false)

    const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

    const ingresar = () => {
        console.log('ingreso al sistema')
        router.push({
            name: 'home', 
            replace: true,
        })
    }
</script>

<template>
    <v-row dense class="mx-auto mt-9 justify-center">
        <v-col sm="12" md="9">
            <v-card 
                class="rounded-lg" 
                elevation="9"
            >
                <v-container fluid class="ma-0 pa-0">
                    <v-row dense>
                        <v-col sm="12" md="5" lg="4">
                            <v-card 
                                elevation="0"
                            >
                                <v-card-text>
                                    <v-row class=" centrarCont">
                                        <v-img 
                                            :src="logo"
                                            class="logoBig"
                                        />
                                    </v-row>
                                    <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

                                    <v-text-field
                                        placeholder="RUN, sin puntos ni guión"
                                        prepend-inner-icon="mdi-account"
                                        variant="outlined"
                                    ></v-text-field>

                                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                                        Contraseña

                                        <a
                                            class="text-caption text-decoration-none text-blue"
                                            href="#"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                        Olvidó su contraseña?</a>
                                    </div>

                                    <v-text-field
                                        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                                        :type="visible ? 'text' : 'password'"
                                        placeholder="Ingrese su contraseña"
                                        :prepend-inner-icon="visible ? 'mdi-lock-open-outline' : 'mdi-lock-outline'"
                                        variant="outlined"
                                        @click:append-inner="visible = !visible"
                                    ></v-text-field>

                                    <v-card
                                        class="mb-12"
                                        color="surface-variant"
                                        variant="tonal"
                                    >
                                        <v-card-text class="text-medium-emphasis text-caption">
                                        Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
                                        </v-card-text>
                                    </v-card>

                                    <v-btn 
                                        color="primary"
                                        block
                                        size="large"
                                        append-icon="mdi-chevron-right"
                                        @click="ingresar"
                                    >
                                        INGRESAR
                                    </v-btn>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col md="7" lg="8" class="d-none d-md-block">
                            <v-card elevation="0">
                                <v-img
                                    :src="theme.global.current.value.dark ? bgLight : bgDark"
                                    max-height="700px"
                                >
                                    <v-card-title class="text-center">
                                        <span>{{ name }}</span>
                                        <v-btn 
                                            icon 
                                            size="x-small"
                                            class="float-end"
                                            @click="toggleTheme" 
                                            :title="theme.global.name.value == 'dark' ? 'Iluminar' : 'Oscurecer'"
                                        >
                                            <sun-high-icon v-if="theme.global.name.value == 'dark'" />
                                            <moon-icon v-else />
                                        </v-btn>
                                    </v-card-title>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                
                <v-card-actions class="justify-center" :style="theme.global.current.value.dark ? 'background-color: #32322b !important' : 'background-color: #e9e9e2 !important'">
                    <span>DIMACOE, Equipo de desarrollo Institucional &copy; 2023</span>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>
    .logoBig{
        height: 27vh;
        width: 27vh;
    }

    .logoSmall{
        height: 15vh;
        width: 15vh;
    }

    .centrarCont {
        text-align: center;
    }

    .bgFooter {
        background-color: "#f5f5dc" !important;
    }
</style>