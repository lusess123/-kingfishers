var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Util", "./GeneralExamTplUpdateMasterRowDom", "./../../../Common/ItemConditionUpdateDetailRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, utilFile, masterRowFile, detailRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var GeneralExamTplUpdateRowDom;
    (function (GeneralExamTplUpdateRowDom) {
        var GeneralExamTplUpdateRowDomAction = (function (_super) {
            __extends(GeneralExamTplUpdateRowDomAction, _super);
            function GeneralExamTplUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateRowDomAction;
        }(domCore.DomAction));
        GeneralExamTplUpdateRowDom.GeneralExamTplUpdateRowDomAction = GeneralExamTplUpdateRowDomAction;
        var GeneralExamTplUpdateRowDomReact = (function (_super) {
            __extends(GeneralExamTplUpdateRowDomReact, _super);
            function GeneralExamTplUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplUpdateRowDomStates();
            }
            GeneralExamTplUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.MasterRow.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_detailTitleClick(); }}, "关联项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active" + (this.props.Vm.IsDetailHide ? "hide" : "")}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "项目名称")), React.createElement("th", null, React.createElement("span", null, "高于")), React.createElement("th", null, React.createElement("span", null, "低于")), React.createElement("th", null, React.createElement("span", null, "单位")), React.createElement("th", null, React.createElement("span", null, "是否阳性")), React.createElement("th", null, React.createElement("span", null, "关键词")), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_addNewDetailRow(); }})))), React.createElement("tbody", null, this.props.Vm.DetailRowList.map(function (row, i) {
                    row.RowNumber = i;
                    return row.intoDom();
                })))))))));
            };
            GeneralExamTplUpdateRowDomReact.prototype.fun_addNewDetailRow = function () {
                this.props.Vm.addDetailRow();
            };
            GeneralExamTplUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            GeneralExamTplUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            GeneralExamTplUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            return GeneralExamTplUpdateRowDomReact;
        }(domCore.DomReact));
        GeneralExamTplUpdateRowDom.GeneralExamTplUpdateRowDomReact = GeneralExamTplUpdateRowDomReact;
        var GeneralExamTplUpdateRowDomVm = (function (_super) {
            __extends(GeneralExamTplUpdateRowDomVm, _super);
            function GeneralExamTplUpdateRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = GeneralExamTplUpdateRowDomReact;
                //public DetailRowList: detailRowFile.GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm[] = [];
                this.DetailRowList = [];
                this.MasterRow = new masterRowFile.GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomVm(config.MasterConfig);
                    config.DetailRowConfigList.forEach(function (detailRowConfig, i) {
                        detailRowConfig.UniId = _this.UniId;
                        //var detailRowVm = new detailRowFile.GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm(detailRowConfig);
                        var detailRowVm = new detailRowFile.ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomVm(detailRowConfig);
                        detailRowVm.RowNumber = i;
                        _this.DetailRowList.push(detailRowVm);
                    });
                }
                this.listenAppEvent("medical/base/GeneralExamTpl/update/DetailRow", this.UniId, function (rowIndex) {
                    _this.delDetailRowByIndex(rowIndex);
                });
            }
            GeneralExamTplUpdateRowDomVm.prototype.delDetailRowByIndex = function (rowIndex) {
                this.DetailRowList.splice(rowIndex, 1);
                this.DetailRowList.forEach(function (r, i) {
                    if (i >= rowIndex) {
                        r.toChange();
                    }
                });
                var _id = this.DetailRowList[rowIndex].RowData.FID;
                if (_id) {
                    this.DelFidList.push(_id);
                }
                this.forceUpdate("");
            };
            GeneralExamTplUpdateRowDomVm.prototype.addDetailRow = function () {
                var data = { FID: "", ItemName: "", GreaterThan: "", LessThan: "", Unit: "", IsPositive: "", KeyWord: "" };
                //  var detailRow: detailRowFile.GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm = new detailRowFile.GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm({ UniId: this.UniId, RowData: data, IsNew: true });
                var detailRow = new detailRowFile.ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomVm({ UniId: this.UniId, RowData: data, IsNew: true });
                this.DetailRowList.push(detailRow);
                this.forceUpdate("");
            };
            GeneralExamTplUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                this.DetailRowList.forEach(function (r) {
                    _isres = _isres && r.legal();
                });
                return _isres;
            };
            GeneralExamTplUpdateRowDomVm.prototype.getData = function () {
                var _list = [];
                this.DetailRowList.forEach(function (r) {
                    var _obj = r.getData();
                    if (!utilFile.Core.Util.IsPure(_obj)) {
                        _list.push(_obj);
                    }
                });
                var _data = this.MasterRow.getData(_list.length > 0 || this.DelFidList.length > 0);
                if (this.DelFidList.length > 0) {
                    _data.DeleteItemList = this.DelFidList;
                }
                if (_list.length > 0) {
                    _data.ItemList = _list;
                }
                return _data;
            };
            return GeneralExamTplUpdateRowDomVm;
        }(domCore.DomVm));
        GeneralExamTplUpdateRowDom.GeneralExamTplUpdateRowDomVm = GeneralExamTplUpdateRowDomVm;
        var GeneralExamTplUpdateRowDomStates = (function (_super) {
            __extends(GeneralExamTplUpdateRowDomStates, _super);
            function GeneralExamTplUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateRowDomStates;
        }(domCore.DomStates));
        GeneralExamTplUpdateRowDom.GeneralExamTplUpdateRowDomStates = GeneralExamTplUpdateRowDomStates;
        var GeneralExamTplUpdateRowDomProps = (function (_super) {
            __extends(GeneralExamTplUpdateRowDomProps, _super);
            function GeneralExamTplUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateRowDomProps;
        }(domCore.DomProps));
        GeneralExamTplUpdateRowDom.GeneralExamTplUpdateRowDomProps = GeneralExamTplUpdateRowDomProps;
    })(GeneralExamTplUpdateRowDom = exports.GeneralExamTplUpdateRowDom || (exports.GeneralExamTplUpdateRowDom = {}));
});
