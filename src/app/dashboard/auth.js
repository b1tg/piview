/**
 * Created by zhangyuanliang on 2017/4/21.
 */

export default {
  login: function (context, creds, redirect) {
    let name = creds.username
    let pwd = creds.password
    if (name === 'sjzu' && pwd === '20142018') {
      localStorage.setItem('user', 'sjzu')
      if (redirect) {
        context.$router.push(redirect)
      }
    } else {
      context.$notify.error({
        title: '登录失败',
        message: '错误的用户名或密码'
      })
    }
  },

  deleteAllCookies: function () {
    var cookies = document.cookie.split(';')

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i]
      var eqPos = cookie.indexOf('=')
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
  },

  logout: function (context) {
    localStorage.removeItem('user')
    this.deleteAllCookies()
    context.$router.push('/login')
  },

  user: function () {
    return localStorage.getItem('user')
  },

  authenticated: function () {
    let user = localStorage.getItem('user')
    if (user === undefined || user == null || user === 'undefined') {
      return false
    }
    return true
  }
}
