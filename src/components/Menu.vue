<template>
    <div class="row">
       <div class="col-md-8">
           {{ $route.params.items }}
            <div class="mt-5" v-for="item in getMenuItems" :key="item.name">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
              <ul class="list-unstyled" v-for="(option, index) in item.options" :key="option[index]">
                  <li>{{ option.size }} - {{ option.price | currency}} <a href="#" class="badge badge-success" @click.prevent="addToBasket(item, option)">+</a></li>
              </ul>
            </div>

        </div>
       <div class="col-md-4">
        <h3>Your Basket</h3>
       <hr>
        <div v-if="basket.length > 0">
           <div class="row">
            <div class="col-sm-12">
                 <!-- shopping basket-->
                 <ul class="list-unstyled" v-for="(item, index) in basket" :key="index">
                     <li><h5>{{ item.name }}</h5></li>
                     <li>{{ item.price * item.quantity | currency }}&nbsp;&#8722;&nbsp;"{{ item.size }}</li>
                     <li><a href="#" class="badge badge-success" @click.prevent="decreaseQuantity(item)">&#8722;</a><span>&nbsp;<b>{{ item.quantity }}
                         &nbsp;</b></span><a href="#" class="badge badge-success" @click.prevent="increaseQuantity(item)">&#43;</a></li>
                     <li></li>
                     <li><b></b>&nbsp;</li>
                 </ul>
                 <h6>Order Total: {{ total | currency }}</h6>
                 <button class="btn btn-danger" @click.prevent="addNewOrder">Place Order</button>
            </div>
        </div>
        </div>
        <div v-else>
            <p>{{ basketText }}</p>
        </div>
       </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { store } from '../store/store'
export default {
    name: 'Menu',
    data(){
        return {
            basket: [],
            basketText: 'Your basket is empty.',
        }; 
    },
    computed: {
      ...mapGetters([
          'getMenuItems'
      ]),
      total(){
          let totalCost = 0
          this.basket.map(item => {
              totalCost += item.quantity * item.price
          })
          return totalCost;
      }
    },
     methods: {
            async addToBasket(item, option){
                const pizzaExists = await this.basket.find(
                   pizza => pizza.name === item.name && pizza.size === option.size 
                )
                if(pizzaExists){
                    pizzaExists.quantity++
                    return;
                }
                this.basket.push({
                    name: item.name,
                    price: option.price,
                    size: option.size,
                    quantity: 1,
                });
            },
            removeFromBasket(item){
                this.basket.splice(this.basket.indexOf(item), 1);
            },
            decreaseQuantity(item){
                item.quantity--;
                if(item.quantity === 0){
                    this.removeFromBasket(item);
                }
            },
            increaseQuantity(item){
                item.quantity++;
            },
            addNewOrder(){
                const order = {
                    pizzas: {...this.basket },
                    createdAt: new Date(),
                }
                store.dispatch('addNewOrder', order)
                this.basket = [];
                this.basketText = "Thank You, your order has been placed."
            }
        }
}
</script>