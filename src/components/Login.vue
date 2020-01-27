<template>
    <div class="col-md-8 offset-md-2">
        <div class="card">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp">
                    <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" class="form-control" id="password">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" @click.prevent="signIn()">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store/store' 
export default {
    name: 'login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        signIn(){
            const user = {
                email: this.email,
                password: this.password
            }
            store.dispatch('signIn', user)
        }
    },
    beforeRouteLeave: (to, from, next) => {
        if(confirm('You will be logged out when leaving admin') == true){
            store.dispatch('signOut')
            next()
        }else{
            next(false);
        }
    }

}
</script>

<style scope>
    .card-header{
        background-color: #05407f !important;
        color: #ffffff;
    }
</style>