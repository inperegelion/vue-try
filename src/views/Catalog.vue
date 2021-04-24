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
     * Did not find a way to appy this in Vue 3
     
    turncator(products) {
      return products.filter((prod) => prod.title.length > this.filter);
    },
    */
  },
};
</script>
