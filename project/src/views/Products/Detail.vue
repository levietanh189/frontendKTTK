<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs-main">
        <ol class="breadcrumb">
          <li><a href="/">Home</a></li>/
          <li class="active">Single</li>
        </ol>
      </div>
    </div>
  </div>

  <div class="single contact">
    <div class="container">
      <div class="single-main row">
        <div class="col-md-9 single-main-left">
          <div class="sngl-top row">
            <div class="col-md-5 single-top-left" style="border: 1px solid black">
                    <img  width="300" height="400" v-bind:src="detail.image" />

            </div>
            <div class="col-md-7 single-top-right">
              <div class="details-left-info simpleCart_shelfItem" style="padding-left: 50px;">
                <h3>{{detail.name}}</h3>
                <div class="price_single">
                  <h2 class="quick">Tình trạng: <span class="color" v-if="detail.status==true">Còn hàng</span><span class="color" v-else>Hết hàng</span></h2>
                </div>
                <div class="price_single">
                 <h2 class="quick">Giới tính : <span>{{GenderName}}</span></h2>
                </div>
                <div class="price_single">
                  <h2 class="quick">Size: <span>{{detail.size}}</span></h2>
                </div>
                <div class="price_single">
                  <h2 class="quick">Nhà cung cấp: <span>{{SupplierName}}</span></h2>
                </div>
                <div class="price_single">
                  <h2 class="quick">Loại: <span>{{CategoryName}}</span></h2>
                </div>
                <div class="price_single">
                  <span class="actual item_price">Giá : ${{detail.price}}</span>
                </div>


                <h2 class="quick">Mô tả</h2>
                <p class="quick_desc">{{detail.description}}</p>
                <form @submit.prevent="handleCart">
                <div class="quantity_box">
                  <ul class="product-qty">
                    <span>Số lượng:</span>
                    <input name="quantity" type="number" v-model="quantity">

                  </ul>
                </div>

                <div class="clearfix"> </div>

                <div class="single-but item_add">
                  <input type="submit" value="ADD TO CART"/>
                </div>
                </form>
              </div>
            </div>
            <div class="container-fluid">
              <h3 style="color: red">{{message}}</h3>
            </div>
            <div class="clearfix"></div>
          </div>

          <div class="latest products" style="margin-top: 50px;">
            <div class="product-one row">
              <div class="col-md-3 col-xs-3 col-sm-3 product-left" v-for="n in listProductNews" :key="n.idProduct">
                <div class="p-one simpleCart_shelfItem">
                  <router-link :to="{name:'Detail',params:{id:n.idProduct}}">
                    <img width="150" height="200" v-bind:src="n.image" alt="" sizes="(max-width: 142px) 100vw, 142px"/>
                    <div class="mask">
                      <span>Quick View</span>
                    </div>
                  </router-link>
                  <h4>{{n.name}}</h4>
                  <p><router-link :to="{name:'Detail',params:{id:n.idProduct}}" class="item_add"><i></i> <span class=" item_price">{{n.price}}</span></router-link></p>

                </div>
              </div>


            </div>
          </div>
        </div>



        <side></side>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Side from "@/components/Side";

export default {
  name: "Detail",
  props:['id'],
  components:{
    Side
  },data(){
    return{
      quantity:null,
      detail:[],
      listProductNews:[],
      CategoryName:null,
      SupplierName:null,
      GenderName:null,
      idUser:null,
      message:null
    }
  },methods:{
    handleCart(){
      var data = {
        amount:this.quantity,
        productId:this.$route.params.id,
        customerId:this.idUser
      }
      axios.post('http://35.240.134.17:8888/order',data).
      then((resp)=>{
        if (resp.data.code == 0){
          this.$router.push('/cart');
        }else {
          this.message= resp.data.message
        }
      })
    },
    getDetail(id){
      axios.get('http://35.240.134.17:8888/product/'+id).
      then((resp)=>{
        this.detail=resp.data.data;
        this.CategoryName = this.detail.category.name;
        this.SupplierName = this.detail.supplier.supplierName;
        this.GenderName = this.detail.gender.genderName;

      })
    },getProductNews(){
      axios.get('http://35.240.134.17:8888/product/new-product/4').
      then((resp)=>{
        this.listProductNews = resp.data.data;

        console.log(resp.data)
      })
    }
  },mounted() {
    this.idUser = localStorage.id;
    this.getDetail(this.$route.params.id);
    this.getProductNews();

  }
}
</script>

<style scoped>

</style>