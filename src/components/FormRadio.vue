<template>
  <div>
    <p>- 性別 -</p>
  </div>
  <form>
    <input type="radio" value="men" name="gender" >男性
    <input type="radio" value="women" name="gender" >女性
  </form>
</template>

<script>
export default {
  name: 'FormRadio',
  props: {
    msg: String,
  },
  computed: {

  },
  methods: {

  },
};
</script>

//
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
