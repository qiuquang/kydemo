// pages/meng/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 音乐播放器
        musicContent: null,
        // 音乐名称
        musicinfo: {
            poster: 'https://636c-cloud1-7gw7m0k679be1a14-1307431346.tcb.qcloud.la/music/duola/duolamusic.jpg?sign=ca380229c511fa16a6fc2a42a79c23b4&t=1631943497',
            src: 'https://636c-cloud1-7gw7m0k679be1a14-1307431346.tcb.qcloud.la/music/duola/%E5%A4%A7%E6%9D%89%E4%B9%85%E7%BE%8E%E5%AD%90%20-%20%E3%83%89%E3%83%A9%E3%81%88%E3%82%82%E3%82%93%E3%81%AE%E3%81%86%E3%81%9F%20(%E5%93%86%E5%95%A6A%E6%A2%A6%E4%B9%8B%E6%AD%8C).mp3?sign=fa095789df6416a7a352df83698f436a&t=1631943517',
            name: '哆啦A梦之歌',
            author: '大杉久美子'
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.createBGMusic();
        this.setData({
            imgsrc: options.imgsrc
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
        this.musicContent.play()
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        this.musicContent.pause();
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        this.musicContent.stop();
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
    createBGMusic() {
        this.musicContent = wx.createInnerAudioContext();
        this.musicContent.src  = this.data.musicinfo.src; 
        this.musicContent.autoplay = true;
    },
})