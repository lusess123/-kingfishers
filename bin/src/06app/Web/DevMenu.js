define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.MenuObj = [
        {
            CODE_VALUE: "$menu$key3$", CODE_TEXT: "开发者中心", IsDev: true,
            Children: [
                {
                    CODE_VALUE: "$menu$key5$", CODE_TEXT: "开发工具",
                    Children: [
                        { CODE_VALUE: "$iframe$/areas/dev/dev/db.aspx$", CODE_TEXT: "数据库初始化" },
                        { CODE_VALUE: "$iframe$/areas/dev/dev/menuxml.aspx$", CODE_TEXT: "菜单配置" },
                        {
                            CODE_VALUE: "$menu$key51$", CODE_TEXT: "代码生成",
                            Children: [
                                { CODE_VALUE: "$iframe$/areas/dev/dev/formxml.aspx$", CODE_TEXT: "xml->cs" },
                                { CODE_VALUE: "$TSPAGEBUILDERPAGE$组件名字$TypeScriptDom", CODE_TEXT: "ts组件生成" },
                                { CODE_VALUE: "$TSPAGEBUILDERPAGE$控件名字$TypeScriptCol", CODE_TEXT: "ts控件生成" },
                                { CODE_VALUE: "$TSPAGEBUILDERPAGE$页面名字$TypeScriptPage", CODE_TEXT: "ts页面生成" },
                            ]
                        }
                    ]
                },
                {
                    CODE_VALUE: "$menu$key52$", CODE_TEXT: "运维工具",
                    Children: [
                        { CODE_VALUE: "$IIsSitePage$", CODE_TEXT: "站点查看" },
                        { CODE_VALUE: "$PlugListPage$", CODE_TEXT: "插件统计" },
                        { CODE_VALUE: "$WebConfigFilePage$", CODE_TEXT: "webconfig" },
                        {
                            CODE_VALUE: "$menu$key511$", CODE_TEXT: "日志查看",
                            Children: [
                                { CODE_VALUE: "$FileReadPage$xml/Atawlogs/error.txt$", CODE_TEXT: "错误日志" },
                                //sql_submit_error
                                { CODE_VALUE: "$FileReadPage$xml/Atawlogs/sql_submit_error.txt$", CODE_TEXT: "sql提交错误" },
                                { CODE_VALUE: "$FileReadPage$xml/Atawlogs/sql_query_error.txt$", CODE_TEXT: "sql查询错误" },
                                { CODE_VALUE: "$FileReadPage$xml/Atawlogs/plugin.txt$", CODE_TEXT: "插件日志" },
                                { CODE_VALUE: "$FileReadPage$xml/Atawlogs/rquest_ask.txt$", CODE_TEXT: "请求数据" },
                                { CODE_VALUE: "$FileReadPage$xml/Atawlogs/jsondata.json", CODE_TEXT: "数据返回" },
                                { CODE_VALUE: "$ErrorLogPage$", CODE_TEXT: "错误日志静态页" },
                                { CODE_VALUE: "$FileReadPluginPage$", CODE_TEXT: "插件日志静态页" }
                            ]
                        }
                    ]
                },
                {
                    CODE_VALUE: "$menu$key611$", CODE_TEXT: "文档中心",
                    Children: [
                        {
                            CODE_VALUE: "$menu$key6111$", CODE_TEXT: "前端开发",
                            Children: [
                                { CODE_VALUE: "$allcolpage$", CODE_TEXT: "所有的控件demo" },
                                { CODE_VALUE: "$FrontDevDocPage$", CODE_TEXT: "开发工具下载安装" },
                                {
                                    CODE_VALUE: "$iframe$http://note.youdao.com/noteshare?id=2dd2edb01c18eed17e9540dcf8424ea2", CODE_TEXT: "开发案例1"
                                },
                                { CODE_VALUE: "$iframe$http://jonschlinkert.github.io/remarkable/demo/$", CODE_TEXT: "MarkDown例子" },
                            ]
                        },
                        { CODE_VALUE: "$ProDevDocPage$", CODE_TEXT: "后端开发" },
                        {
                            CODE_VALUE: "$menu$key61111_1$", CODE_TEXT: "配置文档查看",
                            Children: [
                                { CODE_VALUE: "$XsdPage$MvcConfig$", CODE_TEXT: "MvcConfig路由配置" },
                                { CODE_VALUE: "$XsdPage$ModuleConfig$", CODE_TEXT: "ModuleConfig模块配置" },
                                { CODE_VALUE: "$XsdPage$DataFormConfig$", CODE_TEXT: "DataFormConfig表单" },
                                { CODE_VALUE: "$XsdPage$AtawApplicationConfig$", CODE_TEXT: "AtawApplicationConfig程序配置" },
                                { CODE_VALUE: "$XsdPage$FileManagementConfig$", CODE_TEXT: "FileManagementConfig文件配置" }
                            ]
                        },
                        { CODE_VALUE: "$DbDevDocPage$", CODE_TEXT: "数据库规范" },
                        { CODE_VALUE: "$UpdatelogPage$", CODE_TEXT: "平台更新日志" },
                        {
                            CODE_VALUE: "$menu$key6111$", CODE_TEXT: "计划文档",
                            Children: [
                                { CODE_VALUE: "$iframe$http://note.youdao.com/share/?token=711B54E06FF5445B8B216E5EDDC4CD76&gid=23186205$", CODE_TEXT: "平台任务" },
                                { CODE_VALUE: "$iframe$http://note.youdao.com/groupshare/?token=E96503EF15C648A4952354092098593F&gid=23186205$", CODE_TEXT: "平台基础清单" },
                                {
                                    CODE_VALUE: "$menu$key61113$", CODE_TEXT: "9腾文档",
                                    Children: [
                                        { CODE_VALUE: "$iframe$http://note.youdao.com/share/?id=6ee339e83e029cce5fe20148f3e5c8db&type=note$", CODE_TEXT: "功能开发历史" },
                                        { CODE_VALUE: "$iframe$http://note.youdao.com/share/?token=7622FE17FE0441BCADBD059B2CCFB47E&gid=25392580$", CODE_TEXT: "新功能清单" },
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    CODE_VALUE: "$menu$key6$", CODE_TEXT: "平台配置",
                    Children: [
                        { CODE_VALUE: "$_ApplicationPage$", CODE_TEXT: "Application" },
                        { CODE_VALUE: "$DBPage$", CODE_TEXT: "DB" },
                        { CODE_VALUE: "$XMLPanelPage$", CODE_TEXT: "XMLPanel" },
                        { CODE_VALUE: "$FileMConfigPage$", CODE_TEXT: "FileManagementConfig" },
                        { CODE_VALUE: "$MvcConfigPage$", CODE_TEXT: "MvcConfig" },
                    ]
                },
                {
                    CODE_VALUE: "$menu$key211$", CODE_TEXT: "demo页面", IsDev: true,
                    Children: [
                        { CODE_VALUE: "$todolistpage$", CODE_TEXT: "待办事项" },
                        { CODE_VALUE: "$TreeTestPage$", CODE_TEXT: "树组件测试页" },
                        { CODE_VALUE: "$reportPage$", CODE_TEXT: "报表" },
                        { CODE_VALUE: "$BASELISTPAGE$", CODE_TEXT: "列表组件" },
                        { CODE_VALUE: "$BASEMDPAGE$", CODE_TEXT: "主从表测试" },
                        { CODE_VALUE: "$test1$", CODE_TEXT: "定时器组件" },
                        { CODE_VALUE: "$ORGLISTPAGE$", CODE_TEXT: "组织机构2" },
                        { CODE_VALUE: "$$module/AllControls/AllControls$", CODE_TEXT: "配置页面" },
                        //?#$$module/workflow/myWork
                        { CODE_VALUE: "$$module/workflow/myWork$", CODE_TEXT: "我的工作" },
                        //$$module/plug$
                        { CODE_VALUE: "$$module/plug$", CODE_TEXT: "插件中心" },
                        { CODE_VALUE: "$jsonviewpage$", CODE_TEXT: "菜单树形" },
                        {
                            CODE_VALUE: "$menu$key1$", CODE_TEXT: "基础信息", IsDev: true,
                            Children: [
                                { CODE_VALUE: "$userinfo$", CODE_TEXT: "用户信息" }
                            ]
                        },
                        {
                            CODE_VALUE: "$menu$key2$", CODE_TEXT: "权限管理", IsDev: true,
                            Children: [
                                { CODE_VALUE: "$menupage$", CODE_TEXT: "基础菜单" },
                                { CODE_VALUE: "$group$", CODE_TEXT: "组织机构" },
                                { CODE_VALUE: "$role$", CODE_TEXT: "角色管理" },
                                { CODE_VALUE: "$UserManagerPage$", CODE_TEXT: "用户管理" },
                                { CODE_VALUE: "$rightPage$", CODE_TEXT: "权限配置原型" },
                                { CODE_VALUE: "$rightMainPage$", CODE_TEXT: "权限配置页面" }
                            ]
                        },
                        {
                            CODE_VALUE: "$menu$key3$", CODE_TEXT: "新权限管理", IsDev: true,
                            Children: [
                                { CODE_VALUE: "$NewrightMainPage$", CODE_TEXT: "新权限配置页面" }
                            ]
                        },
                    ]
                },
                {
                    CODE_VALUE: "$menu$key4$", CODE_TEXT: "团队成员",
                    Children: [
                        { CODE_VALUE: "$zykTestPage$", CODE_TEXT: "郑瑜琨" },
                        { CODE_VALUE: "$sjTestPage$", CODE_TEXT: "沈君" },
                        {
                            CODE_VALUE: "$hdzTestPage$", CODE_TEXT: "黄冬珠", IsDev: true,
                            Children: [
                                { CODE_VALUE: "$HXsdPage$", CODE_TEXT: "Xsd文档浏览器" },
                                { CODE_VALUE: "$PluginLogPage$", CODE_TEXT: "插件日志" }
                            ]
                        },
                        { CODE_VALUE: "$sqTestPage$", CODE_TEXT: "邵祺" },
                        { CODE_VALUE: "$zqTestPage$", CODE_TEXT: "张奇" },
                        { CODE_VALUE: "$wmhTestPage$", CODE_TEXT: "王梦辉" },
                        { CODE_VALUE: "$zhmTestPage$", CODE_TEXT: "周欢明" },
                        { CODE_VALUE: "$smmTestPage$", CODE_TEXT: "沈明明" },
                        {
                            CODE_VALUE: "$cxjTestPage$", CODE_TEXT: "陈晓洁",
                            Children: [
                                { CODE_VALUE: "$cxjTestPage$", CODE_TEXT: "Test" },
                                { CODE_VALUE: "$CommentPage$", CODE_TEXT: "评论组件" }
                            ]
                        },
                        { CODE_VALUE: "$xbgTestPage$", CODE_TEXT: "谢炳概" }
                    ]
                }
            ]
        }
    ];
});
