<script setup lang="ts">
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<template>
  <div class="acg-version" v-if="(theme as any).versionLine">
    {{ (theme as any).versionLine }}
  </div>
</template>

<style scoped>
.acg-version {
  padding: 1.25rem 24px 2rem;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  font-size: 12px;
  line-height: 1.6;
  color: var(--vp-c-text-3);
}
</style>
