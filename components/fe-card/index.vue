<template>
  <div class="fe-card">
   <div class="fe-card-header" v-if="title">
     <fe-title leval="2">{{ title }}</fe-title>
     <div class="fe-card-header-extra">
       <slot name="extra"></slot>
     </div>
   </div>
   <div class="fe-card-body">
     <slot></slot>
   </div>
 </div>
</template>

<script>
export default {
 name: 'FeCard',
 props: {
   title: String,
 }
}
</script>

<style scoped lang="scss">
.fe-card {
 background: #fff;
 border-radius: 16px;
 overflow: hidden;
 box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);

 &-header {
   height: 55px;
   padding: 0 18px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid #CECECE;

   .fe-title {
     color: #000;
     height: 55px;
     line-height: 55px;
     font-size: 24px;
     border-bottom: 3px solid #0242AC;
     margin-left: 10px;
     padding: 0 8px;
   }
 }

 &-body {
   background: #fff;
 }
}
</style>
