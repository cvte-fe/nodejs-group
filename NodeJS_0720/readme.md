# NodeJS

----

## 提纲

0. NodeJS是什么? 为什么要讲它?
    - 一个框架, 集成了哪些模块 (简介)
    - 可以用来做什么? 哪些公司在用? 我们如何使用?
1. 为了让JS跑在V8上, NodeJS帮我们做了什么?
    - 如果不用NodeJS, 我该如何用V8来跑JS代码
    - 如果不用V8, 我该如何执行JS代码 (难)
2. 当NodeJS的http模块 接受/发出一个请求时, 他都经历了些什么!?
    - Node的中间件特性
    - http模块剖析
3. 用Node写服务有什么特性?
    - 异步回调与多线程的差异 
    - 多线程切换的开销
    - 让CPU成为服务的瓶颈
4. 刚接手一个Node项目, 我该如何调试?
    - 调试方法: VSCode, Chrome inspect

#### 备选话题

1. Node的可拓展性
    - Node如何调用C/C++模块, electron
2. 你都说单线程了, child_process又是怎么回事?
3. 当我说看Node的源码, 我看的是什么?
4. libuv与Node的前世今生

----

## 目录

````
NodeJS_0720 
    |
    ├──readme.md
    |
    ├──markdown
    |   |
    |   ├──[subtitle1].md
    |   |  ....
    |   └──[subtitle2].md 
    |
    └──example
        |
        ├──[subtitle1]
        |   |
        |   ├──index
        |   |  ....
        |   └──utils
        |
        └──[subtitle2]

````

----

## 参考

1. [Stack: 如何开始学习NodeJS原理](https://stackoverflow.com/questions/10680601/nodejs-event-loop)
2. [Ryan: 教你用libuv和http_parser实现webserver(视频)](https://vimeo.com/24713213)
3. [Quora: libuv与NodeJS](https://www.quora.com/What-is-libuv-in-Node-js)
4. [啥是NodeJS](https://www.oreilly.com/ideas/what-is-node)

----

## 任务

推荐用MarkDown整理你所负责的内容, 以及提供可执行的Example以供演示

|Who|What|When|
|:--|:--|:--|
|桂梅|为了让JS跑在V8上, NodeJS帮我们做了什么?|0627|
|志豪|当NodeJS的http模块 接受/发出一个请求时, 他都经历了些什么?|0627|
|广杰|用Node写服务有什么特性?|0627|
|美琪|刚接手一个Node项目, 我该如何调试?|0627|
|少杰|NodeJS是什么? 为什么要讲它?|0627|