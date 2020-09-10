import KcsFormOption from './src/kcs-form-option.vue'

const install = (Vue: any) => {
  Vue.component(KcsFormOption.name, KcsFormOption)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(KcsFormOption, { install })
