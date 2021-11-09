import cookie from 'react-cookies';
 
// 获取当前用户token
export const getToken = () => {
    return cookie.load('Token');
};

// 获取当前用户UserName
export const getUserName = () => {
    return cookie.load('UserName');
};
 
// 用户登录，保存cookie
export const onLogin = (Token, Auth, UserName) => {

    let inFifteenMinutes = new Date(new Date().getTime() + 3000 * 1000);
    cookie.save('Token', Token, { path: '/', expires: inFifteenMinutes });
    cookie.save('Auth', Auth, { path: '/', expires: inFifteenMinutes });
    cookie.save('UserName', UserName, { path: '/', expires: inFifteenMinutes });

};
 
// 用户登出，删除cookie
export const logout = () => {
    cookie.remove('Token');
    cookie.remove('Auth');
    cookie.remove('UserName');
    window.location.href = '/';
};

// 检测token是否过期
export const checkToken = (_this) =>{

    let token = getToken();
    if (typeof(token) == "undefined" ){
        alert('登录已失效！')
        _this.props.history.push('/login')
    }

}