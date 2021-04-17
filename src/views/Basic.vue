<template>
<div class="container">
  <div class="basic-title">
    <div class="step-num">STEP1</div>
    <div class="step-request">お客様の基本情報を入力してください</div>
  </div>
    <FormRadio/>
    <FormBirthday/>
    <router-link to="/Questionnaire"><button>進む</button></router-link>
    
</div>
</template>
<script>
// @ is an alias to /src
import FormRadio from '@/components/FormRadio.vue'
import FormBirthday from '@/components/FormBirthday.vue'

export default {
  name: 'Basic',
  components: {
    FormRadio,
    FormBirthday,
  },
  methods:{
  },
  computed:{

  }
}
</script>
