import {products} from '../../services/Api.js';

export default Vue.component("product", {
  name: "Product",
  data: function () {
    return {
      model:{}
    };
  },
  created: function () {
    this.init();
  },
  methods: {
    init() {
    },
    async save () {
      await products.save(this.model);
      window.$router.push({name:"secure.products"})
    }

  },
  template: `
  <section>
  <form class="form" action="" @submit.prevent="save">
  <fieldset>
  <legend>Product</legend>

  <div class="field">
  <div class="control">
  <input class="input" type="text" name="name" id="name" v-model="model.name" placeholder="Name" />
    <label class="label" for="name">
      Name
    </label>
  </div>
</div>

  </fieldset>

  <button>Save </button>
  </form>


  </section>
  `
});