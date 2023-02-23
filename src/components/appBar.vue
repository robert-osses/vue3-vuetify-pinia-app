<script setup lang="ts">
	import { ref } from 'vue'
	import { useTheme, useDisplay } from 'vuetify'
	import { SunHighIcon, MoonIcon, FlagIcon, Menu2Icon, DotsVerticalIcon } from "vue-tabler-icons";

	import { useDrawerStore } from '@/stores/drawer';
	import { useRouter } from 'vue-router';

	const drawerStore = useDrawerStore();

	const theme = useTheme()
	const { name } = useDisplay()
	const router = useRouter()
	const dialog = ref(false)

	const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
	const { toggle } = drawerStore;

	const logout = () => {
		console.log('salir del sistema')
        router.push({
            name: 'login', 
            replace: true,
        })
	}
</script>

<template>
	<v-app-bar>
		<v-btn icon @click="toggle" class="d-lg-none">
			<menu2-icon />
		</v-btn>
		<flag-icon class="ml-3" />
		<span class="ma-3 pt-1 d-lg-none">
			C2
		</span>
		<span class="ma-3 pt-1 d-none d-lg-block">
			PROTOTIPO BASE C2
		</span>
		<v-spacer />
		<v-menu width="20vw">
			<template v-slot:activator="{ props }">
				<v-btn icon class="d-lg-none" v-bind="props">
					<dots-vertical-icon />
				</v-btn>
			</template>

			<v-list>
				<v-list-item>
					<v-list-item-title><span>{{ name }}</span></v-list-item-title>
				</v-list-item>
				<v-list-item @click="toggleTheme">
					<v-list-item-title>
						<span>{{ theme.global.current.value.dark ? 'Iluminar' : 'Oscurecer' }}</span>
						<sun-high-icon class="float-end" v-if="theme.global.name.value == 'dark'" />
						<moon-icon class="float-end" v-else />
					</v-list-item-title>
				</v-list-item>
				<v-list-item @click="dialog=true">
					<v-list-item-title>
						<span>Instructivo</span>
						<v-icon class="float-end">mdi-help-circle</v-icon>
					</v-list-item-title>
				</v-list-item>
				<v-list-item @click="logout">
					<v-list-item-title>
						<span>Cerrar Sesión</span>
						<v-icon class="float-end">mdi-logout</v-icon>
					</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<template class="d-none d-lg-block">
			<span class="ma-3">{{ name }}</span>
			<v-btn icon @click="toggleTheme" :title="theme.global.name.value == 'dark' ? 'Iluminar' : 'Oscurecer'">
				<sun-high-icon v-if="theme.global.name.value == 'dark'" />
				<moon-icon v-else />
			</v-btn>
			<v-btn 
				icon
				title="Instructivo"
				@click="dialog=true"
			>
				<v-icon>
					mdi-help-circle
				</v-icon>
			</v-btn>
			<v-chip 
				title="Cerrar Sesión"
				@click="logout"
			>
				Cerrar Sesión
				<v-icon small class="ml-2">
					mdi-logout
				</v-icon>
			</v-chip>
		</template>
	</v-app-bar>
	<v-dialog v-model="dialog" class="w-75">
		<v-card>
			<v-card-title>
				<span>Instructivo</span>
				<v-btn
					icon="mdi-close"
					size="x-small"
					class="float-end"
					@click="dialog=false"
				/>
			</v-card-title>
			<v-card-text class="ma-4 text-center">
				Instructivo en PDF
			</v-card-text>
		</v-card>
	</v-dialog>
</template>