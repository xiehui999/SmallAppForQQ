Page({
  data:{
    // text:"这是一个页面"
    active1:true,
    active2:false,
    active3:false,
  },
  tab1:function(){
 this.setData({
      active1:true,
    active2:false,
    active3:false,
 })
  },
  tab2:function(){
 this.setData({
      active1:false,
    active2:true,
    active3:false,
 })
  },
  tab3:function(){
 this.setData({
      active1:false,
    active2:false,
    active3:true,
 })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    //NavigationBarTitle如果此处和json文件都设置，最后展示此处的标题栏
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})