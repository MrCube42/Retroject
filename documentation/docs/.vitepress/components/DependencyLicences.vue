<script setup lang="ts">
import { computed, PropType } from 'vue';

const props = defineProps({
  licenseInfos: {
    type: Object as PropType<Record<string, string>>,
    required: true,
  },
});

// Generate a list of name and license objects for a more comfortable iteration with v-for.
const infos = computed(() =>
  Object.entries(props.licenseInfos).map(([name, license]) => ({
    name,
    license,
  })),
);
</script>

<template>
  <table>
    <tr>
      <th>Abhängigkeit</th>
      <th>Lizenz</th>
    </tr>
    <tr v-for="info of infos" :key="info.name">
      <td>{{ info.name }}</td>
      <td>{{ info.license }}</td>
    </tr>
  </table>
</template>
