<template>
  <div>
    <div>
      <div>STEP3</div>
      <div>ご相談内容をご入力ください</div>    
    <Consultation/>
      <router-link to="/step02"><button>戻る</button></router-link>  
      <router-link to="/"><button>進む</button></router-link>
  </div>
    </div>
</template>

<script>
import Consultation from '@/components/Consultation.vue';

export default {
  name: 'step03',
  components: {
    Consultation,
  },
  methods:{

  }
}
</script>