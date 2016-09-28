var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemUpdateMasterRowDom;
    (function (ExamItemUpdateMasterRowDom) {
        var ExamItemUpdateMasterRowDomAction = (function (_super) {
            __extends(ExamItemUpdateMasterRowDomAction, _super);
            function ExamItemUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdateMasterRowDomAction;
        }(domCore.DomAction));
        ExamItemUpdateMasterRowDom.ExamItemUpdateMasterRowDomAction = ExamItemUpdateMasterRowDomAction;
        var ExamItemUpdateMasterRowDomReact = (function (_super) {
            __extends(ExamItemUpdateMasterRowDomReact, _super);
            function ExamItemUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemUpdateMasterRowDomStates();
            }
            ExamItemUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "项目代码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ItemCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "项目名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "所属科室：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["DepartmentId"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "项目分类：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ItemCategory"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "单位：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Unit"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "参考上限：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["UpperLimit"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "参考下限：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["LowerLimit"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "价格：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Price"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "序号：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Order"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "体检结果类型：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["ResultClass"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Remark"].intoDom())))))));
            };
            ExamItemUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            ExamItemUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ExamItemUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemUpdateMasterRowDomReact;
        }(domCore.DomReact));
        ExamItemUpdateMasterRowDom.ExamItemUpdateMasterRowDomReact = ExamItemUpdateMasterRowDomReact;
        var ExamItemUpdateMasterRowDomVm = (function (_super) {
            __extends(ExamItemUpdateMasterRowDomVm, _super);
            function ExamItemUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
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
            }
            ExamItemUpdateMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            ExamItemUpdateMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["SimpleCode"].legal();
                var l2 = this.TextVmObjList["ItemCode"].legal();
                var _res = l1 && l2;
                return _res;
            };
            ExamItemUpdateMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
            ExamItemUpdateMasterRowDomVm.prototype.getData = function () {
                var _this = this;
                var _obj = {};
                this.TextVmObjList["SimpleCode"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.SimpleCode = val;
                    }
                });
                this.TextVmObjList["ItemCode"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.ItemCode = val;
                    }
                });
                this.TextVmObjList["Name"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Name = val;
                    }
                });
                this.TextVmObjList["DepartmentId"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.DepartmentId = val;
                    }
                });
                this.TextVmObjList["ItemCategory"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.ItemCategory = val;
                    }
                });
                this.TextVmObjList["Unit"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Unit = val;
                    }
                });
                this.TextVmObjList["UpperLimit"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.UpperLimit = Number(val);
                    }
                });
                this.TextVmObjList["LowerLimit"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.LowerLimit = Number(val);
                    }
                });
                this.TextVmObjList["Price"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Price = Number(val);
                    }
                });
                this.TextVmObjList["Order"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Order = val;
                    }
                });
                this.TextVmObjList["ResultClass"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.ResultClass = val;
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
            return ExamItemUpdateMasterRowDomVm;
        }(domCore.DomVm));
        ExamItemUpdateMasterRowDom.ExamItemUpdateMasterRowDomVm = ExamItemUpdateMasterRowDomVm;
        var ExamItemUpdateMasterRowDomStates = (function (_super) {
            __extends(ExamItemUpdateMasterRowDomStates, _super);
            function ExamItemUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdateMasterRowDomStates;
        }(domCore.DomStates));
        ExamItemUpdateMasterRowDom.ExamItemUpdateMasterRowDomStates = ExamItemUpdateMasterRowDomStates;
        var ExamItemUpdateMasterRowDomProps = (function (_super) {
            __extends(ExamItemUpdateMasterRowDomProps, _super);
            function ExamItemUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemUpdateMasterRowDomProps;
        }(domCore.DomProps));
        ExamItemUpdateMasterRowDom.ExamItemUpdateMasterRowDomProps = ExamItemUpdateMasterRowDomProps;
    })(ExamItemUpdateMasterRowDom = exports.ExamItemUpdateMasterRowDom || (exports.ExamItemUpdateMasterRowDom = {}));
});
