<script setup lang="ts">
	import { ref, computed } from 'vue'

	import { ChevronUpIcon, ChevronDownIcon, ShoppingCartPlusIcon, ShareIcon, HelpIcon, TrendingUpIcon, StarIcon, UserIcon,LockOpenIcon } from "vue-tabler-icons";

	import avatar1 from '@/assets/images/avatars/avatar-1.png'
	import avatar2 from '@/assets/images/avatars/avatar-2.png'
	import avatar3 from '@/assets/images/avatars/avatar-3.png'
	import avatar4 from '@/assets/images/avatars/avatar-4.png'
	import eCommerce2 from '@/assets/images/eCommerce/2.png'
	import pages1 from '@/assets/images/pages/1.png'
	import pages2 from '@/assets/images/pages/2.png'
	import pages3 from '@/assets/images/pages/3.png'
	import pages5 from '@/assets/images/pages/5.jpg'
	import pages6 from '@/assets/images/pages/6.jpg'

	const avatars = [
		avatar1,
		avatar2,
		avatar3,
		avatar4,
	]

	const rate = ref<number>(4)

	const isCardDetailsVisible = ref(false)
</script>

<template>
	<v-row>
		<!-- 👉 Influencing The Influencer -->
		<v-col
			cols="12"
			sm="6"
			md="4"
		>
			<v-card>
				<v-img
					:src="pages1"
					cover
				/>

				<v-cardItem>
					<v-cardTitle>Influencing The Influencer</v-cardTitle>
				</v-cardItem>

				<v-cardText>
					Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.
				</v-cardText>
			</v-card>
		</v-col>

		<!-- 👉 Robert Meyer -->
		<v-col
			cols="12"
			sm="6"
			md="4"
		>
			<v-card>
				<v-img :src="pages2" />

				<v-cardText class="position-relative">
					<!-- User Avatar -->
					<v-avatar
						size="75"
						class="avatar-center"
						:image="avatar1"
					/>

					<!-- Title, Subtitle & Action Button -->
					<div class="d-flex justify-space-between flex-wrap pt-8">
						<div class="me-2 mb-2">
							<v-cardTitle class="pa-0">
								Robert Meyer
							</v-cardTitle>
							<v-cardSubtitle class="text-caption pa-0">
								London, UK
							</v-cardSubtitle>
						</div>
						<v-btn color="success" variant="outlined">send request</v-btn>
					</div>

					<!--  Mutual Friends -->
					<div class="d-flex justify-space-between align-center mt-8">
						<span class="font-weight-medium">18 mutual friends</span>

						<div class="v-avatar-group">
							<v-avatar
								v-for="avatar in avatars"
								:key="avatar"
								:image="avatar"
								size="45"
							/>
						</div>
					</div>
				</v-cardText>
			</v-card>
		</v-col>

		<!-- 👉 Popular Uses Of The Internet -->
		<v-col
			cols="12"
			md="4"
			sm="6"
		>
			<v-card>
				<v-img :src="pages3" />

				<v-cardItem>
					<v-cardTitle>Popular Uses Of The Internet</v-cardTitle>
				</v-cardItem>

				<v-cardText>
					Although cards can support multiple actions, UI controls, and an overflow menu.
				</v-cardText>

				<v-cardActions>
					<v-btn 
						class="ma-2" 
						color="secondary"
						variant="outlined"
						@click="isCardDetailsVisible = !isCardDetailsVisible"
					>
						Details
					</v-btn>

					<VSpacer />

					<v-btn
						icon
						size="small"
						@click="isCardDetailsVisible = !isCardDetailsVisible"
					>
						<chevron-up-icon v-if="isCardDetailsVisible" />
						<chevron-down-icon v-else />
					</v-btn>
				</v-cardActions>

				<v-expand-transition>
					<div v-show="isCardDetailsVisible">
						<v-divider />
						<v-cardText>
							I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
						</v-cardText>
					</div>
				</v-expand-transition>
			</v-card>
		</v-col>

		<!-- 👉 Apple iPhone 11 Pro -->
		<v-col
			sm="6"
			cols="12"
		>
			<v-card>
				<div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
					<div class="ma-auto pa-5">
						<v-img
							width="137"
							:src="eCommerce2"
						/>
					</div>

					<v-divider :vertical="$vuetify.display.mdAndUp" />

					<div>
						<v-cardItem>
							<v-cardTitle>Apple iPhone 11 Pro</v-cardTitle>
						</v-cardItem>

						<v-cardText>
							Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
						</v-cardText>

						<v-cardText class="text-subtitle-1">
							<span>Price :</span> <span class="font-weight-bold">$899</span>
						</v-cardText>

						<v-cardActions class="justify-space-between">
							<v-btn color="primary" variant="outlined">
								<shopping-cart-plus-icon />
								<span class="ms-2">Add to cart</span>
							</v-btn>

							<share-icon />
						</v-cardActions>
					</div>
				</div>
			</v-card>
		</v-col>

		<!-- 👉 Stump town Roasters. -->
		<v-col
			sm="6"
			cols="12"
		>
			<v-card>
				<div class="d-flex flex-column-reverse flex-md-row">
					<div>
						<v-cardItem>
							<v-cardTitle>Stumptown Roasters</v-cardTitle>
						</v-cardItem>

						<v-cardText class="d-flex align-center flex-wrap body-1">
							<v-rating
								:model-value="5"
								readonly
								class="me-3"
								density="compact"
							/>
							<span>5 Star | 98 reviews</span>
						</v-cardText>

						<v-cardText>
							Before there was a United States of America, there were coffee houses, because how are you supposed to build.
						</v-cardText>

						<v-cardActions>
							<v-btn color="primary" variant="outlined">Location</v-btn>
							<v-btn color="secondary" variant="outlined">Reviews</v-btn>
						</v-cardActions>
					</div>

					<div class="ma-auto pa-5">
						<v-img
							:width="176"
							:src="pages5"
							class="rounded"
						/>
					</div>
				</div>
			</v-card>
		</v-col>

		<!-- 👉 Apple Watch card -->
		<v-col
			lg="4"
			sm="6"
			cols="12"
		>
			<v-card>
				<v-img :src="pages6" />

				<v-cardItem>
					<v-cardTitle>Apple Watch</v-cardTitle>
				</v-cardItem>

				<v-cardText>
					<p class="font-weight-medium text-base">
						$249.40
					</p>

					<p class="mb-0">
						3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
					</p>
				</v-cardText>

				<v-btn
					block
					class="rounded-t-0"
				>
					Add to cart
				</v-btn>
			</v-card>
		</v-col>

		<!-- 👉 Lifetime Membership -->
		<v-col
			md="6"
			lg="8"
			cols="12"
		>
			<v-card>
				<v-row no-gutters>
					<v-col
						cols="12"
						sm="8"
						md="12"
						lg="7"
						order="2"
						order-lg="1"
					>
						<v-cardItem>
							<v-cardTitle>Lifetime Membership</v-cardTitle>
						</v-cardItem>

						<v-cardText>
							Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men.
						</v-cardText>

						<v-cardText>
							<v-divider />
						</v-cardText>

						<v-cardText class="d-flex justify-center">
							<div class="me-auto pe-4">
								<p class="d-flex align-center mb-6 primary">
									<v-icon
										color="primary"
										icon="mdi-lock-open"
										size="22"
									/>
									<span class="ms-3">Full Access</span>
								</p>

								<p class="d-flex align-center mb-0">
									<v-icon
										color="primary"
										icon="mdi-account"
										size="22"
									/>
									<span class="ms-3">15 Members</span>
								</p>
							</div>

							<v-divider
								v-if="$vuetify.display.smAndUp"
								vertical
								inset
							/>

							<div class="ms-auto ps-4">
								<p class="d-flex align-center mb-6">
									<v-icon
										color="primary"
										icon="mdi-star"
										size="22"
									/>
									<span class="ms-3">Access all Features</span>
								</p>

								<p class="d-flex align-center mb-0">
									<v-icon
										color="primary"
										icon="mdi-trending-up"
										size="22"
									/>
									<span class="ms-3">Lifetime Free Update</span>
								</p>
							</div>
						</v-cardText>
					</v-col>

					<v-col
						cols="12"
						sm="4"
						md="12"
						lg="5"
						order="1"
						order-lg="2"
						class="member-pricing-bg text-center"
					>
						<div class="membership-pricing d-flex flex-column align-center py-14 h-100 justify-center">
							<p class="mb-5">
								<sub class="text-h5">$</sub>
								<sup class="text-h2 font-weight-medium">899</sup>
								<sub class="text-h5">USD</sub>
							</p>

							<p class="text-sm">
								5 Tips For Offshore <br> Software Development
							</p>

							<v-btn color="success" variant="outlined" class="mt-8">
								Contact Now
							</v-btn>
						</div>
					</v-col>
				</v-row>
			</v-card>
		</v-col>

		<!-- 👉 Influencing The Influencer -->
		<v-col
			cols="12"
			lg="4"
			md="6"
		>
			<v-card title="Influencing The Influencer">
				<v-cardText>
					Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay in touch.
				</v-cardText>

				<v-cardText>
					If you're in the market for new desktops, notebooks, or PDAs, there are a myriad of choices.
				</v-cardText>

				<v-cardActions>
					<v-btn color="info" variant="outlined">Read More</v-btn>
				</v-cardActions>
			</v-card>
		</v-col>

		<!-- 👉 The Best Answers -->
		<v-col
			cols="12"
			lg="4"
			md="6"
		>
			<v-card title="The Best Answers">
				<v-cardText class="d-flex align-center flex-wrap">
					<v-rating
						:model-value=rate
						density="compact"
						class="me-3"
					/>
					<span class="text-subtitle-2">{{ rate }} Star | 98 reviews</span>
				</v-cardText>

				<v-cardText>
					If you are looking for a new way to promote your business that won't cost you more money, maybe printing is one of the options you won't resist.
				</v-cardText>

				<v-cardText>
					become fast, easy and simple. If you want your promotional material to be an eye-catching
				</v-cardText>

				<v-cardActions>
					<v-btn color="primary" variant="outlined">Location</v-btn>
					<v-btn color="secondary" variant="outlined">Reviews</v-btn>
				</v-cardActions>
			</v-card>
		</v-col>

		<!-- 👉 Support -->
		<v-col
			cols="12"
			md="6"
			lg="4"
		>
			<v-card class="text-center">
				<v-cardText class="d-flex flex-column justify-center align-center">
					<v-avatar
						color="info"
						variant="tonal"
						size="50"
						class="mb-4"
					>
						<help-icon />
					</v-avatar>

					<h6 class="text-h6">
						Support
					</h6>
				</v-cardText>

				<v-cardText>
					<p>
						According to us blisters are a very common thing and we come across them very often in our daily lives. It is a very common occurrence like cold or fever depending upon your lifestyle.
					</p>
				</v-cardText>

				<v-cardActions class="justify-center">
					<v-btn color="success" variant="outlined">
						Contact Now
					</v-btn>
				</v-cardActions>
			</v-card>
		</v-col>
	</v-row>
</template>

<style scoped>
.avatar-center {
	position: absolute;
	border: 3px solid rgb(var(--v-theme-surface));
	inset-block-start: -2rem;
	inset-inline-start: 1rem;
}

/* .member-pricing-bg {
	position: relative;
	background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
} */

/* .membership-pricing {
	sup {
		inset-block-start: 9px;
	}
} */
</style>
