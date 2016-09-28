define(["require", "exports", "react-dom", "./src/06app/Web/Hull", "./src/04page/BaseWebPage", "./src/06app/Feed/WorkBench/Feed/Feed", "./src/06app/Feed/FeedPage", "./src/06app/TreeTest/TreeTest", "./src/06app/UserDetail/UserDetail", "./src/06app/Pwd/ChangePWD"], function (require, exports, ReactDOM, hullFile, basewedPageFile, feedFile, feedPageFile, treeTestFile, userDetailFile, passwordFile) {
    "use strict";
    feedFile;
    feedPageFile;
    treeTestFile;
    userDetailFile;
    passwordFile;
    var _reg = basewedPageFile._reg;
    //核心页面
    _reg("TODOLISTPAGE", "06app/TodoList/TODOLISTPAGE");
    _reg("ALLCOLPAGE", "06app/SDK/AllColPage");
    _reg("workflow", "04page/workflow/workflowPage");
    _reg("DEFAULT", "04page/Viewpage");
    _reg("VIEW", "04page/ViewModulePage");
    _reg("IFRAME", "04page/IframePage");
    _reg("JSONVIEWPAGE", "06app/sdk/JsonViewPage");
    _reg("TSPAGEBUILDERPAGE", "06app/sdk/TSPAGEBUILDERPAGE");
    _reg("TODOLISTPAGE", "06app/TodoList/TODOLISTPAGE");
    _reg("littletree", "06app/TodoList/TODOLISTPAGE");
    _reg("treetestpage", "06app/TreeTest/TreeTestPage");
    _reg("REPORTPAGE", "06app/Report/ReportPage");
    _reg("TREETESTPAGE", "06app/SDK/TreeTestPage");
    _reg("WebConfigFilePage", "06app/dev/WebConfigFilePage");
    _reg("UploadFormPage", "06app/sdk/UploadFormPage");
    //
    _reg("IIsSitePage", "06app/dev/IIsSitePage");
    _reg("PlugListPage", "06app/sdk/plug/PlugListPage");
    //
    _reg("FileReadPage", "06app/dev/FileReadPage");
    _reg("FileReadPluginPage", "06app/dev/FileReadPluginPage");
    _reg("DbToXmlPage", "06app/dev/Db/DbToXmlPage");
    //巡检
    _reg("EppWorkBenchPage", "Epp/WorkBench/EppWorkBenchPage");
    $(function () {
        if ($("#ACT-DIV-SHELL").length > 0) {
            // debugger;
            // alert(123);
            //window["Hull_HasNoLeftMenu"] = true;
            var _config = $.extend({}, { HomeUrl: "$FEED$", IsV1: true }, window["Hull_Config"]);
            ReactDOM.render(new hullFile.Web.HullVm(_config).intoDom(), document.getElementById("ACT-DIV-SHELL"));
        }
    });
});
