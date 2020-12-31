export default Vue.component("product", {
  name: "Product",
  data: function () {
    return {
      model:{}
    };
  },
  created: function () {
  },
  methods: {
    init() {

    },
    save() {

    }

  },
  template: `
<h1> Hi you are at Products {{ $route.params.id }}</h1>
  `
});