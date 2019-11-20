
/*
订单状态修改

methods：post
url:'/api/order/update_status'
*/
const ORDER_UPDATE = '/api/order/update_status';


//修改个人信息

const UPDATE_USERINFO = '/api/user/update_userinfo';




/*
更新个人信息
url : '/api/user/update_userinfo'
*/

const UPDATE_USERINFO = '/api/user/update_userinfo';



/*
订单创建

methods：post
url:'/api/order/add'
*/
const ORDER_ADD = '/api/order/add';

/*
订单创建

methods：post
url:'/api/order/find_order'
*/
const FIND_ORDER = '/api/order/find_order';

/*
	分类搜索api
	参数： 
		customCurrency=
		custom_tag=	
		page=1 
		​pageSize=10  
		​product_line=boutique 
        样例 ?customCurrency=CNY&custom_tag=&page=1&pageSize=10&product_line=activity
*/
const CATEGORY_API = '/api/search/category';


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
const GOODS_DETAIL_API = '/api/product';
// const GOODS_DETAIL_API = '/api/product';


// 发现页面接口
const MENU = '/api/article/menu';

//搜索列表
const SEARCH_LIST_API = '/api/destination/v1';

// 目的地数据
const DESTINATION_API = '/api/destination/default';

/*
订单创建

methods：post
url:'/api/order/add'
*/
const ORDER_ADD = '/api/order/add';

/*
订单创建

methods：post
url:'/api/order/find_order'
*/
const FIND_ORDER  = '/api/order/find_order';

/*
订单状态修改

methods：post
url:'/api/order/update_status'
*/
const ORDER_UPDATE = '/api/order/update_status';

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
  GOODS_DETAIL_API,
  CATEGORY_API,
  FIND_CODE,
  ORDER_ADD,
  FIND_ORDER,
  SEARCH_LIST_API,
  DESTINATION_API,
<<<<<<< HEAD
  ORDER_ADD,
  FIND_ORDER,
=======
  ORDER_UPDATE 
>>>>>>> wn
}

