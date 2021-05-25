<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs-main">
        <ol class="breadcrumb">
          <li><a href="index.html">Home</a></li>/
          <li class="active">Login</li>
        </ol>
      </div>
    </div>
  </div>

  <div class="login account">
    <div class="container">
      <div class="account-bottom row">

        <div class="col-md-6 account-left">
          <form @submit.prevent="handleSubmit">
            <div class="account-top heading">
              <h3>Đăng nhập</h3>
            </div>
            <div class="address">
              <span>Email</span>
              <input type="text" name="txtMail" id="txtMail" v-model="email" required placeholder="Mời bạn nhập địa chỉ email">
              <label id="lbMail" class="lbMsg"></label>
            </div>
            <div class="address">
              <span>Mật khẩu</span>
              <input type="password" name="txtPass" id="txtPass" v-model="password" required placeholder="Mời bạn nhập tên">
              <label id="lbPass" class="lbMsg"></label>
            </div>
            <div class="address"><label>{{message}}</label></div>
            <div class="address">
              <input type="submit" value="Đăng nhập"><br><br>
              Đăng kí tài khoản
              <router-link to="/register" class="forgot"><input type="button" value="Đăng kí" class="btn btn-success"></router-link>

            </div>

        </form>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data(){
    return{
      email:'',
      password:'',
      status:false,
      message:''
    }
  },methods:{
    async handleSubmit(){
      var data = {
        email: this.email,
        password:this.password
      };
      await axios.post('http://35.240.134.17:8888/athor/login',data).then((resp)=>{
        if (resp.data.code==0 && resp.data.data.role == 1){
          localStorage.name = resp.data.data.name
          localStorage.id = resp.data.data.id
          this.message="Đăng nhập thành công"
          window.location.href = "/";
        }else {
          this.message="Đăng nhập thất bại vui lòng kiểm tra lại tài khoản,mật khẩu"
        }
      })
    }
  }
}
</script>

<style scoped>

</style>