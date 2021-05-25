<template>



  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs-main">
        <ol class="breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li class="active">Contact</li>
        </ol>
      </div>
    </div>
  </div>
  <!--end-breadcrumbs-->
  <!--start-contact-->
  <div class="contact" v-if="status">
    <div class="container">
      <div class="contact-top heading">
        <h3>Thiết lập đơn hàng</h3>
      </div>

      <div class="contact-bottom">
        <div class="col-md-6 contact-left">

          <form @submit.prevent="handleSubmit">
            <div class="account-top heading">

            </div>
            <div class="address">
              <span>Phương thức thanh toán</span>
              <select name="cbPayment" v-model="idPayment" >
                <option v-for="p in payment" :key="p.idPayment" v-bind:value="p.idPayment">{{p.payment}}</option>
              </select>

            </div>
            <div class="address">
              <span>Tên người nhận</span>
              <input type="text" name="txtUser" id="txtUser" v-model="customerName" placeholder="Mời bạn nhập tên">
              <label id="lbUser" class="lbMsg"></label>
            </div>
            <div class="address">
              <span>Số điện thoại</span>
              <input type="text" name="txtMobile" id="txtMobile" placeholder="Mời bạn nhập số điện thoại" v-model="phone">
              <label id="lbMobile" class="lbMsg"></label>
            </div>
            <div class="address">
              <span>Email</span>
              <input type="text" name="txtMail" id="txtMail"  placeholder="Mời bạn nhập Email" v-model="email">
              <label id="lbMail" class="lbMsg"></label>

            </div>
            <div class="address">
              <span>Địa chỉ</span>
              <input type="text" name="txtAddress" id="txtAddress" placeholder="Mời bạn nhập Địa chỉ" v-model="address">
              <label id="lbAddress" class="lbMsg"></label>

            </div>

            <div class="address new">
              <input type="submit" name="btnRegister" value="submit">
            </div>
          </form>
        </div>

          <div class="address new">
            <router-link to="/cart"><input type="button" value="Quay lại giỏ hàng"></router-link>
          </div>

        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
  <div class="container-fluid" v-else><h1>Bạn đã đặt hàng thành công</h1></div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Payment",
  data(){
    return{
      payment:[],
      idPayment:null,
      address:null,
      customerName:null,
      email:null,
      idCart:null,
      phone:null,
      customerId:null,
      status:1


    }
  },
  methods:{
    getPayment(){
      axios.get('http://35.240.134.17:8888/payment').
      then((resp)=>{
        this.payment=resp.data.data;

      })
    },
    getCart(){
      axios.get('http://35.240.134.17:8888/cart?customerId='+this.customerId).
      then((resp)=>{

        this.idCart = resp.data.data.idCart
        console.log(idCart);

      })
    },
    handleSubmit(){
      var data={
        idPayment:this.idPayment,
        address:this.address,
        customerName:this.customerName,
        email:this.email,
        idCart:this.idCart,
        phone:this.phone
      }
      axios.post('http://35.240.134.17:8888/transaction',data).
      then((resp)=>{
        this.message = 'Bạn đã đặt hàng thành công';
        this.status=0;
      })
    }
  },mounted() {
    if (localStorage.name){
      this.customerName = localStorage.name;
      this.customerId=localStorage.id;
      this.getPayment();
      this.getCart();
    }else {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>