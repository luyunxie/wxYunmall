//获取应用实例
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        circular:true,
        loadingHidden: true,  // loading
        //本地数据
        userData:{
          images:[
            {
              picurl:'../../images/swiper/banner02.png'
            },{
              picurl: '../../images/swiper/banner02.png'
            },{
              picurl: '../../images/swiper/banner02.png'
            }
          ],
          venuesItems:[
            {
              id:1,
              smallpic:'../../images/topic/01.png'
            },{
              id: 2,
              smallpic: '../../images/topic/02.png'
            }, {
              id: 3,
              smallpic: '../../images/topic/01.png'
            }, {
              id: 4,
              smallpic: '../../images/topic/02.png'
            }, {
              id: 5,
              smallpic: '../../images/topic/01.png'
            }, {
              id: 6,
              smallpic: '../../images/topic/02.png'
            }, {
              id: 7,
              smallpic: '../../images/topic/01.png'
            }, {
              id: 8,
              smallpic: '../../images/topic/02.png'
            }
          ],
          choiceItems:[
            {
              id: 1,
              goodspics: '../../images/topic/01.png',
              title:'护肤'
            }, {
              id: 2,
              goodspics: '../../images/topic/02.png',
              title:'美体'
            }
          ]
        }
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

        //sliderList,使用本地数据
        /*wx.request({
            url: '',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    images: res.data
                })
            }
        })*/
        

        //venuesList，使用本地数据
        /*wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    venuesItems: res.data.data
                })
                setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
            }
        })*/

        //choiceList，使用本地数据
        /*wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    choiceItems: res.data.data.dataList
                })
                setTimeout(function () {
                    that.setData({
                        loadingHidden: true
                    })
                }, 1500)
            }
        })*/

    }
})
