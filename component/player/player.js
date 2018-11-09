// components/Dialog/dialog.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'Fragments'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    singer: {         
      type: String,     
      value: '千坂'     
    }
  },
  data: {
  
  },
  methods: {
    /*播放器*/
    play: function () {
      const bgm = wx.getBackgroundAudioManager()
      bgm.title = 'Fragments'
      bgm.epname = 'Fragments'
      bgm.singer = '千坂'
      bgm.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
      bgm.src = 'http://www.zhuimi.co/img/Fragments.mp3'
    }
  }
})