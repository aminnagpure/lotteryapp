<template>
  <q-page class="flex flex-center">
  <h3> Ways to Quick Money, Join the Club
    
    {{trxhash}}
  </h3>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
     
      
    }},
 computed:{
   trxhash(){
     return this.$store.state.trxhash
   }
 }
}
</script>
