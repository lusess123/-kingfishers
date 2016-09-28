var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemCategoryUpdateMasterRowDom;
    (function (ExamItemCategoryUpdateMasterRowDom) {
        var ExamItemCategoryUpdateMasterRowDomAction = (function (_super) {
            __extends(ExamItemCategoryUpdateMasterRowDomAction, _super);
            function ExamItemCategoryUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdateMasterRowDomAction;
        }(domCore.DomAction));
        ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomAction = ExamItemCategoryUpdateMasterRowDomAction;
        var ExamItemCategoryUpdateMasterRowDomReact = (function (_super) {
            __extends(ExamItemCategoryUpdateMasterRowDomReact, _super);
            function ExamItemCategoryUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryUpdateMasterRowDomStates();
            }
            ExamItemCategoryUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检项目分类", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "代码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Code"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Name"].intoDom())))))));
            };
            ExamItemCategoryUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            ExamItemCategoryUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ExamItemCategoryUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemCategoryUpdateMasterRowDomReact;
        }(domCore.DomReact));
        ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomReact = ExamItemCategoryUpdateMasterRowDomReact;
        var ExamItemCategoryUpdateMasterRowDomVm = (function (_super) {
            __extends(ExamItemCategoryUpdateMasterRowDomVm, _super);
            function ExamItemCategoryUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
                    this.initTextVm("Code", "notNull");
                    this.initTextVm("Name", "notNull");
                }
            }
            ExamItemCategoryUpdateMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
            ExamItemCategoryUpdateMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            ExamItemCategoryUpdateMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["Name"].legal();
                var l2 = this.TextVmObjList["Code"].legal();
                var _res = l1 && l2;
                return _res;
            };
            ExamItemCategoryUpdateMasterRowDomVm.prototype.getData = function () {
                var _this = this;
                var _obj = {};
                this.TextVmObjList["Code"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Code = val;
                    }
                });
                this.TextVmObjList["Name"].getChangeValFun(function (isChange, val) {
                    if (isChange) {
                        _this.fIsChangeRow = true;
                        _obj.Name = val;
                    }
                });
                if (this.fIsChangeRow) {
                    _obj.FID = this.RowData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            return ExamItemCategoryUpdateMasterRowDomVm;
        }(domCore.DomVm));
        ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomVm = ExamItemCategoryUpdateMasterRowDomVm;
        var ExamItemCategoryUpdateMasterRowDomStates = (function (_super) {
            __extends(ExamItemCategoryUpdateMasterRowDomStates, _super);
            function ExamItemCategoryUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdateMasterRowDomStates;
        }(domCore.DomStates));
        ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomStates = ExamItemCategoryUpdateMasterRowDomStates;
        var ExamItemCategoryUpdateMasterRowDomProps = (function (_super) {
            __extends(ExamItemCategoryUpdateMasterRowDomProps, _super);
            function ExamItemCategoryUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryUpdateMasterRowDomProps;
        }(domCore.DomProps));
        ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomProps = ExamItemCategoryUpdateMasterRowDomProps;
    })(ExamItemCategoryUpdateMasterRowDom = exports.ExamItemCategoryUpdateMasterRowDom || (exports.ExamItemCategoryUpdateMasterRowDom = {}));
});
