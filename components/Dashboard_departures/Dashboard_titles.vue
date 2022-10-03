<template>
  <div class="container-titles">
    <div class="item_titles" v-for="(title, index) in titles" :key="index">
      <p class="p-titles-text">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        "Departure Time",
        "City Name",
        "Code",
        "Flight Number",
        "Airline",
        "Destination",
        "Gate",
        "Status",
      ],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.item_titles {
  flex: 1 1 0;
  text-align: left;
}
.container-titles {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 56px;
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
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px black;
  margin-bottom: 3vh;
  padding-left: 5rem;
  padding-right: 5rem;
}
.p-titles-text {
  margin: 10px;
  font-size: 1.2vw;
  font-weight: bold;
}
</style>
