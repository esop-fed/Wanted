<template>
  <div class="main">
    <div class="item" v-for="(item, index) in wantedList" :key="index">
      <Card class="i-card">
          <p slot="title" class="title">
            {{item.title}}
          </p>
          <p slot="extra">
            {{item.date}}
          </p>
          <p class="profile">
            {{item.profile}}
          </p>
          <Button type="info" long class='i-btn' :to="item.router">idea</Button>
          <Button type="info" long class='i-btn'>总结</Button>
      </Card>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { wanted as wantedList } from 'utils/wanted.conf'

export default {
  data() {
    return {
      wantedList
    }
  },
  mounted() {
  },
  computed: {},
  methods: {
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.main{
  height: 100%;
  padding: $layout-m $space-m;

  .item{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 $space-m 0;

    .i-card{
      width: 500px;

      .title, .profile{
        text-align: left;
      }

      .i-btn{
        margin-top: $space;
        border: none;
        background: $theme-bg;
      }
    }
  }
}
</style>
