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
                <h4 class="title">Quản lý nhà cung cấp</h4>

              </div>
              <div class="content table-responsive">
                <table class="table table-hover table-striped">
                  <thead>

                  <th width="10%">ID</th>
                  <th width="15%">Tên</th>
                  <th width="20%">Địa chỉ</th>
                  <th width="15%">Điện thoại</th>
                  <th width="20%">Email</th>
                  <th width="20%">Chức năng</th>
                  </thead>

                  <tbody>

                  <tr v-for="n in suppliers" :key="n.idSupplier">
                    <td>{{n.idSupplier}}</td>
                    <td>{{n.supplierName}}</td>
                    <td>{{n.address}}</td>
                    <td>{{n.phone}}</td>
                    <td>{{n.email}}</td>
                    <td>
                      <router-link class="btn btn-success" :to="{name:'SuppliersEdit',params:{id:n.idSupplier}}">Sửa</router-link>
                      <a class='btn btn-danger'  @click="deleteSuppliers(n.idSupplier)">Xóa</a>
                    </td>

                  </tr>
                  </tbody>
                  <tr>

                    <td colspan="6"> <router-link class="btn btn-success form-control" style="color: white;background-color: green;" :to="{name:'addSuppliers'}">Thêm loại sản phẩm</router-link></td>
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
  name: "Suppliers",components:{
    Menu
  },data(){
    return{
      suppliers:[],
      currentSuppliers:null,
      currentIndex:-1,
      message:''
    }
  },methods:{
    getSuppliers(){
      axios.get('http://35.240.134.17:8888/Supplier').
      then((resp)=>{
        this.suppliers=resp.data.data;
      })
    },
    refreshList() {
      this.getSuppliers();
      this.currentCategories = null;
      this.currentIndex = -1;
    },
    deleteSuppliers(id){
      if (confirm("Bạn có muốn xóa loại có id = "+id)) {
        axios.delete('http://35.240.134.17:8888/Supplier/delete/' + id).then((resp) => {
          if (resp.data.code == 0) {
            this.suppliers = resp.data.data;
            this.refreshList();
            this.message = "Xóa thành công loại nhà cung cấp " + id;
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
      this.getSuppliers();
    }else {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>