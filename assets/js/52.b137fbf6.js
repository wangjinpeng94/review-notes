(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{252:function(a,t,e){"use strict";e.r(t);var l=e(0),s=Object(l.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"volatile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile"}},[a._v("#")]),a._v(" volatile")]),a._v(" "),e("p",[a._v("介绍volatile的内存语义及volatile内存语义的实现")]),a._v(" "),e("h1",{attrs:{id:"volatile的特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile的特性"}},[a._v("#")]),a._v(" volatile的特性")]),a._v(" "),e("p",[a._v("Java的volatile关键字用于标记一个变量“应当存储在主存”。更确切地说，每次读取volatile变量，都应该从主存读取，而不是从CPU缓存读取。每次写入一个volatile变量，应该写到主存中，而不是仅仅写到CPU缓存。")]),a._v(" "),e("p",[a._v("实际上，从Java 5开始，volatile关键字除了保证volatile变量从主存读写外，还提供了更多的保障。")]),a._v(" "),e("h2",{attrs:{id:"变量可见性问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量可见性问题"}},[a._v("#")]),a._v(" 变量可见性问题")]),a._v(" "),e("p",[a._v("Java的volatile关键字能保证变量修改后，对各个线程是可见的")]),a._v(" "),e("h1",{attrs:{id:"volatile写-读建立的happens-before关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile写-读建立的happens-before关系"}},[a._v("#")]),a._v(" volatile写-读建立的happens-before关系")]),a._v(" "),e("p",[a._v("从JSR-133开始(即从JDK5开始)，volatile变量的写-读可以实现线程之间的通信。从内存语义的角度来说：")]),a._v(" "),e("ul",[e("li",[a._v("volatile的写-读与锁的释放-获取有相同的内存效果:")]),a._v(" "),e("li",[a._v("volatile写和锁的释放有相同的内存语义;volatile读与锁的获取有相同的内存语义。")])]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("VolatileExample")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 普通共享变量")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("volatile")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" flag "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// volatile共享变量")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("writer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 写线程A操作")]),a._v("\n        a "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//1")]),a._v("\n        flag "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("              "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//2")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("reader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("       "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 读线程B操作")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("flag"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("               "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//3")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//4")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("valueOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// do ...")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("假设线程A执行writer()方法之后，线程B执行reader()方法。根据happens-before规则，这个过程建立的happens-before关系可以分为3类:")]),a._v(" "),e("ol",[e("li",[a._v("根据程序次序规则，1 happens-before 2;3 happens-before 4。")]),a._v(" "),e("li",[a._v("根据volatile规则，2 happens-before 3。")]),a._v(" "),e("li",[a._v("根据happens-before的传递性规则，1 happens-before 4。")])]),a._v(" "),e("p",[a._v("上述happens-before关系的图形化表现形式如下："),e("br"),a._v(" "),e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/volatile-happens-before%E5%85%B3%E7%B3%BB.png",alt:"volatile-happens-before关系"}})]),a._v(" "),e("p",[a._v("在上图中，每一个箭头链接的两个节点，代表了一个happens-before关系。")]),a._v(" "),e("ul",[e("li",[a._v("黑色箭头表示程 序顺序规则;")]),a._v(" "),e("li",[a._v("橙色箭头表示volatile规则;")]),a._v(" "),e("li",[a._v("蓝色箭头表示组合这些规则后提供的happens-before保证。")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("这里A线程写一个volatile变量后，B线程读同一个volatile变量。A线程在写volatile变量之 前所有可见的共享变量，在B线程读同一个volatile变量后，将立即变得对B线程可见。")]),a._v(" "),e("h1",{attrs:{id:"volatile写-读的内存语义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile写-读的内存语义"}},[a._v("#")]),a._v(" volatile写-读的内存语义")]),a._v(" "),e("ol",[e("li",[a._v("volatile写的内存语义：当写一个volatile变量时，JMM会把该线程对应的本地内存中的共享变量值刷新到主内存")]),a._v(" "),e("li",[a._v("volatile读的内存语义：当读一个volatile变量时，JMM会把该线程对应的本地内存置为无效。线程接下来将从主内存中读取共享变量。")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/volatile%E5%86%99-%E8%AF%BB%E7%9A%84%E5%86%85%E5%AD%98%E8%AF%AD%E4%B9%89.png",alt:"volatile写-读的内存语义"}})]),a._v(" "),e("p",[a._v("如果我们把volatile写和volatile读两个步骤综合起来看的话，在读线程B读一个volatile变量后，写线程A在写这个volatile变量之前所有可见的共享变量的值都将立即变得对读线程B可见。")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("下面对volatile写和volatile读的内存语义做个总结。")]),a._v(" "),e("ul",[e("li",[a._v("线程A写一个volatile变量，实质上是线程A向接下来将要读这个volatile变量的某个线程发出了(其对共享变量所做修改的)消息。")]),a._v(" "),e("li",[a._v("线程B读一个volatile变量，实质上是线程B接收了之前某个线程发出的(在写这个volatile变量之前对共享变量所做修改的)消息。")]),a._v(" "),e("li",[a._v("线程A写一个volatile变量，随后线程B读这个volatile变量，这个过程实质上是线程A通过主内存向线程B发送消息。")])]),a._v(" "),e("h1",{attrs:{id:"volatile内存语义的实现？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile内存语义的实现？"}},[a._v("#")]),a._v(" volatile内存语义的实现？")]),a._v(" "),e("p",[a._v("JMM如何实现volatile写/读的内存语义？基础概念提到过重排序分为编译器重排序和处理器重排序。为了实现volatile内存语义，JMM会分别限制这两种类型的重排序类型。")]),a._v(" "),e("p",[a._v("该表为JMM针对编译器制定的volatile重排序规则："),e("br"),a._v(" "),e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/volatile%E9%87%8D%E6%8E%92%E5%BA%8F%E8%A7%84%E5%88%99%E8%A1%A8.png",alt:"volatile重排序规则表"}})]),a._v(" "),e("ul",[e("li",[a._v("当第二个操作是volatile写时，不管第一个操作是什么，都不能重排序。这个规则确保volatile写之前的操作不会被编译器重排序到volatile写之后。")]),a._v(" "),e("li",[a._v("当第一个操作是volatile读时，不管第二个操作是什么，都不能重排序。这个规则确保volatile读之后的操作不会被编译器重排序到volatile读之前。")]),a._v(" "),e("li",[a._v("当第一个操作是volatile写，第二个操作是volatile读时，不能重排序。")])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("对于编译器来说，发现一个最优布置来最小化插入屏障的总数几乎不可能。为此，JMM采取保守策略。下面是基于保守策略的JMM内存屏障插入策略：")]),a._v(" "),e("ul",[e("li",[a._v("在每个volatile写操作的前面插入一个StoreStore屏障。")]),a._v(" "),e("li",[a._v("在每个volatile写操作的后面插入一个StoreLoad屏障。")]),a._v(" "),e("li",[a._v("在每个volatile读操作的后面插入一个LoadLoad屏障。")]),a._v(" "),e("li",[a._v("在每个volatile读操作的后面插入一个LoadStore屏障。")])]),a._v(" "),e("p",[a._v("上述内存屏障插入策略非常保守，但它可以保证在任意处理器平台，任意的程序中都能得到正确的volatile内存语义。")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("在实际执行时，只要不改变volatile写-读的内存语义，编译器可以根据具体情况省略不必要的屏障。"),e("br"),a._v("\n《final域的内存语义#final语义在处理器中的实现》提到过，X86处理器仅会对写-读操作做重排序。X86不会对读-读、读-写和写-写操作做重排序，因此在X86处理器中会省略掉这3种操作类型对应的内存屏障。"),e("br"),a._v("\n在X86中，JMM仅需在volatile写后面插入一个StoreLoad屏障即可正确实现volatile写-读的内存语义。"),e("br"),a._v("\n这意味着在X86处理器中volatile写的开销比volatile读的开销会大很多(因为执行StoreLoad屏障开销会比较大)。")]),a._v(" "),e("h2",{attrs:{id:"volatile写插入内存屏障后生成的指令序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile写插入内存屏障后生成的指令序列"}},[a._v("#")]),a._v(" volatile写插入内存屏障后生成的指令序列")]),a._v(" "),e("p",[a._v("volatile写插入内存屏障后生成的指令序列示意图如下：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/volatile%E5%86%99%E6%8F%92%E5%85%A5%E5%86%85%E5%AD%98%E5%B1%8F%E9%9A%9C%E5%90%8E%E7%94%9F%E6%88%90%E7%9A%84%E6%8C%87%E4%BB%A4%E5%BA%8F%E5%88%97%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"volatile写插入内存屏障后生成的指令序列示意图"}})]),a._v(" "),e("p",[a._v("图中的StoreStore屏障可以保证在volatile写之前，其前面的所有普通写操作已经对任意处理器可见了。这是因为StoreStore屏障将保障上面所有的普通写在volatile写之前刷新到主内存。")]),a._v(" "),e("p",[a._v("volatile写后面的StoreLoad屏障作用是避免volatile写与后面可能有的volatile读/写操作重排序。"),e("br"),a._v("\n因为编译器常常无法准确判断在一个volatile写的后面 是否需要插入一个StoreLoad屏障(比如，一个volatile写之后方法立即return)。\n为了保证能正确实现volatile的内存语义，JMM在采取了保守策略:在每个volatile写的后面，或者在每个volatile 读的前面插入一个StoreLoad屏障。\n从整体执行效率的角度考虑，JMM最终选择了在每个volatile写的后面插入一个StoreLoad屏障。因为volatile写-读内存语义的常见使用模式是:一个写线程写volatile变量，多个读线程读同一个volatile变量。当读线程的数量大大超过写线程时，选择在volatile写之后插入StoreLoad屏障将带来可观的执行效率的提升。从这里可以看到JMM在实现上的一个特点:首先确保正确性，然后再去追求执行效率。")]),a._v(" "),e("h2",{attrs:{id:"volatile读插入内存屏障后生成的指令序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile读插入内存屏障后生成的指令序列"}},[a._v("#")]),a._v(" volatile读插入内存屏障后生成的指令序列")]),a._v(" "),e("p",[a._v("volatile读插入内存屏障后生成的指令序列示意图如下：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/language/java-concurrency/_images/volatile%E8%AF%BB%E6%8F%92%E5%85%A5%E5%86%85%E5%AD%98%E5%B1%8F%E9%9A%9C%E5%90%8E%E7%94%9F%E6%88%90%E7%9A%84%E6%8C%87%E4%BB%A4%E5%BA%8F%E5%88%97%E7%A4%BA%E6%84%8F%E5%9B%BE.png",alt:"volatile读插入内存屏障后生成的指令序列示意图"}})]),a._v(" "),e("p",[a._v("图中的LoadLoad屏障用来禁止处理器把上面的volatile读与下面的普通读重排序。LoadStore屏障用来禁止处理器把上面的volatile读与下面的普通写重排序。")]),a._v(" "),e("h1",{attrs:{id:"jsr-133为什么要增强volatile的内存语义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsr-133为什么要增强volatile的内存语义"}},[a._v("#")]),a._v(" JSR-133为什么要增强volatile的内存语义")]),a._v(" "),e("h1",{attrs:{id:"何时使用volatile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用volatile"}},[a._v("#")]),a._v(" 何时使用volatile")]),a._v(" "),e("h1",{attrs:{id:"volatile的性能考量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile的性能考量"}},[a._v("#")]),a._v(" volatile的性能考量")]),a._v(" "),e("h1",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://tutorials.jenkov.com/java-concurrency/volatile.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://tutorials.jenkov.com/java-concurrency/volatile.html"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);