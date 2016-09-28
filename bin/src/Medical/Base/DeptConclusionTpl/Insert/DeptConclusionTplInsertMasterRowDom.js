var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConclusionTplInsertMasterRowDom;
    (function (DeptConclusionTplInsertMasterRowDom) {
        var DeptConclusionTplInsertMasterRowDomAction = (function (_super) {
            __extends(DeptConclusionTplInsertMasterRowDomAction, _super);
            function DeptConclusionTplInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertMasterRowDomAction;
        }(domCore.DomAction));
        DeptConclusionTplInsertMasterRowDom.DeptConclusionTplInsertMasterRowDomAction = DeptConclusionTplInsertMasterRowDomAction;
        var DeptConclusionTplInsertMasterRowDomReact = (function (_super) {
            __extends(DeptConclusionTplInsertMasterRowDomReact, _super);
            function DeptConclusionTplInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplInsertMasterRowDomStates();
            }
            DeptConclusionTplInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "模板", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "科室：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["DeptId"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "小结内容：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Content"].intoDom())))))));
            };
            DeptConclusionTplInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            DeptConclusionTplInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DeptConclusionTplInsertMasterRowDomReact;
        }(domCore.DomReact));
        DeptConclusionTplInsertMasterRowDom.DeptConclusionTplInsertMasterRowDomReact = DeptConclusionTplInsertMasterRowDomReact;
        var DeptConclusionTplInsertMasterRowDomVm = (function (_super) {
            __extends(DeptConclusionTplInsertMasterRowDomVm, _super);
            function DeptConclusionTplInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionTplInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.ColVmObjList = {};
                this.initColVm("DeptId", "TextVm", "notNull");
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("Content", "TextAreaVm", "notNull");
            }
            DeptConclusionTplInsertMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            DeptConclusionTplInsertMasterRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return DeptConclusionTplInsertMasterRowDomVm;
        }(domCore.DomVm));
        DeptConclusionTplInsertMasterRowDom.DeptConclusionTplInsertMasterRowDomVm = DeptConclusionTplInsertMasterRowDomVm;
        var DeptConclusionTplInsertMasterRowDomStates = (function (_super) {
            __extends(DeptConclusionTplInsertMasterRowDomStates, _super);
            function DeptConclusionTplInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertMasterRowDomStates;
        }(domCore.DomStates));
        DeptConclusionTplInsertMasterRowDom.DeptConclusionTplInsertMasterRowDomStates = DeptConclusionTplInsertMasterRowDomStates;
        var DeptConclusionTplInsertMasterRowDomProps = (function (_super) {
            __extends(DeptConclusionTplInsertMasterRowDomProps, _super);
            function DeptConclusionTplInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertMasterRowDomProps;
        }(domCore.DomProps));
        DeptConclusionTplInsertMasterRowDom.DeptConclusionTplInsertMasterRowDomProps = DeptConclusionTplInsertMasterRowDomProps;
    })(DeptConclusionTplInsertMasterRowDom = exports.DeptConclusionTplInsertMasterRowDom || (exports.DeptConclusionTplInsertMasterRowDom = {}));
});
