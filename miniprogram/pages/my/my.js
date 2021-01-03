// pages/my/my.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: "https://7833-x3587-2xh2m-1302468156.tcb.qcloud.la/image/moren_header.png?sign=f51804efa13675155fd2b80661f17a7d&t=1609574423",
    name: "",
    settingList:[
      {title:"收货地址",icon:"https://7833-x3587-2xh2m-1302468156.tcb.qcloud.la/image/shdz.png?sign=3dbe6ce38a10e37899687ab87a3b6778&t=16095764033"},
      {title:"邀请有礼",icon:"https://7833-x3587-2xh2m-1302468156.tcb.qcloud.la/image/yqyl.png?sign=5f867c511dcf21b1b4c7c629bcd4849c&t=1609579363"},
      {title:"联系客服",icon:"https://7833-x3587-2xh2m-1302468156.tcb.qcloud.la/image/lxkf.png?sign=e1dcb7e23650720dfb5c64cfeea8b2d2&t=1609576469"},
      {title:"意见反馈",icon:"https://7833-x3587-2xh2m-1302468156.tcb.qcloud.la/image/yjfk.png?sign=d22755c3adddf74c7dd978044a55e19a&t=1609576447"},
      {title:"下载APP",icon:"https://7833-x3587-2xh2m-1302468156.tcb.qcloud.la/image/app.png?sign=8f39800cc6d0d18d75b9f50e0f57808a&t=1609578496"},
      {title:"设置",icon:"https://7833-x3587-2xh2m-1302468156.tcb.qcloud.la/image/sz.png?sign=5c9e1bae7d899c87da1b079edd90c500&t=1609576425"},
    ],
    isLogin:false
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
    console.log(app.globalData.userInfo,app.globalData.openid)
    if(app.globalData.userInfo){
      this.setData({
        userInfo:app.globalData.userInfo,
        isLogin:true
      })
    }
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
  // 登录
  Login: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  //提示
  Tips:function(){
    wx.showToast({
      title: '该功能暂未开放',
      icon:"error",
      duration: 2000
    })
  }
})