// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videos:[
      { id: 1, title: '汪苏泷诚意献唱十二金曲串烧', src:'http://wx.yinyueping.com/video/video1.mp4'},
      { id: 2, title: '真正的大神，键盘侠！节奏稳，速度快，全程高能', src:'http://wx.yinyueping.com/video/video2.mp4' },
      { id: 3, title: '3位世界顶级机械舞大师齐聚一台', src:'http://wx.yinyueping.com/video/video3.mp4' },
      { id: 4, title: '网易云热评看哭系列，句句扎心！', src:'http://wx.yinyueping.com/video/video4.mp4' },
      { id: 5, title: '赫兹-风声有时', src:'http://wx.yinyueping.com/video/video5.mp4' },
      { id: 6, title: '《Someone Like You》的万人合唱', src: 'http://wx.yinyueping.com/video/video6.mp4' },
    ],
    num:null,
    playingid:null,
    up:[] //赞
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const bgm = wx.getBackgroundAudioManager()  //进入视频页, 暂停音乐
    bgm.pause();

    //做点赞假数据
    var arr=[];
    for(var item of this.data.videos){
      arr.push(parseInt(Math.random()*30));
    }
    this.setData({
      up:arr
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
  /*点击播放图片*/
  autoplay:function(event){
    var e=event.currentTarget.dataset;
    this.setData({
      num:e.index
    });
    if(this.data.playingid){
      var videoprev = wx.createVideoContext(this.data.playingid);  //找到原来播放id
      videoprev.seek(0);  //videoprev.stop();不生效
      videoprev.pause();
    }
    this.setData({
      playingid:'index'+e.index //设置新的播放id
    });
    var v=wx.createVideoContext('index'+this.data.num);
    v.play();
  },
  /*up点赞事件*/
  up:function(event){
    var index=event.currentTarget.dataset.index;
    var arr=this.data.up;
    arr[index]++
    this.setData({
      up:arr
    });
  }
})