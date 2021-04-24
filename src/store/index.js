import { createStore } from "vuex";

export default createStore({
  state: {
    isLogged: false,
    user: {
      avatarURL:
        "https://instagram.fiev13-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/57408278_640739773020291_8889032314683686194_n.jpg?tp=1&_nc_ht=instagram.fiev13-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BIl_Nw9NHA0AX9cVNHk&edm=APU89FAAAAAA&ccb=7-4&oh=a8a14f55eee9d018e224e1b3038ff1bd&oe=60A6C12A&_nc_sid=86f79a",
      name: "Cute Kitty Beast",
      age: 10,
    },
    products: [
      { title: "khlib", price: 20.49 },
      { title: "Unspellable Cruissants", price: 44.11 },
      { title: "Vatrushka", price: 10.0 },
      {
        title: "Suber-mega double CheezeBulka with sauce",
        price: 99.99,
      },
      {
        title: "Big Skybka XXL with onion slices",
        price: 122.49,
      },
      { title: "Best flaw you ever tried", price: 12.49 },
      { title: "Boolochka Zdorovya", price: 20.41 },
    ],
  },
  mutations: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
  actions: {
    logout({ commit }) {
      commit("logout");
    },
    login({ commit }) {
      commit("login");
    },
  },
  modules: {},
  getters: {
    filterProducts: (state) => (filter, length) =>
      state.products.filter((product) => {
        if (+length !== 0 && product.title.length > length) return false;
        let regex = new RegExp(filter, "i");
        let match = product.title.match(regex);
        return match !== null;
      }),
  },
});
