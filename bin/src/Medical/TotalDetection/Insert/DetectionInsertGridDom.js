var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./detactionInsertGridBodyDom"], function (require, exports, domFile, React, gridBodyDomFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DetectionInsertGridDom;
    (function (DetectionInsertGridDom) {
        var DetectionInsertGridDomAction = (function (_super) {
            __extends(DetectionInsertGridDomAction, _super);
            function DetectionInsertGridDomAction() {
                _super.apply(this, arguments);
            }
            return DetectionInsertGridDomAction;
        }(domCore.DomAction));
        DetectionInsertGridDom.DetectionInsertGridDomAction = DetectionInsertGridDomAction;
        var DetectionInsertGridDomReact = (function (_super) {
            __extends(DetectionInsertGridDomReact, _super);
            function DetectionInsertGridDomReact() {
                _super.apply(this, arguments);
                this.state = new DetectionInsertGridDomStates();
            }
            DetectionInsertGridDomReact.prototype.pSender = function () {
                var header = this.initHeader();
                // var body = this.initBody();
                return (React.createElement("table", {className: "ui-table"}, header, this._tDom(this.props.Vm.gridBodyDomObj, { nullNode: React.createElement("span", null, "正在载入...") })));
            };
            DetectionInsertGridDomReact.prototype.initHeader = function () {
                return (React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "项目"), React.createElement("th", null, "子项"), React.createElement("th", null, "结果"), React.createElement("th", null, "单位"), React.createElement("th", null, "阳性"), React.createElement("th", null, "指示"), React.createElement("th", null, "上限"), React.createElement("th", null, "下限"), React.createElement("th", null, "附件"))));
            };
            DetectionInsertGridDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DetectionInsertGridDomReact;
        }(domCore.DomReact));
        DetectionInsertGridDom.DetectionInsertGridDomReact = DetectionInsertGridDomReact;
        var DetectionInsertGridDomVm = (function (_super) {
            __extends(DetectionInsertGridDomVm, _super);
            function DetectionInsertGridDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetectionInsertGridDomReact;
                this.ListData = [];
                if (config) {
                    this.gridBodyDomObj = new gridBodyDomFile.DetectionInsertGridBodyDom.DetectionInsertGridBodyDomVm(config);
                    this.RowList = new Array();
                    this.ListData = config.data;
                    this.ListData.forEach(function (rowdata, index) {
                        var rowVm = new gridBodyDomFile.DetectionInsertGridBodyDom.DetectionInsertGridBodyDomVm(config);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            return DetectionInsertGridDomVm;
        }(domCore.DomVm));
        DetectionInsertGridDom.DetectionInsertGridDomVm = DetectionInsertGridDomVm;
        var DetectionInsertGridDomStates = (function (_super) {
            __extends(DetectionInsertGridDomStates, _super);
            function DetectionInsertGridDomStates() {
                _super.apply(this, arguments);
            }
            return DetectionInsertGridDomStates;
        }(domCore.DomStates));
        DetectionInsertGridDom.DetectionInsertGridDomStates = DetectionInsertGridDomStates;
        var DetectionInsertGridDomProps = (function (_super) {
            __extends(DetectionInsertGridDomProps, _super);
            function DetectionInsertGridDomProps() {
                _super.apply(this, arguments);
            }
            return DetectionInsertGridDomProps;
        }(domCore.DomProps));
        DetectionInsertGridDom.DetectionInsertGridDomProps = DetectionInsertGridDomProps;
    })(DetectionInsertGridDom = exports.DetectionInsertGridDom || (exports.DetectionInsertGridDom = {}));
});
