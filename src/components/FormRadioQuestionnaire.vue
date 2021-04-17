<template>

  <form name="01">
    <p>- 現在生命保険に加入されていますか？ -</p>
    <input type="radio" value="yes" name="q2-1" v-model="isVisible01">はい
    <input type="radio" value="no" name="q2-1" v-model="isVisible01">いいえ
  </form>

  <form name="02" v-if="isVisible01">
    <p>- 現在入院中ですか。または、直近3ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？ -</p>
    <input type="radio" value="yes" name="q2-2" v-model="isVisible02" >はい
    <input type="radio" value="no" name="q2-2" v-model="isVisible02">いいえ
  </form>

  <form name="03" v-if="isVisible02">
    <p>- 過去5年以内に、病気や怪我で、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？ -</p>
    <input type="radio" value="yes" name="q2-3" >はい
    <input type="radio" value="no" name="q2-3" >いいえ
  </form>

</template>

<script>
export default {
  name: 'FormRadio',
  props: {
    msg: String,
  },
  data:function() {
    return{
      isVisible01:false,
      isVisible02:false
    }
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
