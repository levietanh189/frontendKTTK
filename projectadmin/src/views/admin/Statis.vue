<template>
  <Menu></Menu>
  <div class="main-panel">
    <nav class="navbar navbar-default navbar-fixed">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Thống kê</a>
        </div>
        <div class="collapse navbar-collapse">

          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="">
                <p>Tài khoản</p>
              </a>
            </li>

            <li>
              <a @click="clearStorage">
                <p>Đăng xuất</p>
              </a>
            </li>
            <li class="separator hidden-lg"></li>
          </ul>
        </div>
      </div>
    </nav>
  <footer class="footer">
    <div class="container-fluid">
      <nav class="pull-left">
        <ul>
          <li>
            <a href="#">
              Quản lý khách hàng
            </a>
          </li>

        </ul>
      </nav>
      <p class="copyright pull-right">
        &copy;  Made by Lê Việt Anh
      </p>
    </div>
  </footer>
  </div>
</template>

<script>
import Menu from "@/components/Menu";

export default {
name: "Statis",components:{
    Menu
  },methods:{
  clearStorage(){
    localStorage.clear();
    this.$router.push('/login');
  }
  },mounted() {
    if (localStorage.name){

    }else {
      this.$router.push('/login');
    }


  }
}
</script>

<style scoped>

</style>