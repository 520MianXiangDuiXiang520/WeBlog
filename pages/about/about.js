// pages/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  version: function (link) {
    wx.showModal({
      title: "Version",
      content: "version 1.2.0",
      confirmText: "确定",
      confirmColor: '#09bb07',
      cancelColor: '#c6eac6',
      success(res) {
      }
    })
  },


  power: function (link) {
    wx.showModal({
      title: "Power",
      content: "Power By Gin and WuUI",
      confirmText: "确定",
      confirmColor: '#09bb07',
      cancelColor: '#c6eac6',
      success(res) {
      }
    })
  },

  clipboard(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.clipboard,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
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