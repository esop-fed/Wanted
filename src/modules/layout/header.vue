<template>
  <div class="head">
    <div class="logo flex">
      <Icon type="ios-bulb" size="40" />
      <p>Wanted</p>
    </div>
    <div class="avatars flex" v-if="isWantedItem">
      <div class="i-avatar" v-for="(item, index) in avatarConfig" :key="index" @click="avatarChange(index, item.name)">
        <VAvatar
          :src="item.src"
          :name="item.name"
          :color="item.color"
          :bg="item.bg"
          :selected="index === selected"
        />
      </div>
      <Button type="default" class='i-btn' to="/wanted">返回</Button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { avatarConfig, ideas } from 'utils/wanted.conf'
import VAvatar from 'components/avatar/index.vue'

export default {
  data() {
    return {
      ideas,
      avatarConfig,
      selected: 0
    }
  },
  mounted() {
  },
  computed: {
    isWantedItem() {
      return /\/wanted\/\d+/g.test(this.$route.path)
    }
  },
  methods: {
    avatarChange(index, name) {
      const { mdBasePath, ideasIndex } = this.$route.query
      const codeUrl = this.ideas[ideasIndex][name].codeUrl
      const md = mdBasePath + '/' + name + '.md'

      this.selected = index
      this.$emit('avatarChange', this.getMarkdown(md), codeUrl)
    },
    getMarkdown(md) {
      return require(`md/${md}`)
    }
  },
  components: {
    VAvatar
  }
}
</script>

<style lang="scss" scoped>
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: $layout-h;
    padding: 0 $space-m;
    color: $white;
    z-index: 999;

    .logo{
      p{
        font-size: 22px;
        font-weight: bold;
      }
    }

    .avatars{
      .i-avatar{
        width: 60px;
        height: 60px;
        margin-left: $space;
      }
    }

    .i-btn{
      margin-left: $space-m;
    }
  }
</style>
