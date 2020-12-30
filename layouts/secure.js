export default Vue.component("AppSecure", {
	data: function () {
		return {
		};
	},
	created: function () {
		console.log("Logged in")
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
        <li>Products</li>
        <li>Clients</li>
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