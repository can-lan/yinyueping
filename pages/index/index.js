// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[
      "http://wx.yinyueping.com/image/banner/banner1.png",
      "http://wx.yinyueping.com/image/banner/banner2.png",
      "http://wx.yinyueping.com/image/banner/banner3.png",
      "http://wx.yinyueping.com/image/banner/banner4.png"
    ],
    btnsrc:'http://wx.yinyueping.com/image/app/play.png', //播放/暂停按钮默认图片
    list:[],  //所有歌单--可sql截取
    song:[],  //所有歌曲--可sql截取
    bgm:{},   //背景音乐对象
    playing:{},//正在播放音乐, 默认第一首最新的
    playlist: 'hidden',
    index:0, //正在播放歌曲下标
    btn:0 //当前点击播放器按钮
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
        });
        this.setData({
          playing: this.data.song[0]
        });
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
    /*页面下拉,将storage中的正在播放歌曲取出,放入data中playing,加载到前端播放器*/
    var that = this;
    wx.getStorage({
      key: 'playing',
      success(res) {
        that.setData({
          playing: res.data
        })
      }
    });
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
    this.setData({
      playlist:'hidden' //1.点击歌曲,隐藏播放器列表
    });

    if (event){  //2.1如果有event, 说明是歌曲调用的
      var e = event.currentTarget.dataset;
      var playing = this.data.song[e.index]; //2.2利用index从当前data内的song[]数组, 找到正在播放的对象
      this.setData({
        index:e.index //设置正在播放歌曲的下标
      });
    } else {      //2.1如果没有event, 说明是播放器调用的
        this.setData({
          index: this.data.index + this.data.btn //2.2设置正在播放歌曲的下标
        });
        if(this.data.index<0){  //如果到大第一首, 播放第一首
          this.setData({
            index:0
          });
        }
        if(this.data.index > this.data.song.length-1){  //如果到达最后一首, 播放最后一首
          this.setData({
            index:this.data.song.length-1
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
    bgm.onEnded(()=>{ //背景音乐自动播放完成时
      this.setData({
        index:this.data.index+1
      });
      this.song();
    });
    this.setData({
      bgm:bgm
    });

    this.setData({ btnsrc: 'http://wx.yinyueping.com/image/app/pause.png' }) //5.按钮图片改为暂停

    wx.setStorage({ //5.插入storage
      key:'playing',
      data:playing
    });

    //6.将当前列表替换播放器列表

  },
  /*点击播放器组件--播放/暂停按钮*/
  player:function(){
    if (this.data.bgm.paused==undefined){  //判断:如果没有背景音乐
      this.song();  //调用播放器组件,创建默认背景音乐
    }else if (this.data.bgm.paused) { //音乐暂停==>true
      this.data.bgm.play()  //播放音乐
      this.setData({ btnsrc:'http://wx.yinyueping.com/image/app/pause.png'}) //按钮图片改为暂停
    } else {
      this.data.bgm.pause() //暂停音乐
      this.setData({ btnsrc: 'http://wx.yinyueping.com/image/app/play.png' }) //按钮图片改为播放
    }
  },
  /*点击上一曲*/
  prev:function(){
    this.setData({
      btn: -1
    });
    this.song();
  },
  /*点击下一曲*/
  next: function(){
    this.setData({
      btn:1
    });
    this.song();
  },
  /*点击播放器列表--显示mylist*/
  playlist: function(){
    this.setData({
      playlist:'show'
    });
  },
  /*点击歌单事件*/
  list:function(event){
    var e = event.currentTarget.dataset;
    var id=e.id;
    wx.navigateTo({
      url: '/pages/details/details?id='+id,
    });
  },
  /*关闭播放列表按钮*/
  close:function(){
    this.setData({
      playlist:'hidden'
    });
  }
})