var Ajax = {
    get: function (url, sucFnc, errorFn,async) {
        var xhr = new XMLHttpRequest();
        // xhr.setRequestHeader("Cache-Control","no-cache");
        xhr.open('GET', url, async?true:async);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 304) {
                    sucFnc.call(this, JSON.parse(xhr.responseText));
                } else {
                    if (errorFn) {
                        errorFn(xhr.status)
                    } else {
                        console.log('从[' + url + ']获取数据失败,执行默认异常处理');
                        console.log(xhr.status)
                    }
                }
            }
        };
        xhr.send();
    },
    post: function (url, data, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send(data);
    }
}
export default Ajax;
