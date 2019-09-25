import ajax from "./ajax";

//获取地址
export const reqAddress = (latitude, longitude) => ajax(`/position/${latitude},${longitude}`)

//获取分类列表
export const reqCategorys = () => ajax('/index_category',{
  headers: {
    needToken: true
  }
})

//获取商家列表
export const reqShops = (latitude, longitude) => ajax.get('/shops',{
  params:{
    latitude,
    longitude
  },
  headers: {
    needToken: true
  }
})

//用户名密码登陆
export const reqPwdLogin = (name, pwd, captcha) => ajax({
  url: '/login_pwd',
  method:'POST',
  data:{name, pwd, captcha}
})

//手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax({
  url: '/login_sms',
  method:'POST',
  data:{phone, code}
})

//发送短信验证码
export const reqSendCode = (phone) => ajax({
  url: '/sendcode',
  params:{
    phone
  }
})




//自动登录
export const reqAutoLogin = () => ajax('/auto_login')

//获取goods
export const reqGoods = () => ajax('/goods')

//获取ratings
export const reqRatings = () => ajax('/ratings')

//获取info
export const reqInfo = () => ajax('/info')
