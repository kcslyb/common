import KcsCommonPage from './src/kcs-common-page.vue'

const install = (Vue: any) => {
  Vue.component(KcsCommonPage.name, KcsCommonPage)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(KcsCommonPage, { install })
