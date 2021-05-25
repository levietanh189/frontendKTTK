<template>


  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs-main">
        <ol class="breadcrumb">
          <li><a href="index.html">Home</a></li>/
          <li class="active">Register</li>
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
              <h3>Đăng kí tài khoản</h3>
            </div>
            <div class="address">
              <span>Email</span>
              <input type="text" name="txtUser" v-model="email" id="txtMail" placeholder="Mời bạn nhập Email">
              <label id="lbMail" class="lbMsg"></label>
            </div>
            <div class="address">
              <span>Địa chỉ</span>
              <input type="text" name="txtMail" v-model="address" id="txtAddress" placeholder="Mời bạn nhập địa chỉ">
              <label id="lbAddress" class="lbMsg"></label>
            </div>
            <div class="address">
              <span>Họ và Tên</span>
              <input type="text" name="txtName"  id="txtUser" v-model="name" placeholder="Mời bạn nhập tên">
              <label id="lbUser" class="lbMsg"></label>
            </div>
            <div class="address">
              <span>Ngày sinh</span>
              <input type="date" name="txtUser"  id="txtBirth" v-model="birthday" placeholder="Mời bạn nhập tên">
              <label id="birth" class="lbMsg"></label>
            </div>
            <div class="address">
              <span>Số điện thoại</span>
              <input type="text" name="txtMobile" id="txtMobile" v-model="phone" placeholder="Mời bạn nhập số điện thoại">
              <label id="lbMobile" class="lbMsg">aa</label>
            </div>

            <div class="address">
              <span>Mật khẩu</span>
              <input type="password" name="txtPass" id="txtPass" v-model="password" placeholder="Mời bạn nhập mật khẩu">
              <label id="lbPass" class="lbMsg"></label>
            </div>
            <div class="address">
              <span>Nhập lại mật khẩu</span>
              <input type="password" name="txtPass1" id="txtPass1" v-model="passwordConfirm" placeholder="Mời bạn nhập lại mật khẩu">
              <label id="lbPass1" class="lbMsg"></label>
            </div>
            <div class="address new">
              <input type="submit" value="submit">
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
  name: "Register",
  data(){
    return{

      address:'',
      email:'',
      name:'',
      password:'',
      passwordConfirm:'',
      checkError:'',
      birthday:'',
      phone:'',

      status:false,
      message:'',
      timestamp:''
    }
  },methods:{

    checkSamePasswords: function() {
      return this.password == this.passwordConfirm;
    },
    async handleSubmit() {
      var checkSame = this.checkSamePasswords();
      if (!checkSame) {
        this.checkError='Mật khẩu không không trùng khớp'
      } else {

        var data = {
          address: this.address,
          birthday: this.birthday,
          email: this.email,
          name: this.name,
          password: this.password,
          phone:this.phone
        };
        console.log(data);
        await axios.post('http://35.240.134.17:8888/athor/register', data).then((resp) => {
          if (resp.data.code == 0) {
            // localStorage.name = resp.data.data.name
            console.log(localStorage.name)
            this.message = "Đăng ký thành công"
            window.location.href = "/login";
          } else {
            this.message = resp.data.code;
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>