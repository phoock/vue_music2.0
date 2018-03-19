<template>
  <transition name="slide">
  </transition>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"


.slide-enter-active,.slide-leave-active
  transition: all .3s
.slide-enter,.slide-leave-to
  transform: translate3d(100%,0,0)

</style>
