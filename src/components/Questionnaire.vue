<template>
  <div>
    <form id="q01" @input="updateq01">
      <p>現在、生命保険に加入されていますか？</p>
      <input type="radio" name="q01" value="はい" @click="show02" />はい
      <input type="radio" name="q01" value="いいえ" @click="show02" />いいえ
    </form>

    <form id="q02" v-if="isShow02" @input="updateq02">
      <p>
        現在入院中ですか。または最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？
      </p>
      <input type="radio" name="q02" value="はい" @click="show03" />はい
      <input type="radio" name="q02" value="いいえ" @click="show03" />いいえ
    </form>

    <form id="q03" v-if="isShow03" @input="updateq03">
      <p>
        過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことはありますか？
      </p>
      <input type="radio" name="q03" value="はい" />はい
      <input type="radio" name="q03" value="いいえ" />いいえ
    </form>
  </div>
</template>

<script>
export default {
  name: 'Questionnaire',
  data: function() {
    return {
      isShow02: false,
      isShow03: false,
    };
  },
  methods: {
    show02() {
      this.isShow02 = true;
    },
    show03() {
      this.isShow03 = true;
    },
    updateq01(e) {
      this.$store.commit('updateq01', e.target.value);
    },
    updateq02(e) {
      this.$store.commit('updateq02', e.target.value);
    },
    updateq03(e) {
      this.$store.commit('updateq03', e.target.value);
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
