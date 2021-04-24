<template>
  <div>
    <input v-model="filter" placeholder="edit me" />
    <input type="number" v-model="length" placeholder="length of title" />
  </div>
  <ul class="Catalog">
    <ProductCard
      v-for="product in products"
      :key="product.title"
      :title="product.title"
      :price="product.price"
    />
  </ul>
</template>

<script>
import store from "@/store";
import ProductCard from "@/components/ProductCard";

export default {
  name: "Catalog",
  data: () => ({
    filter: "",
    length: 0,
  }),
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return store.getters.filterProducts(this.filter, this.length);
    },
  },
  filters: {
    /**
     * FEATURE:
     * 8.3. create a Vue filter to truncate a name longer than 15 characters
     * 
     * After short Googling I noticed that newest 3rd version of Vue prefers 
     * to use ‘computed’ instead of ‘filters’ (link 1). Anyway, I did not 
     * find a way to combine vue’s filter with v-for (link 2). I impemented
     * this feature via Vuex getters.
     * 
     * Links:
     * * https://v3.vuejs.org/guide/migration/filters.html#_3-x-update.
     * * https://forum.vuejs.org/t/v-for-in-v-for-and-filter-cant-find-way-to-do-it-with-computed/2222/3
     * */
    /**
     * Did not find a way to appy this in Vue 3
     
    turncator(products) {
      return products.filter((prod) => prod.title.length > this.filter);
    },
    */
  },
};
</script>
