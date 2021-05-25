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
              <h4 class="title">Update sản phẩm</h4>
              <p class="category"></p>
            </div>
            <div class="content table-responsive" v-if="!submitted">
              <form @submit.prevent="handleUpdate({IdProducts})" enctype="multipart/form-data">
                <table class="table table-hover table-striped ">
                  <tr>
                    <td class="tdcss">Tên</td>
                    <td><input type="text" name="name"  required v-model="products.name"  class="form-control" placeholder="Mời nhập tên"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Giá</td>
                    <td><input type="number" name="price"  required v-model="products.price"  class="form-control" placeholder="Mời nhập giá"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Sale</td>
                    <td><input type="number" name="sale"  required v-model="products.sale"  class="form-control" placeholder="Mời nhập giảm giá"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Ảnh</td>
                    <td><input type="file" name="image" id="image"  @change="Images_onFileChanged"  class="form-control"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Mô tả</td>
                    <td><input type="text" name="description"  required v-model="products.description"  class="form-control" placeholder="Mời nhập mô tả"></td>
                  </tr>


                  <tr>
                    <td class="tdcss">Số lượng</td>
                    <td><input type="number" name="quantity"  required v-model="products.quantity"  class="form-control" placeholder="Mời nhập số lượng"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Kích cỡ</td>
                    <td><input type="text" name="size"  required v-model="products.size"  class="form-control" placeholder="Mời nhập kích cỡ"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Màu sắc</td>
                    <td><input type="text" name="color"  required v-model="products.color"  class="form-control" placeholder="Mời nhập màu sắc"></td>
                  </tr>
                  <tr>
                    <td class="tdcss">Loại</td>
                    <td>
                      <select name="category" v-model="idCategory" class="form-control" required>
                        <option v-for="ca in categories" :key="ca.idCategory" :value="ca.idCategory">
                          {{ca.name}}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="tdcss">Nhà cung cấp</td>
                    <td>
                      <select name="supplier" v-model="idSupplier" class="form-control" required>
                        <option v-for="su in suppliers" :key="su.idSupplier" :value="su.idSupplier">
                          {{su.supplierName}}
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td class="tdcss">Giới tính</td>
                    <td>
                      <select name="newsKindId" v-model="idGender" class="form-control" required>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                        <option value="3">Trẻ Em</option>
                      </select>
                    </td>
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
  name: "ProductsEdit",components:{
    Menu
  },
  data(){
    return{
      products:[],
      idCategory:null,
      idSupplier:null,
      idGender:null,
      message:'',
      submitted: false,
      categories:[],
      suppliers:[],
      IdProducts:this.$route.params.id,
      selectedFile:null
    }
  },methods:{
    Images_onFileChanged (event) {
      this.selectedFile = event.target.files[0];
    }
    ,
    getProduct(id){
      axios.get('http://35.240.134.17:8888/product/'+id).
      then((resp)=>{
        this.products=resp.data.data;
        this.idCategory = this.products.category.idCategory;
        this.idSupplier = this.products.supplier.idSupplier;
        this.idGender = this.products.gender.idGender;

      })
    },getCategories(){
      axios.get('http://35.240.134.17:8888/category').
      then((resp)=>{
        this.categories=resp.data.data;
      })
    },
    getSuppliers(){
      axios.get('http://35.240.134.17:8888/Supplier').
      then((resp)=>{
        this.suppliers=resp.data.data;
      })
    },
    handleUpdate(id){
      const mypostparameters= new FormData()
      mypostparameters.append('name',this.products.name);
      mypostparameters.append('price',this.products.price);
      mypostparameters.append('sale',this.products.sale);
      mypostparameters.append('description',this.products.description);
      mypostparameters.append('status',this.products.status);
      mypostparameters.append('modem',this.products.modem);
      mypostparameters.append('quantity',this.products.quantity);
      mypostparameters.append('size',this.products.size);
      mypostparameters.append('color',this.products.color);
      mypostparameters.append('idCategory',this.idCategory);
      mypostparameters.append('idSupplier',this.idSupplier);
      mypostparameters.append('idGender',this.idGender);



      axios.put('http://35.240.134.17:8888/product/'+this.IdProducts,mypostparameters).
      then((resp)=>{
        this.message = 'The tutorial was updated successfully!';

      })

      const mypostparameters1= new FormData()
      mypostparameters1.append('image', this.selectedFile);
      axios.put('http://35.240.134.17:8888/product/image/'+this.IdProducts,mypostparameters1).
      then((resp)=>{
        this.message = 'The tutorial was updated successfully!';

      })


    },
    clearStorage(){
      localStorage.clear();
      this.$router.push('/login');
    }
  },mounted() {
    if (localStorage.name){
      this.message = '';
      this.getProduct(this.$route.params.id);
      this.getCategories();
      this.getSuppliers();
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