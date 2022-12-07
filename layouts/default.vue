<template>
  <section class="main-page-layout is-flex is-justify-content-center is-align-items-center">
    <div class="page-container">
      <Nuxt />
    </div>
  </section>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss" scoped>
.main-page-layout {
  background-color: #EEEEEE;
  min-height: 100vh;
}
.page-container {
  background-color: #fff;
}

</style>
