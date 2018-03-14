var app = getApp()
Page({
    data: {
        navLeftItems: [
          {
            id:0,
            tree:{
              desc:'进口食品'
            }
          },{
            id: 1,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 2,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 3,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 4,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 5,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 6,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 7,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 8,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 9,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 10,
            tree: {
              desc: '进口食品'
            }
          }, {
            id: 11,
            tree: {
              desc: '进口食品'
            }
          }
        ],
        navRightItems: [],
        curNav: 1,
		    curIndex: 0
    },
    onLoad: function() {

        var that = this
        
        /*wx.request({
            url: '',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    navLeftItems: res.data,
                    navRightItems: res.data
                })
            }
        })*/
    },

    //事件处理函数
    switchRightTab: function(e) {
        let id = e.target.dataset.id,
			index = parseInt(e.target.dataset.index);
		this.setData({
			curNav: id,
			curIndex: index
		})
    }

})