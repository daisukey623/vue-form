<template>
    <form>
    <p>- 生年月日 -</p>
    <select id="year" v-model="defalutYear" @input="updateBirthdayYear">
      <option v-for="Year in Years" :key="Year.defalutYear" :value="Year.defalutYear">{{
        Year.label
      }} </option>
    </select>年

    <select id="month" v-model="defaultMonth" @input="updateBirthdayMonth">
      <option v-for="Month in Months" :key="Month.defaultMonth" :value="Month.defaultMonth">{{Month.label
      }}</option>
    </select>月

    <select id="date" v-model="defaultDate" @input="updateBirthdayDate">
      <option v-for="DayDate in Dates" :key="DayDate.date" :value="DayDate.defaultDate">{{
        DayDate.label
      }}</option>
    </select>日

    </form>
</template>

<script type>
import { Years,Months,Dates } from "../utiles/definition.js"

export default {
  name: 'Birthday',
 data:function() {
    return{
      defalutYear: 2000,
      defaultMonth: 1,
      defaultDate: 1,
      Years: [],
      Months:[],
      Dates:[]

    }}
    ,mounted() {
    this.Years = Years;
    this.Months = Months;
    this.Dates = Dates;
  },
  computed: {
    birthdayYear() {
      return this.$store.getters.getBirthdayYear;
    },
    birthdayMonth() {
      return this.$store.getters.getBirthdayMonth;
    },
    birthdayDate() {
      return this.$store.getters.getBirthdayDate;
    },
  },
  methods: {
    updateBirthdayYear(e) {
      this.$store.commit('updateBirthdayYear', e.target.value)
    },
    updateBirthdayMonth(e) {
      this.$store.commit('updateBirthdayMonth', e.target.value);
    },
    updateBirthdayDate(e) {
      this.$store.commit('updateBirthdayDate', e.target.value);
    },
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
