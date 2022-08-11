(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{538:function(t,s,a){"use strict";a.r(s);var n=a(76),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),a("h2",{attrs:{id:"进程和线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[t._v("#")]),t._v(" 进程和线程")]),t._v(" "),a("h3",{attrs:{id:"进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),a("blockquote",[a("p",[t._v("一个进程就是CPU执行的单个任务的过程，"),a("strong",[t._v("是程序在执行过程当中CPU资源分配的最小单位")]),t._v("，并且进程都有自己的地址空间，包含了运行态、就绪态、阻塞态、创建态、终止态五个状态。")])]),t._v(" "),a("h3",{attrs:{id:"线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("线程是CPU调度的最小单位")]),t._v("，它可以和属于同一个进程的其他线程共享这个进程的全部资源。")])]),t._v(" "),a("h3",{attrs:{id:"两者之间的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两者之间的关系"}},[t._v("#")]),t._v(" 两者之间的关系")]),t._v(" "),a("p",[t._v("一个进程包含多个线程，一个线程只能在一个进程之中。每一个进程最少包含一个线程。")]),t._v(" "),a("h3",{attrs:{id:"两者之间的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两者之间的区别"}},[t._v("#")]),t._v(" 两者之间的区别")]),t._v(" "),a("ol",[a("li",[t._v("进程是CPU资源分配的最小单位，线程是CPU调度的最小单位；")]),t._v(" "),a("li",[t._v("进程之间的切换开销比较大，但是线程之间的切换开销比较小。")]),t._v(" "),a("li",[t._v("CPU会把资源分配给进程，但是线程几乎不拥有任何的系统资源。因为线程之间是共享同一个进程的，所以线程之间的通信几乎不需要系统的干扰。")])]),t._v(" "),a("p",[a("strong",[t._v("举个例子能够帮助更好的理解进程和线程：")])]),t._v(" "),a("p",[t._v("当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。")]),t._v(" "),a("p",[t._v("JS 引擎线程和渲染线程，大家应该都知道，在 JS 运行的时候可能会阻止 UI 渲染，这说明了两个线程是互斥的。这其中的原因是因为 JS 可以修改 DOM，如果在 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。这其实也是一个单线程的好处，得益于 JS 是单线程运行的，可以达到节省内存，节约上下文切换时间，没有锁的问题的好处。当然前面两点在服务端中更容易体现，对于锁的问题，形象的来说就是当我读取一个数字 15 的时候，同时有两个操作对数字进行了加减，这时候结果就出现了错误。解决这个问题也不难，只需要在读取的时候加锁，直到读取完毕之前都不能进行写入操作。")]),t._v(" "),a("h2",{attrs:{id:"执行上下文-execution-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文-execution-context"}},[t._v("#")]),t._v(" 执行上下文（Execution Context）")]),t._v(" "),a("h3",{attrs:{id:"什么是执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是执行上下文"}},[t._v("#")]),t._v(" 什么是执行上下文")]),t._v(" "),a("blockquote",[a("p",[t._v("简而言之，执行上下文就是当前 JavaScript 代码被解析和执行时所在环境的抽象概念， JavaScript 中运行任何的代码都是在执行上下文中运行")])]),t._v(" "),a("h3",{attrs:{id:"执行上下文的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的类型"}},[t._v("#")]),t._v(" 执行上下文的类型")]),t._v(" "),a("ul",[a("li",[t._v("全局执行上下文： 这是默认的、最基础的执行上下文。不在任何函数中的代码都位于全局执行上下文中。它做了两件事：\n"),a("ul",[a("li",[t._v("创建一个全局对象，在浏览器中这个全局对象就是 window 对象。")]),t._v(" "),a("li",[t._v("将 this 指针指向这个全局对象。一个程序中只能存在一个全局执行上下文。")])])]),t._v(" "),a("li",[t._v("函数执行上下文： 每次调用函数时，都会为该函数创建一个新的执行上下文。每个函数都拥有自己的执行上下文，但是只有在函数被调用的时候才会被创建。一个程序中可以存在任意数量的函数执行上下文。")])]),t._v(" "),a("h3",{attrs:{id:"执行上下文的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文的生命周期"}},[t._v("#")]),t._v(" 执行上下文的生命周期")]),t._v(" "),a("p",[t._v("执行上下文的生命周期包括三个阶段："),a("strong",[t._v("创建阶段→执行阶段→回收阶段")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行栈"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),a("p",[t._v("JavaScript 引擎创建了执行栈来管理执行上下文。可以把执行栈认为是一个存储函数调用的栈结构，遵循"),a("code",[t._v("先进后出")]),t._v("的原则。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("111")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("代码详解：")]),t._v(" "),a("ul",[a("li",[t._v("调用 bar 函数时，此时 bar 函数内部代码还未执行，js执行引擎立即创建一个 bar 的执行上下文（简称EC），然后把这执行上下文压入到执行栈（简称ECStack）中。")]),t._v(" "),a("li",[t._v("执行 bar 函数过程中，调用 foo 函数，同样地，foo 函数执行之前也创建了一个 foo 的执行上下文，并压入到执行栈中。")]),t._v(" "),a("li",[t._v("foo 函数执行过程中遇到错误，把错误抛出并弹出栈。")])]),t._v(" "),a("h2",{attrs:{id:"event-loop-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-2"}},[t._v("#")]),t._v(" Event Loop")]),t._v(" "),a("blockquote",[a("p",[t._v("在 "),a("code",[t._v("JavaScript")]),t._v(" 中，任务被分为两种，一种宏任务（"),a("code",[t._v("MacroTask")]),t._v("）也叫 "),a("code",[t._v("Task")]),t._v("，一种叫微任务（"),a("code",[t._v("MicroTask")]),t._v("）。")])]),t._v(" "),a("h3",{attrs:{id:"macrotask-宏任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macrotask-宏任务"}},[t._v("#")]),t._v(" MacroTask（宏任务）")]),t._v(" "),a("p",[a("code",[t._v("script")]),t._v("全部代码、"),a("code",[t._v("setTimeout")]),t._v("、"),a("code",[t._v("setInterval")]),t._v("、"),a("code",[t._v("setImmediate")]),t._v("（浏览器暂时不支持，只有IE10支持，具体可见MDN）、"),a("code",[t._v("I/O")]),t._v("、"),a("code",[t._v("UI Rendering")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"microtask-微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microtask-微任务"}},[t._v("#")]),t._v(" MicroTask（微任务）")]),t._v(" "),a("p",[a("code",[t._v("Process.nextTick（Node独有")]),t._v("）、"),a("code",[t._v("Promise")]),t._v("、"),a("s",[a("code",[t._v("Object.observe")]),t._v("(废弃)")]),t._v("、"),a("code",[t._v("MutationObserver")]),a("a",{attrs:{href:"http://javascript.ruanyifeng.com/dom/mutationobserver.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("具体使用方式查看"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"浏览器中的event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中的event-loop"}},[t._v("#")]),t._v(" 浏览器中的Event Loop")]),t._v(" "),a("p",[a("code",[t._v("Javascript")]),t._v(" 有一个 "),a("code",[t._v("main thread")]),t._v(" 主线程和 "),a("code",[t._v("call-stack")]),t._v(" 调用栈(执行栈)，所有的任务都会被放到调用栈等待主线程执行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/eventLoop.png",alt:"alt"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),a("ul",[a("li",[t._v("执行栈在执行完"),a("code",[t._v("同步任务")]),t._v("后，查看执行栈是否为空，如果执行栈为空，就会去检查"),a("code",[t._v("微任务")]),t._v("("),a("code",[t._v("microTask")]),t._v(")队列是否为空，如果微任务队列为空的话，就执行"),a("code",[t._v("Task")]),t._v("（宏任务）；如果微任务队列不为空的话，就一次性执行完所有的微任务。")]),t._v(" "),a("li",[t._v("每次单个"),a("code",[t._v("宏任务")]),t._v("执行完毕后，会去检查"),a("code",[t._v("微任务")]),t._v("("),a("code",[t._v("microTask")]),t._v(")队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置"),a("code",[t._v("微任务")]),t._v("("),a("code",[t._v("microTask")]),t._v(")队列为"),a("code",[t._v("null")]),t._v("，然后再执行"),a("code",[t._v("宏任务")]),t._v("，如此循环。")])])]),t._v(" "),a("p",[t._v("🌰：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//script start => script end => promise1 => promise2 => setTimeout")]),t._v("\n")])])]),a("p",[t._v("上面代码执行过程可以参考"),a("a",{attrs:{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("tasks-microtasks-queues-and-schedules"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script start'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async2 end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("async1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Promise'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'script end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("async/await")]),t._v(" 在底层转换成了 "),a("code",[t._v("promise")]),t._v(" 和 "),a("code",[t._v("then")]),t._v(" 回调函数。\n每次我们使用 "),a("code",[t._v("await")]),t._v(", 解释器都创建一个 "),a("code",[t._v("promise")]),t._v(" 对象，然后把剩下的 "),a("code",[t._v("async")]),t._v(" 函数中的操作放到 "),a("code",[t._v("then")]),t._v(" 回调函数中。")]),t._v(" "),a("p",[t._v("我们可以把上面两个async函数改造成下面的代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async2 end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Promise.resolve() 将代码插入微任务队列尾部")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve 再次插入微任务队列尾部")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async1 end'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"关于73以下版本和73版本的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于73以下版本和73版本的区别"}},[t._v("#")]),t._v(" 关于73以下版本和73版本的区别")]),t._v(" "),a("ul",[a("li",[t._v("在老版本版本以下，先执行"),a("code",[t._v("promise1")]),t._v("和"),a("code",[t._v("promise2")]),t._v("，再执行"),a("code",[t._v("async1")]),t._v("。")]),t._v(" "),a("li",[t._v("在73版本，先执行"),a("code",[t._v("async1")]),t._v("再执行"),a("code",[t._v("promise1")]),t._v("和"),a("code",[t._v("promise2")]),t._v("。")])]),t._v(" "),a("p",[t._v("代码详解：")]),t._v(" "),a("h4",{attrs:{id:"_73以下版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_73以下版本"}},[t._v("#")]),t._v(" 73以下版本")]),t._v(" "),a("ul",[a("li",[t._v("首先，打印"),a("code",[t._v("script start")]),t._v("，调用"),a("code",[t._v("async1()")]),t._v("时，返回一个"),a("code",[t._v("Promise")]),t._v("，所以打印出来"),a("code",[t._v("async2 end")]),t._v("。")]),t._v(" "),a("li",[t._v("每个 "),a("code",[t._v("await")]),t._v("，会新产生一个"),a("code",[t._v("promise")]),t._v("，但这个过程本身是异步的，所以该await后面不会立即调用。")]),t._v(" "),a("li",[t._v("继续执行同步代码，打印"),a("code",[t._v("Promise")]),t._v("和"),a("code",[t._v("script end")]),t._v("，将"),a("code",[t._v("then")]),t._v("函数放入微任务队列中等待执行。")]),t._v(" "),a("li",[t._v("同步执行完成之后，检查微任务队列是否为"),a("code",[t._v("null")]),t._v("，然后按照先入先出规则，依次执行。")]),t._v(" "),a("li",[t._v("然后先执行打印"),a("code",[t._v("promise1")]),t._v("，此时"),a("code",[t._v("then")]),t._v("的回调函数返回"),a("code",[t._v("undefined")]),t._v("，此时又有"),a("code",[t._v("then")]),t._v("的链式调用，又放入微任务队列中，再次打印"),a("code",[t._v("promise2")]),t._v("。")]),t._v(" "),a("li",[t._v("再回到"),a("code",[t._v("await")]),t._v("的位置执行返回的 "),a("code",[t._v("Promise")]),t._v(" 的 "),a("code",[t._v("resolve")]),t._v(" 函数，这又会把 "),a("code",[t._v("resolve")]),t._v(" 丢到微任务队列中，打印"),a("code",[t._v("async1 end")]),t._v("。")]),t._v(" "),a("li",[t._v("当微任务队列为空时，执行宏任务，打印"),a("code",[t._v("setTimeout")]),t._v("。")])]),t._v(" "),a("h4",{attrs:{id:"谷歌-金丝雀73版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#谷歌-金丝雀73版本"}},[t._v("#")]),t._v(" 谷歌（金丝雀73版本）")]),t._v(" "),a("ul",[a("li",[t._v("如果传递给 "),a("code",[t._v("await")]),t._v(" 的值已经是一个 "),a("code",[t._v("Promise")]),t._v("，那么这种优化避免了再次创建 "),a("code",[t._v("Promise")]),t._v(" 包装器，在这种情况下，我们从最少三个 "),a("code",[t._v("microtick")]),t._v(" 到只有一个 "),a("code",[t._v("microtick")]),t._v("。")]),t._v(" "),a("li",[t._v("引擎不再需要为 "),a("code",[t._v("await")]),t._v(" 创造 "),a("code",[t._v("throwaway Promise")]),t._v(" - 在绝大部分时间。")]),t._v(" "),a("li",[t._v("现在 "),a("code",[t._v("promise")]),t._v(" 指向了同一个 "),a("code",[t._v("Promise")]),t._v("，所以这个步骤什么也不需要做。然后引擎继续像以前一样，创建 "),a("code",[t._v("throwaway Promise")]),t._v("，安排 "),a("code",[t._v("PromiseReactionJob")]),t._v(" 在"),a("code",[t._v("microtask")]),t._v(" 队列的下一个 "),a("code",[t._v("tick")]),t._v(" 上恢复异步函数，暂停执行该函数，然后返回给调用者。")])]),t._v(" "),a("p",[t._v("具体详情查看"),a("a",{attrs:{href:"https://v8.js.cn/blog/fast-async/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);