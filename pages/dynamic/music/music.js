Page({
  data:{
    // text:"这是一个页面"
    select1:true,
    select2:false,
    select3:false,
    isHiddenToast:true,
    songlist:[],
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
    play: function (event) {
    var that = this
    console.log(event);
    var res=that.data.songlist[event.currentTarget.dataset.num]
    wx.playBackgroundAudio({
      dataUrl: res.url,
      name: res.songname,
      singer:res.singername,
      coverImgUrl: res.albumpic_small,
      complete: function (res) {
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
        var that = this
    wx.request({
      url: 'https://route.showapi.com/213-4?showapi_appid=25158&topid=5&showapi_sign=c0d685445898438f8c12ee8e93c2ee74',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
          console.log(res);
          console.log(res.data.showapi_res_body.pagebean.songlist);
         that.setData({
           songlist: res.data.showapi_res_body.pagebean.songlist
         })
      }
    })
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