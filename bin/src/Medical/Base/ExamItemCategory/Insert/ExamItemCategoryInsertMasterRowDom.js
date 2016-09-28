var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemCategoryInsertMasterRowDom;
    (function (ExamItemCategoryInsertMasterRowDom) {
        var ExamItemCategoryInsertMasterRowDomAction = (function (_super) {
            __extends(ExamItemCategoryInsertMasterRowDomAction, _super);
            function ExamItemCategoryInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertMasterRowDomAction;
        }(domCore.DomAction));
        ExamItemCategoryInsertMasterRowDom.ExamItemCategoryInsertMasterRowDomAction = ExamItemCategoryInsertMasterRowDomAction;
        var ExamItemCategoryInsertMasterRowDomReact = (function (_super) {
            __extends(ExamItemCategoryInsertMasterRowDomReact, _super);
            function ExamItemCategoryInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryInsertMasterRowDomStates();
            }
            ExamItemCategoryInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "体检项目分类", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "代码：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Code"].intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right required form-control-label"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.TextVmObjList["Name"].intoDom())))))));
            };
            ExamItemCategoryInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            ExamItemCategoryInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            ExamItemCategoryInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemCategoryInsertMasterRowDomReact;
        }(domCore.DomReact));
        ExamItemCategoryInsertMasterRowDom.ExamItemCategoryInsertMasterRowDomReact = ExamItemCategoryInsertMasterRowDomReact;
        var ExamItemCategoryInsertMasterRowDomVm = (function (_super) {
            __extends(ExamItemCategoryInsertMasterRowDomVm, _super);
            function ExamItemCategoryInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                this.initTextVm("Code", "notNull");
                this.initTextVm("Name", "notNull");
            }
            ExamItemCategoryInsertMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["Name"].legal();
                var l2 = this.TextVmObjList["Code"].legal();
                var _res = l1 && l2;
                return _res;
            };
            ExamItemCategoryInsertMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
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
            ExamItemCategoryInsertMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return ExamItemCategoryInsertMasterRowDomVm;
        }(domCore.DomVm));
        ExamItemCategoryInsertMasterRowDom.ExamItemCategoryInsertMasterRowDomVm = ExamItemCategoryInsertMasterRowDomVm;
        var ExamItemCategoryInsertMasterRowDomStates = (function (_super) {
            __extends(ExamItemCategoryInsertMasterRowDomStates, _super);
            function ExamItemCategoryInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertMasterRowDomStates;
        }(domCore.DomStates));
        ExamItemCategoryInsertMasterRowDom.ExamItemCategoryInsertMasterRowDomStates = ExamItemCategoryInsertMasterRowDomStates;
        var ExamItemCategoryInsertMasterRowDomProps = (function (_super) {
            __extends(ExamItemCategoryInsertMasterRowDomProps, _super);
            function ExamItemCategoryInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryInsertMasterRowDomProps;
        }(domCore.DomProps));
        ExamItemCategoryInsertMasterRowDom.ExamItemCategoryInsertMasterRowDomProps = ExamItemCategoryInsertMasterRowDomProps;
    })(ExamItemCategoryInsertMasterRowDom = exports.ExamItemCategoryInsertMasterRowDom || (exports.ExamItemCategoryInsertMasterRowDom = {}));
});
