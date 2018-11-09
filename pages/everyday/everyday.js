// pages/everyday/everyday.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'Fragments',
    singer:'千坂'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  /*点击歌曲,将当前歌曲信息插入当前播放器列表,播放器显示列表数组第一条(已有就找到那条)*/
  loadPlayer: function(event){
    var e=event.currentTarget.dataset ;
    console.log('触发');
    console.log(e.title)
    this.setData({
      title:e.title,
      singer:e.singer
    })
  }
})