<template>
  <div class="add container">
    <h3 class="page-header ">Update Customer</h3>
    <form v-on:submit.prevent="updateCustomer">
        <div class="card card-body">
            <h4>Customer info</h4>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">First Name</label>
                        <input type="text" class="form-control" placeholder="First Name" v-model="customer.first_name" >
                    </div>
                    <div class="form-group">
                        <label for="">Last Name</label>
                        <input type="text" class="form-control" placeholder="First Name" v-model="customer.last_name" >
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="text" class="form-control" placeholder="First Name" v-model="customer.email" >
                    </div>
                    <div class="form-group">
                        <label for="">Phone</label>
                        <input type="text" class="form-control" placeholder="First Name" v-model="customer.phone" >
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Address</label>
                        <input type="text" class="form-control" placeholder="First Name" v-model="customer.address" >
                    </div>
                    <div class="form-group">
                        <label for="">City</label>
                        <input type="text" class="form-control" placeholder="First Name" v-model="customer.city" >
                    </div>
                    <div class="form-group">
                        <label for="">State</label>
                        <input type="text" class="form-control" placeholder="First Name" v-model="customer.state" >
                    </div>
                    <div class="form-group">
                        <button class="btn btn-info">Submit</button>
                    </div>
                </div>
            </div>
            
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
    customer:{},
    url:"http://localhost/v-customers/api.php",
    id:this.$route.params.id
    }
  },
  methods:{
         fetchCustomers(id){
    this.$http.get(this.url+'?action=list&id='+id).then(function(response){
     // console.log(response.body)
      this.customer= response.body[0];
      console.log(this.customer)
    }).catch(function(){
      alert('error')
    });
  },
    updateCustomer(){
        if(!this.customer.first_name || !this.customer.last_name ||!this.customer.email ||!this.customer.phone ||!this.customer.city ||!this.customer.address ||!this.customer.state  ){
            alert('please fill all input')
        }else{
            let updCustomer = {
                first_name:this.customer.first_name,
                last_name:this.customer.last_name,
                email:this.customer.email,
                phone:this.customer.phone,
                city:this.customer.city,
                address:this.customer.address,
                state:this.customer.state,
            }
            this.$http.post(this.url+"?action=update&id="+this.id,updCustomer).then(function(response){
                console.log(response)
                this.$router.push({path:'/',query:{alert:'Customer updated'}});
                
            }).catch(function(error){
                alert(error)
            })
        }
        
    },
   
  },
  created: function(){
      this.fetchCustomers(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
