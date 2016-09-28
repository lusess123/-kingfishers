var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./MedicalRowDom"], function (require, exports, domFile, React, RowDom) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var MedicalDom;
    (function (MedicalDom) {
        var MedicalDomAction = (function (_super) {
            __extends(MedicalDomAction, _super);
            function MedicalDomAction() {
                _super.apply(this, arguments);
            }
            return MedicalDomAction;
        }(domCore.DomAction));
        MedicalDom.MedicalDomAction = MedicalDomAction;
        var MedicalDomReact = (function (_super) {
            __extends(MedicalDomReact, _super);
            function MedicalDomReact() {
                _super.apply(this, arguments);
                this.state = new MedicalDomStates();
            }
            MedicalDomReact.prototype.pSender = function () {
                var header = this.initHeader();
                var boby = this.initBody();
                return (React.createElement("div", {className: "YSm-table"}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, header, boby))));
            };
            MedicalDomReact.prototype.initBody = function () {
                return (React.createElement("tbody", null, this.props.Vm.MedicalRowDom.map(function (row, index) {
                    return row.intoDom();
                })));
            };
            MedicalDomReact.prototype.initHeader = function () {
                return (React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "序号"), React.createElement("th", null, "异常名称"), React.createElement("th", null, "操作"))));
            };
            MedicalDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MedicalDomReact;
        }(domCore.DomReact));
        MedicalDom.MedicalDomReact = MedicalDomReact;
        var MedicalDomVm = (function (_super) {
            __extends(MedicalDomVm, _super);
            function MedicalDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MedicalDomReact;
                this.MedicalRowDom = new Array();
                this.RowData = [];
                this.OrgRowData = [];
                if (config) {
                    //this.OrgRowData = config.data;
                    if (config.data) {
                        config.data.forEach(function (a) {
                            _this.OrgRowData.push(a);
                        });
                    }
                    this.initData(config);
                }
            }
            MedicalDomVm.prototype.initData = function (config) {
                var _this = this;
                this.MedicalRowDom.length = 0;
                this.isedit = config.isedit;
                this.RowData = config.data;
                if (this.RowData) {
                    this.RowData.forEach(function (rowData, index) {
                        var config1 = { RowData: rowData, rowNumber: index, Unit: config.Unid, isedit: _this.isedit };
                        var rowVm = new RowDom.MedicalRowDom.MedicalRowDomVm(config1);
                        _this.MedicalRowDom.push(rowVm);
                    });
                    this.forceUpdate("");
                }
            };
            MedicalDomVm.prototype.getAnomalyData = function () {
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
            return MedicalDomVm;
        }(domCore.DomVm));
        MedicalDom.MedicalDomVm = MedicalDomVm;
        var MedicalDomStates = (function (_super) {
            __extends(MedicalDomStates, _super);
            function MedicalDomStates() {
                _super.apply(this, arguments);
            }
            return MedicalDomStates;
        }(domCore.DomStates));
        MedicalDom.MedicalDomStates = MedicalDomStates;
        var MedicalDomProps = (function (_super) {
            __extends(MedicalDomProps, _super);
            function MedicalDomProps() {
                _super.apply(this, arguments);
            }
            return MedicalDomProps;
        }(domCore.DomProps));
        MedicalDom.MedicalDomProps = MedicalDomProps;
    })(MedicalDom = exports.MedicalDom || (exports.MedicalDom = {}));
});
