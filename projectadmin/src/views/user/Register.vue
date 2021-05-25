<template>
  <div class="container">
    <div class="col-md-2"></div>
    <div class="main-panel1 col-md-8">
      <nav class="navbar navbar-default navbar-fixed">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Đăng kí</a>
          </div>
          <div class="collapse navbar-collapse">

            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="">
                  <p>Tài khoản</p>
                </a>
              </li>

              <li>
                <a href="">
                  <p>Đăng xuất</p>
                </a>
              </li>
              <li class="separator hidden-lg"></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="header" style="text-align: center;color: #FFFFFF;">
                  <h2 class="title">Admin</h2>
                  <p class="category">Đăng kí người dùng</p>
                </div>

                <div class="content table-responsive table-full-width">
                  <form @submit.prevent="handleSubmit">
                    <table class="table table-hover table-bordered table-responsive">
                      <tr>
                        <td class="tdcss">Email đăng nhập</td>
                        <td>
                          <input type="text" name="email" required id="email" v-model="email" class="form-control" placeholder="Mời bạn nhập email">



                        </td>
                      </tr>
                      <tr>
                        <td class="tdcss">Địa chỉ</td>
                        <td>
                          <input type="text" name="address" required id="address" class="form-control" v-model="address" placeholder="Mời bạn nhập địa chỉ">
                        </td>
                      </tr>
                      <tr>
                        <td class="tdcss">Tên</td>
                        <td>
                          <input type="text" name="name" required id="name" class="form-control" v-model="name" placeholder="Mời bạn nhập tên">
                        </td>
                      </tr>
                      <tr>
                        <td class="tdcss">Ngày sinh</td>
                        <td>
                          <input type="date" name="birthday" required id="birthday" class="form-control" v-model="birthday">
                        </td>
                      </tr>
                      <tr>
                        <td class="tdcss">Số điện thoại</td>
                        <td>
                          <input type="number" name="phone" required id="phone" class="form-control" v-model="phone" placeholder="Mời bạn nhập số điện thoại">
                        </td>
                      </tr>


                      <tr>
                        <td class="tdcss">Mật khẩu</td>
                        <td>
                          <input type="password" name="password" required id="password" class="form-control" v-model="password" placeholder="Mời bạn nhập mật khẩu">
                        </td>
                      </tr>
                      <tr>
                        <td class="tdcss">Nhập lại mật khẩu</td>
                        <td>
                          <input type="password" name="passwordConfirm" required id="passwordConfirm" class="form-control" v-model="passwordConfirm" placeholder="Mời bạn nhập mật khẩu">
                          <label for="passwordConfirm">{{checkError}}</label>
                        </td>
                      </tr>

                      <tr>
                        <td colspan="2">
                          <input type="submit" name="btnLogin" value="Đăng Ký" style="background-color: green;color: white;" class="form-control btn-submit btn btn-success">
                        </td>

                      </tr>
                    </table>
                  </form>






                </div>
                <div id="warn">
                  <label id='lbMessage' style='color: red;' class='lbMessage'>{{message}}
                  </label>

                </div>







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
            Made by Lê Việt Anh
          </p>
        </div>
      </footer>

    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Menu from "@/components/Menu";

export default {
name: "Register.vue",
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
            localStorage.name = resp.data.adminId
            console.log(localStorage.name)
            this.message = "Đăng nhập thành công"
            this.$router.push('/products');
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
#lbMessage{
  margin-left: 15px;
  font-size: 16px;
}
.main-panel{
  margin: auto;
}
</style>