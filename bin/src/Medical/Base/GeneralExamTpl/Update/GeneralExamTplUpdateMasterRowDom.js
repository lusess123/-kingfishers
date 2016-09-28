var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var GeneralExamTplUpdateMasterRowDom;
    (function (GeneralExamTplUpdateMasterRowDom) {
        var GeneralExamTplUpdateMasterRowDomAction = (function (_super) {
            __extends(GeneralExamTplUpdateMasterRowDomAction, _super);
            function GeneralExamTplUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateMasterRowDomAction;
        }(domCore.DomAction));
        GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomAction = GeneralExamTplUpdateMasterRowDomAction;
        var GeneralExamTplUpdateMasterRowDomReact = (function (_super) {
            __extends(GeneralExamTplUpdateMasterRowDomReact, _super);
            function GeneralExamTplUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplUpdateMasterRowDomStates();
            }
            GeneralExamTplUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "模板", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "综述：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Summary"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "建议：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Advice"].intoDom())))))));
            };
            GeneralExamTplUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            GeneralExamTplUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GeneralExamTplUpdateMasterRowDomReact;
        }(domCore.DomReact));
        GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomReact = GeneralExamTplUpdateMasterRowDomReact;
        var GeneralExamTplUpdateMasterRowDomVm = (function (_super) {
            __extends(GeneralExamTplUpdateMasterRowDomVm, _super);
            function GeneralExamTplUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.ColVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
                    //  this.RemarkOgi = this.RowData.Remark;
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.initColVm("Name", "TextVm", "notNull");
                    this.initColVm("Summary", "TextAreaVm", "notNull");
                    this.initColVm("Advice", "TextAreaVm");
                }
            }
            GeneralExamTplUpdateMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.setOriValue(this.RowData[colName]);
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            GeneralExamTplUpdateMasterRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            GeneralExamTplUpdateMasterRowDomVm.prototype.getData = function (isDetailChange) {
                var _this = this;
                var _obj = {};
                //this.ColVmObjList["Name"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.Name = val;
                //    }
                //});
                //this.ColVmObjList["Summary"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.Name = val;
                //    }
                //});
                //this.ColVmObjList["Advice"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.Advice = val;
                //    }
                //});
                for (var vn in this.ColVmObjList) {
                    var _colObj = this.ColVmObjList[vn];
                    if (_colObj) {
                        _colObj.getChangeValFun(function (isChange, val) {
                            if (isChange) {
                                _this.fIsChangeRow = true;
                                _obj[vn] = val;
                            }
                        });
                    }
                }
                if (this.fIsChangeRow || isDetailChange) {
                    _obj.FID = this.RowData.FID;
                }
                this.fIsChangeRow = false;
                return _obj;
            };
            return GeneralExamTplUpdateMasterRowDomVm;
        }(domCore.DomVm));
        GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomVm = GeneralExamTplUpdateMasterRowDomVm;
        var GeneralExamTplUpdateMasterRowDomStates = (function (_super) {
            __extends(GeneralExamTplUpdateMasterRowDomStates, _super);
            function GeneralExamTplUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateMasterRowDomStates;
        }(domCore.DomStates));
        GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomStates = GeneralExamTplUpdateMasterRowDomStates;
        var GeneralExamTplUpdateMasterRowDomProps = (function (_super) {
            __extends(GeneralExamTplUpdateMasterRowDomProps, _super);
            function GeneralExamTplUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateMasterRowDomProps;
        }(domCore.DomProps));
        GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomProps = GeneralExamTplUpdateMasterRowDomProps;
    })(GeneralExamTplUpdateMasterRowDom = exports.GeneralExamTplUpdateMasterRowDom || (exports.GeneralExamTplUpdateMasterRowDom = {}));
});
