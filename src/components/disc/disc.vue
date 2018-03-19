<template>
<transition name="slide">
 
</transition>
</template>

<script>

</script>

<style scoped lang="stylus" rel="stylesheet.stylus">
  .slide-enter-active, .slide-leave-active
    transition: all .3s
  .slide-enter, .slide-leave-to
    transfrom: translate3d(100%, 0, 0)
</style>
