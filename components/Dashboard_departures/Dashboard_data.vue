<template>
  <div>
    <div
      class="container-data"
      v-for="(product, index) in products"
      :key="index"
    >
      <p class="text-data item">
        {{ product.scheduledDepartureDateTime.slice(11, 16) }}
      </p>
      <p class="text-yellow item">
        {{ product.departureAirport.cityName }}
      </p>
      <p class="text-data item">
        {{ product.departureAirport.code }}
      </p>
      <p class="text-data item">
        {{ product.flightNumber }}
      </p>
      <p class="text-data item">
        {{ product.airline.name }}
      </p>
      <p class="text-yellow item">
        {{ product.arrivalAirport.countryName }}
      </p>
      <p class="text-yellow item">
        {{ product.departureGate ? product.departureGate.number : "" }}
      </p>

      <div :class="product.status">
        <div class="status-box">
          <p>{{ product.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {getAllDepartures} from '../Servicios/allDepartures'

export default {
  data() {
    return {
      products: [],
    };
  },
  props: {
    getproducts: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    getproducts(data) {
      this.products = data;
    },
  },
};
</script>

<style>
.item {
  flex: 1 1 0;
  text-align: left;
    /* margin-right: 2%; */
}
.container-data {
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  color: white;
  border: 2px solid #ffffff;
  border-radius: 10px;
  height: 10vh;
  padding-left: 5rem;
  padding-right: 5rem;
}
.text-data {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: white;

}
.text-yellow {
  font-size: 20px;
  font-weight: bold;
  color: #f5d836;
}
.status-box {
  border-radius: 0% 30% 30% 0%;
  background-color: white;
  color: black;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 6vh;
  margin-left: 10%;

}
.Departed {
  background-color: green;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
.Diverted {
  background-color: #9c7959;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
.Delayed {
  background-color: orange;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
.Cancelled {
  background-color: red;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
.Wait {
  background-color: lightblue;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
.Final {
  background-color: #ead550;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
.Go {
  background-color: green;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
.Departing {
  background-color: blue;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
.Scheduled {
  background-color: green;
  width: 10%;
  height: 6vh;
  border-radius: 0% 30% 30% 0%;
  margin-right: 1.5%;
}
</style>
