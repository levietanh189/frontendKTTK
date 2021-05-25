<template>
  <div class="header" id="myHeader">
    <header style="background: url('http://localhost:9081/assets/images/background-header.jpg'); ">
      <!--=================== Header Top Section ===================-->
      <section class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-3 logo">
              <h2><router-link to="/">CALK</router-link></h2>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 header-search">

            </div>
            <div class="col-md-3 col-sm-3 col-xs-3 action" v-if="name">
              <ul class="list-inline">
                <div>
                  <li>
                    <b style="color: white">Xin chào {{name}}</b>
                  </li>

                </div>

                <li><a href="#" @click="clearStorage"><i class='fas fa-sign-in-alt' style="color:white;"></i><span class='action-detail' style="color: white"> Đăng xuất</span></a></li>
                <li>
                  <router-link to="/cart"><i class="fa fa-shopping-cart"></i></router-link>
                </li>
              </ul>

            </div>
            <div class="col-md-3 col-sm-3 col-xs-3 action" v-else>
              <ul class="list-inline">
                <li>

                  <router-link to="/login"><i class="fas fa-sign-in-alt"></i><span class="action-detail"> Login</span></router-link>
                </li>
                <li><router-link to="/register"><i class="fas fa-user-plus"></i><span class="action-detail"> Register</span></router-link></li>

                <li>
                  <router-link to="/cart"><i class="fa fa-shopping-cart"></i></router-link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>
      <!--=================== Header Bottom Section ===================-->
      <section class="header-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12" >
              <!--=================== Main Menu ===================-->
              <nav class="navbar-expand-lg navbar-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse navbar-header" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown" v-for="ca in categories" :key="ca.idCategory">
                      <router-link class="nav-link" :to="{name:'Category',params:{id:ca.idCategory}}">
                          {{ca.name}}
                      </router-link>
                    </li>
                  </ul>

                </div>
              </nav>

            </div>
          </div>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Header",
  data(){
    return{
      categories:[],
      name:null
    }
  }
  ,methods:{
    getCategory(){
      axios.get('http://35.240.134.17:8888/category').
      then((resp)=>{
        this.categories=resp.data.data;
        console.log(this.categories);
      })
    },
    setName(){
      this.name=localStorage.name
    },clearStorage(){
      localStorage.clear();
      this.$router.push('/login');
      this.setName();
    }
  },mounted(){
    this.getCategory();
    this.setName();

  }
}
</script>

<style scoped>

  header{
    background-color: #0f6674;
  }
</style>