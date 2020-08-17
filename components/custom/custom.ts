import CustomLogo from './custom-logo.vue';
import CustomPerm from './custom-perm.vue';
import CustomDict from './custom-dict.vue';
import CustomInput from './custom-input.vue';
import CustomDrawer from './custom-drawer.vue';
import CustomFileUpload from './custom-file-upload.vue';
import CustomAddressCity from './custom-address-city.vue';
import CustomPaging from './custom-paging.vue';
import CustomCollapse from './custom-collapse.vue';
import CustomUpload from './custom-upload.vue';
// import CustomTable from "./custom-table.vue";
import CustomFloatNavigation from "./custom-float-navigation.vue";
// import CustomForm from "./custom-form.vue";
import CustomBtnList from "./custom-button-list.vue"

const components: any[] = [
  // CustomForm,
  // CustomTable,
  CustomBtnList,
  CustomLogo,
  CustomPerm,
  CustomDict,
  CustomDrawer,
  CustomInput,
  CustomPaging,
  CustomUpload,
  CustomCollapse,
  CustomFileUpload,
  CustomAddressCity,
  CustomFloatNavigation
];

const install = (Vue: any) => {
  components.map((value) => {
    Vue.component(value.name, value);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default Object.assign(components, {install});
