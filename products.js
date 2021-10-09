/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
    };
  },
  methods: {
    displayProducts: function () {
      axios.get("http://localhost:3000/products").then((response) => {
        this.products = response.data;
        console.log(response.data);
      });
    },
  },
  addProduct: function () {
    var params = {
      name: "Cool thing",
      description: "this is a cool thing",
      price: 100,
    };
    axios.post("http://localhost:3000/products", params).then((response) => {
      console.log(response.data);
      this.products.push(response.data);
    });
  },
});
