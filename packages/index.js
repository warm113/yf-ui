import Button from './Button'
import Dialog from './Dialog'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Switch from './Switch'
import CheckboxGroup from './CheckboxGroup'
import Form from './Form'
import FormItem from './FormItem'
import './fonts/font.scss'

const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem
]
// 定义 install 方法 接收 Vue 作为参数 如果使用use 注册插件 则所有的组件都将被注册
const install = function (Vue) {
  // 全局注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否使直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
