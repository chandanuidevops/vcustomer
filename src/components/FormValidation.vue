<template>
   <div class="container m-auto">
    <div class="card">
        <h3 class="card-header text-center">Register area</h3>
        <div class="card-body">
            <form @submit.prevent="submitForm">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="">First Name</label> 
                        <input type="text"  class="form-control" placeholder="First Name" v-model.lazy.trim="$v.firstname.$model" 
                        :class="{'is-invalid':$v.firstname.$error,'is-valid':!$v.firstname.$invalid}"
                        >
                        <div class="valid-feedback">
                            Your firstname is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.firstname.required"> First name is required</span>
                             <span v-if="!$v.firstname.minLength"> First name must have at least {{$v.firstname.$params.minLength.min}} letters</span>
                              <span v-if="!$v.firstname.maxLength"> First name must have at most {{$v.firstname.$params.maxLength.max}} letters</span>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Last Name</label> 
                        <input type="text"  class="form-control" placeholder="Last Name" v-model.trim="$v.lastname.$model" 
                        :class="{'is-invalid':$v.lastname.$error,'is-valid':!$v.lastname.$invalid}"
                        >
                        <div class="valid-feedback">
                            Your lastname is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.lastname.required"> lastname is required</span>
                             <span v-if="!$v.lastname.minLength"> lastname must have at least {{$v.lastname.$params.minLength.min}} letters</span>
                              <span v-if="!$v.lastname.maxLength"> lastname must have at most {{$v.lastname.$params.maxLength.max}} letters</span>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Age</label> 
                        <input type="number"  class="form-control" placeholder="age" v-model.lazy.number="$v.age.$model" 
                        :class="{'is-invalid':$v.age.$error,'is-valid':!$v.age.$invalid}"
                        >
                        <div class="valid-feedback">
                            Your age is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.age.required"> age is required</span>
                             <span v-if="!$v.age.between"> age must between {{$v.age.$params.between.min}}  & {{$v.age.$params.between.max}}</span>
                        </div>
                    </div>
                     <div class="form-group col-md-6">
                        <label for="">Username</label> 
                        <input type="text"  class="form-control" placeholder="username" v-model.trim="$v.username.$model" 
                        :class="{'is-invalid':$v.username.$error,'is-valid':!$v.username.$invalid}"
                        >
                        <div class="valid-feedback">
                            Your username is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.username.required"> username is required</span>
                             <span v-if="!$v.username.isUnique"> allready registered</span>
                        </div>
                    </div>
                     <div class="form-group col-md-12">
                        <label for="">email</label> 
                        <input type="email"  class="form-control" placeholder="email" v-model.trim="$v.email.$model" 
                        :class="{'is-invalid':$v.email.$error,'is-valid':!$v.email.$invalid}"
                        >
                        <div class="valid-feedback">
                            Your email is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.email.required"> email is required</span>
                             <span v-if="!$v.email.isUnique"> allready registered</span>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Passsword</label> 
                        <input type="password"  id="password" class="form-control" placeholder="Passsword" v-model.trim="$v.password.$model" 
                        :class="{'is-invalid':$v.password.$error,'is-valid':!$v.password.$invalid}"
                        >
                        
                        <div class="valid-feedback">
                            Your password is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.password.required"> password is required</span>
                             <span v-if="!$v.password.minLength"> minimum   {{$v.password.$params.minLength.min}} characters</span>
                        </div>
                    </div>
                     <div class="form-group col-md-6">
                        <label for="">Passsword</label> 
                        <input type="password"   class="form-control" placeholder="repeat Passsword" v-model.trim="$v.repeatPassword.$model" 
                        :class="{'is-invalid':$v.repeatPassword.$error,'is-valid':(password !='')?!$v.repeatPassword.$invalid:''}"
                        >
                        <div class="valid-feedback">
                            Your password is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.repeatPassword.sameAsPassord"> password must be identical</span>
                            
                        </div>
                    </div>
                    <div class="col-md-12">
                        <input type="checkbox"  id="showPassword" class="form-check-input" @click="toggleShowPassword" v-model="showPassword">
                        <label for="showPassword" class="form-check-label">show password</label>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Phone</label> 
                        <input type="text"  class="form-control" placeholder="phone" v-model.number.trim="$v.phone.$model" 
                        :class="{'is-invalid':$v.phone.$error,'is-valid':!$v.phone.$invalid}"
                        >
                        <div class="valid-feedback">
                            Your phone is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.phone.required"> phone is required</span>
                             <span v-if="!$v.phone.numeric">only numeric</span>
                              <span v-if="!$v.phone.minLength.min">minimum {{$v.phone.$params.minLength.min}} characters</span>
                        </div>
                    </div>
                     <div class="form-group col-md-6">
                        <label for="">Website</label> 
                        <input type="text"  class="form-control" placeholder="url" v-model.trim="$v.url.$model" 
                        :class="{'is-invalid':$v.url.$error,'is-valid':!$v.url.$invalid}"
                        >
                        <div class="valid-feedback">
                            Your url is valid
                        </div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.url.required"> url is required</span>
                             <span v-if="!$v.url.url">invalid url </span>
                              
                        </div>
                    </div>
                     <div class="form-group col-md-6">
                        <button class="btn btn-success">Submit {{submitStatus}}</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
   </div>
</template>

<script>
import { required, minLength,maxLength, between, email , sameAs, numeric , url} from 'vuelidate/lib/validators'
export default {
  name: 'FormValidation',
  data () {
    return {
        firstname:'',
        lastname:'',
        age:0,
        email:'',
        username:'',
        password:'',
        repeatPassword:'',
        showPassword:false,
        phone:'',
        url:'',
        submitStatus:null
    }
  },
    validations: {
    firstname: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(8),
    },
     lastname: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(8),
    },
    age: {
        required,
      between: between(20, 30)
    },
    username:{
        required,
        isUnique(value){
            if(value=='') return true

            return new Promise((resolve)=>{
               setTimeout(()=>{
                    resolve(typeof value==='string' && value.length % 2 !==0)
               }, 350+Math.random()*300)
            })
        }
    },
     email:{
        required,
        email,
        isUnique(value){
            if(value=='') return true
            var email_regex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ ;
            return new Promise((resolve)=>{
               setTimeout(()=>{
                    resolve(email_regex.test(value))
               }, 350+Math.random()*300)
            })
        }
    },
    password:{
        required,
        minLength:minLength(6),
    },
    repeatPassword:{
        sameAsPassord:sameAs('password'),
    },
    phone:{
        required,
        numeric,
        minLength:minLength(12),
    },
    url:{
        required,
        url,
    }
  },
  methods:{
        toggleShowPassword(){
            var show= document.getElementById('password');
            if(this.showPassword ==false){
                this.showPassword=true;
                show.type="text";
            }else{
               this.showPassword=false;
                show.type="password"; 
            }
        },
        submitForm(){
            this.$v.$touch()
            if(this.$v.$invalid){
                this.submitStatus='FAIL'
            }else{
                this.submitStatus='TRUE'
            }
        }
   
  },
  created: function(){
  }
}
</script>

<style scoped>

</style>
