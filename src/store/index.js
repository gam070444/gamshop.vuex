import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // counter: 0,
    // todos: [
    //   { id: 1, text: 'A', done: true },
    //   { id: 2, text: 'B', done: false },
    //   { id: 3, text: 'C', done: true }
    // ]
    select: [],
    nun: [{
      img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%9B%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81%E0%B8%AA%E0%B8%A3%E0%B8%AD%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%881-405x405.jpg",
    name: "เครปเค้กสตรอเบอร์รี่",
    price: 45,
  },
  {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/%E0%B8%9A%E0%B8%A5%E0%B8%B9%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%8A%E0%B8%B5%E0%B8%AA%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81-405x405.jpg",
    name: "บลูชีสเค้ก ",
    price: 35,
  },
  {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%AD%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%8A%E0%B8%B5%E0%B8%AA%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81-405x405.jpg",
    name: "สตรอชีสเค้ก",
    price: 35,
  },
  {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/Croissant-1024x1024-405x405.jpg",
    name: "ครัวซองท์",
    price: 30,
  },
  {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/Whole-wheat-sandwich-%E0%B8%9E%E0%B8%A3%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A1%E0%B9%81%E0%B8%8B%E0%B8%99%E0%B8%94%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B8%8A-%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2-3-%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%8A%E0%B9%88%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99-1024x1024-405x405.jpg",
    name: "พรีเมี่ยมแซนด์วิช",
    price: 35,
  },
  {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/Strawberry-puff-1024x1024-405x405.jpg",
    name: "พัฟแยมสตรอ",
    price: 30,
  },
  {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/3.Crispy-bread-butter-%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%99%E0%B8%A2-%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2-30-%E0%B8%A7%E0%B8%B1%E0%B8%99-1024x1024-405x405.jpg",
    name: "ขนมปังกรอบเนย",
    price: 30,
  },
  {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/Almond-chocolate-cracker-1024x1024-405x405.jpg",
    name: "แครกเกอร์อัลมอนด์",
    price: 59,
  },
   {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/Tuna-Roll-1024x1024-405x405.jpg",
    name: "โรลทูน่า",
    price: 29,
  },
   {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/Cheese-sausage-bun-%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%AA%E0%B9%89%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%81%E0%B8%8A%E0%B8%B5%E0%B8%AA-%E0%B8%AD%E0%B8%B2%E0%B8%A2%E0%B8%B8%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2-2-%E0%B8%A7%E0%B8%B1%E0%B8%99-1024x1024-405x405.jpg",
    name: "ขนมปังไส้กรอกชีส",
    price: 29,
  },
   {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/Nut-meringue-bucket-1024x1024-405x405.jpg",
    name: "นัทเมอแรงค์ถัง",
    price: 59,
  },
   {
    img:
      "http://bowbakery.co.th/wp-content/uploads/2015/08/Choc-rice-meringue-1024x1024-405x405.jpg",
    name: "เมอแรงค์ 60 กรัม ช็อคไรท์",
    price: 59,
      },
    ],
    s: [],
    data: [{}],
    Total: 0,



  },
  getters: {
    T: state => {
      return state.Total;
    },
    Menu: state => {
      return state.nun;
    },
    Order: state => (value, index) => {
      return state.select.push({
        name: state.nun[index].name,
        price: state.nun[index].price,
        value: value,
        Total: value * state.nun[index].price
      })
    },
    ShowSelect: state => {
      return state.select;
    }
  },
  mutations: {
    //Clearสินค้า
    Clear: state => {
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = 0;
        state.select = [];
      }
    },
    //รวมราคา
    Submit: state => {
      state.Total = 0;
      for (let i = 0; i <= state.select.length; i++) {
        state.Total = state.Total + state.select[i].Total;
      }
    }
  },
  actions: {},
  modules: {}
})
//忍