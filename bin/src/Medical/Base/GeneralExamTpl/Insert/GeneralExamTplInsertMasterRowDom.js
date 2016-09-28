var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/baseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var GeneralExamTplInsertMasterRowDom;
    (function (GeneralExamTplInsertMasterRowDom) {
        var GeneralExamTplInsertMasterRowDomAction = (function (_super) {
            __extends(GeneralExamTplInsertMasterRowDomAction, _super);
            function GeneralExamTplInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplInsertMasterRowDomAction;
        }(domCore.DomAction));
        GeneralExamTplInsertMasterRowDom.GeneralExamTplInsertMasterRowDomAction = GeneralExamTplInsertMasterRowDomAction;
        var GeneralExamTplInsertMasterRowDomReact = (function (_super) {
            __extends(GeneralExamTplInsertMasterRowDomReact, _super);
            function GeneralExamTplInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplInsertMasterRowDomStates();
            }
            GeneralExamTplInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "模板", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "综述：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Summary"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "建议：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Advice"].intoDom())))))));
            };
            GeneralExamTplInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            GeneralExamTplInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GeneralExamTplInsertMasterRowDomReact;
        }(domCore.DomReact));
        GeneralExamTplInsertMasterRowDom.GeneralExamTplInsertMasterRowDomReact = GeneralExamTplInsertMasterRowDomReact;
        var GeneralExamTplInsertMasterRowDomVm = (function (_super) {
            __extends(GeneralExamTplInsertMasterRowDomVm, _super);
            function GeneralExamTplInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.ColVmObjList = {};
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("Summary", "TextAreaVm", "notNull");
                this.initColVm("Advice", "TextAreaVm");
            }
            GeneralExamTplInsertMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
            GeneralExamTplInsertMasterRowDomVm.prototype.legal = function () {
                //var l1 = this.TextVmObjList["SimpleCode"].legal();
                //var l2 = this.TextVmObjList["Name"].legal();
                //var _res = l1 && l2;
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return GeneralExamTplInsertMasterRowDomVm;
        }(domCore.DomVm));
        GeneralExamTplInsertMasterRowDom.GeneralExamTplInsertMasterRowDomVm = GeneralExamTplInsertMasterRowDomVm;
        var GeneralExamTplInsertMasterRowDomStates = (function (_super) {
            __extends(GeneralExamTplInsertMasterRowDomStates, _super);
            function GeneralExamTplInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplInsertMasterRowDomStates;
        }(domCore.DomStates));
        GeneralExamTplInsertMasterRowDom.GeneralExamTplInsertMasterRowDomStates = GeneralExamTplInsertMasterRowDomStates;
        var GeneralExamTplInsertMasterRowDomProps = (function (_super) {
            __extends(GeneralExamTplInsertMasterRowDomProps, _super);
            function GeneralExamTplInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplInsertMasterRowDomProps;
        }(domCore.DomProps));
        GeneralExamTplInsertMasterRowDom.GeneralExamTplInsertMasterRowDomProps = GeneralExamTplInsertMasterRowDomProps;
    })(GeneralExamTplInsertMasterRowDom = exports.GeneralExamTplInsertMasterRowDom || (exports.GeneralExamTplInsertMasterRowDom = {}));
});
