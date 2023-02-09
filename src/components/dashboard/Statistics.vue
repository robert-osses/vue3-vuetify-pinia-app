<script setup lang="ts">
const statistics = [
  {
    title: 'Presupuesto',
    stats: '230k',
    icon: 'mdi-chart-pie',
    color: 'primary',
  },
  {
    title: 'Personal',
    stats: '8.549k',
    icon: 'mdi-account-group',
    color: 'info',
  },
  {
    title: 'Licitaciones',
    stats: '1.423k',
    icon: 'mdi-cart',
    color: 'error',
  },
  {
    title: 'Revenue',
    stats: '$9745',
    icon: 'mdi-currency-usd',
    color: 'success',
  },
]
</script>

<template>
  <VCard title="Statistics">
    <template #append>
      <span class="text-body-2">Updated 1 month ago</span>
    </template>

    <VCardText class="pt-6">
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <VAvatar
              :color="item.color"
              variant="tonal"
              size="42"
              class="me-3"
            >
              <VIcon
                size="24"
                :icon="item.icon"
              />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-h6 font-weight-medium">{{ item.stats }}</span>
              <span class="text-caption">
                {{ item.title }}
              </span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
