var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartInsertMasterRowDom;
    (function (DepartInsertMasterRowDom) {
        var DepartInsertMasterRowDomAction = (function (_super) {
            __extends(DepartInsertMasterRowDomAction, _super);
            function DepartInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return DepartInsertMasterRowDomAction;
        }(domCore.DomAction));
        DepartInsertMasterRowDom.DepartInsertMasterRowDomAction = DepartInsertMasterRowDomAction;
        var DepartInsertMasterRowDomReact = (function (_super) {
            __extends(DepartInsertMasterRowDomReact, _super);
            function DepartInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartInsertMasterRowDomStates();
            }
            DepartInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "科室", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["FName"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "代码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["FNumber"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "简码：")), React.createElement("div", {className: "columns acs-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "类别：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["DeptType"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "描述：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Description"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Remark"].intoDom())))))));
            };
            DepartInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            DepartInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            DepartInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartInsertMasterRowDomReact;
        }(domCore.DomReact));
        DepartInsertMasterRowDom.DepartInsertMasterRowDomReact = DepartInsertMasterRowDomReact;
        var DepartInsertMasterRowDomVm = (function (_super) {
            __extends(DepartInsertMasterRowDomVm, _super);
            function DepartInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = DepartInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.initTextVm("FName", "notNull");
                this.initTextVm("FNumber", "notNull");
                this.initTextVm("SimpleCode");
                this.initTextVm("DeptType");
                this.initTextVm("Description");
                this.initTextVm("Remark");
            }
            DepartInsertMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["FName"].legal();
                var l2 = this.TextVmObjList["FNumber"].legal();
                var _res = l1 && l2;
                return _res;
            };
            DepartInsertMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
            DepartInsertMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return DepartInsertMasterRowDomVm;
        }(domCore.DomVm));
        DepartInsertMasterRowDom.DepartInsertMasterRowDomVm = DepartInsertMasterRowDomVm;
        var DepartInsertMasterRowDomStates = (function (_super) {
            __extends(DepartInsertMasterRowDomStates, _super);
            function DepartInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return DepartInsertMasterRowDomStates;
        }(domCore.DomStates));
        DepartInsertMasterRowDom.DepartInsertMasterRowDomStates = DepartInsertMasterRowDomStates;
        var DepartInsertMasterRowDomProps = (function (_super) {
            __extends(DepartInsertMasterRowDomProps, _super);
            function DepartInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return DepartInsertMasterRowDomProps;
        }(domCore.DomProps));
        DepartInsertMasterRowDom.DepartInsertMasterRowDomProps = DepartInsertMasterRowDomProps;
    })(DepartInsertMasterRowDom = exports.DepartInsertMasterRowDom || (exports.DepartInsertMasterRowDom = {}));
});
