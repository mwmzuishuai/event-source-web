# 功能
    用于需要上传请求头流式数据
## 案例
    const EventSourceWeb = require('event-source-web');
    
    const url = 'http://example.com/stream';
    const options = {
        method: 'GET'
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
    };
