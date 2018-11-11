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
    btnsrc:'/pages/image/play.png', //播放/暂停按钮默认图片
    list:[],  //所有歌单--可sql截取
    song:[],  //所有歌曲--可sql截取
    bgm:{},   //背景音乐对象
    playing: {  //在播歌曲(含默认值)
      id: 1, title: "Fragments", singer: "千坂", epname: "Fragments", coverImgUrl: "http://www.zhuimi.co/song/img/fragments.jpg", src:"http://www.zhuimi.co/song/fragments.mp3"}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'http://wx.yinyueping.com:7002/song', //获取所有歌曲
      success:(res)=>{
        this.setData({
          song:res.data.reverse() //翻转数组,最新显示到最上面
        })
      }
    });
    wx.request({
      url: 'http://wx.yinyueping.com:7002/list',  //获取所有歌单
      success: (res) => {
        this.setData({
          list: res.data.reverse() //翻转数组,最新显示到最上面
        })
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
  /*点击song组件*/
  song:function(event){
    if (event){  
      var e = event.currentTarget.dataset;
      var playing = this.data.song[e.index]; //1.利用index从当前data内的song[]数组, 找到正在播放的对象
    }else{  //判断:如果event不存在说明是下面player调用的
      var playing=this.data.playing;
    }
    

    this.setData({  //2.赋值playing对象
      playing: playing
    });

    const bgm = wx.getBackgroundAudioManager()  //3.播放当前歌曲
    bgm.title = playing.title
    bgm.epname = playing.epname
    bgm.singer = playing.singer
    bgm.coverImgUrl = playing.coverImgUrl
    bgm.src = playing.src
    this.data.bgm = bgm;

    this.setData({ btnsrc: '/pages/image/pause.png' }) //4.按钮图片改为暂停

    wx.setStorage({ //5.插入storage
      key:'playing',
      data:playing
    });

    //6.将当前列表替换播放器列表

  },
  /*点击播放器组件--播放/暂停按钮*/
  player:function(){
    console.log('页面player')
    if (this.data.bgm.paused==undefined){  //判断:如果没有背景音乐
      this.song();  //调用播放器组件,创建默认背景音乐
    }else if (this.data.bgm.paused) { //正在播放播放==>false
      this.data.bgm.play()  //播放音乐
      this.setData({ btnsrc:'/pages/image/pause.png'}) //按钮图片改为暂停
    } else {
      this.data.bgm.pause() //暂停音乐
      this.setData({ btnsrc: '/pages/image/play.png' }) //按钮图片改为播放
    }
  },
  prev:function(){console.log('页面prev')},
  next: function(){console.log('页面next')},
  list: function(){console.log('页面list')}
})