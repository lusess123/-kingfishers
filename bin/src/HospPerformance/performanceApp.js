define(["require", "exports", "./../04page/BaseWebPage"], function (require, exports, basewedPageFile) {
    "use strict";
    var _reg = basewedPageFile._reg;
    //绩效主页
    _reg("HosWorkBenchPage", "HospPerformance/WorkBench/HosWorkBenchPage");
    //绩效 核心业务
    _reg("NewAppraisalTemplatePage", "HospPerformance/Core/AppraisalTemplate/New/NewAppraisalTemplatePage");
    _reg("NewAppraisalObjectPage", "HospPerformance/Core/AppraisalTemplate/New/NewAppraisalObjectPage");
    _reg("AppraisalRegisterPage", "HospPerformance/Core/AppraisalResult/New/AppraisalRegisterPage");
    _reg("NewAppraisalRegisterPage", "HospPerformance/Core/AppraisalResult/New/NewAppraisalRegisterPage");
    _reg("NewAppraisalRegisterPageT", "HospPerformance/Core/AppraisalResult/New/NewAppraisalRegisterPageT");
    _reg("AppraisalTemplateDetailPage", "HospPerformance/Core/AppraisalTemplate/Detail/AppraisalTemplateDetailPage");
    //绩效  人事管理 薪资
    _reg("NewMoneyTemplatePage", "HospPerformance/Staffing/MoneyTemplate/New/NewMoneyTemplatePage");
    _reg("EditMoneySettingPage", "HospPerformance/Staffing/MoneyTemplate/New/EditMoneySettingPage");
    _reg("MoneyAccountingPage", "HospPerformance/Staffing/MoneyAccounting/Detail/MoneyAccountingPage");
    _reg("DetailMoneyAccountingPage", "HospPerformance/Staffing/MoneyAccounting/Detail/DetailMoneyAccountingPage");
    _reg("NewMoneyProjectPage", "HospPerformance/Staffing/MoneyTemplate/New/NewMoneyProjectPage");
    _reg("DetailMoneyTemplatePage", "HospPerformance/Staffing/MoneyTemplate/Detail/DetailMoneyTemplatePage");
    _reg("UpdateSalaryPage", "HospPerformance/Staffing/MoneyAccounting/Update/UpdateSalaryPage");
});
