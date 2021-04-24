<template>
<div>
  <div>
    <div>STEP1</div>
    <div>お客様の情報を入力してください</div>
    <Gender/>
    <Birthday/>
  </div>
  <router-link to="/step02"><button>進む</button></router-link>
</div>
</template>

<script>
// @ is an alias to /src
import Gender from '@/components/Gender.vue';
import Birthday from '@/components/Birthday.vue';

export default {
  name: 'step01',
  components: {
    Gender,
    Birthday,
  },
  methods:{
    // nextPage(){

    // }
  }
}
</script>
