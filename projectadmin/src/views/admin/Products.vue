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
              <h4 class="title">Quản lý sản phẩm</h4>

            </div>
            <div class="content table-responsive">
              <table class="table table-hover table-striped">
                <thead>

                <th width="5%">ID</th>
                <th width="15%">Tên</th>
                <th width="15%">Ảnh</th>
                <th width="15%">Nhà cung cấp</th>
                <th width="15%">Loại</th>
                <th width="15%">Mô tả</th>
                <th width="15%">Giới tính</th>
                <th width="15%">Chức năng</th>
                </thead>

                <tbody>

                <tr v-for="n in products" :key="n.idProduct">
                  <td>{{n.idProduct}}</td>
                  <td>{{n.name}}</td>
                  <td>                <img width="142" height="90" v-bind:src="n.image" class="attachment-160x90 size-160x90 wp-post-image" sizes="(max-width: 142px) 100vw, 142px" />
                  </td>
                  <td>{{n.supplier.supplierName}}</td>
                  <td>{{n.category.name}}</td>
                  <td>{{n.description}}</td>
                  <td>{{n.gender.genderName}}</td>
                  <td>
                    <router-link class="btn btn-success" :to="{name:'ProductsEdit',params:{id:n.idProduct}}">Sửa</router-link>
                    <a class='btn btn-danger' @click="deleteProducts(n.idProduct)">Xóa</a>
                  </td>

                </tr>
                </tbody>
                <tr>

                  <td colspan="8"> <router-link class="btn btn-success form-control" style="color: white;background-color: green;" :to="{name:'addProducts'}">Thêm sản phẩm</router-link></td>
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
                Quản lý tin tức
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
  name: "Products",components:{
    Menu
  },data(){
    return{
      products:[],
      currentNews:null,
      currentIndex:-1,
      message:''
    }
  },methods:{
    getData(){
      axios.get('http://35.240.134.17:8888/product').
      then((resp)=>{
        this.products=resp.data.data;
        console.log(resp.data)
      })
    },
    refreshList() {
      this.getData();
      this.currentNews = null;
      this.currentIndex = -1;
    },
    deleteProducts(id){
      if (confirm("Bạn có muốn xóa sản phẩm có id = "+id)) {
        axios.delete('http://35.240.134.17:8888/product/delete/' + id).then((resp) => {
          this.news = resp.data;
          this.refreshList();
          this.message = "Xóa thành công sản phẩm " + id;
          console.log(resp.data)
        })
      }

    },
    clearStorage(){
      localStorage.clear();
      this.$router.push('/login');
    }
  },mounted() {
    if (localStorage.name){
        this.getData();
    }else {
      this.$router.push('/login');
    }
  }

}
</script>

<style scoped>

</style>