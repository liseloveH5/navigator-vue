import Constant from './Constant';


// 工具类 继承ajax-axio
export default class Util extends Constant{

  //设置cookie,增加到vue实例方便全局调用
  setCookie (c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  };

//获取cookie
  getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
  }

  // 公共设置本地储存的方法
  setData (name, value) {
    localStorage[ name ] = JSON.stringify(value);
  }

  getData (name) {
    var returnData;
    if (localStorage[ name ]) {
      returnData = JSON.parse(localStorage[ name ])
    }
    return returnData;
  }

  removeData (name) {
    localStorage.removeItem(name);
  }

  //html转码
  htmlDecode (text) {
    //1.首先动态创建一个容器标签元素，如DIV
    var temp = document.createElement("div");
    //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
    temp.innerHTML = text;
    //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
  }

  // 系统信息
  constructor () {
    super();

    this.base64DecodeChars = new Array(
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
      52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
      -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
      -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

  }


  // ajax错误提示
  reqFail(error) {
    // 如果msg是一个对象  则不显示错误
    console.log(error)
  }

  //vue 获取原始对象
  obj (vueData) {
    return JSON.parse(JSON.stringify(vueData));
  }

  isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }



  //将js对象转换成url参数
  urlencode (data) {
    var _result = [];
    for (var key in data) {
      var value = data[ key ];
      if (value.constructor == Array) {
        value.forEach(function (_value) {
          _result.push(key + "=" + _value);
        });
      } else {
        _result.push(key + '=' + value);
      }
    }
    return _result.join('&');
  }



  loadjscssfile (filename, filetype) {
    //如果文件类型为 .js ,则创建 script 标签，并设置相应属性
    if (filetype == "js") {
      var fileref = document.createElement('script');
      fileref.setAttribute("type", "text/javascript");
      fileref.setAttribute("src", filename);
    }
    //如果文件类型为 .css ,则创建 link 标签，并设置相应属性
    else if (filetype == "css") {
      var fileref = document.createElement("link");
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined")
      document.getElementsByTagName("head")[ 0 ].appendChild(fileref);
  }

  removejscssfile (filename, filetype) {
    //判断文件类型
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none";
    //判断文件名
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none";
    var allsuspects = document.getElementsByTagName(targetelement);
    //遍历元素， 并删除匹配的元素
    for (var i = allsuspects.length; i >= 0; i--) {
      if (allsuspects[ i ] && allsuspects[ i ].getAttribute(targetattr) != null && allsuspects[ i ].getAttribute(targetattr).indexOf(filename) != -1)
        allsuspects[ i ].parentNode.removeChild(allsuspects[ i ]);
    }
  }


  // uuid生成算法
  getUuid () {
    var uuid = "";
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[ i ] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[ 14 ] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[ 19 ] = hexDigits.substr((s[ 19 ] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[ 8 ] = s[ 13 ] = s[ 18 ] = s[ 23 ] = "-";

    uuid = s.join("");
    return uuid;
  }

  // 判断浏览器是否支持localStorage
  isLocalStorageSupported () {
    var testKey = 'test',
      storage = window.sessionStorage;
    try {
      storage.setItem(testKey, 'testValue');
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  // base64转换
  base64decode (str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
      /!* c1 *!/
      do {
        c1 = this.base64DecodeChars[ str.charCodeAt(i++) & 0xff ];
      } while (i < len && c1 == -1);
      if (c1 == -1)
        break;
      /!* c2 *!/
      do {
        c2 = this.base64DecodeChars[ str.charCodeAt(i++) & 0xff ];
      } while (i < len && c2 == -1);
      if (c2 == -1)
        break;
      out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
      /!* c3 *!/
      do {
        c3 = str.charCodeAt(i++) & 0xff;
        if (c3 == 61)
          return out;
        c3 = this.base64DecodeChars[ c3 ];
      } while (i < len && c3 == -1);
      if (c3 == -1)
        break;
      out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
      /!* c4 *!/
      do {
        c4 = str.charCodeAt(i++) & 0xff;
        if (c4 == 61)
          return out;
        c4 = this.base64DecodeChars[ c4 ];
      } while (i < len && c4 == -1);
      if (c4 == -1)
        break;
      out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
  }

  utf8to16 (str) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
      c = str.charCodeAt(i++);
      switch (c >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          // 0xxxxxxx
          out += str.charAt(i - 1);
          break;
        case 12:
        case 13:
          // 110x xxxx   10xx xxxx
          char2 = str.charCodeAt(i++);
          out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
          break;
        case 14:
          // 1110 xxxx  10xx xxxx  10xx xxxx
          char2 = str.charCodeAt(i++);
          char3 = str.charCodeAt(i++);
          out += String.fromCharCode(((c & 0x0F) << 12) |
            ((char2 & 0x3F) << 6) |
            ((char3 & 0x3F) << 0));
          break;
      }
    }

    return out;
  }

}
