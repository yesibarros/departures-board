<template>
  <!-- <div> -->
    <div class="container">
      <app-header />
      <div class="container-dash">
        <dashboard-titles />
        <dashboard-data :getproducts="products" v-if="!errorMessage" />
        <form-status
          :getproducts="products" 
          @saveStatus="handleSave"
          v-if="dashboardLoaded"
        />
        <div class="container-error">
          <div class="error" v-if="errorMessage">
            <h1 class="error-text">{{ errorStatus }} {{ errorMessage }}</h1>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Header from "./Header/Header.vue";
import Dashboard_titles from "./Dashboard_departures/Dashboard_titles.vue";
import Dashboard_data from "./Dashboard_departures/Dashboard_data.vue";
import Form from "./Form/Form.vue";
import getAllDepartures from "./Services/allDepartures";

export default {
  data() {
    return {
      errorStatus: null,
      errorMessage: "",
      dashboardLoaded: false,
      products: [],
    };
  },
  components: {
    "app-header": Header,
    "dashboard-titles": Dashboard_titles,
    "dashboard-data": Dashboard_data,
    "form-status": Form,
  },
  methods: {
    getProducts: async function () {
      const res = await getAllDepartures();
      if (res.status !== 200) {
        this.errorStatus = res.status;
        this.errorMessage = res.message;
      } else {
        this.dashboardLoaded = true;
        this.products = res.data.allDepartures;
      }
    },

    handleSave(stateSubmit, flightSubmit) {
      let index = -1;
      const match = this.products.find((prod, i) => {
        index = i;
        return prod.flightNumber === flightSubmit;
      });
      if (match) { 
        match.status = stateSubmit;
        this.products.splice(index, 1, match);
      }
    },
  },
  async beforeMount() {
    await this.getProducts();
  },
};
</script>

<style >
body {
  padding: 0;
  margin: 0;
}
.container-dash {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to right, #464646, #000000);
  width: 100%;
  min-height: 100vh;
  padding: 30px;
}
.error {
  display: flex;
  background-color: #e3e8ec;
  width: 40%;
  height: 25vh;
  justify-content: center;
  align-items: center;
}
.container-error {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
}
.container {
  width: 100%;
}
.error-text {
  color: red;
  text-shadow: 1px 1px grey;
  margin-left: 4%;
}
</style>
