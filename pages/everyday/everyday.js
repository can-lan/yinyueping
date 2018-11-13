// pages/everyday/everyday.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnsrc: '',
    song:[],
    playing:{},
    bgm: {},
    playlist: 'hidden',  //播放列表显示隐藏
    btn:0,
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*页面一加载,将storage中的正在播放歌曲取出,放入data中playing,加载到前端播放器*/
    wx.getStorage({
      key:'playing',
      success:(res)=>{
        this.setData({
          playing:res.data
        })
      }
    });

    const bgm = wx.getBackgroundAudioManager()  //创建bgm, 放入data, 自带src
    this.setData({
      bgm:bgm
    });

    /*请求歌曲表*/
    wx.request({
      url:'http://wx.yinyueping.com:7002/song',
      success:(res)=>{
        this.setData({
          song:res.data
        });
      }
    });

    /*查看背景音乐是否播放,更换播放按钮图片*/
    if (this.data.bgm.paused == undefined || this.data.bgm.paused) {  //判断:如果没有背景音乐, 或 暂停状态
      this.setData({ btnsrc: 'http://wx.yinyueping.com/image/app/play.png' }) //按钮图片改为暂停
    } else { //音乐在播放
      this.setData({ btnsrc: 'http://wx.yinyueping.com/image/app/pause.png' }) //按钮图片改为暂停
    }
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
  /*点击song组件*/
  song: function (event) {
    this.setData({
      playlist: 'hidden' //1.点击歌曲,隐藏播放器列表
    });
    
    if (event) {  //2.1如果有event, 说明是歌曲调用的
      var e = event.currentTarget.dataset;
      var playing = this.data.song[e.index]; //2.2利用index从当前data内的song[]数组, 找到正在播放的对象
      this.setData({
        index: e.index //设置正在播放歌曲的下标
      });
    } else {      //2.1如果没有event, 说明是播放器调用的
      this.setData({
        index: this.data.index + this.data.btn //2.2设置正在播放歌曲的下标
      });
      if (this.data.index < 0) {  //如果到大第一首, 播放第一首
        this.setData({
          index: 0
        });
      }
      if (this.data.index > this.data.song.length - 1) {  //如果到达最后一首, 播放最后一首
        this.setData({
          index: this.data.song.length - 1
        });
      }
      var playing = this.data.song[this.data.index];  //2.3找到应该播放的对象
    }
    this.setData({  //3.赋值playing对象
      playing: playing
    });

    const bgm = wx.getBackgroundAudioManager()  //4.播放当前歌曲
    bgm.title = playing.title
    bgm.epname = playing.epname
    bgm.singer = playing.singer
    bgm.coverImgUrl = playing.coverImgUrl
    bgm.src = playing.src
    bgm.onEnded(() => { //背景音乐自动播放完成时
      this.setData({
        index: this.data.index + 1
      });
      this.song();
    });
    this.setData({
      bgm: bgm
    });

    this.setData({ btnsrc: 'http://wx.yinyueping.com/image/app/pause.png' }) //5.按钮图片改为暂停

    wx.setStorage({ //5.插入storage
      key: 'playing',
      data: playing
    });

    //6.将当前列表替换播放器列表

  },
  /*点击播放器组件--播放/暂停按钮*/
  player: function () {
    if (this.data.bgm.paused == undefined) {  //判断:如果没有背景音乐
      this.song();  //调用播放器组件,创建默认背景音乐
    } else if (this.data.bgm.paused) { //音乐暂停==>true
      this.data.bgm.play()  //播放音乐
      this.setData({ btnsrc: 'http://wx.yinyueping.com/image/app/pause.png' }) //按钮图片改为暂停
    } else {
      this.data.bgm.pause() //暂停音乐
      this.setData({ btnsrc: 'http://wx.yinyueping.com/image/app/play.png' }) //按钮图片改为播放
    }
  },
  /*点击上一曲*/
  prev: function () {
    this.setData({
      btn: -1
    });
    this.song();
  },
  /*点击下一曲*/
  next: function () {
    this.setData({
      btn: 1
    });
    this.song();
  },
  /*点击播放器列表--显示mylist*/
  playlist: function () {
    this.setData({
      playlist: 'show'
    });
  },
  /*关闭播放列表按钮*/
  close: function () {
    this.setData({
      playlist: 'hidden'
    });
  }
})