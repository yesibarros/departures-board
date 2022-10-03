<template>
  <div class="container-form">
    <form class="form" @submit.prevent="onSubmit">
      <h1 class="title_change_status">Change flight status</h1>
      <div class="statusSelection">
        <select required @change="handleFlight($event)">
          <option v-for="(item, index) in getFlightNumbers" :key="index">
            {{ item }}
          </option>
        </select>
        <select v-if="dropState" @change="handleStatus($event)">
          <option v-for="(item, index) in state" :key="index">
            {{ item }}
          </option>
        </select>
        <input
          placeholder="Write a new status"
          type="text"
          v-model="inputName"
          v-if="dropState && stateChoose === 'Free text'"
        />
        <!-- @change="changeTextStatus"  this goes in line 20-->
        <div class="container-button">
          <button class="save" type="submit">Save</button>
        </div>
      </div>
    </form>
    <div class="error_label" v-if="showError">
      <p>{{ messageError }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      dropState: false,
      state: ["Free text", "Departed", "Diverted", "Delayed", "Cancelled"],
      flightChoose: null,
      stateChoose: "Free text",
      inputName: "",
      showError: null,
      messageError: "",
    };
  },
  props: {
    getproducts: {
      type: Array,
      default: [],
    },
  },
  
  computed: {

    getFlightNumbers() {
      const flights = this.getproducts.map((product) => product.flightNumber);
      flights.unshift("");
      return flights;
    },
  },
  methods: {
    handleStatus(event) {
      this.stateChoose = event.target.value;
    },
    onSubmit() {
      this.showError = false;
      const stateSubmit = this.inputName ? this.inputName : this.stateChoose;
      const flightSubmit = this.flightChoose;
      if (this.inputName === "" && this.stateChoose === "Free text") {
        this.showError = true;
        this.messageError =
          "You should choose a flight and a status before saving";
        return;
      } else {
        this.$emit("saveStatus", stateSubmit, flightSubmit);
        this.inputName = "";
      }
    },
    // changeTextStatus() {
    //   this.inputName = event.target.value;
    // },
    handleFlight(event) {
      this.dropState = true;
      this.flightChoose = event.target.value;
    },
  },
};
</script>
<style>
.container-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
.error_label {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: red;
  font-weight: 600;
  text-align: center;
  width: 20%;
  margin-top: 10%;
}
button {
  border-radius: 0px 5px 5px 0px;
  background: #f5d836;
  color: #ffffff;
  font-size: 2.5vh;
}

.input_container {
  display: flex;
  justify-content: center;
}
.title_change_status {
  display: flex;
  justify-content: center;
}
.form {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background: linear-gradient(
    90deg,
    #ffffff 0%,
    #f7f8f9 12.5%,
    #eff1f4 20.31%,
    #edf0f3 22.4%,
    #e9edf0 27.6%,
    #e4e9ed 33.33%,
    #e3e8ec 33.34%,
    #d9e0e6 38.05%,
    #b3c0cd 56.25%,
    #c3cdd8 63.02%,
    #c9d2dc 65.62%,
    #c0cbd5 77.6%,
    #bcc8d3 82.29%,
    #b5c1ce 91.67%,
    #bac5d1 91.68%,
    #b1becc 96.35%,
    #aebcca 100%
  );
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 5px #888888;
  width: 40%;
  height: 30vh;
}
.statusSelection {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
