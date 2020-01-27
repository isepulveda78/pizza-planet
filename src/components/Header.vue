<template>
<div>
        <header>
        <div class="header_logo">
            <img src="../assets/images/planet.png" alt="Pizza Planet Icon">
            <h1 href="/">Pizza Planet</h1>
        </div>
        <nav class="bg-blue">
            <ul class="nav justify-content-center text-white">
                <router-link to="/" tag="li"><a class="nav-link text-white" >Home</a></router-link>
              
                <router-link to="/menu" tag="li"><a class="nav-link text-white" >Menu</a></router-link>
               
                <router-link to="/about" tag="li"><a class="nav-link text-white" >About</a></router-link>
              
                <router-link to="/contact" tag="li"><a class="nav-link text-white" >Contact</a></router-link>
            </ul>
        </nav>
    </header>
</div>
</template>

<script>
export default {
    name: 'appHeader',
}
</script>

<style scoped>
h1{
    font-size: 1.8em;
}
.header_logo{
    background: #ff6d41;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}

.header_logo img{
    width: 10%;
}
.bg-blue{
    background-color: #05407f;
}
nav a {
    text-transform: uppercase;
    font-size: 1em;
}
</style>