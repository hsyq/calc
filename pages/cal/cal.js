// pages/cal/cal.js
Page({

// 页面的初始数据
  data: {
      number:"0",
      id1:"clear",
      id2: "zhengfu",
      id3: "baifenhao",
      id4: "chu",
      id5: "7",
      id6: "8",
      id7: "9",
      id8: "plus",
      id9: "4",
      id10: "5",
      id11: "6",
      id12: "jian",
      id13: "1",
      id14: "2",
      id15: "3",
      id16: "jia",
      id17: "0",
      id18: ".",
      id19: "dengyu"
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
  
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
  
  },

  // 生命周期函数--监听页面显示
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

  btnClick:function(event){
      console.log(event.target.id);
      // console.log(event);
      let number1 = this.data.number;
      if(number1 == "0"){
      this.setData({number:event.target.id});
      } else {
        let newNumber = this.data.number + event.target.id;
        this.setData({number:newNumber});
      }
     
  }
})