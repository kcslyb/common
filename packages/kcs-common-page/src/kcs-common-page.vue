<template>
<div class="container">
  <div class="content">
    <div class="aside" v-if="$slots.aside">
      <slot name="aside"/>
    </div>
    <div class="main" v-if="$slots.main">
      <slot name="main"/>
    </div>
  </div>
  <div class="footer" v-if="$slots.footer">
    <slot name="footer"/>
  </div>
</div>
</template>

<script>
export default {
  name: 'KcsCommonPage'
}
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    height: auto;
    overflow: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .aside {
      width: auto;
      text-align: left;
      box-sizing: border-box;
    }
    .main {
      width: 100%;
      text-align: left;
      padding: 20px;
      box-sizing: border-box;
    }
  }
  .footer {
  }
}
</style>
