(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{413:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数据源切换失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据源切换失败"}},[s._v("#")]),s._v(" 数据源切换失败")]),s._v(" "),t("h2",{attrs:{id:"_1-开启了spring的事务。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-开启了spring的事务。"}},[s._v("#")]),s._v(" 1.开启了spring的事务。")]),s._v(" "),t("p",[s._v("原因： spring开启事务后会维护一个ConnectionHolder，保证在整个事务下，都是用同一个数据库连接。")]),s._v(" "),t("p",[s._v("更多事务问题 https://github.com/baomidou/dynamic-datasource-spring-boot-starter/wiki/Transation-Questions 。")]),s._v(" "),t("h2",{attrs:{id:"_2-方法内部调用。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法内部调用。"}},[s._v("#")]),s._v(" 2.方法内部调用。")]),s._v(" "),t("p",[s._v("查看以下示例 回答 外部调用 "),t("code",[s._v("userservice.test1()")]),s._v(" 能在执行到 "),t("code",[s._v("test2()")]),s._v(" 切换到second数据源吗？")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@DS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do something")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@DS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"second"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// do something")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("答案："),t("strong",[s._v("！！！不能不能不能！！！！")]),s._v(" 数据源核心原理是基于aop代理实现切换，内部方法调用不会使用aop。")]),s._v(" "),t("p",[s._v("解决方法:")]),s._v(" "),t("p",[s._v("把test2()方法提到另外一个service,单独调用。")]),s._v(" "),t("h2",{attrs:{id:"_3-shiroaop代理。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-shiroaop代理。"}},[s._v("#")]),s._v(" 3.shiroAop代理。")]),s._v(" "),t("p",[s._v("在shiro框架中(UserRealm)使用@Autowire 注入的类, 缓存注解和事务注解都失效。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("@Component\npublic class UserRealm extends AuthorizingRealm {\n\n    @Lazy\n    @Autowired\n    private IUserService userService;\n\t//... 省略其他无关的内容\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("解决方法:"),t("br"),s._v("\n1.在Shiro框架中注入Bean时, 不使用@Autowire, 使用ApplicationContextRegister.getBean()方法,手动注入bean。")]),s._v(" "),t("p",[s._v("2.使用@Autowire+@Lazy注解,设置注入到Shiro框架的Bean延时加载(推荐)。")]),s._v(" "),t("h2",{attrs:{id:"_4-postconstruct初始化顺序。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-postconstruct初始化顺序。"}},[s._v("#")]),s._v(" 4.PostConstruct初始化顺序。")]),s._v(" "),t("p",[s._v("初始化包括: @PostConstruct 注解, InitializingBean接口, 自定义init-method")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyConfiguration")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserMapper")]),s._v(" userMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@DS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"slave"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@PostConstruct")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 无法选择正确的数据源")]),s._v("\n        userMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("解决方法：监听容器启动完成事件, 在容器完成后做初始化。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyConfiguration")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@DS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"slave"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EventListener")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onApplicationEvent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ContextRefreshedEvent")]),s._v(" event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 成功选择正确的数据源")]),s._v("\n        userMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("相关spring源码 : `org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory#initializeBean")]),s._v(" "),t("p",[s._v("在初始化完成后, bean 进入增强阶段, 所以这个阶段的任何AOP都是无效的。")]),s._v(" "),t("h2",{attrs:{id:"_5-druid版本过低。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-druid版本过低。"}},[s._v("#")]),s._v(" 5.Druid版本过低。")]),s._v(" "),t("p",[s._v("请升级druid1.1.22及以上版本，这个版本修复了在高并发下偶发的切换失效问题。")]),s._v(" "),t("h2",{attrs:{id:"_6-async或者java8的parallelstream并行流之类方法。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-async或者java8的parallelstream并行流之类方法。"}},[s._v("#")]),s._v(" 6.@Async或者java8的ParallelStream并行流之类方法。")]),s._v(" "),t("p",[s._v("这种情况都是新开了线程去处理，不受当前线程管控了。 可以在新开的方法上加对应的DS注解解决。")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"扩展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[s._v("#")]),s._v(" 扩展阅读")]),s._v(" "),t("h3",{attrs:{id:"shiro失效原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shiro失效原因"}},[s._v("#")]),s._v(" shiro失效原因")]),s._v(" "),t("p",[s._v("在spring初始化bean的阶段中,大致上分为三段: BeanFactoryPostProcessor -> BeanPostProcessor -> Bean")]),s._v(" "),t("p",[s._v("这三种都是单例bean. 只不过会按照这个优先级进行初始化, shiro引起AOP失效的原因:")]),s._v(" "),t("p",[s._v("ShiroFilterFactoryBean 是一个 BeanPostProcessor ,  比普通的单例Bean都优先加载, 所以他依赖注入的bean都无法正确的进行切面。")]),s._v(" "),t("p",[s._v("ShiroFilterFactoryBean 实际的依赖情况:"),t("br"),s._v("\nShiroFilterFactoryBean ->  SecurityManager -> UserRealm -> IUserService")]),s._v(" "),t("p",[s._v("IUserService依赖的其他 service 也会失效\nIUserService-> MenuService -> RoleService")])])}),[],!1,null,null,null);a.default=e.exports}}]);