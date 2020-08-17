<template>
  <span>{{value}}</span>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from 'vue-property-decorator'

@Component
export default class CustomDict extends Vue {
        @Provide() public name = 'CustomDict';
        @Provide() public data;
        @Prop({ default: '' }) public dictGroup!: string;
        @Prop({ default: '' }) private dictValue!: string;
        $store: any;

        get value () {
          const temp = this.$store.getters.dict
          if (temp.length > 0 && temp.includes(this.dictGroup)) {
            const dictGroupObj = this.$store.getters.dictGroup
            this.data = dictGroupObj[this.dictGroup]
          }
          if (this.data.length > 0) {
            return this.getLabel(this.data)
          }
          return '不存在该字典'
        }

        getLabel (data: any[]) {
          let temp = ''
          data.forEach((value: any) => {
            if (Object.is(value.key, this.dictValue)) {
              temp = value.label
            }
          })
          return temp
        }
};
</script>

<style scoped>

</style>
