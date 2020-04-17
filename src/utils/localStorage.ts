/*eslint-disable*/
// @ts-nocheck

/**
 * 取本地缓存
 * @param  {[string]} key [可支持多级访问，如：parent.child.value]
 * @return {[object]} value [返回一个对象，如果超过了生命周期，则返回null]
 */
function getLocal(key: string) {
  var keys = (key + '').split('.'),
    obj = localStorage[keys[0]];
  if (!obj || obj === 'null') {
    return null;
  }
  obj = JSON.parse(obj);
  for (var i = 1; i < keys.length; i++) {
    obj = obj[keys[i]];
    if (!obj) {
      return null;
    }
  }
  if (obj.ttl && obj.ttl < new Date().getTime()) {
    return null;
  }
  if (obj.isObj && obj.isObj == 'false') {
    obj = obj.value;
  } else {
    obj.ttl && delete obj.ttl;
  }
  return obj;
}

/**
 * 存入本地缓存
 * @param {[string]} key   [可支持多级访问，如：parent.child.value,不能为ttl,isObj]
 * @param {[obejcet]} value [值]
 * @param {[string]} ttl   [生命长度，单位可为ms,s,m,h,d;默认为s]
 */
function setLocal(key: string, value: object, ttl?: string) {
  var keys = (key + '').split('.'),
    length = keys.length,
    obj = localStorage[keys[0]],
    values = [];
  if (length > 1) {
    //检测是否合法
    if (obj) {
      obj = JSON.parse(obj);
      if (obj.isObj && obj.isObj == 'false') {
        return keys[0] + ' is not an object!';
      }
      values.push(obj);
    } else {
      return false;
    }
    for (var i = 1; i < length - 1; i++) {
      obj = obj[keys[i]];
      if (!obj || (obj.isObj && obj.isObj == 'false')) {
        return false;
      }
      values.push(obj);
    }
    //创建最后一层数据
    obj = value;
  } else {
    //创建最后一层数据
    obj = typeof value === 'object' ? value : { isObj: 'false', value: value };
  }
  if (ttl) {
    var scale = 0;
    switch (ttl.indexOf(ttl.length - 1)) {
      case 's':
        if (ttl.indexOf(ttl.length - 2) == 'm') {
          scale = 1;
        } else {
          scale = 1000;
        }
        break;
      case 'm':
        scale = 1000 * 60;
        break;
      case 'h':
        scale = 1000 * 60 * 60;
        break;
      case 'd':
        scale = 1000 * 60 * 60 * 24;
        break;
      default:
        scale = 1;
    }
    //存入ttl
    obj.ttl = parseInt(ttl) * scale + new Date().getTime();
  }
  //回退创建对象
  for (var j = length - 1; j > 0; j--) {
    var temp = values.pop();
    temp[keys[j]] = obj;
    obj = temp;
  }
  //写入localStorage
  localStorage[keys[j]] = JSON.stringify(obj);
  return true;
}

/**
 * 删除本地缓存
 * @param {[string]} key   [可支持多级访问，如：parent.child.value,不能为ttl,isObj]
 * @return {[type]}     [description]
 */
function delLocal(key: string) {
  var keys = (key + '').split('.'),
    length = keys.length,
    obj = localStorage[keys[0]],
    values = [];
  if (length == 1) {
    localStorage.removeItem(key);
    return true;
  } else if (length > 1) {
    //检测是否合法
    if (obj) {
      obj = JSON.parse(obj);
      if (obj.isObj && obj.isObj == 'false') {
        return false;
      }
      values.push(obj);
    } else {
      return false;
    }
    for (var i = 1; i < length - 1; i++) {
      obj = obj[keys[i]];
      if (!obj || (obj.isObj && obj.isObj == 'false')) {
        return false;
      }
      values.push(obj);
    }
  } else {
    return false;
  }
  //删除最后一层，回退恢复对象
  var temp = values.pop();
  delete temp[keys[length - 1]];
  obj = temp;
  for (var j = length - 2; j > 0; j--) {
    temp = values.pop();
    temp[keys[j]] = obj;
    obj = temp;
  }
  //写入localStorage
  localStorage[keys[j]] = JSON.stringify(obj);
  return true;
}

function setTtl(key: string, ttl: string) {
  var keys = key.split('.'),
    length = keys.length,
    obj = localStorage[keys[0]],
    values = [];
  if (length > 1) {
    //检测是否合法
    if (obj) {
      obj = JSON.parse(obj);
      values.push(obj);
    } else {
      return false;
    }
    for (var i = 1; i < length - 1; i++) {
      obj = obj[keys[i]];
      if (!obj) {
        return false;
      }
      values.push(obj);
    }
    obj = obj[keys[i]];
  } else {
    obj = JSON.parse(obj);
  }
  if (ttl) {
    var scale = 0;
    switch (ttl.indexOf(ttl.length - 1)) {
      case 's':
        if (ttl.indexOf(ttl.length - 2) == 'm') {
          scale = 1;
        } else {
          scale = 1000;
        }
        break;
      case 'm':
        scale = 1000 * 60;
        break;
      case 'h':
        scale = 1000 * 60 * 60;
        break;
      case 'd':
        scale = 1000 * 60 * 60 * 24;
        break;
      default:
        scale = 1;
    }
    //存入ttl
    obj.ttl = parseInt(ttl) * scale + new Date().getTime();
  }
  //回退创建对象
  for (var j = length - 1; j > 0; j--) {
    var temp = values.pop();
    temp[keys[j]] = obj;
    obj = temp;
  }
  //写入localStorage
  localStorage[keys[j]] = JSON.stringify(obj);
  return true;
}

export { getLocal, setLocal, delLocal, setTtl };
