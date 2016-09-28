var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var UsersInsertMasterRowDom;
    (function (UsersInsertMasterRowDom) {
        var UsersInsertMasterRowDomAction = (function (_super) {
            __extends(UsersInsertMasterRowDomAction, _super);
            function UsersInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return UsersInsertMasterRowDomAction;
        }(domCore.DomAction));
        UsersInsertMasterRowDom.UsersInsertMasterRowDomAction = UsersInsertMasterRowDomAction;
        var UsersInsertMasterRowDomReact = (function (_super) {
            __extends(UsersInsertMasterRowDomReact, _super);
            function UsersInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UsersInsertMasterRowDomStates();
            }
            UsersInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "用户", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "类别：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Type"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "职称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["JobTitle"].intoDom())))))));
            };
            UsersInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            UsersInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            UsersInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UsersInsertMasterRowDomReact;
        }(domCore.DomReact));
        UsersInsertMasterRowDom.UsersInsertMasterRowDomReact = UsersInsertMasterRowDomReact;
        var UsersInsertMasterRowDomVm = (function (_super) {
            __extends(UsersInsertMasterRowDomVm, _super);
            function UsersInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = UsersInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.initTextVm("SimpleCode", "notNull");
                this.initTextVm("Type");
                this.initTextVm("JobTitle");
            }
            UsersInsertMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["SimpleCode"].legal();
                var l2 = this.TextVmObjList["Type"].legal();
                var l3 = this.TextVmObjList["JobTitle"].legal();
                var _res = l1 && l2 && l3;
                return _res;
            };
            UsersInsertMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
            UsersInsertMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return UsersInsertMasterRowDomVm;
        }(domCore.DomVm));
        UsersInsertMasterRowDom.UsersInsertMasterRowDomVm = UsersInsertMasterRowDomVm;
        var UsersInsertMasterRowDomStates = (function (_super) {
            __extends(UsersInsertMasterRowDomStates, _super);
            function UsersInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return UsersInsertMasterRowDomStates;
        }(domCore.DomStates));
        UsersInsertMasterRowDom.UsersInsertMasterRowDomStates = UsersInsertMasterRowDomStates;
        var UsersInsertMasterRowDomProps = (function (_super) {
            __extends(UsersInsertMasterRowDomProps, _super);
            function UsersInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return UsersInsertMasterRowDomProps;
        }(domCore.DomProps));
        UsersInsertMasterRowDom.UsersInsertMasterRowDomProps = UsersInsertMasterRowDomProps;
    })(UsersInsertMasterRowDom = exports.UsersInsertMasterRowDom || (exports.UsersInsertMasterRowDom = {}));
});
