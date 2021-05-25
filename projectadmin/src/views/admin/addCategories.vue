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
              <h4 class="title">THêm mới loại sản phẩm</h4>
              <p class="category"></p>
            </div>
            <div class="content table-responsive" v-if="!submitted">
              <form @submit.prevent="handelAdd" enctype="multipart/form-data">
                <table class="table table-hover table-striped ">
                  <tr>
                    <td class="tdcss">Tên loại</td>
                    <td><input type="text" name="categoriesName"  required v-model="categories.name"  class="form-control" placeholder="Mời nhập loại sản phẩm"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Mô tả</td>
                    <td><input type="text" name="description"  required v-model="categories.description"  class="form-control" placeholder="Mời nhập loại sản phẩm"></td>
                  </tr>
                  <tr>
                    <td class="tdcss"></td>
                    <td>
                      <input type="submit" name="btnCreateSup" value="Lưu" class="form-control btn btn-success">
                    </td>
                  </tr>

                </table>
              </form>


            </div>
            <div v-else>
              <h4>Thêm mới thành công</h4>
              <button class="btn btn-success" @click="newAdd">Thêm mới</button>
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
name: "addCategories",
  components:{
    Menu
  },
  data(){
    return{
      news:[],
      categories: {
        categoriesid:null,
        name: null,
        description:null

      },
      submitted: false
    }
  },methods:{
    handelAdd(){
      var data = {
        name: this.categories.name,
        description:this.categories.description
      };

      axios.post('http://35.240.134.17:8888/category',data).
      then((resp)=>{
        if (resp.data.code==0){
          this.categories.categoriesid = resp.data.data.idCategory;
          this.submitted = true;
        }

      })
    },newAdd() {
      this.submitted = false;
      this.tutorial = {};
    },
    clearStorage(){
      localStorage.clear();
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