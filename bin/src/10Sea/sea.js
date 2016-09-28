define(["require", "exports", "./../01core/Ioc", "./../01core/Util", "./../04page/BaseWebPage", "./../06app/Feed/WorkBench/Feed/Feed", "./../06app/Sns/Test", "./webApp/App/AppMRCCreator", "./webApp/Default/default/DefaultMRC", "./webApp/Default/ts/TsMRC", "./webApp/Menu/MenuMRC", "./webApp/Part/PartMRC", "./webApp/DocumentComment/DocumentCommentMRC", "./webApp/UserDocumentCenter/UserDocumentCenterMRC", "./webApp/DocumentCenter/DocumentCenterMRC", "./webApp/RecyleDocumentCenter/RecyleDocumentCenterMRC", "./webApp/SystemDocumentCenter/SystemDocumentCenterMRC", "./webApp/Default/default/win/WinDefaultCer", "./webApp/Default/default/win/WinDefaultMRC", "./webApp/Default/default/win/WinDefaultRer", "./webApp/Desk/DeskMRC", "./webApp/Publisher/PublisherMRC", "./webApp/CenterInfo/CenterInfoMRC", "./webApp/MessAge/messageMRC", "./webApp/MyWork/MyWorkMRC", "./webApp/Part/PartMRC", "./webApp/PERSONSET/PERSONSETMRC", "./webApp/Invoicing/BaseInvoicing/BaseInvoicingMrc", "./webApp/Invoicing/InvoicingPurchase/WinInvoicingPurchaseMrc", "./webApp/Workflow/WorkflowMRC", "./webApp/Workflow/win/WinWorkflowMRC", "./webApp/MyWork/MyWorkMRC", "./../right/menu/MenuListPage", "./../right/menu/New/MenuNewPage"], function (require, exports, iocFile, utilFile, baseWedPage, feedFile, testFile, appMrc, defaultMRCFile, tsMRCFile, menuMRCFile, partMRCFile, DocumentCommentFile, UserDocumentCenterFile, DocumentCenterFile, RecyleDocumentCenterFile, SystemDocumentCenterFile, WinDefaultCerFile, WinDefaultMRCFile, WinDefaultRerFile, DeskMRCFile, PublisherMRCFile, CenterInfoMRCFile, MessAgeMRCFile, MyWorkMRCFile, PartMRCFile, PERSONSETMRCFile, BaseInvoicingFile, InvoicingPurchase, workflowFile, workflowWinFile, myWorkFile, menuFile, menuNewFile) {
    "use strict";
    iocFile;
    utilFile;
    testFile;
    feedFile;
    defaultMRCFile;
    tsMRCFile;
    menuMRCFile;
    partMRCFile;
    DocumentCommentFile;
    UserDocumentCenterFile;
    DocumentCenterFile;
    RecyleDocumentCenterFile;
    SystemDocumentCenterFile;
    WinDefaultCerFile;
    WinDefaultMRCFile;
    WinDefaultRerFile;
    DeskMRCFile;
    PublisherMRCFile;
    CenterInfoMRCFile;
    MessAgeMRCFile;
    MyWorkMRCFile;
    PartMRCFile;
    PERSONSETMRCFile;
    BaseInvoicingFile;
    InvoicingPurchase;
    workflowFile;
    workflowWinFile;
    myWorkFile;
    menuFile;
    menuNewFile;
    $.AKjs = $.AKjs ? $.AKjs : {};
    $(document).ready(function () {
        // alert("入口");
        if (!window["_IsLoad"]) {
            window["_IsLoad"] = true;
            // alert(5);
            var _mrc = new appMrc.AppMRCCreator();
            _mrc.init($("body"));
            if ($.AKjs["NodeUrl"]) {
                $.AKjs.NodeClientGet({ Url: $.AKjs["NodeUrl"] }).init();
            }
        }
    });
    function _reg(name, path) {
        iocFile.Core.Ioc.Current().RegisterTypeSrc(name, baseWedPage.Web.BaseWebPageVm, "./../" + path);
    }
    _reg("ALLCOLPAGE", "06app/SDK/AllColPage");
    _reg("RIGHTPAGE", "right/H/rightPage");
    _reg("WMHTESTPAGE", 'right/H/wmh/wmhTestPage');
    _reg("RIGHTLINK", "right/rightconfig/RightlinkPage");
    _reg("GROUPORG", "right/rightconfig/Group/GroupOrgPage");
    _reg("GROUPSAVE", "right/rightconfig/Group/Save/GroupSavePage");
    _reg("GROUPORGNEW", "right/rightconfig/Group/NewGroup/GroupNewPage");
    _reg("MENUUSERROLEPAGE", "right/rightconfig/MenuOrgPage/MenuOrgPage");
    _reg("CUSTOMCOLPAGE", "right/H/CustomColPage");
    _reg("NEWROLEPAGE", "right/H/NewRolePage");
    _reg("NEWUSERROLEPAGE", "right/H/NewUserRolePage");
    _reg("NEWUSERPAGE", "right/H/NewUserPage");
    _reg("NEWNODEPAGE", "right/H/NewNodePage");
    _reg("NEWBUTTONPAGE", "right/H/NewButtonPage");
    _reg("NEWMENUPAGE", "right/H/NEWMENUPAGE");
    _reg("NewNodePage", "right/H/NewNodePage");
    _reg("MENUORGLINK", "right/rightconfig/MenuOrgLinkPage");
    _reg("NEWMENUPAGE", "right/rightconfig/MenuOrgPage/NewMenuPage");
    _reg("RIGHTMAINPAGE", "right/rightconfig/RightMainPage");
    _reg("ADDMENUORBUTTONPAGE", "right/rightconfig/MenuUserRolePage/Popup/AddMenuorButtonPage");
    _reg("MENUNEWPAGE", "right/rightconfig/MenuOrgPage/NewMenu/MenuNewPage");
    _reg("ORGLISTPAGE", "right/org/list/rightPage");
    _reg("DEFAULT", "04page/Viewpage");
    _reg("NEWORGPAGES", "right/H/NewOrgPageS");
    _reg("IFRAME", "04page/IframePage");
    _reg("NEWCOLLECTPAGE", "right/H/NewCollectPage");
    _reg("ATAWPLATFORMPAGE", "right/H/hdz/atawPlatformPage");
    _reg("CXJTESTPAGE", "right/H/cxj/CXJTESTPAGE");
    _reg("HWORKBENCHPAGE", "right/H/cxj/HWorkBenchPage");
    _reg("zykTestPage", "right/H/zyk/zykTestPage");
    _reg("hdzTestPage", "right/H/hdz/hdzTestPage");
    _reg("zhmTestPage", "right/H/zhm/zhmTestPage");
    _reg("SQTESTPAGE", "right/H/sq/sqTestPage");
    _reg("smmTestPage", "right/H/smm/smmTestPage");
    _reg("xbgTestPage", "right/H/xbg/xbgTestPage");
    _reg("SmmMENUNEWPAGE", "right/H/smm/MenuOrgPage/NewMenu/MenuNewPage");
    //------必达--
    _reg("BDPAYINFOPAGE", "BiDa/bdPayInfo/bdPayInfoPage");
    _reg("BD_PAY_OTHERPAGE", "BiDa/bd_Pay_Other/bd_Pay_OtherPage");
    //BDPayApply
    _reg("BDPayApply", "BiDa/bdPayApply/BDPayApply");
    _reg("BDPayApply", "BiDa/bdPayApply/BDPayApply");
    _reg("ExamOrderPage", "Medical/ExamOrder/examOrderPage");
    _reg("ANOMALYLISTPAGE", "Medical/Base/Anomaly/List/AnomalyListPage");
    //TongBao
    _reg("ReportTestListPage", "TB/Report/Test/List/ReportTestListPage");
    _reg("ReportDeptMaintanceLISTPAGE", "TB/Report/DeptMaintance/List/ReportDeptMaintanceListPage");
    _reg("ReportElectricalMaintanceLISTPAGE", "TB/Report/ElectricalMaintance/List/ReportElectricalMaintanceListPage");
    _reg("ReportBrandElectricalLISTPAGE", "TB/Report/BrandElectricalMaintance/List/ReportBrandElectricalMaintanceListPage");
    _reg("HomeRepairListPage", "TB/Report/HomeRepair/List/HomeRepairListPage");
    _reg("ReliefmonthListPage", "TB/Report/Reliefmonth/List/ReliefmonthListPage");
    _reg("ReportElectricalFaultLISTPAGE", "TB/Report/ElectricalFaultCategory/List/ReportElectricalFaultCategoryListPage");
    //修复率统计表
    _reg("RepairRateStatisticsListPage", "TB/Report/RepairRateStatistics/List/RepairRateStatisticsListPage");
    //电器报修率统计表
    _reg("ApplianceRepairRateListPage", "TB/Report/ApplianceRepairRate/List/ApplianceRepairRateListPage");
    _reg("ReportProcurementListPage", "TB/Report/Procurementinplacetime/List/ReportProcurementListPage");
    _reg("CompanyPerNumTotalListPage", "TB/Report/CompanyPerNumTotal/List/CompanyPerNumTotalListPage");
});
