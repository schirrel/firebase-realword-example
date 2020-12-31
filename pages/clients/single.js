import {clients} from '../../services/Api.js';

export default Vue.component("client", {
  name: "Client",
  data: function () {
    return {
      data:[]
    };
  },
  created: function () {
    this.init();
  },
  methods: {
    init() {
   //   clients.save({name: 'Alan'})
    }

  },
  template: `
  <section>
  <form>
  <fieldset>
  <legend>Client</legend>

  <div class="field">
  <div class="control">
    <input class="input" type="text" name="name" id="name" placeholder="Name" />
    <label class="label" for="name">
      Name
    </label>
  </div>
</div>

  </fieldset>

  <button type="button">Save </button>
  </form>


  </section>
      <h1> Hi you are at Client {{ $route.params.id }}</h1>
  `
});