<template>
  <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">

    <div class="sidebar-wrapper">
      <div class="logo">
        <div class="simple-text">
          Admin
        </div>
      </div>

      <ul class="nav">
        <li>
          <router-link to="/products">
            <i class="pe-7s-note2"></i>
            <p>Quản lý sản phẩm</p>
          </router-link>
        </li>
        <li>
          <router-link to="/categories">
            <i class="pe-7s-note2"></i>
            <p>Quản lý loại sản phẩm</p>
          </router-link>
        </li>

        <li>
          <router-link to="/suppliers">
            <i class="pe-7s-note2"></i>
            <p>Quản lý nhà cung cấp</p>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Menu.vue"
}
</script>

<style scoped>

</style>