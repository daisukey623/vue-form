<template>
<div class="container">
  <div class="basic-title">
    <div class="step-num">STEP3</div>
    <div class="step-request">以下にお答えください</div>
  </div>
    <FormText/>
    <router-link to="/Questionnaire"><button>戻る</button></router-link>
    <router-link to="/"><button>進む</button></router-link>
    </div>

</template>
<script>
// @ is an alias to /src
import FormText from '@/components/FormText.vue'

export default {
  name: 'Content',
  components: {
  FormText,
  },
  methods:{
  },
  computed:{

  }
}
</script>
