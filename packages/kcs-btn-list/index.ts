import KcsBtnList from './src/kcs-btn-list.vue'

const install = (Vue: any) => {
  Vue.component(KcsBtnList.name, KcsBtnList)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(KcsBtnList, { install })
