<template>
  <div class="details container">
    <h3 class="page-header ">Details</h3>
   <router-link to="/" class="btn btn-info" >Back</router-link>
   <span class="float-right">  </span>
    <table class="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Phone</th>
            <th>Email </th>
            <th>phone</th>
            <th>city</th>
            <th>address</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers">
            <td>{{customer.first_name}} {{customer.last_name}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.phone}}</td>
            <td>{{customer.city}}</td>
            <td>{{customer.address}}</td>
            <td>{{customer.state}}</td>
            <td><button  class="btn btn-danger" v-on:click="deleteCustomer(customer.id)" >Delete</button></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'customerdetails',
 
  data () {
    return {
        customers:[],
      url:"http://localhost/v-customers/api.php",
    }
  },
  methods:{
        fetchCustomers(id){
    this.$http.get(this.url+'?action=list&id='+id).then(function(response){
      //console.log(response)
      this.customers= response.body;
    }).catch(function(){
      alert('error')
    });
  },
  deleteCustomer(id){
    this.$http.post(this.url+'?action=delete&id='+id).then(function(response){
      console.log(response)
      this.$router.push({path:'/',query:{alert:'deleted'}})
    }).catch(function(){
      alert('error')
    });
  }
  },
  created: function(){
      this.fetchCustomers(this.$route.params.id);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
