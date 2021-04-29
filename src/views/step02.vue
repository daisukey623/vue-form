<template>
  <div>
      <div>STEP2</div>
      <div>以下の質問にお答えください</div>
      <Questionnaire />
      <router-link to="/step01"><button>戻る</button></router-link>
      <router-link to="/step03"><button>進む</button></router-link>
    </div>
</template>

<script>
import Questionnaire from "@/components/Questionnaire.vue";

export default {
  name: "step02",
  components: {
    Questionnaire,
  },

};
</script>