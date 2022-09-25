<template>
  <div>
    <select
      @change="handleChange($event)"
    >
      <option v-for="(item, index) in items" :key="index">{{ item }}</option>
    </select>
  </div>
</template>
<script>

export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },

  methods: {
    handleChange(event) {
       this.$emit("selectChoose", event);
    },
  },
};
</script>

<style>

label {
  font-size: 1rem;
  padding-right: 10px;
}

select {
  font-size: 0.9rem;
  padding: 2px 5px;
}

</style>
