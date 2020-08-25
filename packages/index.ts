import KcsBtnList from './kcs-btn-list/index'
import kcsCommonPage from './kcs-common-page/index'

const components = [
  KcsBtnList,
  kcsCommonPage
]

const install = (Vue: any) => {
  components.map((value) => {
    Vue.component(value.name, value)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(components, { install })
