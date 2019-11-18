// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import {
  Dialog,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Menu,
  MenuItem,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Loading,
  Timeline,
  TimelineItem,
  Card,
  Tag
} from "element-ui";
// import CollapseTransition from "../node_modules/element-ui/lib/transitions/collapse-transition";
// import mixin from "./mixins";

// Vue.mixin(mixin);

// 按需引用 element 组件
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Message.name, Message);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
Vue.component(Card.name, Card);
Vue.component(Tag.name, Tag);
// import {
//   Menu,
//   MenuItem,
//   Row,
//   Col,
//   Button

// } from "element-ui";
// //按需引入

// Vue.component(Row.name, Row);
// Vue.component(Col.name, Col);
// Vue.component(Menu.name, Menu);
// Vue.component(Button.name, Button);
// Vue.component(MenuItem.name, MenuItem);
Vue.config.productionTip = false
import CollapseTransition from "../node_modules/element-ui/lib/transitions/collapse-transition";
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
