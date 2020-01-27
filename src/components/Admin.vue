<template>
<div class="row">
  <div class="col-3">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Current Orders</a>
      <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-profile" aria-selected="false">Menu Items</a>
      <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Create a New Menu Item</a>
    </div>
  </div>
  <div class="col-9">
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" ><h6 v-if="currentUser !==null">Current orders ({{ numberOfOrders }})</h6><h6 v-if="currentUser !==null">{{ currentUser }} is signed in.&nbsp;<a href="" @click.prevent="signOut">LogOut</a></h6>
      <hr v-if="currentUser !==null">
      
      <Login v-if="currentUser == null"/>
      
      </div>
    
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" v-if="currentUser !==null">
        <table class="table">
        <thead class="bg-blue">
            <tr>
            <th scope="col" class="table-header">Item</th>
            <th scope="col" class="table-header">Size</th>
            <th scope="col" class="table-header">Order</th>
            <th scope="col" class="table-header">Price</th>
            </tr>
        </thead>
        <tbody v-for="(order, index) in getOrders" :key="order.id">
            <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td><button class="badge badge-danger" @click.prevent="removeOrder(order.id)">Remove</button></td>
            </tr>
            <tr v-for="orderItem in order.pizzas" :key="orderItem.id">
              <td>{{ orderItem.name }}</td>
              <td>{{ orderItem.size }}</td>
              <td>{{ orderItem.quantity }}</td>
              <td>{{ orderItem.price | currency}}</td>
            </tr>
        </tbody>
        </table>
      </div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" v-if="currentUser !==null">
        <table class="table">
        <thead class="bg-blue">
            <tr>
            <th scope="col" class="table-header">Item</th>
            <th scope="col" class="table-header">Delete</th>
            </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.id">
            <tr>
            <td>{{ item.name }}<br/></td>
            <td><a href="#" class="badge badge-danger" @click.prevent="removeMenuItem(item.id)">Remove from menu</a></td>
            </tr>
        </tbody>
        </table>

      </div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" v-if="currentUser !==null"><NewPizza/></div>
      

    </div>
  </div>
</div>
</template>

<script>
import NewPizza from './NewPizza'
import { store } from '../store/store'
import Login from './Login'
import { mapGetters } from 'vuex'
export default {
    name: 'admin',
    components: {
        NewPizza,
        Login
    },
    computed: {
      ...mapGetters([
        'getMenuItems',
        'numberOfOrders',
        'currentUser',
        'getOrders'
      ])
    },
    data(){
      return {
        name: 'Israel'
      }
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
      alert(`Hi, ${vm.name}`);
      });
    },
    methods: {
        async signOut(){
          store.dispatch('signOut');
        },
        removeMenuItem(id){
          store.dispatch('removeMenuItem', id)
        },
        removeOrder(id){
          store.dispatch('removeOrder', id)
        }
    }
}
</script>

<style scope>
    .bg-blue{
        background-color: #05407f;
    }
    .table .table-header{
        color: #ffffff;
    }
    .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
        background-color: #05407f !important;
        border-radius: 1px;
    }
</style>