/**
 * EventSourceWeb 构造函数，用于创建一个与指定 URL 建立连接的对象
 * @param {string} url - 要连接的 URL
 * @param {Object} options - 连接选项，例如请求方法、请求头等
 */
function EventSourceWeb(url, options) {
    // 存储要连接的 URL
    this.url = url;
    // 存储连接选项
    this.options = options;
    // 创建一个 UTF-8 解码器，用于将接收到的二进制数据解码为字符串
    this.decoder = new TextDecoder("utf-8");

    // 初始化连接打开时的回调函数，默认为 null
    this.onopen = null;
    // 初始化接收到消息时的回调函数，默认为 null
    this.onmessage = null;
    // 初始化连接关闭时的回调函数，默认为 null
    this.onclose = null;
    // 初始化连接出错时的回调函数，默认为 null
    this.onerror = null;

    // 立即执行的异步函数，用于启动连接操作
    (async () => {
        try {
            // 如果定义了 onopen 回调函数，则调用它
            if (typeof this.onopen === 'function') {
                this.onopen();
            }
            // 使用 fetch API 发起请求
            const response = await fetch(this.url, this.options);
            // 检查响应状态是否正常
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // 获取响应体的可读流
            const reader = response.body.getReader();
            // 循环读取流中的数据
            while (true) {
                const { done, value } = await reader.read();
                // 如果读取完成，则跳出循环
                if (done) {
                    // 如果定义了 onclose 回调函数，则调用它
                    if (typeof this.onclose === 'function') {
                        this.onclose();
                    }
                    break;
                }
                // 将读取到的二进制数据解码为字符串
                const text = this.decoder.decode(value);
                // 如果定义了 onmessage 回调函数，则调用它并传入接收到的数据
                if (typeof this.onmessage === 'function') {
                    this.onmessage(text);
                }
            }
        } catch (error) {
            // 打印连接失败的错误信息
            console.error('连接失败:', error);
            // 如果定义了 onerror 回调函数，则调用它并传入错误对象
            if (typeof this.onerror === 'function') {
                this.onerror(error);
            }
        }
    })();
}

// 导出 EventSourceWeb 构造函数，以便在其他模块中使用
module.exports = EventSourceWeb;