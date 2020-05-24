// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetail from './components/CustomerDetail'
import FormValidation from './components/FormValidation'
import Vuelidate from 'vuelidate'
import Update from './components/Update'
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(VueResource)

const router=new VueRouter({
mode:'history',
base:__dirname,
routes:[
{ path:'/',component:Customers },
{ path:'/about',component:About },
{ path:'/add',component:Add },
{ path:'/customer/:id',component:CustomerDetail },
{ path:'/update/:id',component:Update },
{ path:'/form-validation',component:FormValidation },
]
})

/* eslint-disable no-new */
new Vue({
template: `
<div id="app">
  
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">vCustomer </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item ">
          <router-link class="nav-link" to="/">Customer</router-link> 
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link> 
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/form-validation">Form-validation</router-link> 
        </li>
      </ul>

      <ul class="nav navbar-nav ml-auto ">
        <li class="nav-item ">
          <router-link class="nav-link" to="/add">Add Customer</router-link> 
        </li>
       
      </ul>

    </div>
  </nav>
  <router-view></router-view>
</div>
`,
router:router
}).$mount('#app')