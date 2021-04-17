<template>
  <div>
    <p>- 生年月日 -</p>
    <select id="year" v-model="year">
      <option v-for="nengo in nengoes" :key="nengo.year" :value="nengo.year">{{
        nengo.label
      }}</option>
    </select>年

    <select id="month" v-model="month">
      <option v-for="Month in Months" :key="Month.month" :value="Month.month">{{Month.label
      }}</option>
    </select>月

    <select id="date" v-model="date">
      <option v-for="DayDate in Dates" :key="DayDate.date" :value="DayDate.date">{{
        DayDate.label
      }}</option>
    </select>日
  </div>
</template>

<script>
export default {
  name: 'FormBirthday',
  props: {
    msg: String,
  },
  data() {
    return {
      year: 2000,
      month: 1,
      date: 1,
      nengoes: [],
      Months:[],
      Dates:[]
    };
  },
  mounted() {
    this.nengoes = this.genereate();
    this.Months = this.Month();
    this.Dates = this.Date();
  },
  methods: {
    genereate() {
      const nengoes = [];
      for (let y = 2020; y > 1920; y--) {
        if (y > 2018) {
          nengoes.push({ year: y, label: `${y} (令和${y - 2018}年)` });
        } else if (y > 1988) {
          nengoes.push({ year: y, label: `${y} (平成${y - 1988}年)` });
        } else if (y > 1925) {
          nengoes.push({ year: y, label: `${y} (昭和${y - 1925}年)` });
        } else if (y > 1911) {
          nengoes.push({ year: y, label: `${y} (大正${y - 1911}年)` });
        }
      }
      return nengoes;
    },
    Month(){
      const Months = [];
      for (let m = 1; m < 13; m++) {
        Months.push({month:m,label:`${m}`})
      }
      return Months;
    },
    Date(){
      const Dates = [];
      for (let d = 1; d < 31; d++) {
        Dates.push({date:d,label:`${d}`})
      }
      return Dates;
    }
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
