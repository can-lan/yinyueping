// components/song/song.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /*组件的属性列表,用于传参*/
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'Fragments'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    singer: {           
      type: String,     
      value: '千坂'     
    },
    epname: {           
      type: String,     
      value: 'Fragments'    
    },
    coverImgUrl: {            
      type: String,     
      value: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'     
    },
    src: {            
      type: String,     
      value: 'http://www.zhuimi.co/img/Fragments.mp3'    
    },
  },
  data: {

  },
  methods: {
    play: function (event) {
      var e = event.currentTarget.dataset;
      const bgm = wx.getBackgroundAudioManager()
      bgm.title = e.title ;
      bgm.epname = e.epname ;
      bgm.singer = e.singer ;
      bgm.coverImgUrl = e.coverImgUrl ;
      bgm.src = e.src ;
    }
  }
})