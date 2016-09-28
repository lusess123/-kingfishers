var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./MedicalRowDom"], function (require, exports, domFile, React, RowDom) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DetectionInsertMedicalDom;
    (function (DetectionInsertMedicalDom) {
        var DetectionInsertMedicalDomAction = (function (_super) {
            __extends(DetectionInsertMedicalDomAction, _super);
            function DetectionInsertMedicalDomAction() {
                _super.apply(this, arguments);
            }
            return DetectionInsertMedicalDomAction;
        }(domCore.DomAction));
        DetectionInsertMedicalDom.DetectionInsertMedicalDomAction = DetectionInsertMedicalDomAction;
        var DetectionInsertMedicalDomReact = (function (_super) {
            __extends(DetectionInsertMedicalDomReact, _super);
            function DetectionInsertMedicalDomReact() {
                _super.apply(this, arguments);
                this.state = new DetectionInsertMedicalDomStates();
            }
            DetectionInsertMedicalDomReact.prototype.pSender = function () {
                var header = this.initHeader();
                var boby = this.initBody();
                return (React.createElement("div", {className: "YSm-table"}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, header, boby))));
            };
            DetectionInsertMedicalDomReact.prototype.initBody = function () {
                return (React.createElement("tbody", null, this.props.Vm.MedicalRowDom.map(function (row, index) {
                    return row.intoDom();
                })));
            };
            DetectionInsertMedicalDomReact.prototype.initHeader = function () {
                return (React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "序号"), React.createElement("th", null, "异常名称"), React.createElement("th", null, "操作"))));
            };
            DetectionInsertMedicalDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DetectionInsertMedicalDomReact;
        }(domCore.DomReact));
        DetectionInsertMedicalDom.DetectionInsertMedicalDomReact = DetectionInsertMedicalDomReact;
        var DetectionInsertMedicalDomVm = (function (_super) {
            __extends(DetectionInsertMedicalDomVm, _super);
            function DetectionInsertMedicalDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetectionInsertMedicalDomReact;
                this.MedicalRowDom = new Array();
                this.RowData = [];
                this.OrgRowData = [];
                //if (config) {
                //    this.RowData = config.data
                //    this.RowData.forEach((rowData, index) => {
                //        var config1 = { RowData: rowData, rowNumber: index, Unit: config.Unit }
                //        var rowVm = new RowDom.MedicalRowDom.MedicalRowDomVm(config1);
                //        this.MedicalRowDom.push(rowVm);
                //    });
                //}
                if (config) {
                    if (config.data) {
                        config.data.forEach(function (a) {
                            _this.OrgRowData.push(a);
                        });
                        this.isedit = config.isedit;
                    }
                }
                this.initData(config);
            }
            DetectionInsertMedicalDomVm.prototype.initData = function (config) {
                var _this = this;
                this.MedicalRowDom.length = 0;
                this.RowData = config.data;
                if (this.RowData) {
                    this.RowData.forEach(function (rowData, index) {
                        var config1 = { RowData: rowData, rowNumber: index, Unit: config.Unit, isedit: _this.isedit };
                        var rowVm = new RowDom.MedicalRowDom.MedicalRowDomVm(config1);
                        _this.MedicalRowDom.push(rowVm);
                    });
                    this.forceUpdate("");
                }
            };
            DetectionInsertMedicalDomVm.prototype.getAnomalyData = function () {
                var _this = this;
                var s = [];
                this.RowData.forEach(function (a) {
                    var isDelete = true;
                    _this.OrgRowData.forEach(function (b) {
                        if (b.FID == a.FID)
                            isDelete = false;
                    });
                    if (isDelete) {
                        s.push({ FID: a.FID, Action: "Add" });
                    }
                });
                this.OrgRowData.forEach(function (a) {
                    var isAdd = true;
                    _this.RowData.forEach(function (b) {
                        if (b.FID == a.FID)
                            isAdd = false;
                    });
                    if (isAdd) {
                        s.push({ FID: a.FID, Action: "Delete" });
                    }
                });
                return s;
            };
            return DetectionInsertMedicalDomVm;
        }(domCore.DomVm));
        DetectionInsertMedicalDom.DetectionInsertMedicalDomVm = DetectionInsertMedicalDomVm;
        var DetectionInsertMedicalDomStates = (function (_super) {
            __extends(DetectionInsertMedicalDomStates, _super);
            function DetectionInsertMedicalDomStates() {
                _super.apply(this, arguments);
            }
            return DetectionInsertMedicalDomStates;
        }(domCore.DomStates));
        DetectionInsertMedicalDom.DetectionInsertMedicalDomStates = DetectionInsertMedicalDomStates;
        var DetectionInsertMedicalDomProps = (function (_super) {
            __extends(DetectionInsertMedicalDomProps, _super);
            function DetectionInsertMedicalDomProps() {
                _super.apply(this, arguments);
            }
            return DetectionInsertMedicalDomProps;
        }(domCore.DomProps));
        DetectionInsertMedicalDom.DetectionInsertMedicalDomProps = DetectionInsertMedicalDomProps;
    })(DetectionInsertMedicalDom = exports.DetectionInsertMedicalDom || (exports.DetectionInsertMedicalDom = {}));
});
