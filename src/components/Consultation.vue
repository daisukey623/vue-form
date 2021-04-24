<template>
    <form>
    <p>- ご相談内容 -</p>
    <textarea name="" id="" cols="60" rows="20"></textarea>
    </form>
</template>

<script>
export default {
  name: 'Consultation',
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
