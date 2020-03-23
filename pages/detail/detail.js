const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    article_md: "",
    article: {},
    tags: [],
    create_time: "",
    next : {},
    previous: {},
    loadingHidden: true,
    firstloadingHidden: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _ts = this;
    wx.request({
      url: 'https://junebao.top:8000/junblog/detail/' + options['id'],
      // 接口调用成功的回调函数
      success: (data) => {
        // 绑定数据
        console.log(options)
        this.setData({
          title: data.data.data.title,
          article_md: data.data.data.article,
          create_time: data.data.data.create_time,
          next: data.data.data.next,
          previous: data.data.data.previous,
          tags: data.data.data.tags,
          firstloadingHidden: true,
          loadingHidden: false
        })
        let todata = app.towxml.toJson(
          data.data.data.article,               // `markdown`或`html`文本内容
          'markdown'              // `markdown`或`html`
        );
        // todata = app.towxml.initData(todata, {
        //   base: 'https://www.vvadd.com/',
        //   app: _ts
        // });
        //设置文档显示主题，默认'light'
        todata.theme = 'dark';

        //设置数据
        _ts.setData({
          article: todata,
          loadingHidden: true
        });

        console.log(data.data)
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