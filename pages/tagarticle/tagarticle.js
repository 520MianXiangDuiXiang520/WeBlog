// pages/blog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ibooklist: [],
    page: 1,
    noinfo: false,
    id: 0,
    page_size: 10,
    page_count: 0,
    page: 1,
    loadingHidden: false,
    page_id: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const page_id = options['id']
    wx.request({
      url: 'https://junebao.top:8000/junblog/?size=' + this.data.page_size.toString() +
        "&page=" + this.data.page.toString() + "&tag=" + page_id.toString() + "&no=" + Date.parse(new Date()),
      // 接口调用成功的回调函数
      success: (data) => {
        // 绑定数据
        this.setData({
          ibooklist: data.data.data.results,
          loadingHidden: true,
          page_count: data.data.data.count,
          page_id: page_id
        }),
          console.log(data.data.data.results)
        wx.hideLoading()

      },
      fail: () => {
        wx.hideLoading(),
          wx.showToast({
            title: '服务器异常',
            image: '../../static/image/icon/error.png',
            duration: 2000
          })
      }
    })
  },
  more: function () {
    if ((!this.data.noinfo) && this.data.page < Math.ceil(this.data.page_count / this.data.page_size)) {
      this.data.page++
      wx.request({
        url: 'https://junebao.top:8000/junblog/?size=' + this.data.page_size.toString() +
          "&page=" + this.data.page.toString() + "&tag=" + this.data.page_id.toString() + "&no=" + Date.parse(new Date()),
        // 接口调用成功的回调函数
        success: (data) => {
          // 绑定数据
          this.setData({
            ibooklist: this.data.ibooklist.concat(data.data.data.results),
            loadingHidden: true,
            page_count: data.data.data.count,
          }),
            wx.hideLoading()
        },
        fail: () => {
          wx.hideLoading(),
            wx.showToast({
              title: '服务器异常',
              image: '../../static/image/icon/error.png',
              duration: 2000
            })
        }
      })
    } else {
      this.setData({
        noinfo: true
      })
    }
  },
  detail: function (event) {
    let index = event.currentTarget.dataset.index;
    console.log(this.data.id)
    wx.navigateTo({
      url: '../detail/detail?id=' + index,
    })
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
    if ((!this.data.noinfo) && this.data.page < Math.ceil(this.data.page_count / this.data.page_size)) {
      this.data.page++
      wx.request({
        url: 'https://junebao.top:8000/junblog/?size=' + this.data.page_size.toString() +
          "&page=" + this.data.page.toString() + "&tag=" + this.data.page_id.toString() + "&no=" + Date.parse(new Date()),
        // 接口调用成功的回调函数
        success: (data) => {
          // 绑定数据
          this.setData({
            ibooklist: this.data.ibooklist.concat(data.data.data.results),
            loadingHidden: true,
            page_count: data.data.data.count,
          }),
            wx.hideLoading()
        },
        fail: () => {
          wx.hideLoading(),
            wx.showToast({
              title: '服务器异常',
              image: '../../static/image/icon/error.png',
              duration: 2000
            })
        }
      })
    } else {
      this.setData({
        noinfo: true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})