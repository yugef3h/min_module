/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = "meng.yuncanzhuo.cn"

var config = {

  // 下面的地址配合云端 Server 工作
  host,

  // 登录地址，用于建立会话
  loginUrl: `https://${host}/login`,

  // 测试的请求地址，用于测试会话
  requestUrl: `https://${host}/testRequest`,

  // 用code换取openId
  openIdUrl: `https://${host}/openid`,

  // 测试的信道服务接口
  tunnelUrl: `https://${host}/tunnel`,

  // 生成支付订单的接口
  paymentUrl: `https://${host}/payment`,

  // 发送模板消息接口
  templateMessageUrl: `https://${host}/templateMessage`,

  // 上传文件接口
  uploadFileUrl: `https://${host}/upload`,

  // 下载示例图片接口
  downloadExampleUrl: `https://${host}/static/weapp.jpg`,

  // 获取商戶列表
  findShopPageUrl: `https://${host}/Api/user/storeList`,
  // 获取轮播图列表
  findImageListUrl: `https://${host}/Api/User/fileList`,
  // 获取消息列表
  findMessagePageUrl: `https://${host}/Api/user/messageList`,
  // 已读消息详情
  readMessageUrl: `https://${host}//Api/User/messageRead`,
  // 登录
  loginUrl: `https://${host}/Api/User/auth`,
  // 果币列表查询
  findTransactionPageUrl: `https://${host}/Api/User/coinList`,
  // 用户详情
  getUserInfoUrl: `https://${host}/Api/User/info`,
  // 获取商户ID
  getStoreIdUrl: `https://${host}/Api/User/setStoreId`,
  // 支付
  paymentUrl: `https://${host}/Api/User/payStore`,
};

module.exports = config