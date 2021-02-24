<template>
    <div>
        <AppHeader />
         <router-view />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'


export default {
  name: 'App',
  components: {
      AppHeader,
      AppFooter
  }
}
</script>

<style global>

ul {
    list-style: none;
}
a {
    text-decoration: none;
}
.wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0px 25px;
}
</style>
