var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemInsertMasterRowDom;
    (function (ExamItemInsertMasterRowDom) {
        var ExamItemInsertMasterRowDomAction = (function (_super) {
            __extends(ExamItemInsertMasterRowDomAction, _super);
            function ExamItemInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertMasterRowDomAction;
        }(domCore.DomAction));
        ExamItemInsertMasterRowDom.ExamItemInsertMasterRowDomAction = ExamItemInsertMasterRowDomAction;
        var ExamItemInsertMasterRowDomReact = (function (_super) {
            __extends(ExamItemInsertMasterRowDomReact, _super);
            function ExamItemInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemInsertMasterRowDomStates();
            }
            ExamItemInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检项目信息", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "项目代码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ItemCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "项目名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "所属科室：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["DepartmentId"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "项目分类：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ItemCategory"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Unit"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "参考上限：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["UpperLimit"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "参考下限：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["LowerLimit"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "价格：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Price"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "序号：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Order"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "体检结果类型：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ResultClass"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Remark"].intoDom())))))));
            };
            ExamItemInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            ExamItemInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ExamItemInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemInsertMasterRowDomReact;
        }(domCore.DomReact));
        ExamItemInsertMasterRowDom.ExamItemInsertMasterRowDomReact = ExamItemInsertMasterRowDomReact;
        var ExamItemInsertMasterRowDomVm = (function (_super) {
            __extends(ExamItemInsertMasterRowDomVm, _super);
            function ExamItemInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.initTextVm("SimpleCode", "notNull");
                this.initTextVm("ItemCode", "notNull");
                this.initTextVm("Name");
                this.initTextVm("DepartmentId");
                this.initTextVm("ItemCategory");
                this.initTextVm("Unit");
                this.initTextVm("UpperLimit");
                this.initTextVm("LowerLimit");
                this.initTextVm("Price");
                this.initTextVm("Order");
                this.initTextVm("ResultClass");
                this.initTextVm("Remark");
            }
            ExamItemInsertMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["SimpleCode"].legal();
                var l2 = this.TextVmObjList["ItemCode"].legal();
                var l3 = this.TextVmObjList["Name"].legal();
                var l4 = this.TextVmObjList["DepartmentId"].legal();
                var l5 = this.TextVmObjList["ItemCategory"].legal();
                var l6 = this.TextVmObjList["Unit"].legal();
                var l7 = this.TextVmObjList["UpperLimit"].legal();
                var l8 = this.TextVmObjList["LowerLimit"].legal();
                var l9 = this.TextVmObjList["Price"].legal();
                var l0 = this.TextVmObjList["Order"].legal();
                var l11 = this.TextVmObjList["ResultClass"].legal();
                var l12 = this.TextVmObjList["Remark"].legal();
                var _res = l1 && l2 && l3 && l4 && l5 && l6 && l7 && l8 && l9 && l0 && l11 && l12;
                return _res;
            };
            ExamItemInsertMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.TextVmObjList) {
                    var _obj = this.TextVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = new textFile.ui.TextVm;
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            ExamItemInsertMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return ExamItemInsertMasterRowDomVm;
        }(domCore.DomVm));
        ExamItemInsertMasterRowDom.ExamItemInsertMasterRowDomVm = ExamItemInsertMasterRowDomVm;
        var ExamItemInsertMasterRowDomStates = (function (_super) {
            __extends(ExamItemInsertMasterRowDomStates, _super);
            function ExamItemInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertMasterRowDomStates;
        }(domCore.DomStates));
        ExamItemInsertMasterRowDom.ExamItemInsertMasterRowDomStates = ExamItemInsertMasterRowDomStates;
        var ExamItemInsertMasterRowDomProps = (function (_super) {
            __extends(ExamItemInsertMasterRowDomProps, _super);
            function ExamItemInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemInsertMasterRowDomProps;
        }(domCore.DomProps));
        ExamItemInsertMasterRowDom.ExamItemInsertMasterRowDomProps = ExamItemInsertMasterRowDomProps;
    })(ExamItemInsertMasterRowDom = exports.ExamItemInsertMasterRowDom || (exports.ExamItemInsertMasterRowDom = {}));
});
