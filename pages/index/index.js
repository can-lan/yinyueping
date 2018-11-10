// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      "/pages/image/banner1.png",
      "/pages/image/banner2.png",
      "/pages/image/banner3.png",
      "/pages/image/banner4.png"
    ],
    song:[],
    playing: {
      id: 1, title: "Fragments", singer: "千坂", epname: "Fragments", coverImgUrl: "http://www.zhuimi.co/song/img/fragments.jpg", src:"http://www.zhuimi.co/song/fragments.mp3"}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'http://127.0.0.1:7001/song',
      success:(res)=>{
        this.setData({
          song:res.data
        })
        console.log(this.data.song)
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /*点击song组件,利用index从当前data内的song[]数组,找到正在播放的对象,插入storage*/
  local:function(event){
    var e=event.currentTarget.dataset;
    var playing=this.data.song[e.index];
    this.setData({
      playing:playing
    });
    wx.setStorage({
      key:'playing',
      data:playing
    });
  }
})