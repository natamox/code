let object = { a: [{ b: { c: 3 } }] };

_get(object, "a[0].b.c");
// => 3

_get(object, ["a", "0", "b", "c"]);
// => 3

_get(object, "a.b.c", "default");
// => 'default'

/**
 * 实现一个函数 _get，根据 object 对象的 path 路径获取值。 如果解析 value 是 undefined 会以 defaultValue 取代。
 * path 支持 数组 和 字符串 两种类型
 * @param {Object} obj
 * @param {Array<string> | string} path
 * @param {*} defaultVal
 */
function _get(obj, path, defaultVal) {
  
}
