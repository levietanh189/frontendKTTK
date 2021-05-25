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
          <a class="navbar-brand" href="#">Đăng nhập</a>
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
                <p class="category">Đăng nhập quản trị</p>
              </div>

              <div class="content table-responsive table-full-width">
                <form @submit.prevent="handleSubmit">
                  <table class="table table-hover table-bordered table-responsive">
                    <tr>
                      <td class="tdcss">Email đăng nhập</td>
                      <td>
                        <input type="text" name="txtMail" id="txtMail" v-model="email" class="form-control" placeholder="Mời bạn nhập tài khoản">

                        <label id="lbMail" style="color: red;" class="lbMsg"></label>


                      </td>
                    </tr>
                    <tr>
                      <td class="tdcss">Mật khẩu</td>
                      <td>
                        <input type="password" name="txtPass" id="txtPass" class="form-control" v-model="password" placeholder="Mời bạn nhập mật khẩu">
                        <label id="lbPass" style="color: red;" class="lbMsg"></label>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="1">
                        <router-link to="/register"><button style="background-color: green;color: white;" class="form-control btn-submit btn btn-success">Đăng ký</button></router-link>
                      </td>
                      <td colspan="1">
                        <input type="submit" name="btnLogin" value="Đăng nhập" style="background-color: green;color: white;" class="form-control btn-submit btn btn-success">
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
name: "Login.vue",
  components:{
    Menu
  },
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
        if (resp.data.code==0 && resp.data.data.role == 0){
            localStorage.name = resp.data.data.name
            localStorage.id = resp.data.data.id
            console.log(localStorage.name)
            this.message="Đăng nhập thành công"
            this.$router.push('/products');
        }else {
          this.message="Đăng nhập thất bại vui lòng kiểm tra lại tài khoản,mật khẩu"
        }
      })
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