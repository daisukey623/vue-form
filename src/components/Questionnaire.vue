<template>
<div>

    <form id="q01" @click="show02">
    <p>現在、生命保険に加入されていますか？</p>
    <input type="radio" name="q01">はい
    <input type="radio" name="q01">いいえ
    </form>

    <form id="q02" v-if="isShow02" @click="show03">  
    <p>現在入院中ですか。または最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
    <input type="radio" name="q02">はい
    <input type="radio" name="q02">いいえ
    </form>

    <form id="q03" v-if="isShow03">  
    <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことはありますか？</p>
    <input type="radio" name="q03">はい
    <input type="radio" name="q03">いいえ
    </form>


</div>

</template>

<script>
export default {
  name: 'Questionnaire',
  props: {
    msg: String
  },
 data:function() {
    return{
      isShow02:false,
      isShow03:false
    }},
  computed: {},
  methods: {
    show02(){
     this.isShow02 = true
    },
    show03(){
     this.isShow03 = true
    },
  }
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
