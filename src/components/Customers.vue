<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert" />
   <h3 class="page-header ">Manage Customer</h3>
   <table class="table table-striped">
     <thead>
       <tr>
         <th>First Name</th>
         <th>Phone</th>
         <th>Email </th>
         <th></th>
         <th></th>
       </tr>
     </thead>
     <tbody>
       <tr v-for="customer in customers">
         <td>{{customer.first_name}} {{customer.last_name}}</td>
         <td>{{customer.phone}}</td>
         <td>{{customer.email}}</td>
         <td><router-link v-bind:to="'/customer/'+customer.id" class="btn btn-info" >View</router-link></td>
         <td><router-link v-bind:to="'/update/'+customer.id" class="btn btn-primary" >Edit</router-link></td>
       </tr>
     </tbody>
   </table>
  </div>
</template>

<script>
  import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customers:[],
      url:"http://localhost/v-customers/api.php",
      alert:'',
    }
  },
  methods:{
    fetchCustomers(){
    this.$http.get(this.url+'?action=list').then(function(response){
      //console.log(response.body)
      this.customers= response.body;
    }).catch(function(){
      alert('error')
    });
  }
  },
  created:function(){
    if(this.$route.query.alert){
      this.alert=this.$route.query.alert;
    }
    this.fetchCustomers();
  },
   updated:function(){
    //this.fetchCustomers();
  },
  components:{
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
