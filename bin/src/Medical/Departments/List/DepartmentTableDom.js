var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./DepartmentGridRowDom"], function (require, exports, domFile, React, dptGridRowFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DepartmentGridDom;
    (function (DepartmentGridDom) {
        var DepartmentGridDomAction = (function (_super) {
            __extends(DepartmentGridDomAction, _super);
            function DepartmentGridDomAction() {
                _super.apply(this, arguments);
            }
            return DepartmentGridDomAction;
        }(domCore.DomAction));
        DepartmentGridDom.DepartmentGridDomAction = DepartmentGridDomAction;
        var DepartmentGridDomReact = (function (_super) {
            __extends(DepartmentGridDomReact, _super);
            function DepartmentGridDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartmentGridDomStates();
            }
            DepartmentGridDomReact.prototype.pSender = function () {
                var header = this.initHeader();
                var body = this.initBody();
                return (React.createElement("div", {className: "YSm-table"}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-striped table-bordered table-hover"}, header, body))));
            };
            DepartmentGridDomReact.prototype.initHeader = function () {
                return (React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "检查项目"), React.createElement("th", null, "阳性标记"), React.createElement("th", null, "结果"), React.createElement("th", null, "单位"), React.createElement("th", null, "超标指示"), React.createElement("th", null, "上限"), React.createElement("th", null, "下限"), React.createElement("th", null, "弃检标记"), React.createElement("th", null, "附件"))));
            };
            DepartmentGridDomReact.prototype.initBody = function () {
                return (React.createElement("tbody", null, this.props.Vm.RowList.map(function (data, index) {
                    return data.intoDom();
                })));
            };
            DepartmentGridDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartmentGridDomReact;
        }(domCore.DomReact));
        DepartmentGridDom.DepartmentGridDomReact = DepartmentGridDomReact;
        var DepartmentGridDomVm = (function (_super) {
            __extends(DepartmentGridDomVm, _super);
            // public DepartmentGridDomObj: dptListPageFile.DepartmentEntryPage.DepartmentEntryPageVm;
            function DepartmentGridDomVm(config) {
                _super.call(this);
                this.ReactType = DepartmentGridDomReact;
                this.ListData = [];
                this.RowList = new Array();
                if (config) {
                    this.ListData = config.ListData;
                    this.init();
                }
            }
            DepartmentGridDomVm.prototype.init = function () {
                var _this = this;
                this.ListData.forEach(function (rowdata, index) {
                    var rowConfig = { ExamItemData: rowdata };
                    var rowVm = new dptGridRowFile.DepartmentGridRowDom.DepartmentGridRowDomVm(rowConfig);
                    _this.RowList.push(rowVm);
                });
            };
            return DepartmentGridDomVm;
        }(domCore.DomVm));
        DepartmentGridDom.DepartmentGridDomVm = DepartmentGridDomVm;
        var DepartmentGridDomStates = (function (_super) {
            __extends(DepartmentGridDomStates, _super);
            function DepartmentGridDomStates() {
                _super.apply(this, arguments);
            }
            return DepartmentGridDomStates;
        }(domCore.DomStates));
        DepartmentGridDom.DepartmentGridDomStates = DepartmentGridDomStates;
        var DepartmentGridDomProps = (function (_super) {
            __extends(DepartmentGridDomProps, _super);
            function DepartmentGridDomProps() {
                _super.apply(this, arguments);
            }
            return DepartmentGridDomProps;
        }(domCore.DomProps));
        DepartmentGridDom.DepartmentGridDomProps = DepartmentGridDomProps;
    })(DepartmentGridDom = exports.DepartmentGridDom || (exports.DepartmentGridDom = {}));
});
