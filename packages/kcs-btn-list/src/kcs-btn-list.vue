<template>
  <div :class="'kcs-but-list-' + this.align" class="kcs-but-list">
    <template v-for="(item, index) in btnList">
      <el-button
        :type="item.type"
        :round="item.round"
        :plain="item.plain"
        :key="index+item.action"
        :size="item.size ? item.size : 'mini'"
        @click="btnClick(item)">
        {{item.label}}
      </el-button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'KcsBtnList',
  props: {
    align: {
      type: String,
      default: 'right',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['right', 'center', 'right'].indexOf(value) !== -1
      }
    },
    btnList: {
      type: Array,
      default: () => {
        return [
          {
            label: '查询',
            type: 'success',
            action: 'search'
          }, {
            type: 'info',
            label: '重置',
            action: 'reset'
          }
        ]
      }
    }
  },
  methods: {
    btnClick (item) {
      this.$emit('btnClick', item)
    }
  }
}
</script>

<style scoped lang="less">
  .kcs-but-list {
    padding: 10px;
    border-bottom: 1px solid #E2E2E2;
  }

  .kcs-but-list-left {
    text-align: left;
  }

  .kcs-but-list-center {
    text-align: center;
  }

  .kcs-but-list-right {
    text-align: right;
  }
</style>
