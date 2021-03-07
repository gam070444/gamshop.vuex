<template>
 <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <router-link to="/">
        </router-link>
        <b-navbar-brand href="#">GAM BAKERY HOUSE</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="col-5" style="color: brow" to="/"
              >Home</router-link
            >
            <router-link class="col-5" style="color: brow" to="/about"
              >Order</router-link
            >
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form> </b-nav-form>
            <router-link to="/about" class="col-7">
              <b-button squared variant="primary" @click="Submit()">
                ยืนยัน
              </b-button></router-link
            >
            <b-button squared variant="danger" @click="Clear()">
              ยกเลิก
            </b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view @Order="Sorder" :data="data" :Total="Total" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #856868;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color:rgb(83, 30, 30);
}
</style>

<script>
import { mapMutations } from "vuex";
import Vue from 'vue'
export default Vue.extend({
   computed: {
    ...mapMutations(["Clear","Submit"]),
  },
})
</script>