<script setup lang="ts">
import congoImg from '@/assets/images/illustrations/congo-illustration.png'
</script>

<template>
	<VCard
	title="Congratulations John! 🎉"
	subtitle="Best seller of the month"
	>
	<VRow no-gutters>
		<VCol cols="8">
			<VCardText>
				<h5 class="text-h5 font-weight-semibold text-primary mb-2">
					$48.9k
				</h5>
				<VBtn color="info" variant="outlined">View Sales</VBtn>
			</VCardText>
		</VCol>
		
		<VCol cols="4">
			<VCardText class="pb-0 px-0 position-relative h-100">
				<VImg
				:src="congoImg"
				height="140"
				class="w-100 position-absolute"
				style="bottom: 0;"
				/>
			</VCardText>
		</VCol>
	</VRow>
</VCard>
</template>
