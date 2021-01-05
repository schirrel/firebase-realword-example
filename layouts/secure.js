export default Vue.component("AppSecure", {
	data: function () {
		return {
		};
	},
	created: function () {
	},
	methods: {
	},
	template: `
	  <div class="main">
    <header>
      <h3> Firebase Admin</h3>

    </header>
	 <input id="menu" name="menu" type="checkbox">
    <label for="menu"></label>
    <aside>
      <ul>
      <li><router-link class="nav-link" :to="{ name: 'secure.products' }">Products </router-link></li>
      <li><router-link class="nav-link" :to="{ name: 'secure.clients'}">Clients </router-link></li>
<hr>

      <li><router-link class="nav-link" :to="{ name: 'products'}">Public Products </router-link></li>
      </ul>
    </aside>
    <main>
 
          <router-view></router-view>
    </main>
    <footer>
      <small>Created by schirrel.dev</small>
    </footer>
  </div>
	
  `
});
