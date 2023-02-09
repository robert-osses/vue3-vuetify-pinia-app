<script setup lang="ts">
const transitions = [
  {
    avatarIcon: 'mdi-wallet',
    avatarColor: 'primary',
    title: 'Wallet',
    subtitle: 'Starbucks',
    stats: '-$75',
    profit: false,
  },
  {
    avatarIcon: 'mdi-star',
    avatarColor: 'success',
    title: 'Bank Transfer',
    subtitle: 'Add Money',
    stats: '+$480',
    profit: true,
  },
  {
    avatarIcon: 'mdi-car-side',
    avatarColor: 'error',
    title: 'Paypal',
    subtitle: 'Client Payment',
    stats: '+$268',
    profit: true,
  },
  {
    avatarIcon: 'mdi-credit-card',
    avatarColor: 'secondary',
    title: 'Master Card',
    subtitle: 'Ordered iPhone 13',
    stats: '-$699',
    profit: false,
  },
  {
    avatarIcon: 'mdi-currency-usd',
    avatarColor: 'info',
    title: 'Bank Transactions',
    subtitle: 'Refund',
    stats: '+$98',
    profit: true,
  },
  {
    avatarIcon: 'mdi-car-side',
    avatarColor: 'error',
    title: 'Paypal',
    subtitle: 'Client Payment',
    stats: '+$126',
    profit: true,
  },
  {
    avatarIcon: 'mdi-send-check',
    avatarColor: 'success',
    title: 'Bank Transfer',
    subtitle: 'Pay Office Rent',
    stats: '-$1290',
    profit: false,
  },
]
</script>

<template>
  <VCard
    title="Transactions"
    subtitle="Total 58 Transactions done in this Month"
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
          v-for="transition in transitions"
          :key="transition.title"
        >
          <template #prepend>
            <VAvatar
              size="34"
              :color="transition.avatarColor"
              variant="tonal"
              rounded
            >
              <VIcon :icon="transition.avatarIcon" />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-semibold">
            {{ transition.title }}
          </VListItemTitle>
          <VListItemSubtitle>
            {{ transition.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center">
              <span :class="`${transition.profit ? 'text-success' : 'text-error'} me-2`">{{ transition.stats }}</span>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
