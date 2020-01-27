<template>
    <div class="card">
        <div class="card-header">
            New Menu Item
        </div>
        <div class="card-body">
                <form>
                <h3>Add New Menu Item:</h3>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" v-model="newPizza.name">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description" v-model="newPizza.description">
                </div>
                <div class="row img-thumbnail m-1">
                    <div class="col-6">
                        <h6>Option 1</h6>
                             <div class="form-group">
                                <label for="size">Size</label>
                                <input type="text" class="form-control" id="size" v-model="newPizza.options[0].size">
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="text" class="form-control" id="price" v-model="newPizza.options[0].price">
                            </div>
                    </div>
                    <div class="col-6">
                        <h6>Option 2</h6>
                             <div class="form-group">
                                <label for="size">Size</label>
                                <input type="text" class="form-control" id="size" v-model="newPizza.options[1].size">
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="text" class="form-control" id="price" v-model="newPizza.options[1].price">
                            </div>
                    </div>
                </div>
                <button class="btn btn-danger mt-3" @click.prevent="add()">Create New Item</button>
            </form>
        </div>
    </div>
</template>

<script>
import { store } from '../store/store'
export default {
    name: 'newpizza',
    data(){
        return {
            newPizza: {
                'name': 'Margherita',
                'description': 'A delicious tomato based pizza topped with mozzarella',
                'options': [{
                    'size': 9,
                    'price': 6.95
                }, {
                    'size': 12,
                    'price': 10.95
                }]
            }
        }
    },
          methods: {
            add(){
                // dbMenuRef.add(this.newPizza)
                store.dispatch('addMenuItem', this.newPizza);
            }
        }
}
</script>