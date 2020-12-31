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
      clients.save({name: 'Alan'})
    }

  },
  template: `
      <h1> Hi you are at Client {{ $route.params.id }}</h1>
  `
});