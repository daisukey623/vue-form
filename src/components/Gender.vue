<template>
  <form>
    <p>- 性別 -</p>
    <input type="radio" name="gender" value="男性" @input="updateGender" />男性
    <input type="radio" name="gender" value="女性" @input="updateGender"  />女性
  </form>
</template>

<script>
export default {
  name: 'Gender',
  methods: {
    updateGender(e) {
      this.$store.commit('updateGender', e.target.value);
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
