var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyInsertMasterRowDom;
    (function (AnomalyInsertMasterRowDom) {
        var AnomalyInsertMasterRowDomAction = (function (_super) {
            __extends(AnomalyInsertMasterRowDomAction, _super);
            function AnomalyInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertMasterRowDomAction;
        }(domCore.DomAction));
        AnomalyInsertMasterRowDom.AnomalyInsertMasterRowDomAction = AnomalyInsertMasterRowDomAction;
        var AnomalyInsertMasterRowDomReact = (function (_super) {
            __extends(AnomalyInsertMasterRowDomReact, _super);
            function AnomalyInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyInsertMasterRowDomStates();
            }
            AnomalyInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "异常", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["SimpleCode"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "序号：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["OrderNumber"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.ColVmObjList["Remark"].intoDom())))))));
            };
            AnomalyInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            AnomalyInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AnomalyInsertMasterRowDomReact;
        }(domCore.DomReact));
        AnomalyInsertMasterRowDom.AnomalyInsertMasterRowDomReact = AnomalyInsertMasterRowDomReact;
        var AnomalyInsertMasterRowDomVm = (function (_super) {
            __extends(AnomalyInsertMasterRowDomVm, _super);
            function AnomalyInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyInsertMasterRowDomReact;
                this.RowData = {};
                //public SimpleCodeVm: textFile.ui.TextVm;
                //public NameVm: textFile.ui.TextVm;
                this.TextVmObjList = {};
                this.ColVmObjList = {};
                this.initColVm("SimpleCode", "TextVm", "notNull");
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("OrderNumber", "TextVm");
                this.initColVm("Remark", "TextAreaVm");
            }
            AnomalyInsertMasterRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
            AnomalyInsertMasterRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return AnomalyInsertMasterRowDomVm;
        }(domCore.DomVm));
        AnomalyInsertMasterRowDom.AnomalyInsertMasterRowDomVm = AnomalyInsertMasterRowDomVm;
        var AnomalyInsertMasterRowDomStates = (function (_super) {
            __extends(AnomalyInsertMasterRowDomStates, _super);
            function AnomalyInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertMasterRowDomStates;
        }(domCore.DomStates));
        AnomalyInsertMasterRowDom.AnomalyInsertMasterRowDomStates = AnomalyInsertMasterRowDomStates;
        var AnomalyInsertMasterRowDomProps = (function (_super) {
            __extends(AnomalyInsertMasterRowDomProps, _super);
            function AnomalyInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertMasterRowDomProps;
        }(domCore.DomProps));
        AnomalyInsertMasterRowDom.AnomalyInsertMasterRowDomProps = AnomalyInsertMasterRowDomProps;
    })(AnomalyInsertMasterRowDom = exports.AnomalyInsertMasterRowDom || (exports.AnomalyInsertMasterRowDom = {}));
});
