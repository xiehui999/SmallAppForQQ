/**  作者：Code4Android
 *   项目地址：https://github.com/xiehui999/SmallAppForQQ
 *   新浪微博：http://weibo.com/745687294
 *   CSDN  :    http://blog.csdn.net/xiehuimx?viewmode=contents
 *   简书   :   http://www.jianshu.com/users/d5b531888b2b/latest_articles
 * */
Page({
  data:{
    // text:"这是一个页面"
    isHiddenToast:true,
    messages:[
      {
        groupName:"游戏",
        icon:"/images/game.png",
        rightImage:"/images/tip.png"
      },
      {
        groupName:"日迹",
        icon:"/images/weather.png",
        rightImage:"/images/tip.png"
      },
      {
        groupName:"看点",
        icon:"/images/kan.png",
        rightImage:"/images/tip.png"
        },
      {
        groupName:"音乐",
        icon:"/images/song.png",
        rightImage:"/images/tip.png"
      },
      {
        groupName:"直播",
        icon:"/images/video.png",
        rightImage:"/images/tip.png"
         },
      {
        groupName:"附近的群",
        icon:"/images/qun.png",
        rightImage:"/images/tip.png"
        },
      {
        groupName:"同城服务",
        icon:"/images/cityse.png",
        rightImage:"/images/tip.png"
        },
      {
        groupName:"运动",
        icon:"/images/sport.png",
        rightImage:"/images/tip.png"
        },
      {
        groupName:"腾讯课堂",
        icon:"/images/class.png",
        rightImage:"/images/tip.png"
        }
    ],
    idx:0
  },

  isShowToast:function(){
    this.setData({
      isHiddenToast:false
    })
  },
  toastChange:function(){
    this.setData({
      isHiddenToast:true
    })
  },
  toPage:function(event){
          //点击跳转菜单，获取当前的index值
           var Ind=event.currentTarget.dataset.index;
           console.log(Ind);
           switch(Ind){
             case 3://判断跳转页面
               wx.navigateTo({
                 url:"/pages/dynamic/music/music"
               });
           }
  },
  bindtap0:function(){
         console.log(0)
  },
  bindtap1:function(){
         console.log(1)
  },

  bindtap2:function(){
         console.log(2)
  },  
  bindtap3:function(){
         console.log(3)
         wx.navigateTo({
           url:"/pages/dynamic/music/music"
         })
  },
  bindtap4:function(){
         console.log(4)
  },
  bindtap5:function(){
         console.log(5)
  },
  bindtap6:function(){
         console.log(6)
  },
  bindtap7:function(){
         console.log(7)
  },
  bindtap8:function(){
         console.log(8)
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  bindtap:function(event){
wx.navigateTo({
  url: "/pages/message/search/search"
})
  }
})