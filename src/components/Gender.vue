<template>
    <form>
    <p>- 性別 -</p>
    <input type="radio" name="gender">男性
    <input type="radio" name="gender">女性
    </form>
</template>

<script>
export default {
  name: 'Gender',
  props: {
    msg: String
  },
 data:function() {
    return{

    }},
  computed: {},
  methods: {}
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
