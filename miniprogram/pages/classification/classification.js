// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left_list: ['蔬菜豆制品', '肉禽蛋', '水产海鲜', '水果鲜花', '乳品烘焙', '素食冻品', '酒水饮料', '粮油调味', '快手菜', '火锅到家', '网红打卡地', '个护清洁', '营养早餐', '熟食卤味','休闲零食','绿卡专享'],
    winHeight: null,
    checkIndex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight - 50
        });
      }
    });
    // console.log(this.data.winHeight)
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
  //点击左边选项卡
  leftClick: function (e) {
    console.log(e)
    const{index} = e.currentTarget.dataset
    this.setData({
      checkIndex:index
    })
  }
})