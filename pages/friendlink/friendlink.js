// pages/friendlink/friendlink.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tags: []

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://junebao.top:8888/api/tag/list',
      method: 'POST',
      data:{},
      // 接口调用成功的回调函数
      success: (data) => {
        console.log(data.data)
        this.setData({
          tags: data.data.tags,
          loadingHidden: true,
        }),
          console.log(data.data.data)
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

  /**
   * 标签详情
   */

  detail: function (event) {
    let index = event.currentTarget.dataset.index;
    console.log(this.data.id)
    wx.navigateTo({
      url: '../tagarticle/tagarticle?id=' + index,
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})