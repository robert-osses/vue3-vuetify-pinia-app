<script setup lang="ts">
import amazonEchoDot from '@/assets/images/eCommerce/amazon-echo-dot.png'
import appleWatch from '@/assets/images/eCommerce/apple-watch.png'
import headphone from '@/assets/images/eCommerce/headphone.png'
import iphone from '@/assets/images/eCommerce/iphone.png'
import nike from '@/assets/images/eCommerce/nike.png'
import sonyDualsense from '@/assets/images/eCommerce/sony-dualsense.png'

const popularProducts = [
{
	avatarImg: iphone,
	title: 'Apple iPhone 13',
	subtitle: 'Item: #FXZ-4567',
	stats: '$999.29',
},
{
	avatarImg: nike,
	title: 'Nike Air Jordan',
	subtitle: 'Item: #FXZ-3456',
	stats: '$72.40',
},
{
	avatarImg: headphone,
	title: 'Beats Studio 2',
	subtitle: 'Item: #FXZ-9485',
	stats: '$99',
},
{
	avatarImg: appleWatch,
	title: 'Apple Watch Series 7',
	subtitle: 'Item: #FXZ-2345',
	stats: '$249.99',
},
{
	avatarImg: amazonEchoDot,
	title: 'Amazon Echo Dot',
	subtitle: 'Item: #FXZ-8959',
	stats: '$79.40',
},
{
	avatarImg: sonyDualsense,
	title: 'Play Station Console',
	subtitle: 'Item: #FXZ-7892',
	stats: '$129.48',
},
]
</script>

<template>
	<VCard
	title="Popular Products"
	subtitle="Total 10.4k Visitors"
	>
		<template #append>
			<div class="mt-n4 me-n2">
				<VBtn
				icon
				color="default"
				size="x-small"
				variant="plain"
				>
				<VIcon
				size="22"
				icon="tabler-dots-vertical"
				/>
				
				<VMenu activator="parent">
					<VList>
						<VListItem
						v-for="(item, index) in ['Refresh', 'Download', 'View All']"
						:key="index"
						:value="index"
						>
						<VListItemTitle>{{ item }}</VListItemTitle>
						</VListItem>
					</VList>
				</VMenu>
			</VBtn>
		</div>
		</template>

		<VCardText>
			<VList class="card-list">
				<VListItem
					v-for="product in popularProducts"
					:key="product.title"
				>
					<template #prepend>
						<VAvatar
						size="44"
						rounded
						:image="product.avatarImg"
						/>
					</template>
					
					<VListItemTitle class="font-weight-semibold">
						{{ product.title }}
					</VListItemTitle>
					<VListItemSubtitle>
						{{ product.subtitle }}
					</VListItemSubtitle>
					
					<template #append>
						<div class="d-flex align-center">
							<span class="font-weight-semibold me-2">{{ product.stats }}</span>
						</div>
					</template>
				</VListItem>
			</VList>
		</VCardText>
	</VCard>
</template>
