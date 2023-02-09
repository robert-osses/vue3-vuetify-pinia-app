<script setup lang="ts">
	import { useTheme, useDisplay } from 'vuetify'
	import { SunHighIcon, MoonIcon, FlagIcon, Menu2Icon, DotsVerticalIcon } from "vue-tabler-icons";

	import { useDrawerStore } from '@/stores/drawer';

	const drawerStore = useDrawerStore();

	const theme = useTheme()
	const { name } = useDisplay()

	const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
	const { toggle } = drawerStore;
</script>

<template>
	<v-app-bar>
		<v-btn icon @click="toggle" class="d-lg-none">
			<menu2-icon />
		</v-btn>
		<flag-icon class="ml-3" />
		<span class="ma-3 pt-1 d-lg-none">
			PROY BASE
		</span>
		<span class="ma-3 pt-1 d-none d-lg-block">
			PROYECTO BASE M&C
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
						<span>Modo {{ theme.global.current.value.dark ? 'Diurno' : 'Nocturno' }}</span>
						<sun-high-icon class="float-right" v-if="theme.global.name.value == 'dark'" />
						<moon-icon class="float-right" v-else />
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
		</template>
	</v-app-bar>
</template>