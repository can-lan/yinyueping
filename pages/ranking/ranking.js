// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    up:[],
    hot:[],
    new:[],
    game:[],
    dy:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.request({
      url:"http://wx.yinyueping.com:7002/song/rank?rank=up",
      success:(res)=>{
        console.log(res)
        this.setData({
          up:res.data
        });
      }
    });
    wx.request({
      url: "http://wx.yinyueping.com:7002/song/rank?rank=hot",
      success: (res) => {
        console.log(res)
        this.setData({
          hot: res.data
        });
      }
    });
    wx.request({
      url: "http://wx.yinyueping.com:7002/song/rank?rank=new",
      success: (res) => {
        console.log(res)
        this.setData({
          new: res.data
        });
      }
    });
    wx.request({
      url: "http://wx.yinyueping.com:7002/song/rank?rank=game",
      success: (res) => {
        console.log(res)
        this.setData({
          game: res.data
        });
      }
    });
    wx.request({
      url: "http://wx.yinyueping.com:7002/song/rank?rank=dy",
      success: (res) => {
        console.log(res)
        this.setData({
          dy: res.data
        });
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
  rank:function(event){
    var rank=event.currentTarget.dataset.rank;
    wx.navigateTo({
      url: '/pages/details/details?rank='+rank,
    })
  },
  ranks:function(event){ //其他榜单
    var title=event.currentTarget.dataset.title;
    var rank = event.currentTarget.dataset.rank;
    wx.navigateTo({
      url: '/pages/details/details?ranks='+rank+'&title='+title,
    })
  }
})