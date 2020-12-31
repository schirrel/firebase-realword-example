import {clients} from '../../services/Api.js';

export default Vue.component("client", {
  name: "Client",
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
      await clients.save(this.model);
      window.$router.push({name:"secure.clients"})
    }

  },
  template: `
  <section>
  <form class="form" action="" @submit.prevent="save">
  <fieldset>
  <legend>Client</legend>

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