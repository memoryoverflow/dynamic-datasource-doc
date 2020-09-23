module.exports = {
  port: "3000",
  title: "Dynamic Datasource",
  description: "Dynamic Datasource",
  markdown: {
    lineNumbers: true,
  },
  locales: {
    "/en/": {
      lang: "en-US",
      title: "dynamic-datasource",
      description: "A dynamic-datasource based on the springBoot",
    },
    "/": {
      lang: "zh-CN",
      title: "动态数据源",
      description: "一个基于SpringBoot的动态多数据源组件",
    },
  },
  themeConfig: {
    repo: "baomidou/dynamic-datasource-spring-boot-starter",
    docsRepo: "baomidou/dynamic-datasource-doc",
    smoothScroll: true,
    editLinks: true,
    locales: {
      "/en/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "help edit doc",
        lastUpdated: "lastUpdated",
        nav: genNav(false),
        sidebar: {
          "/en/guide/": genGuideSidebar(false),
        },
      },
      "/": {
        selectText: "Language",
        label: "简体中文",
        editLinkText: "协助修正补充文档",
        lastUpdated: "上次更新",
        nav: genNav(true),
        sidebar: {
          "/guide/": genGuideSidebar(true),
        },
      },
    },
  },
};

function genNav(isZh) {
  return [
    {
      text: "生态",
      items: [
        {
          text: "MybatisPlus",
          link: "https://mybatis.plus/",
        },
        {
          text: "MybatisX插件",
          link: "https://github.com/baomidou/MybatisX",
        },
        {
          text: "Kisso 单点登录",
          link: "https://github.com/baomidou/kisso",
        },
        {
          text: "Lock4j 分布式锁",
          link: "https://gitee.com/baomidou/lock4j-spring-boot-starter",
        },
        {
          text: "kaptcha 验证码启动器",
          link: "https://gitee.com/baomidou/kaptcha-spring-boot-starter",
        },
      ],
    },
    {
      text: isZh ? "示例项目" : "samples",
      link: "https://gitee.com/baomidou/dynamic-datasource-samples",
    },
    { text: isZh ? "捐赠" : "donate", link: "/guide/donate/" },
  ];
}

function genGuideSidebar(isZh) {
  return [
    {
      title: isZh ? "核心" : "Core",
      collapsable: false,
      children: ["", "Star"],
    },
    {
      title: isZh ? "第三方集成" : "Integration",
      collapsable: false,
      children: [
        "integration/Druid",
        "integration/HikariCP",
        "integration/MybatisPlus",
        "integration/Jndi",
        "integration/P6spy",
        "integration/Quartz",
        "integration/Seata",
        "integration/ShardingJdbc",
      ],
    },
    {
      title: isZh ? "自定义" : "Customize",
      collapsable: false,
      children: [
        "customize/Annotation",
        "customize/Provider",
        "customize/Strategy",
      ],
    },
    {
      title: isZh ? "进阶使用" : "Advanced",
      collapsable: false,
      children: [
        "advance/Encode",
        "advance/Init-Schema-Data",
        "advance/Add-Remove-DataSource",
        "advance/Manual-Create-DataSource",
        "advance/Dynamic-Analysis-DataSource",
        "advance/Read-Write-Separation",
      ],
    },
    {
      title: "FAQ",
      collapsable: false,
      children: [
        "faq/Failed-Switch-Database",
        "faq/Transation-Questions",
        "faq/Debug-SourceCode",
      ],
    },
  ];
}
