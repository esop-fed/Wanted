<template>
  <div class="wanted">
    <v-header @avatarChange="avatarChange" />
    <v-container>
      <router-view :md="md" :codeUrl="codeUrl"></router-view>
    </v-container>
    <v-footer />
  </div>
</template>
<script type="text/ecmascript-6">
import VHeader from 'modules/layout/header'
import VContainer from 'modules/layout/container'
import VFooter from 'modules/layout/footer'

export default {
  data() {
    return {
      md: '',
      codeUrl: ''
    }
  },
  mounted() {
  },
  computed: {},
  methods: {
    avatarChange(md, codeUrl) {
      this.md = md
      this.codeUrl = codeUrl
    }
  },
  components: {
    VHeader,
    VContainer,
    VFooter
  }
}
</script>

<style lang="scss" scoped>
.wanted{
  height: 100%;
}
</style>
