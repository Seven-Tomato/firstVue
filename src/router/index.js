import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import odocument from '@/components/odocument'
import about from '@/components/about'
import notFound from '@/components/404'
import user from '@/components/user'
//引入about里嵌套的单个组件
import study from '@/views/study'
import work from '@/views/work'
import hobby from '@/views/hobby'
//引入document里的第二个组件
import slider from '@/views/slider'
//引入document里的第三个组件
import footer from '@/views/footer'
Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior(to,from,savePosition){
     // console.log(to);记录要进入的目标路由对象 即去哪里
     // console.log(from);记录离开的路由对象 即哪里来的
     // console.log(savePosition);记录滚动条坐标 只在点击前进后退的时候
      if(savePosition){
        return savePosition;
      }else{
        return {x:0,y:0};
      }
     //方法二 利用hash值 查阅vue学习文档-路由-滚动行为  
  }, 
  routes: [
    {
      path:'/',
      component:home,
      meta:{
            index:0,
            title:"home"
          }
    },
    {
      path: '/home',
      component: home,
      name: 'home',
      alias:'/index'//为home页设置别名
    },
    {
      path: '/about',
      component: about,
      children:[
         {
          path:'',//设置为空默认访问此组件
          component:study,
          meta:{
                index:2,
                title:'about'
               }
         },
         {
          path:'work',
          component:work,
          name:'Work'
         },
         {
          path:'hobby',
          component:hobby
         },
        ]
    },
    {
      path: '/odocument',
      components:{//一个路由对应多个组件
        default:odocument,//默认组件
        doc_slider:slider,
        doc_footer:footer
      },
      meta:{
            index:1,
            title:'document'
            }
    },
    {
      path: '*',
      //component: notFound
      //重定向
      //redirect:'/home'
      //redirect:{path:'/home'}
      //redirect:{name:'home'}
      //动态重定向
      redirect: (to) => {//to保存着一个对象-访问的路径的路由信息
           //console.log(to);
            switch(to.path){
              case '/123':
              return 'home';
              break;
              case '/456':
              return '/odocument';
              break;
              default:
              return '/about';
           }
      }
    },
    {
      path: '/user/:tip?/:userId?',//动态路径的写法 问号表示匹配一次或者零次
      component:user,
      meta:{
            index:3,
            title:'user'
           }//,
      // 单个路由中的导航钩子函数   
      // beforeEnter(to,from,next){
      //   console.log('beforeEnter')
      //          next(); 
      // }      
    }
  ]
})
//进入导航之前执行的全局导航钩子函数
/*router.beforeEach((to,from,next)=>{
  console.log('beforeEach')
  next()
})*/
//进入导航之后使用的全局导航钩子函数
// router.afterEach((to,from)=>{
//    if(to.meta.title){
//       window.document.title=to.meta.title
//    }
// })
//进入导航之后执行的导航钩子
export default router
