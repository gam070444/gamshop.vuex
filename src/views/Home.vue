<template>
  <div class="home">
    <div>
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      img-src="http://bowbakery.co.th/wp-content/uploads/2015/07/modified-2.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="http://bowbakery.co.th/wp-content/uploads/2015/07/modified-1.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://www.unileverfoodsolutions.co.th/th/chef-inspiration/best-foods-bakers-partner/new-sensations-to-impress-customers/jcr:content/parsys/header/articleheader/previewImage.transform/jpeg-optimized/image.1540999177218.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="http://fb1-cv.lnwfile.com/5nqnj7.jpg"
    ></b-carousel-slide>
  </b-carousel>
</div>

    <div class="row">
      <HelloWorld
        class="col-3"
        v-for="(item, index) in Menu"
        :key="index"
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :index="index"
        @Order="menuorder"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    HelloWorld
    
},
computed: {
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },
    ...mapGetters(["Menu","ShowSelect"]),
  },
}



</script>
