<template>
    <div>
      <div class="row">
        <div class="col-md-4">
            <nav>
            <ul class="list-inline">
              <router-link to="/history" tag="li">
                <a class="nav-link">Our History</a>
              </router-link>

              <router-link to="/ordering-guide" tag="li">
                <a class="nav-link">Ordering Guide</a>
              </router-link>

              <router-link to="/delivery" tag="li">
                <a class="nav-link">Delivery</a>
              </router-link>
            </ul>
          </nav>
        </div>
        <div class="col-md-8">
          <router-view></router-view>
        </div>
      </div>
      
    </div>
    <!-- /.row -->

</template>
<script>
export default {
    name: 'about'
}
</script>