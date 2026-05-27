<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig();
useHead({
  link: [{ rel: "icon", type: "image/png", href: `${config.app.baseURL}favicon.ico` }],
});
</script>
