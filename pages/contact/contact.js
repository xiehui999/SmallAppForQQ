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
        groupName:"特别关心",
        icon:"/images/close.png",
        number:"0/0"
      },
      {
        groupName:"常用群聊",
        icon:"/images/close.png",
       number:"1/1"
      },
      {
        groupName:"我的好友",
        icon:"/images/close.png",
        number:"41/53"
        },
      {
        groupName:"三年情",
        icon:"/images/close.png",
        number:"4/10"
      },
      {
        groupName:"十年友",
        icon:"/images/close.png",
        number:"10/20"
         },
      {
        groupName:"前端开发组",
        icon:"/images/close.png",
        number:"10/22"
        },
      {
        groupName:"后台开发组",
        icon:"/images/close.png",
        number:"4/9"
        },
      {
        groupName:"微信小程序",
        icon:"/images/close.png",
        number:"12/13"
        },
      {
        groupName:"滥人情",
        icon:"/images/close.png",
        number:"3/8"
        },
      {
        groupName:"娇人笑",
        icon:"/images/close.png",
        number:"4/9"
         },
      {
        groupName:"奈何桥",
        icon:"/images/close.png",
        number:"6/13"
        },
      {
        groupName:"乱人心",
        icon:"/images/close.png",
        number:"1/3"
        },
        {
        groupName:"惹人爱",
        icon:"/images/close.png",
        number:"9/12"
        },
      {
        groupName:"惹人醉",
        icon:"/images/close.png",
        number:"10/21"
         }
    ]
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
  },
})