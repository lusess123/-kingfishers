var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Util", "./ExamPackageUpdateMasterRowDom", "./ExamPackageUpdateDetailRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, utilFile, masterRowFile, detailRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageUpdateRowDom;
    (function (ExamPackageUpdateRowDom) {
        var ExamPackageUpdateRowDomAction = (function (_super) {
            __extends(ExamPackageUpdateRowDomAction, _super);
            function ExamPackageUpdateRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateRowDomAction;
        }(domCore.DomAction));
        ExamPackageUpdateRowDom.ExamPackageUpdateRowDomAction = ExamPackageUpdateRowDomAction;
        var ExamPackageUpdateRowDomReact = (function (_super) {
            __extends(ExamPackageUpdateRowDomReact, _super);
            function ExamPackageUpdateRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageUpdateRowDomStates();
            }
            ExamPackageUpdateRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.MasterRow.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_detailTitleClick(); }}, "关联项目", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active" + (this.props.Vm.IsDetailHide ? "hide" : "")}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "项目名称")), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle acsPointer", onClick: function () { _this.fun_addNewButtonRow(); }})))), React.createElement("tbody", null, this.props.Vm.DetailRowList.map(function (row, index) {
                    row.RowNumber = index;
                    return row.intoDom();
                })))))))));
            };
            ExamPackageUpdateRowDomReact.prototype.fun_addNewButtonRow = function () {
                this.props.Vm.addButtonRow();
            };
            ExamPackageUpdateRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ExamPackageUpdateRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            ExamPackageUpdateRowDomReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            return ExamPackageUpdateRowDomReact;
        }(domCore.DomReact));
        ExamPackageUpdateRowDom.ExamPackageUpdateRowDomReact = ExamPackageUpdateRowDomReact;
        var ExamPackageUpdateRowDomVm = (function (_super) {
            __extends(ExamPackageUpdateRowDomVm, _super);
            function ExamPackageUpdateRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ExamPackageUpdateRowDomReact;
                this.DetailRowList = [];
                this.MasterRow = new masterRowFile.ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomVm();
                this.DelFidList = [];
                this.UniId = "";
                this.UniId = eventFile.App.getUniId().toString();
                if (config) {
                    config.MasterConfig.UniId = this.UniId;
                    this.MasterRow = new masterRowFile.ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomVm(config.MasterConfig);
                    config.DetailRowConfigList.forEach(function (detailRowConfig, i) {
                        detailRowConfig.UniId = _this.UniId;
                        var detailRowVm = new detailRowFile.ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomVm(detailRowConfig);
                        _this.DetailRowList.push(detailRowVm);
                    });
                    this.listenAppEvent("medical/base/exampackage/update/DetailRow", this.UniId, function (rowIndex) {
                        _this.delDetailRowByIndex(rowIndex);
                    });
                }
            }
            ExamPackageUpdateRowDomVm.prototype.delDetailRowByIndex = function (rowIndex) {
                var _id = this.DetailRowList[rowIndex].RowData.FID;
                if (_id) {
                    this.DelFidList.push(_id);
                }
                this.DetailRowList.splice(rowIndex, 1);
                this.DetailRowList.forEach(function (r, i) {
                    if (i >= rowIndex) {
                        r.toChange();
                    }
                });
                this.forceUpdate("");
            };
            ExamPackageUpdateRowDomVm.prototype.addButtonRow = function () {
                var data = { FID: "", PackageId: "", ItemId: "" };
                var detailRow = new detailRowFile.ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomVm({ UniId: this.UniId, RowData: data });
                this.DetailRowList.push(detailRow);
                this.forceUpdate("");
            };
            ExamPackageUpdateRowDomVm.prototype.legal = function () {
                var _isres = this.MasterRow.legal();
                this.DetailRowList.forEach(function (r) {
                    _isres = _isres && r.legal();
                });
                return _isres;
            };
            ExamPackageUpdateRowDomVm.prototype.getData = function () {
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
                    _data.DetailListData = _list;
                }
                return _data;
            };
            return ExamPackageUpdateRowDomVm;
        }(domCore.DomVm));
        ExamPackageUpdateRowDom.ExamPackageUpdateRowDomVm = ExamPackageUpdateRowDomVm;
        var ExamPackageUpdateRowDomStates = (function (_super) {
            __extends(ExamPackageUpdateRowDomStates, _super);
            function ExamPackageUpdateRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateRowDomStates;
        }(domCore.DomStates));
        ExamPackageUpdateRowDom.ExamPackageUpdateRowDomStates = ExamPackageUpdateRowDomStates;
        var ExamPackageUpdateRowDomProps = (function (_super) {
            __extends(ExamPackageUpdateRowDomProps, _super);
            function ExamPackageUpdateRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateRowDomProps;
        }(domCore.DomProps));
        ExamPackageUpdateRowDom.ExamPackageUpdateRowDomProps = ExamPackageUpdateRowDomProps;
    })(ExamPackageUpdateRowDom = exports.ExamPackageUpdateRowDom || (exports.ExamPackageUpdateRowDom = {}));
});
