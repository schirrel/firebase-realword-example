import { products } from '../services/Api.js';

export default Vue.component("publicProducts", {
  name: "Products",
  data: function () {
    return {
      list: []
    };
  },
  created: function () {
      products.list().then((snapshot) => {
        this.list = snapshot
      });
  },
  template: `
<section>
<h1> Hi you are at at public products </h1>

<ol>

  <li v-for="(item, index) in list" :key="index"> {{item.name}} </li>

</ol>

</section>

  `
});
