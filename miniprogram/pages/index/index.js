const app = getApp();
const db = wx.cloud.database()
const userList = db.collection('user');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: ""
  },
  //获取用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    this.Login()
},
//登录
Login() {
  //获取OpenID
  wx.cloud.callFunction({
      // 云函数名称
      name: 'Login',
    })
    .then(res => {
      console.log(res)
      this.setData({
        openId: res.result.openid
      })
      app.globalData.openid = res.result.openid
    })
    .catch(console.error)
  this.register()
},
//注册
register() {
  //查询用户是否保存
  userList.where({
    openid: this.data.openid // 填入当前用户 openid
  }).get().then(res => {
    console.log(res.data)
    if (res.data.length == 0) {
      userList.add({
          // data 字段表示需新增的 JSON 数据
          data: {
            userInfo: this.data.userInfo
          }
        })
        .then(res => {
          console.log(res)
        })
    }
  })
  wx.switchTab({
    url: '../my/my'
  })
},
/**
 * 生命周期函数--监听页面加载
 */
onLoad: function (options) {

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