<template>
    <v-app>
        <v-main>
            <router-view :key="$route.path" />
        </v-main>
		<v-footer class="pa-0 ma-0 d-flex flex-column">
			<div class="px-4 py-2 bg-black text-center w-100">
				{{ new Date().getFullYear() }} — <strong>Sashimi</strong>
			</div>
		</v-footer>
    </v-app>
</template>
