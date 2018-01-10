<template>
  <div>
   关于我！

    <hr>
	  <ul class='nav about-nav'>    
           <router-link to="/about" exact  tag='li'>
              <a>study</a>
           </router-link>
           <router-link :to="{name:'Work'}"  tag='li'>
              <a>work</a>
           </router-link>            
           <router-link to="/about/hobby" tag='li' >
              <a>hobby</a>
           </router-link>    
	  </ul> 
    数据测试：{{test}}
    <hr>
     <router-view calss='tow-class'></router-view>
  </div> 
  
</template>

<script>
export default {
       data(){
         return {
           test:'修改前'
         }
       },
       beforeCreate(){
           console.log('beforeCreate')
       },
       beforeRouteEnter(to,from,next){//在进入组件前访问about组件里的test数据
         console.log('beforeRouteEnter')
         next((vm)=>{//next接收回调函数，将vm（当前about组件实例）传入
            console.log(vm.test)//这样就可以访问组件里的数据了
            vm.test="改变了"//这样就可以改变组件里的数据了
         })
         console.log(this)//undefined
       },
       beforeRouteUpdate(to,from,next){
            console.log('beforeRouteUpdate')
            next()
       },
       beforeRouteLeave(to,from,next){
            console.log('beforeRouteLeave')
            next()//当不执行此方法时表示不离开当前about组件,即切换不了
       }
}
</script>

<style >
 .about-nav li{font-size:30px;}
</style>
