<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs-main">
        <ol class="breadcrumb">
          <li><a href="index.html">Home</a></li>/
          <li class="active">Cart</li>
        </ol>
      </div>
    </div>
  </div>

  <div class="ckeckout">
    <div class="container">
      <div class="ckeckout-top">
        <div class=" cart-items heading">
          <h3>Giỏ hàng</h3>
          <div class="in-check" >
            <ul class="unit" style="text-align: center">
              <li><span>Sản phẩm</span></li>
              <li><span>Tên</span></li>
              <li><span>Giá</span></li>
              <li><span>Số lượng</span></li>
              <li> </li>
              <div class="clearfix"> </div>
            </ul>
            <ul class="cart-header" v-for="c in carts" :key="c.idOrder">

              <li class="ring-in"><router-link :to="{name:'Detail',params:{id:c.product.idProduct}}" ><img v-bind:src="c.product.image" width="100" height="100" class="img-responsive" alt=""></router-link>
              </li>
              <li><span>{{c.product.name}}</span></li>
              <li><span>{{c.product.price}}$</span></li>
              <li><span>{{c.amount}}</span></li>
              <li> <a @click="deleteSingleOrder(c.idOrder)" class="add-cart cart-check" style="color: white">Xóa</a></li>
              <div class="clearfix"> </div>
            </ul>

            <ul class="unit">
              <li><span>Tổng tiền</span></li>
              <li><span></span></li>
              <li><span>Thanh toán</span></li>
              <li><span></span></li>
              <li><span>Thao tác</span></li>




              <div class="clearfix"> </div>
            </ul>
            <ul class="unit" style="background-color: white">
              <li><span style="color: black;">{{total}}$</span></li>
              <li><span style="color: black;"></span></li>
              <li><router-link to="/payment" class="add-cart cart-check" style="margin-top: 0px;color: white">Lập đơn hàng</router-link></li>
              <li><span style="color: black;"></span></li>
              <li><a @click="deleteOrder(idCart)" class="add-cart cart-check" style="margin-top: 0px;color: white">Xóa hêt</a></li>

              <div class="clearfix"> </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Cart",data(){
    return{
      carts:[],
      total:0,
      idCart:null,
      idUser:null,
    }
  },
  methods:{
    getCart(){
      axios.get('http://35.240.134.17:8888/cart?customerId='+this.idUser).
      then((resp)=>{
        this.carts=resp.data.data.orders;
        this.idCart = resp.data.data.idCart
        console.log(this.carts);
        this.caculTotal();
      })
    },deleteSingleOrder(id){
      if (confirm("Bạn có muốn xóa sản phẩm khỏi giỏ hàng")) {
        axios.delete('http://35.240.134.17:8888/order/' + id).then((resp) => {
          this.total=0;
          this.refreshList();
        })
      }

    },
    deleteOrder(id){
    if (confirm("Bạn có muốn xóa toàn bộ sản phẩm khỏi giỏ hàng")) {
      axios.delete('http://35.240.134.17:8888/order/cart/' + id).then((resp) => {
        this.total=0;
        this.refreshList();
      })
    }

  },
    caculTotal(){
      for (var i=0;i<this.carts.length;i++){
          this.total += this.carts[i].product.price * this.carts[i].amount;
      }
    },
    refreshList(){
      this.getCart();
    }
  }
,mounted() {

    if (localStorage.name){
      this.idUser = localStorage.id;
      this.getCart();
    }else {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>