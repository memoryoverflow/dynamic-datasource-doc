(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{405:function(a,s,t){"use strict";t.r(s);var n=t(42),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"手动创建数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动创建数据源"}},[a._v("#")]),a._v(" 手动创建数据源")]),a._v(" "),t("p",[a._v("知道了如何动态增减数据源，但不知道如何解析自己数据源，来动态创建一个DataSource。")]),a._v(" "),t("p",[t("code",[a._v("com.baomidou.dynamic.datasource.DataSourceCreator")]),a._v("   是一个数据源创建BEAN，对外提供了简便的创建不同类型数据源的需求。")]),a._v(" "),t("p",[a._v("熟悉spring的朋友也可以直接调用原生的DataSourceBuilder来创建简单数据源。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//核心源码简述")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceCreator")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//最外层创建数据源方法，一般直接调用这个就可以")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSource")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("createDataSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceProperty")]),a._v(" dataSourceProperty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//项目只对druid和hikari做了特殊处理，支持一些参数和配置，其他的类型只能调用这个")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSource")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("createBasicDataSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceProperty")]),a._v(" dataSourceProperty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建jndi数据源，只要配置参数设置了jndiName就会创建，优先级最高")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSource")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("createJNDIDataSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" jndiName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建druid数据源,如果未指定type,druid的优先于hikari")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSource")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("createDruidDataSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceProperty")]),a._v(" dataSourceProperty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//创建hikari数据源")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSource")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("createHikariDataSource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceProperty")]),a._v(" dataSourceProperty"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);