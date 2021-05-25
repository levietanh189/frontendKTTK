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
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="header">
              <h4 class="title">Quản lý loại sản phẩm</h4>

            </div>
            <div class="content table-responsive">
              <table class="table table-hover table-striped">
                <thead>

                <th width="30%">ID</th>
                <th width="20%">Tên</th>
                <th width="20%">Mô tả</th>
                <th width="30%">Chức năng</th>
                </thead>

                <tbody>

                <tr v-for="n in categories" :key="n.idCategory">
                  <td>{{n.idCategory}}</td>
                  <td>{{n.name}}</td>
                  <td>{{n.description}}</td>
                  <td>
                    <router-link class="btn btn-success" :to="{name:'CategoriesEdit',params:{id:n.idCategory}}">Sửa</router-link>
                    <a class='btn btn-danger'  @click="deleteCategory(n.idCategory)">Xóa</a>
                  </td>

                </tr>
                </tbody>
                <tr>

                  <td colspan="4"> <router-link class="btn btn-success form-control" style="color: white;background-color: green;" :to="{name:'addCategories'}">Thêm loại sản phẩm</router-link></td>
                </tr>

              </table>
              <div>
                <h4>{{message}}</h4>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
        &copy; Made by Lê Việt Anh
      </p>
    </div>
  </footer>
  </div>
</template>

<script>
import axios from 'axios'
import Menu from "@/components/Menu";
export default {
name: "Categories",components:{
    Menu
  },data(){
    return{
      categories:[],
      currentCategories:null,
      currentIndex:-1,
      message:''
    }
  },methods:{
    getCategory(){
      axios.get('http://35.240.134.17:8888/category').
      then((resp)=>{
        this.categories=resp.data.data;
      })
    },
    refreshList() {
      this.getCategory();
      this.currentCategories = null;
      this.currentIndex = -1;
    },
    deleteCategory(id){
      if (confirm("Bạn có muốn xóa loại có id = "+id)) {
        axios.put('http://35.240.134.17:8888/category/delete/' + id).then((resp) => {
          if (resp.data.code == 0) {
            this.categories = resp.data.data;
            this.refreshList();
            this.message = "Xóa thành công loại sản phẩm " + id;
          }

        })
      }

    },
    clearStorage(){
      localStorage.clear();
      this.$router.push('/login');
    }
  }
  ,mounted() {
      if (localStorage.name){
        this.getCategory();
      }else {
        this.$router.push('/login');
      }
  }
}
</script>

<style scoped>

</style>