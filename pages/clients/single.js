import { clients } from '../../services/Api.js';

export default Vue.component("client", {
  name: "Client",
  data: function () {
    return {
      model: {}
    };
  },
  created: function () {
    this.init();
  },
  methods: {
    async init() {
      if (this.$route.params && this.$route.params.id) {
        let result = await clients.get(this.$route.params.id);
        let client = result.val();
        this.model = client;
        this.model.key = this.$route.params.id;
      }
    },
    async save() {
      await clients.save(this.model);
      window.$router.push({ name: "secure.clients" })
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
