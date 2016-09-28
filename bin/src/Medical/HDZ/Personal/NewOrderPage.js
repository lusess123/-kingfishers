var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react", "./NewOrderTable"], function (require, exports, iocFile, basewedPageFile, React, NewOrderTableFile) {
    "use strict";
    var NewOrderTableVm = NewOrderTableFile.NewOrderTable.NewOrderTableVm;
    var NewOrderPage;
    (function (NewOrderPage) {
        var NewOrderPageAction = (function (_super) {
            __extends(NewOrderPageAction, _super);
            function NewOrderPageAction() {
                _super.apply(this, arguments);
            }
            return NewOrderPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewOrderPage.NewOrderPageAction = NewOrderPageAction;
        var NewOrderPageReact = (function (_super) {
            __extends(NewOrderPageReact, _super);
            function NewOrderPageReact() {
                _super.apply(this, arguments);
                this.state = new NewOrderPageStates();
            }
            NewOrderPageReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initHandle(), this._initForm(), this._initSForm(), this.props.Vm.NewOrderTableObj.intoDom(), this._initBottomBtn());
            };
            NewOrderPageReact.prototype._initHandle = function () {
                return React.createElement("div", {className: "YSm-handle clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10", type: "text", placeholder: "输入身份证、体检号、档案号查询"}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary"}, "查询")));
            };
            NewOrderPageReact.prototype._initForm = function () {
                return React.createElement("form", {className: "YSm-form"}, React.createElement("div", {className: "row form-inline"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "体检ID："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "档案号："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "会员类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("select", {className: "form-control"}, React.createElement("option", {value: "非会员"}, "非会员"), React.createElement("option", {value: "普通会员"}, "普通会员"), React.createElement("option", {value: "VIP会员"}, "VIP会员")))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "姓名："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "身份证："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "年龄："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "出生日期："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "联系电话："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "民族："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "职务："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"}))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right required"}, "工作单位："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"})))));
            };
            NewOrderPageReact.prototype._initSForm = function () {
                return React.createElement("form", {className: "YSm-form-outline"}, React.createElement("div", {className: "row form-inline"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "体检类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("select", {className: "form-control"}, React.createElement("option", {value: "请选择"}, "请选择")))), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "来检时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {className: "form-control", type: "text"})))));
            };
            NewOrderPageReact.prototype._initHistory = function () {
                return React.createElement("div", {className: "YSm-medical"}, React.createElement("a", {className: "btn"}, "个人病史问卷", React.createElement("i", {className: "fa fa-caret-up"})), this._initHistoryTable());
            };
            NewOrderPageReact.prototype._initHistoryTable = function () {
                return React.createElement("div", {className: "YSm-medical-content"}, React.createElement("div", {className: "YSm-item clearfix"}, React.createElement("div", {className: "YSu-title pull-left"}, "曾经患过/当前患有的疾病"), React.createElement("ul", {className: "pull-left"}, React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "无"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "高血压"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "冠心病（心绞痛、心肌梗塞）"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "肺气肿"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "肺结核"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "哮喘"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "脑出血"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "脑血栓"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "高脂血症"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "甲状腺疾病"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "肾结石"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "骨质疏松"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "2型糖尿病"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "肥胖"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "慢性胃炎"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "宫颈疾病（女）"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "乳腺增生（女）"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "前列腺增生（男）"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "胃/十二指肠溃疡"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "脂肪肝"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "慢性支气管炎"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "前列腺炎（男）"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "胃癌"), React.createElement("li", {className: "col-xl-2 col-lg-2 col-md-2"}, React.createElement("input", {type: "checkbox"}), "恶性肿瘤（部位）"), React.createElement("li", {className: "col-xl-12 col-lg-12 col-md-12"}, "其他", React.createElement("textarea", null)))));
            };
            NewOrderPageReact.prototype._initBottomBtn = function () {
                return React.createElement("div", {className: "col-lg-12 col-md-12 text-center"}, React.createElement("a", {className: "btn btn-danger-outline"}, "确认预约"), React.createElement("a", {className: "btn btn-danger"}, "开单"));
            };
            NewOrderPageReact.prototype._initBottom = function () {
                return React.createElement("div", {className: "col-lg-12 col-md-12 YSm-fixed-bottom clearfix"}, React.createElement("div", {className: "pull-left"}, React.createElement("span", null, "合计检查", React.createElement("b", null, "5"), "项，折扣 ", React.createElement("b", null, "7.5"), ", 总费用", React.createElement("strong", null, "62615.00"), "元"), React.createElement("a", {className: "btn btn-danger-outline"}, "抹零")), React.createElement("div", {className: "pull-right"}, React.createElement("a", {className: "btn btn-danger-outline"}, "确认预约"), React.createElement("a", {className: "btn btn-danger"}, "开单")));
            };
            return NewOrderPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewOrderPage.NewOrderPageReact = NewOrderPageReact;
        var NewOrderPageVm = (function (_super) {
            __extends(NewOrderPageVm, _super);
            function NewOrderPageVm(config) {
                _super.call(this);
                this.ReactType = NewOrderPageReact;
                this.NewOrderTableObj = new NewOrderTableVm();
            }
            NewOrderPageVm.prototype.init = function (config) {
            };
            NewOrderPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return NewOrderPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewOrderPage.NewOrderPageVm = NewOrderPageVm;
        var NewOrderPageStates = (function (_super) {
            __extends(NewOrderPageStates, _super);
            function NewOrderPageStates() {
                _super.apply(this, arguments);
            }
            return NewOrderPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewOrderPage.NewOrderPageStates = NewOrderPageStates;
        var NewOrderPageProps = (function (_super) {
            __extends(NewOrderPageProps, _super);
            function NewOrderPageProps() {
                _super.apply(this, arguments);
            }
            return NewOrderPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewOrderPage.NewOrderPageProps = NewOrderPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWORDERPAGE", basewedPageFile.Web.BaseWebPageVm, NewOrderPageVm);
    })(NewOrderPage = exports.NewOrderPage || (exports.NewOrderPage = {}));
});
