import { clients } from '../../services/Api.js';

export default Vue.component("clients", {
  name: "Clients",
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
      clients.list().then((snapshot) => {
        this.list = snapshot
      });
    },
    remove($event, key) {
      clients.delete(key);
      this.init();
    }
  },

  template: `
      <div>

  <table>
  <thead>
    <tr>
      <th>Name</th>
      <th width="180px" class="actions">
      <router-link class="button" :to="{ name: 'secure.client' }">Novo </router-link>
      </th>
    </tr>
  </thead>
  <tbody>
  <tr v-for="(item, index) in list" :key="index">
      <td>{{item.name}}</td>
      <td class="actions">
         <router-link class="button" :to="{ name: 'secure.clientEdit', params:{id: item.key} }">Editar </router-link>
           <button type="button" @click="remove($event, item.key)">Delete </button>
      </td>
    </tr>
  </tbody>
</table>
</div>
  `
});
