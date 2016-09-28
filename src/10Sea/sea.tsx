// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
iocFile; utilFile;
import baseWedPage = require("./../04page/BaseWebPage");

import feedFile = require("./../06app/Feed/WorkBench/Feed/Feed");
import testFile = require("./../06app/Sns/Test");
testFile; feedFile;

import appMrc = require("./webApp/App/AppMRCCreator");
import defaultMRCFile = require("./webApp/Default/default/DefaultMRC"); defaultMRCFile;
import tsMRCFile = require("./webApp/Default/ts/TsMRC"); tsMRCFile;
import menuMRCFile = require("./webApp/Menu/MenuMRC"); menuMRCFile;
import partMRCFile = require("./webApp/Part/PartMRC"); partMRCFile;

import DocumentCommentFile = require("./webApp/DocumentComment/DocumentCommentMRC"); DocumentCommentFile; 
import UserDocumentCenterFile = require("./webApp/UserDocumentCenter/UserDocumentCenterMRC"); UserDocumentCenterFile; 
import DocumentCenterFile = require("./webApp/DocumentCenter/DocumentCenterMRC"); DocumentCenterFile; 
import RecyleDocumentCenterFile = require("./webApp/RecyleDocumentCenter/RecyleDocumentCenterMRC"); RecyleDocumentCenterFile; 
import SystemDocumentCenterFile = require("./webApp/SystemDocumentCenter/SystemDocumentCenterMRC"); SystemDocumentCenterFile;

import WinDefaultCerFile = require("./webApp/Default/default/win/WinDefaultCer"); WinDefaultCerFile;
import WinDefaultMRCFile = require("./webApp/Default/default/win/WinDefaultMRC"); WinDefaultMRCFile;
import WinDefaultRerFile = require("./webApp/Default/default/win/WinDefaultRer"); WinDefaultRerFile;

import DeskMRCFile = require("./webApp/Desk/DeskMRC"); DeskMRCFile;
import PublisherMRCFile = require("./webApp/Publisher/PublisherMRC"); PublisherMRCFile;
import CenterInfoMRCFile = require("./webApp/CenterInfo/CenterInfoMRC"); CenterInfoMRCFile;

import MessAgeMRCFile = require("./webApp/MessAge/messageMRC"); MessAgeMRCFile;
import MyWorkMRCFile = require("./webApp/MyWork/MyWorkMRC"); MyWorkMRCFile;
//import PageHelpMRCFile = require("./webApp/PageHelp/PageHelpMRC"); PageHelpMRCFile;
//import AKPageHelpMRCFile = require("./webApp/PageHelp/AKPageHelp/AKPageHelpMRC");AKPageHelpMRCFile;
import PartMRCFile = require("./webApp/Part/PartMRC"); PartMRCFile;
import PERSONSETMRCFile = require("./webApp/PERSONSET/PERSONSETMRC"); PERSONSETMRCFile;

//import ReviewMRCFile = require("./webApp/Review/ReviewMRC"); ReviewMRCFile;
//import TestMRCFile = require("./webApp/Test/TestMRC"); TestMRCFile;
//import TodoMRCFile = require("./webApp/todo/todomrc"); TodoMRCFile;
//import IframeMRCFile = require("./webApp/Iframe/IframeMRC"); IframeMRCFile;
//import InBoxMRCFile = require("./webApp/mail/InBox/InBoxMRC"); InBoxMRCFile;
//import InsertMailMRCFile = require("./webApp/mail/insertmail/insertmailMRC"); InsertMailMRCFile;
//_zq_Invoicing
import BaseInvoicingFile = require("./webApp/Invoicing/BaseInvoicing/BaseInvoicingMrc"); BaseInvoicingFile;
import InvoicingPurchase = require("./webApp/Invoicing/InvoicingPurchase/WinInvoicingPurchaseMrc"); InvoicingPurchase;

import workflowFile = require("./webApp/Workflow/WorkflowMRC"); workflowFile;
import workflowWinFile = require("./webApp/Workflow/win/WinWorkflowMRC"); workflowWinFile;

import myWorkFile = require("./webApp/MyWork/MyWorkMRC"); myWorkFile;
import menuFile = require("./../right/menu/MenuListPage"); menuFile;
import menuNewFile = require("./../right/menu/New/MenuNewPage"); menuNewFile;
import reusFile = require("./Reus");
$.AKjs = $.AKjs ? $.AKjs : {};
$(document).ready(function () {
   // alert("入口");
    if (!window["_IsLoad"]) {
        window["_IsLoad"] = true;
       // alert(5);
        var _mrc: appMrc.AppMRCCreator = new appMrc.AppMRCCreator();
        _mrc.init($("body"));
        if ($.AKjs["NodeUrl"]) {
            $.AKjs.NodeClientGet({ Url: $.AKjs["NodeUrl"] }).init();
        }
    }
});


function _reg(name: string, path: string) {
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
_reg("NEWUSERROLEPAGE", "right/H/NewUserRolePage")
_reg("NEWUSERPAGE", "right/H/NewUserPage");



_reg("NEWNODEPAGE", "right/H/NewNodePage");
_reg("NEWBUTTONPAGE", "right/H/NewButtonPage");
_reg("NEWMENUPAGE", "right/H/NEWMENUPAGE");
_reg("NewNodePage", "right/H/NewNodePage");
_reg("MENUORGLINK", "right/rightconfig/MenuOrgLinkPage");
_reg("NEWMENUPAGE", "right/rightconfig/MenuOrgPage/NewMenuPage");
_reg("RIGHTMAINPAGE", "right/rightconfig/RightMainPage");
_reg("ADDMENUORBUTTONPAGE", "right/rightconfig/MenuUserRolePage/Popup/AddMenuorButtonPage")
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

_reg("ReportElectricalFaultLISTPAGE", "TB/Report/ElectricalFaultCategory/List/ReportElectricalFaultCategoryListPage")

//修复率统计表
_reg("RepairRateStatisticsListPage", "TB/Report/RepairRateStatistics/List/RepairRateStatisticsListPage");
//电器报修率统计表
_reg("ApplianceRepairRateListPage", "TB/Report/ApplianceRepairRate/List/ApplianceRepairRateListPage");

_reg("ReportProcurementListPage", "TB/Report/Procurementinplacetime/List/ReportProcurementListPage");

_reg("CompanyPerNumTotalListPage", "TB/Report/CompanyPerNumTotal/List/CompanyPerNumTotalListPage");

