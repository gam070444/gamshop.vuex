<template>
   <div>
    <br /><br />
    <div>
      <b-card>
        <b-img :src="img" style="width: 200px; height: 15rem"></b-img>
        <h5>{{ name }}</h5>
        <b-card-text> {{ price }} บาท </b-card-text>

        <div>
          <b-form-spinbutton
            id="sb-inline"
            v-model="value"
            inline
          ></b-form-spinbutton>
          <br /><br/>
        </div>
        <button type="button" class="btn btn-outline-dark" @click="Order(value,index)">
          <b-icon icon="minecart-loaded"></b-icon> เพิ่มไปยังตะกร้า
        </button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    img:String,
    name:String,
    price:Number,
    index:Number
  },
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    ...mapGetters(["Order"]),
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color:  brown;
}
</style>
