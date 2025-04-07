# 目录 <!-- omit in toc -->

- [功能](#功能)
- [案例](#案例)

# 介绍

    基于 EventSource 封装的 Web 端 EventSource 库，支持流式数据上传请求头

# 功能

    1. 支持流式数据上传请求头，如 Content-Type、Content-Length 等。
    2. 支持自定义请求头。
    3. 支持自定义请求方法，如 GET、POST、PUT 等。

# 安装

    npm install event-source-web

# 使用

    import EventSourceWeb from 'event-source-web';

# 使用

    import EventSourceWeb from 'event-source-web';

    const url = 'URL_ADDRESS    const url = 'http://example.com/stream';

    const headers = {
       'Content-Type': 'application/json',
    }

    const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ key: 'value' }),
    };
    const es = new EventSourceWeb(url, options);

    es.onopen = () => {
        console.log('连接已打开');

    };

    es.onmessage = (data) => {
        console.log('收到消息:', data);
    };

    es.onerror = (error) => {
        console.error('发生错误:', error);
    }

    es.onclose = () => {
        console.log('连接已关闭');
    };
