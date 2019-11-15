/*
#### 发送验证码

**method:** get

**url:** /api/user/send_code                          

**参数：**tel
*/
const SEND_CODE = '/api/user/send_code';


/*
#### 注册

**method：** post

**url：** /api/user/register

**参数：** tel   password
*/
const REGISTER_API = '/api/user/register';


/*
#### 登录

**method：** post

**url：** /api/user/login

**参数：** tel   type：' psw '、' code '  value
*/
const LOGIN_API = '/api/user/login';


/*
#### 检查是否过期

**method：** get

**url：** /api/user/check_login

**参数：** null
*/
const CHECK_LOGIN = '/api/user/check_login';


/*
#### 退出登录

**method：** get

**url：** /api/user/out_login

**参数：** null
*/
const OUT_LOGIN = '/api/user/out_login';

/*
#### QQ登录

**method：** post

**url：** /api/user/qq_login

**参数：** null
*/
const QQ_LOGIN = '/api/user/qq_login';


/*
#### 微博登录

**method：** post

**url：** /api/user/weibo_login

**参数：** null
*/
const WEIBO_LOGIN = '/api/user/weibo_login';


/*
#### 找回密码

**method：** post

**url：** /api/user/find_code

**参数：** tel   password 
*/
const FIND_CODE = '/api/user/find_code';

/*
商品列表接口
参数：id
*/
const GOODS_LIST_API = '/api/homepage/banner/v1.5.0 ';


/*
商品详情接口
参数：id
*/
const GOODS_DETAIL_API = '/api/product/101577807';

// 发现页面接口
const MENU = '/api/article/menu';



export default{
  SEND_CODE,
  REGISTER_API,
  LOGIN_API,
  CHECK_LOGIN,
  OUT_LOGIN,
  QQ_LOGIN,
  WEIBO_LOGIN,
  GOODS_LIST_API,
  MENU,
  GOODS_DETAIL_API

}

