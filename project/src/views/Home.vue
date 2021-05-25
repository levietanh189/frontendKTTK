<template>
  <div class="main">
    <div class="carousel-news">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-xs-12 col-sm-12">
            <div id="carousel-news" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <p><b><i>CALK SHOES STORE</i></b></p>
                </div>
                <div class="carousel-item">
                  <p><span><i class="fas fa-undo-alt"></i></span> Thành viên được trả lại hàng miễn phí trong 30 ngày</p>
                </div>
                <div class="carousel-item">
                  <p><span><i class="fas fa-truck"></i></span>Miễn phí giao hàng với hóa đơn trên 5 triệu đồng</p>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carousel-news" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel-news" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="carousel-slider">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-xs-12 col-sm-12">
            <div id="carousel-slider" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carousel-slider" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-slider" data-slide-to="1"></li>
                <li data-target="#carousel-slider" data-slide-to="2"></li>
                <li data-target="#carousel-slider" data-slide-to="3"></li>
              </ol>
              <div class="carousel-inner slider" style="width: 102.5%">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="assets/images/slider1.jpg" width="100%" alt="Shoes1">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="assets/images/slider2.jpg"  width="100%" alt="Shoes2">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="assets/images/slider3.jpg"  width="100%" alt="Shoes3">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="assets/images/slider4.jpg"  width="100%" alt="Shoes4">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carousel-slider" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel-slider" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="shoes new-items">
      <div class="container">
        <div class="header-new-items row">
          <div class="col-md-12 col-xs-12 col-sm-12">
            Các sản phẩm mới
          </div>
        </div>

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
    <div class="subcribe">
      <div class="container-fluid">

        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-6" style="font-size: 30px;">
            Đăng kí để cập nhật tin tức và 15% Sale
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6">
            <input type="text" style="width: 20rem;height: 3rem;" name="txtSubscribe" id="txtSubscribe" placeholder="Type your email">
            <input type="button" style="background-color: black;width: 3rem;height: 3rem;color: white;font-size: 1.3rem" name="" value="&#8594">
          </div>

        </div>
      </div>
    </div>



  </div>


  <div class="brand">
    <div class="container">
      <div class="row" style="margin-top: 20px;">
        <div class="col-md-2 col-sm-2 col-xs-2 brand-item-cover">
          <div class="brand-item" style="background-image:url('assets/images/brand1.jpg'); "></div>
        </div>
        <div class="col-md-2 col-sm-2 col-xs-2 brand-item-cover">
          <div class="brand-item" style="background-image:url('assets/images/brand2.jpg'); "></div>
        </div>
        <div class="col-md-2 col-sm-2 col-xs-2  brand-item-cover">
          <div class="brand-item" style="background-image:url('assets/images/brand3.jpg'); "></div>
        </div>
        <div class="col-md-2 col-sm-2 col-xs-2 brand-item-cover">
          <div class="brand-item" style="background-image:url('assets/images/brand4.jpg'); "></div>
        </div>
        <div class="col-md-2 col-sm-2 col-xs-2 brand-item-cover">
          <div class="brand-item" style="background-image:url('assets/images/brand5.jpg'); "></div>
        </div>
        <div class="col-md-2 col-sm-2 col-xs-2 brand-item-cover">
          <div class="brand-item" style="background-image:url('assets/images/brand6.jpg'); "></div>
        </div>

      </div>
    </div>
  </div><!--end #brand-->
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Header,
    Footer

  },data(){
    return{
      listProductNews:[]
    }
  },methods:{
    getProductNews(){
      axios.get('http://35.240.134.17:8888/product/new-product/4').
      then((resp)=>{
        this.listProductNews = resp.data.data;
        console.log(resp.data)
      })
    }
  }
  ,mounted() {
    this.getProductNews();


  }
}

</script>
