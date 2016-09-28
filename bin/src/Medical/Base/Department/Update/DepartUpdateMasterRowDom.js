var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartUpdateMasterRowDom;
    (function (DepartUpdateMasterRowDom) {
        var DepartUpdateMasterRowDomAction = (function (_super) {
            __extends(DepartUpdateMasterRowDomAction, _super);
            function DepartUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return DepartUpdateMasterRowDomAction;
        }(domCore.DomAction));
        DepartUpdateMasterRowDom.DepartUpdateMasterRowDomAction = DepartUpdateMasterRowDomAction;
        var DepartUpdateMasterRowDomReact = (function (_super) {
            __extends(DepartUpdateMasterRowDomReact, _super);
            function DepartUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartUpdateMasterRowDomStates();
            }
            DepartUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("ul", {className: "tabs"}, React.createElement("li", {className: "tab-title active"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "科室", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["FName"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "代码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["FNumber"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "类别：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["DeptType"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "描述：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Description"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Remark"].intoDom())))))));
            };
            DepartUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            DepartUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            DepartUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartUpdateMasterRowDomReact;
        }(domCore.DomReact));
        DepartUpdateMasterRowDom.DepartUpdateMasterRowDomReact = DepartUpdateMasterRowDomReact;
        var DepartUpdateMasterRowDomVm = (function (_super) {
            __extends(DepartUpdateMasterRowDomVm, _super);
            function DepartUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = DepartUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.fIsChangeRow = false;
                this.initTextVm("FName", "notNull");
                this.initTextVm("FNumber");
                this.initTextVm("SimpleCode");
                this.initTextVm("DeptType");
                this.initTextVm("Description");
                this.initTextVm("Remark");
            }
            DepartUpdateMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
            DepartUpdateMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            DepartUpdateMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["FName"].legal();
                var _res = l1;
                return _res;
            };
            DepartUpdateMasterRowDomVm.prototype.getData = function () {
                var _this = this;
                var _obj = {};
                this.TextVmObjList["FName"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.FName = val;
                    }
                });
                this.TextVmObjList["FNumber"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.FNumber = val;
                    }
                });
                this.TextVmObjList["SimpleCode"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.SimpleCode = val;
                    }
                });
                this.TextVmObjList["DeptType"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.DeptType = val;
                    }
                });
                this.TextVmObjList["Description"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Description = val;
                    }
                });
                this.TextVmObjList["Remark"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Remark = val;
                    }
                });
                if (this.fIsChangeRow) {
                    _obj.FID = this.RowData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            return DepartUpdateMasterRowDomVm;
        }(domCore.DomVm));
        DepartUpdateMasterRowDom.DepartUpdateMasterRowDomVm = DepartUpdateMasterRowDomVm;
        var DepartUpdateMasterRowDomStates = (function (_super) {
            __extends(DepartUpdateMasterRowDomStates, _super);
            function DepartUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return DepartUpdateMasterRowDomStates;
        }(domCore.DomStates));
        DepartUpdateMasterRowDom.DepartUpdateMasterRowDomStates = DepartUpdateMasterRowDomStates;
        var DepartUpdateMasterRowDomProps = (function (_super) {
            __extends(DepartUpdateMasterRowDomProps, _super);
            function DepartUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return DepartUpdateMasterRowDomProps;
        }(domCore.DomProps));
        DepartUpdateMasterRowDom.DepartUpdateMasterRowDomProps = DepartUpdateMasterRowDomProps;
    })(DepartUpdateMasterRowDom = exports.DepartUpdateMasterRowDom || (exports.DepartUpdateMasterRowDom = {}));
});
