var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConclusionTplUpdateMasterRowDom;
    (function (DeptConclusionTplUpdateMasterRowDom) {
        var DeptConclusionTplUpdateMasterRowDomAction = (function (_super) {
            __extends(DeptConclusionTplUpdateMasterRowDomAction, _super);
            function DeptConclusionTplUpdateMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplUpdateMasterRowDomAction;
        }(domCore.DomAction));
        DeptConclusionTplUpdateMasterRowDom.DeptConclusionTplUpdateMasterRowDomAction = DeptConclusionTplUpdateMasterRowDomAction;
        var DeptConclusionTplUpdateMasterRowDomReact = (function (_super) {
            __extends(DeptConclusionTplUpdateMasterRowDomReact, _super);
            function DeptConclusionTplUpdateMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplUpdateMasterRowDomStates();
            }
            DeptConclusionTplUpdateMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "模板", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "科室：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["DeptId"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label "}, "小结内容：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Content"].intoDom())))))));
            };
            DeptConclusionTplUpdateMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            DeptConclusionTplUpdateMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            DeptConclusionTplUpdateMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DeptConclusionTplUpdateMasterRowDomReact;
        }(domCore.DomReact));
        DeptConclusionTplUpdateMasterRowDom.DeptConclusionTplUpdateMasterRowDomReact = DeptConclusionTplUpdateMasterRowDomReact;
        var DeptConclusionTplUpdateMasterRowDomVm = (function (_super) {
            __extends(DeptConclusionTplUpdateMasterRowDomVm, _super);
            function DeptConclusionTplUpdateMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionTplUpdateMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.ColVmObjList = {};
                this.fIsChangeRow = false;
                if (config) {
                    this.RowData = config.RowData;
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.initColVm("DeptId", "TextVm", "notNull");
                    this.initColVm("Name", "TextVm", "notNull");
                    this.initColVm("Content", "TextAreaVm", "notNull");
                }
            }
            DeptConclusionTplUpdateMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
            //public legal(): boolean {
            //    var l1 = this.TextVmObjList["DeptId"].legal();
            //    var l2 = this.TextVmObjList["Name"].legal();
            //    var l3 = this.ContentTextAreaVm.legal();
            //    var _res = l1 && l2&&l3;
            //    return _res;
            //}
            DeptConclusionTplUpdateMasterRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            DeptConclusionTplUpdateMasterRowDomVm.prototype.getData = function (isDetailChange) {
                var _this = this;
                var _obj = {};
                //this.ColVmObjList["DeptId"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.DeptId = val;
                //    }
                //});
                //this.ColVmObjList["Name"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.Name = val;
                //    }
                //});
                //this.ColVmObjList["Content"].getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.Name = val;
                //    }
                //});
                //this.ContentTextAreaVm.getChangeValFun((isChange, val) => {
                //    if (isChange) {
                //        this.fIsChangeRow = true;
                //        _obj.Content = val;
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
            return DeptConclusionTplUpdateMasterRowDomVm;
        }(domCore.DomVm));
        DeptConclusionTplUpdateMasterRowDom.DeptConclusionTplUpdateMasterRowDomVm = DeptConclusionTplUpdateMasterRowDomVm;
        var DeptConclusionTplUpdateMasterRowDomStates = (function (_super) {
            __extends(DeptConclusionTplUpdateMasterRowDomStates, _super);
            function DeptConclusionTplUpdateMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplUpdateMasterRowDomStates;
        }(domCore.DomStates));
        DeptConclusionTplUpdateMasterRowDom.DeptConclusionTplUpdateMasterRowDomStates = DeptConclusionTplUpdateMasterRowDomStates;
        var DeptConclusionTplUpdateMasterRowDomProps = (function (_super) {
            __extends(DeptConclusionTplUpdateMasterRowDomProps, _super);
            function DeptConclusionTplUpdateMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplUpdateMasterRowDomProps;
        }(domCore.DomProps));
        DeptConclusionTplUpdateMasterRowDom.DeptConclusionTplUpdateMasterRowDomProps = DeptConclusionTplUpdateMasterRowDomProps;
    })(DeptConclusionTplUpdateMasterRowDom = exports.DeptConclusionTplUpdateMasterRowDom || (exports.DeptConclusionTplUpdateMasterRowDom = {}));
});
