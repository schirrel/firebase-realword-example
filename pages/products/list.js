import { products } from '../../services/Api.js';

export default Vue.component("products", {
  name: "Products",
  data: function () {
    return {
      list: []
    };
  },
  created: function () {
    this.init();
  },
  methods: {
    init() {
      products.list().then((snapshot) => {
        this.list = snapshot
      });
    },
    remove($event, key) {
      products.delete(key);
      this.init();
    }

  },
  template: `


  <table>
  <thead>
    <tr>
      <th>Name</th>
      <th width="80px">
      <router-link class="nav-link" :to="{ name: 'secure.product' }">Novo </router-link>
      </th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="(item, index) in list" :key="index">
      <td>{{item.name}}</td>
      <td>
           <button type="button" @click="remove($event, item.key)">Delete </button>
      </td>
    </tr>
  </tbody>
</table>
  `
});
