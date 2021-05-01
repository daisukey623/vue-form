<template>
  <div>
    <div>STEP4</div>
    <div>以下の情報を確認してください</div>
    <p>- 性別 -</p>
    <p>{{ gender }}</p>

    <p>- 生年月日 -</p>
    <p>{{ birthday }}</p>

    <p>現在、生命保険に加入されていますか？</p>
    <p>{{ q01 }}</p>

    <p>
      現在入院中ですか。または最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？
    </p>
    <p>{{ q02 }}</p>

    <p>
      過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことはありますか？
    </p>
    <p>{{ q03 }}</p>

    <p>- ご相談内容 -</p>
    <p>{{ consultation }}</p>

    <router-link to="/step03"><button>戻る</button></router-link>
    <router-link to="/step01"><button>送信</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'step01',
  computed: {
    gender: function() {
      return this.$store.getters.getGender;
    },
    birthdayYear: function() {
      return this.$store.getters.getBirthdayYear;
    },
    birthdayMonth: function() {
      return this.$store.getters.getBirthdayMonth;
    },
    birthdayDate: function() {
      return this.$store.getters.getBirthdayDate;
    },
    birthday: function() {
      return `${this.birthdayYear}年${this.birthdayMonth}月${this.birthdayDate}日`;
    },
    q01: function() {
      return this.$store.state.q01;
    },
    q02: function() {
      return this.$store.state.q02;
    },
    q03: function() {
      return this.$store.state.q03;
    },
    consultation: function() {
      return this.$store.state.consultation;
    },
  },
};
</script>
