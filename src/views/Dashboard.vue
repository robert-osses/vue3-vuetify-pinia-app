<script lang="ts" setup>
	import CongratulationsJohn from '@/components/dashboard/CongratulationsJohn.vue'
	import EarningReports from '@/components/dashboard/EarningReports.vue'
	import ExpensesRadialBarCharts from '@/components/dashboard/ExpensesRadialBarCharts.vue'
	import GeneratedLeads from '@/components/dashboard/GeneratedLeads.vue'
	import PopularProducts from '@/components/dashboard/PopularProducts.vue'
	import RevenueReport from '@/components/dashboard/RevenueReport.vue'
	import Statistics from '@/components/dashboard/Statistics.vue'
	import TotalProfitLineCharts from '@/components/dashboard/TotalProfitLineCharts.vue'
	import Transactions from '@/components/dashboard/Transactions.vue'
</script>

<template>
	<v-row>
		<v-col
			cols="12"
			md="5"
			lg="4"
		>
			<CongratulationsJohn />
		</v-col>
		
		<v-col
			cols="12"
			md="7"
			lg="8"
		>
			<Statistics class="h-100" />
		</v-col>

		<v-col
			cols="12"
			lg="4"
		>
			<v-row>
				<v-col
					cols="12"
					lg="6"
					md="3"
					sm="6"
				>
					<ExpensesRadialBarCharts />
				</v-col>

				<v-col
					cols="12"
					lg="6"
					md="3"
					sm="6"
				>
					<TotalProfitLineCharts />
				</v-col>

				<v-col
					cols="12"
					md="6"
					lg="12"
				>
					<GeneratedLeads />
				</v-col>
			</v-row>
		</v-col>

		<v-col
			cols="12"
			lg="8"
		>
			<RevenueReport />
		</v-col>

		<v-col
			cols="12"
			sm="6"
			lg="4"
		>
			<EarningReports />
		</v-col>

		<v-col
			cols="12"
			sm="6"
			lg="4"
		>
			<PopularProducts />
		</v-col>

		<v-col
			cols="12"
			sm="6"
			lg="4"
		>
			<Transactions />
		</v-col>
	</v-row>
</template>