var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var UsersUpdateMasterRowDom;
    (function (UsersUpdateMasterRowDom) {
        var UsersUpdateMasterRowDomAction = (function (_super) {
            __extends(UsersUpdateMasterRowDomAction, _super);
            function UsersUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return UsersUpdateMasterRowDomAction;
        }(domCore.DomAction));
        UsersUpdateMasterRowDom.UsersUpdateMasterRowDomAction = UsersUpdateMasterRowDomAction;
        var UserUpdateMasterRowDomReact = (function (_super) {
            __extends(UserUpdateMasterRowDomReact, _super);
            function UserUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UserUpdateMasterRowDomStates();
            }
            UserUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "用户信息", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "类别：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Type"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "职称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["JobTitle"].intoDom())))))));
            };
            UserUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            UserUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            UserUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserUpdateMasterRowDomReact;
        }(domCore.DomReact));
        UsersUpdateMasterRowDom.UserUpdateMasterRowDomReact = UserUpdateMasterRowDomReact;
        var UserUpdateMasterRowDomVm = (function (_super) {
            __extends(UserUpdateMasterRowDomVm, _super);
            function UserUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = UserUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
                    this.initTextVm("SimpleCode", "notNull");
                    this.initTextVm("Type");
                    this.initTextVm("JobTitle");
                }
            }
            UserUpdateMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            UserUpdateMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            UserUpdateMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["SimpleCode"].legal();
                var l2 = this.TextVmObjList["Type"].legal();
                var l3 = this.TextVmObjList["JobTitle"].legal();
                var _res = l1 && l2 && l3;
                return _res;
            };
            UserUpdateMasterRowDomVm.prototype.getData = function () {
                var _this = this;
                var _obj = {};
                this.TextVmObjList["SimpleCode"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.SimpleCode = val;
                    }
                });
                this.TextVmObjList["Type"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Type = val;
                    }
                });
                this.TextVmObjList["JobTitle"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.JobTitle = val;
                    }
                });
                if (this.fIsChangeRow) {
                    _obj.FID = this.RowData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            return UserUpdateMasterRowDomVm;
        }(domCore.DomVm));
        UsersUpdateMasterRowDom.UserUpdateMasterRowDomVm = UserUpdateMasterRowDomVm;
        var UserUpdateMasterRowDomStates = (function (_super) {
            __extends(UserUpdateMasterRowDomStates, _super);
            function UserUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return UserUpdateMasterRowDomStates;
        }(domCore.DomStates));
        UsersUpdateMasterRowDom.UserUpdateMasterRowDomStates = UserUpdateMasterRowDomStates;
        var UserUpdateMasterRowDomProps = (function (_super) {
            __extends(UserUpdateMasterRowDomProps, _super);
            function UserUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return UserUpdateMasterRowDomProps;
        }(domCore.DomProps));
        UsersUpdateMasterRowDom.UserUpdateMasterRowDomProps = UserUpdateMasterRowDomProps;
    })(UsersUpdateMasterRowDom = exports.UsersUpdateMasterRowDom || (exports.UsersUpdateMasterRowDom = {}));
});
