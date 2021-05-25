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
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="header">
              <h4 class="title">Update danh mục tin tức</h4>
              <p class="category"></p>
            </div>
            <div class="content table-responsive" v-if="!submitted">
              <form @submit.prevent="handleUpdate({idSupplier})" enctype="multipart/form-data">
                <table class="table table-hover table-striped ">
                  <tr>
                    <td class="tdcss">Tên nhà cung cấp</td>
                    <td><input type="text" name="suppliersName"  required v-model="suppliers.supplierName"  class="form-control" placeholder="Mời nhập loại sản phẩm"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Email</td>
                    <td><input type="text" name="suppliersName"  required v-model="suppliers.email"  class="form-control" placeholder="Mời nhập loại sản phẩm"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Số điện thoại</td>
                    <td><input type="text" name="suppliersName"  required v-model="suppliers.phone"  class="form-control" placeholder="Mời nhập loại sản phẩm"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Địa chỉ</td>
                    <td><input type="text" name="suppliersName"  required v-model="suppliers.address"  class="form-control" placeholder="Mời nhập loại sản phẩm"></td>
                  </tr>
                  <tr>
                    <td class="tdcss"></td>
                    <td>
                      <input type="submit" name="btnCreateSup" value="Update" class="form-control btn btn-success">
                    </td>
                  </tr>

                </table>
              </form>


            </div>
            <div>
              <h4>{{message}}</h4>
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
          &copy;  Made by Lê Việt Anh
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "@/components/Menu";

export default {
  name: "SuppliersEdit",components:{
    Menu
  },
  data(){
    return{
      suppliers:[],
      message:'',
      submitted: false,
      idSupplier:this.$route.params.id
    }
  },methods:{
    getSuppliers(id){
      axios.get('http://35.240.134.17:8888/Supplier/'+id).
      then((resp)=>{
        this.suppliers=resp.data.data;
        console.log(resp.data)
      })
    },
    handleUpdate(id){
      var data = {
        supplierName: this.suppliers.supplierName,
        address: this.suppliers.address,
        email: this.suppliers.email,
        phone: this.suppliers.phone
      };

      axios.put('http://35.240.134.17:8888/Supplier/'+this.idSupplier,data).
      then((resp)=>{
        console.log(resp);
        this.message = 'Sửa thành công!';

      })
    },
    clearStorage(){
      localStorage.clear();
      this.$router.push('/login');
    }
  },mounted() {
    if (localStorage.name){
      this.message = '';
      this.getSuppliers(this.$route.params.id);
    }else {
      this.$router.push('/login');
    }


  }
}
</script>

<style scoped>
.tdcss{
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 80px;
}
.table tr{
  border: 0.5px solid grey;
}
.btn-success{
  background-color: #6dc030;
  color: white;

}
</style>