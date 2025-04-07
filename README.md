# 目录 <!-- omit in toc -->

- [介绍](#介绍)
- [功能](#功能)
- [安装](#安装)
- [使用](#使用)

# 介绍

    传统的 EventSource 类不支持流式数据上传请求头，如 Content-Type、Content-Length 等。本库基于 fetch API 实现了一个支持流式数据上传请求头的 EventSource 类。
    该类继承自 EventSource 类，重写了 open 方法，使用 fetch API 实现了事件源的连接和消息的接收。
    该类还提供了 onopen、onmessage、onerror 和 onclose 方法，用于处理事件源的连接、消息、错误和关闭事件。
    本库的优点是：对比于其他库体积小，易于使用，支持流式数据上传请求头，支持自定义请求头和请求方法。

# 功能

    1. 支持流式数据上传请求头，如 Content-Type、Content-Length 等。
    2. 支持自定义请求头。
    3. 支持自定义请求方法，如 GET、POST、PUT 等。

# 安装

    npm install event-source-web

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
