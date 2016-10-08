Page({
  data:{
    // text:"这是一个页面"
    select1:true,
    select2:false,
    select3:false,
    isHiddenToast:true,
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
  tab1:function(){
 this.setData({
    select1:true,
    select2:false,
    select3:false,
 })
  },
  tab2:function(){
 this.setData({
    select1:false,
    select2:true,
    select3:false,
 })
  },
  tab3:function(){
 this.setData({
    select1:false,
    select2:false,
    select3:true,
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