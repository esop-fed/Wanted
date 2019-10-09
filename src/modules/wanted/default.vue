<template>
  <div class="main">
    <div class="left scroll-y" v-html="md">
    </div>
    <div class="right">
      <iframe :src="codeUrl"></iframe>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">

export default {
  props: {
    codeUrl: {
      type: String,
      default: 'https://codesandbox.io/embed/vue-template-mxpze'
    },
    md: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      split: 0.5,
      selected: 0
    }
  },
  mounted() {
    console.log('md', this.md)
  },
  computed: {},
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  height: 100%;
  overflow: hidden;

  .left, .right{
  }

  .left{
    flex: 1 1 35%;
    padding-left: $space-l;
  }

  .right{
    flex: 1 1 65%;
    iframe{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
