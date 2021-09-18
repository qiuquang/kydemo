// pages/meng/meng.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        articles: [
            {
                imgsrc: 'https://636c-cloud1-7gw7m0k679be1a14-1307431346.tcb.qcloud.la/duola.jpg?sign=625232c45d6f26e0a1b50d0054035f8d&t=1631945812" src="https://636c-cloud1-7gw7m0k679be1a14-1307431346.tcb.qcloud.la/duola.jpg?sign=625232c45d6f26e0a1b50d0054035f8d&t=1631945812',
                title: '这么多年，你是否读懂了哆啦A梦',
                desc: '我想一直在你的身边，直到你不需要我的时候',
                author: '槑头槑脑',
                date: '2021年9月18日'
            }
        ]
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

    },
    showDetail(event) {
        wx.navigateTo({
          url: `/pages/meng/detail/detail?imgsrc=${event.target.dataset.imgsrc}`,
        })
    }
})