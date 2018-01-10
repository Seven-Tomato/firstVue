<template>
  <div id="app">
     <div class='nav-box'>
        <ul class='nav'>
            <li>
              <router-link v-bind:to='index' event='mouseover' exact>home</router-link>
            </li>
            <li>
               <router-link v-bind:to="{path:'/odocument'}">document</router-link>            
            </li>
            
            <router-link to="/about" tag='li' active-class="about-active">
                  <i class="iconfont icon-info"></i>
                  <span>about</span>
            </router-link> 
            <li>
              <router-link  to='user' event='mouseover' >user</router-link>
            </li>
        </ul>
     </div>
     <router-view name="doc_slider"></router-view>
     <transition :name="dic">
          <router-view class='center'></router-view>
     </transition>
       当前导航的index是:{{$route.meta.index}}
      <input type='button' value='back' @click='backHandle' />
      <input type='button' value='forward' @click='forwardHandle' />
      <input type='button' value='前进或回退任意步数' @click='goHandle' />
      <input type='button' value='push跳转到具体的导航添加新的' @click='pushHandle' />
      <input type='button' value='replace跳转到具体的导航并替换掉' @click='replaceHandle' />
    
     <router-view name='doc_footer' class='footer'></router-view>
  </div>
</template>
<script>
export default {
  watch:{
       $route(to,from){
            console.log(to.meta.index);//目标导航的下标
            console.log(from.meta.index);//离开导航的下标
            if(to.meta.index>from.meta.index){
                 this.dic="right"
            }else{
                 this.dic="left"
            }
       }
  },
  name: 'app',
  data (){
    return {
         index: '/',
         dic:'left'
    }
  },
  methods: {
        backHandle (){
              this.$router.back()
        },
        forwardHandle (){
              this.$router.forward()
        },
        goHandle (){
              this.$router.go(2)//前进或者后退任意步数，但不能超多浏览器记录
        },
        pushHandle (){
              //this.$router.push('/about')
                this.$router.push({path:'/about'})
        },
        replaceHandle (){
              //this.$router.replace('/about')
                this.$router.replace({path:'/about'})
        }  
  }
}
</script>
<style>
     .v-enter{
         opacity:0;
     }
     .v-enter-to{
         opacity:1;
     }
     .v-enter-active{
         transition:1s;
     }
     .v-leave{
        opacity:1;
     }
     .v-leave-to{
         opacity:0;
     }
      .v-leave-active{
         transition:1s;
     }

     .left-enter{
         transform:translateX(100%);
     }
     .left-enter-to{
         transform:translateX(0);
     }
     .left-enter-active{
         transition:2s;
     }
     .left-leave{
        transform:translateX(0);
     }
     .left-leave-to{
         transform:translateX(-100%);
     }
     .left-leave-active{
         transition:2s;
     }

    .right-enter{
         transform:translateX(-100%);
     }
     .right-enter-to{
         transform:translateX(0);
     }
     .right-enter-active{
         transition:2s;
     }
     .right-leave{
        transform:translateX(0);
     }
     .right-leave-to{
         transform:translateX(100%);
     }
     .right-leave-active{
         transition:2s;
     }

</style>
