Page({
  data:{
    // text:"这是一个页面"
    //select1:true,
    //select2:false,
    //select3:false,
    isHiddenToast:true,
    songlist:[],
    // 新的顶部导航属性,index表示第几个导航， selected控制被选中导航的样式，name表示导航的名称
    //tab: [
    //  {index: 0, selected: true, name: "我的"},
    //  {index: 1, selected: false, name: "好友在听"},
    //  {index: 2, selected: false, name: "电台"}
    //]
      //tab数组记录导航列表
      tab:['我的','好友在听','电台'],
      //当前选中导航的Inx值
      Inx:0
  },
    // 新的绑定导航切换样式方法
    changeTab: function(event){
    // 获取点击导航的的data-index属性，从而得知第几个导航被点击
    //    var index = event.target.dataset.index;

        //tab = this.data.tab;
    // 遍历tab数组从而控制当前导航样式
    //for(var i = 0; i < tab.length; i ++) {
    //    if(tab[i].index == index) {
    //        tab[i].selected = true;
    //    } else {
    //        tab[i].selected = false;
    //    }
    //}
    // 重新设置切换后导航获取的tab
    //    this.setData({
    //        tab: tab
    //    })
    //    var index = event.currentTarget.dataset.index;
    //    console.log(index);

    //    获取点击元素的index值，修改当前选中的导航的Ind
    this.setData({
        Inx:event.currentTarget.dataset.index
    })
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
  randomStart:function(event){
    var that = this
    var random=Math.floor(Math.random()*50);
    var res=that.data.songlist[random]
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