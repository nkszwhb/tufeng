import api from '../utils/api'
import Http from '../utils/Http'

// 发送验证吗
export const requestSendCode = async (tel)=>{
  let {data: result} = await Http.get(api.SEND_CODE, {tel});
  if(result.code === 0){
    //发送成功
    return result.data.code;
  }else {
    //发送失败
    return null;
  }
}

// 注册
export const requestRegiester = async (tel, psw)=>{
  let result = await Http.post(api.REGISTER_API, {tel, psw});
  if(result.data.code === 0){
    return null;
  }else{
    return result.data.message;
  }
}

// 密码登录
export const requestLoginByPassword = async(tel, psw)=>{
  let result = await Http.post(api.LOGIN_API, {tel, type: 'psw', value: psw});
  if(result.data.code === 0){
    return null;
  }else{
    return result.data.message;
  }
}

// 验证码登录
export const requestLoginByCode = async (tel)=>{
  let result = await Http.post(api.LOGIN_API, {tel, type: 'code'});
  if(result.data.code === 0){
    return null;
  }else{
    return result.data.message;
  }
}

// 检查是否登录
export const requestCheckLogin = async ()=>{
  let result = await Http.get(api.CHECK_LOGIN);
  return result.data.code;
}

// 退出
export const requestOutLogin = async ()=>{
  let result = await Http.get(api.OUT_LOGIN);
  return result.data.code;
}


export default {
  requestSendCode,
  requestRegiester,
  requestLoginByPassword,
  requestLoginByCode,
  requestCheckLogin,
  requestOutLogin
}