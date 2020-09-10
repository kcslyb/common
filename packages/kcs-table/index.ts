import KcsTable from './src/kcs-table.vue'

const install = (Vue: any) => {
  Vue.component(KcsTable.name, KcsTable)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(KcsTable, { install })
