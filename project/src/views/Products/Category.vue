<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs-main">
        <ol class="breadcrumb">
          <li><a href="index.html">Trang chủ</a></li>/
          <li class="active">Danh mục</li>
        </ol>
      </div>
    </div>
  </div>
  <div class="product">
    <div class="container">
      <div class="single-main row">
        <div class="col-md-9 single-main-left">


          <div class="products">
            <div class="product-one row">
              <div class="col-md-4 col-xs-4 col-sm-4 product-left" v-for="n in products" :key="n.idProduct">
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



              <div class="clearfix"> </div>
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
  name: "Category",
  components: {Side},
  props:['id'],
  data(){
    return{
      categories:[],
      products:[],
      IdCategory:this.$route.params.id,

    }
  },methods:{

    getProductCategory(){
      axios.get('http://35.240.134.17:8888/product/category?idCategory='+this.IdCategory).
      then((resp)=>{
        this.products=resp.data.data;
        console.log(this.products);
      })
    }
  },mounted() {
    this.getProductCategory()
  }
}
</script>

<style scoped>

</style>