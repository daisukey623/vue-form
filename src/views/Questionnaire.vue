<template>
<div class="container">
  <div class="basic-title">
    <div class="step-num">STEP2</div>
    <div class="step-request">以下にお答えください</div>
  </div>
    <FormRadioQuestionnaire/>
    <router-link to="/"><button>戻る</button></router-link>
    <router-link to="/Content"><button>進む</button></router-link>
    </div>

</template>
<script>
// @ is an alias to /src
import FormRadioQuestionnaire from '@/components/FormRadioQuestionnaire.vue'

export default {
  name: 'Questionnaire',
  components: {
  FormRadioQuestionnaire,
  },
  methods:{
  },
  computed:{

  }
}
</script>
