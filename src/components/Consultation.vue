<template>
  <form>
    <p>- ご相談内容 -</p>
    <textarea
      cols="60"
      rows="20"
      @input="updateConsultation"
    ></textarea>
  </form>
</template>

<script>
export default {
  name: 'Consultation',
  methods: {
    updateConsultation(e) {
      this.$store.commit('updateConsultation', e.target.value);
    },
  },
};
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
