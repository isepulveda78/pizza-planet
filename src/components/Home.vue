<template>
    <div class="below_header bg-primary text-white">
            <div class="container text-center">
            <h1>Welcome to Pizza Planet!</h1>
            <p class="lead">Feel Hungry?</p>
            <button class="btn btn-success" @click.prevent="goToMenu()">Let's Order</button>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        goToMenu(){
            this.$router.push("/menu");
        }
    }
};
</script>

<style scope>
.below_header{
    padding: 156px 0 100px;
    background-image: url('../assets/images/dough.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: relative;
}
</style>