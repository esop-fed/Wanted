<template>
  <div class="avatar flex-column">
    <Avatar v-if="isSrc" :src="src" shape="square" size="large"/>
    <Avatar v-else :style="avatarStyle" shape="square" >{{abbr}}</Avatar>
    <Icon v-if="selected" type="md-glasses" size="25"/>
    <p v-else>{{name}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'VAvatar',
  props: {
    src: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'XX'
    },
    color: {
      type: String,
      default: '#000'
    },
    bg: {
      type: String,
      default: '#fff'
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isSrc() {
      return this.src !== ''
    },
    avatarStyle() {
      return `color: ${this.color};background-color: ${this.bg}"`
    },
    abbr() { // 缩写
      return name.slice(0, 1).toUpperCase()
    }
  },
  methods: {
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.avatar{
  cursor: pointer;

  p{
    margin-top: 5px;
  }
}
</style>
