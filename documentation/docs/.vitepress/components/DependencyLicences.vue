<script setup lang="ts">
import { computed, PropType } from 'vue';

const props = defineProps({
  licenseInfos: {
    type: Object as PropType<Record<string, string>>,
    required: true,
  },
});

function asDependencyLicenseInfos(infos: Record<string, string>) {
  return Object.entries(infos).map(([name, license]) => ({
    name,
    license,
  }));
}

const dependencies = computed(() => asDependencyLicenseInfos(props.licenseInfos));
</script>

<template>
  <table>
    <tr>
      <th>Abhängigkeit</th>
      <th>Lizenz</th>
    </tr>
    <tr v-for="info of dependencies" :key="info.name">
      <td>{{ info.name }}</td>
      <td>{{ info.license }}</td>
    </tr>
  </table>
</template>
