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
      loading: false,
      selected: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
.demo-spin-col{
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.main{
  display: flex;
  height: 100%;
  overflow: hidden;

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
