var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../04page/BaseWebPage", "react", "./../../../../02col/00core/BaseCol"], function (require, exports, iocFile, utilFile, basewedPageFile, React, baseColFile) {
    "use strict";
    var NewMoneyAccountingPage;
    (function (NewMoneyAccountingPage) {
        var NewMoneyAccountingPageAction = (function (_super) {
            __extends(NewMoneyAccountingPageAction, _super);
            function NewMoneyAccountingPageAction() {
                _super.apply(this, arguments);
            }
            return NewMoneyAccountingPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMoneyAccountingPage.NewMoneyAccountingPageAction = NewMoneyAccountingPageAction;
        var NewMoneyAccountingPageReact = (function (_super) {
            __extends(NewMoneyAccountingPageReact, _super);
            function NewMoneyAccountingPageReact() {
                _super.apply(this, arguments);
                this.state = new NewMoneyAccountingPageStates();
            }
            NewMoneyAccountingPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initForm());
            };
            NewMoneyAccountingPageReact.prototype._initForm = function () {
                return React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "薪资主题："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["MoneyTheme"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "薪资月份："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["MoneyMonth"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "创建人："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Creater"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "创建时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["CreatTime"].intoDom())), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group  form-inline clearfix"}, React.createElement("label", {className: "form-control-label text-right"}, "包含人员："), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "部门："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Department"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "职位："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Job"].intoDom())), React.createElement("div", {className: "col-md-12 col-sm-12"}, this.props.Vm.ColVmObjList["Personal"].intoDom()))));
            };
            return NewMoneyAccountingPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewMoneyAccountingPage.NewMoneyAccountingPageReact = NewMoneyAccountingPageReact;
        var NewMoneyAccountingPageVm = (function (_super) {
            __extends(NewMoneyAccountingPageVm, _super);
            function NewMoneyAccountingPageVm(config) {
                _super.call(this);
                this.ReactType = NewMoneyAccountingPageReact;
                this.ColVmObjList = {};
                this.RowData = {};
                this.initColVm("MoneyTheme", "TextVm", "notNull");
                this.initColVm("MoneyMonth", "ComboVm", "notNull");
                this.initColVm("Creater", "TextVm", "notNull");
                this.initColVm("CreatTime", "DateTimeVm", "notNull");
                this.initColVm("Personal", "ListBoxVm", "notNull");
                this.initColVm("Department", "TextVm", "notNull");
                this.initColVm("Job", "TextVm", "notNull");
            }
            NewMoneyAccountingPageVm.prototype.initColVm = function (colName, colType, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.IsMulit = true;
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                }
                if (colName == "MoneyMonth") {
                    var typeComboVm = utilFile.Core.Util.Cast(_exciteBean);
                    typeComboVm.ItemList = [{ Value: "0", Text: "4月份" }, { Value: "1", Text: "5月份" }, { Value: "2", Text: "6月份" }, { Value: "3", Text: "7月份" }];
                }
                if (colName == "Personal") {
                    var typeListBoxVm = utilFile.Core.Util.Cast(_exciteBean);
                    typeListBoxVm.ItemList = [{ Value: "0", Text: "黄小菜", Select: false }, { Value: "0", Text: "丁小花", Select: false }, { Value: "0", Text: "连袜子", Select: true }, { Value: "0", Text: "沈小君", Select: true }];
                }
                this.ColVmObjList[_name] = _exciteBean;
            };
            NewMoneyAccountingPageVm.prototype.init = function (config) {
            };
            NewMoneyAccountingPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return NewMoneyAccountingPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewMoneyAccountingPage.NewMoneyAccountingPageVm = NewMoneyAccountingPageVm;
        var NewMoneyAccountingPageStates = (function (_super) {
            __extends(NewMoneyAccountingPageStates, _super);
            function NewMoneyAccountingPageStates() {
                _super.apply(this, arguments);
            }
            return NewMoneyAccountingPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMoneyAccountingPage.NewMoneyAccountingPageStates = NewMoneyAccountingPageStates;
        var NewMoneyAccountingPageProps = (function (_super) {
            __extends(NewMoneyAccountingPageProps, _super);
            function NewMoneyAccountingPageProps() {
                _super.apply(this, arguments);
            }
            return NewMoneyAccountingPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewMoneyAccountingPage.NewMoneyAccountingPageProps = NewMoneyAccountingPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWMONEYACCOUNTINGPAGE", basewedPageFile.Web.BaseWebPageVm, NewMoneyAccountingPageVm);
    })(NewMoneyAccountingPage = exports.NewMoneyAccountingPage || (exports.NewMoneyAccountingPage = {}));
});
