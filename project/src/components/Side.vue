<template>
  <div class="col-md-3 single-right">
    <h3>Danh mục</h3>
    <ul class="product-categories">
      <li class="nav-item dropdown" v-for="ca in categories" :key="ca.idCategory">
        <router-link class="nav-link" :to="{name:'Category',params:{id:ca.idCategory}}">
          {{ca.name}}
        </router-link>
      </li>

    </ul>
  </div>
  <div class="clearfix"> </div>
</template>

<script>
import axios from 'axios'

export default {
name: "Side",
  data(){
  return{
    categories:[]
  }
  },
  methods:{
    getCategory(){
      axios.get('http://35.240.134.17:8888/category').
      then((resp)=>{
        this.categories=resp.data.data;
      })
    }
  },mounted() {
  this.getCategory()
  }
}
</script>

<style scoped>

</style>