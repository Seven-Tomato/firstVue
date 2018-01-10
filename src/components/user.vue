<template>
   <div class='user-list'>
       这是user组件
	   <div>
	        <router-link :to="{path:'/user/'+item.tip+'/'+item.id,query:{info:'follow'}}" key='index' v-for="item,index in userList">{{item.userName}}</router-link>
	   </div>
	   <div class='userInfo' v-if='userInfo'>
	       <div v-if='userInfo.id' >
		        <p>年龄：{{userInfo.age}}</p>
		        <p>性別：{{userInfo.gender}}</p>
		        <p>愛好：{{userInfo.hobby}}</p>
	       </div> 
	   </div>
       <hr>
	   <div class="infoList" v-if='userInfo'>
	       <div v-if='userInfo.id' >
		        <router-link exact :to="{path:'',query: {info: 'follow'}}">它的关注</router-link>    
		        <router-link exact :to="{path:'',query: {info: 'share' }}">它的分享</router-link>    
	       </div> 
	       <div v-if='userInfo.id'>
	         {{$route.query}}
	      </div> 
	   </div>	   
  </div>
</template>

<script>
   let data=[
             {
               id: 1,
               tip:'vip',
               userName: '张三',
               age: 38,
               gender: '男',
               hobby: '唱歌'
		      },
		      {
               id: 2,
               tip:'vip',
               userName: '李四',
               age: 39,
               gender: '男',
               hobby: '吃鸡'
		      },
		      {
               id:3,
               tip:'commom',
               userName: '王麻子',
               age:40,
               gender: '男',
               hobby: '打麻将'
		      }
            ]
    export default {
           data (){
                return {
                        userList:data,
                        userInfo:{}
                       }
           },
           watch: {
                  $route(){
	                this.getDate()  
                  }
           },
           created (){
                   this.getDate()
           },
           methods:{
             getDate(){
                  let id=this.$route.params.userId;
                  console.log(this.$route.params)
                  if(id){
					 this.userInfo=this.userList.filter((item)=>{
					       return item.id == id;
					  })[0]
                  }else{
                     this.userInfo = {};
                  }     
             }
           }
   }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      .user-list{
          font-size:30px;
      }
      .user-list a{color:#000;text-decoration:none;padding:0 40px;}
      .userInfo{font-size:20px;}
      .infoList{font-size:20px;}
</style>
