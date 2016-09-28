var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react"], function (require, exports, domFile, urlFile, React) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DetectionInsertGridBodyDom;
    (function (DetectionInsertGridBodyDom) {
        var DetectionInsertGridBodyDomAction = (function (_super) {
            __extends(DetectionInsertGridBodyDomAction, _super);
            function DetectionInsertGridBodyDomAction() {
                _super.apply(this, arguments);
            }
            return DetectionInsertGridBodyDomAction;
        }(domCore.DomAction));
        DetectionInsertGridBodyDom.DetectionInsertGridBodyDomAction = DetectionInsertGridBodyDomAction;
        var DetectionInsertGridBodyDomReact = (function (_super) {
            __extends(DetectionInsertGridBodyDomReact, _super);
            function DetectionInsertGridBodyDomReact() {
                _super.apply(this, arguments);
                this.state = new DetectionInsertGridBodyDomStates();
            }
            DetectionInsertGridBodyDomReact.prototype.pSender = function () {
                var body = this.initBody();
                return body;
            };
            DetectionInsertGridBodyDomReact.prototype.initBody = function () {
                var _this = this;
                return (React.createElement("tbody", null, this.props.Vm.ExamineData.map(function (a) {
                    return _this.examRow(a);
                    //return this.examSummary(a);
                    //return this.examDoctor(a);
                })));
            };
            DetectionInsertGridBodyDomReact.prototype.Send = function (count) {
                if (!count) {
                    return "";
                }
                else {
                    return "已上传" + count + "张图片";
                }
            };
            DetectionInsertGridBodyDomReact.prototype.examRow = function (data) {
                var _this = this;
                var array = [];
                this.props.Vm.isfrist = true;
                //var length = data.Submit.length();
                var row1 = data.Submit.map(function (s, index) {
                    //if (index == 0) {
                    //    this.props.Vm.isfrist = true;
                    //} else {
                    //    this.props.Vm.isfrist = false;
                    //}
                    if (s.isPicture) {
                        s.pictureCount = JSON.parse(s.isPicture)["ResourceInfoList"].length;
                    }
                    var dd = React.createElement("tr", null, _this.props.Vm.isfrist ? React.createElement("td", {rowSpan: data.Submit.length, className: "rowspan"}, React.createElement("div", {className: "lr"}, data.DeptName)) : null, React.createElement("td", null, s.ItemName), React.createElement("td", null, s.Result), React.createElement("td", null, s.Unit), React.createElement("td", null, s.IsPositive == "1" ? "是" : "否"), React.createElement("td", null, React.createElement("i", {className: _this.fun_Isoverproof(s.IsOverHint), "aria-hidden": "true"})), React.createElement("td", null, s.UpperLimit), React.createElement("td", null, s.LessLimit), React.createElement("td", null, React.createElement("a", {onClick: function () { _this.props.Vm.onclickImage(s.isPicture); }}, _this.Send(s.pictureCount))));
                    _this.props.Vm.isfrist = false;
                    return dd;
                });
                var row2 = this.examSummary(data);
                var row3 = this.examDoctor(data);
                array.push(row1);
                array.push(row2);
                array.push(row3);
                return array;
            };
            DetectionInsertGridBodyDomReact.prototype.fun_Isoverproof = function (_val) {
                if (_val == 2) {
                    this.props.Vm.IsOverproof = "fa fa-long-arrow-up";
                }
                else if (_val == 1) {
                    this.props.Vm.IsOverproof = "fa fa-long-arrow-down";
                }
                else {
                    this.props.Vm.IsOverproof = "";
                }
                return this.props.Vm.IsOverproof;
            };
            //小结
            DetectionInsertGridBodyDomReact.prototype.examSummary = function (data) {
                return (React.createElement("tr", null, React.createElement("td", {className: "rowspan"}, React.createElement("div", {className: "lr"}, "小结")), React.createElement("td", {colSpan: "8"}, data.Summary)));
            };
            //医生 
            DetectionInsertGridBodyDomReact.prototype.examDoctor = function (data) {
                return (React.createElement("tr", null, React.createElement("td", {className: "rowspan"}, React.createElement("div", {className: "lr"}, "医生")), React.createElement("td", {colSpan: "8"}, data.GeneralResult)));
            };
            DetectionInsertGridBodyDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DetectionInsertGridBodyDomReact;
        }(domCore.DomReact));
        DetectionInsertGridBodyDom.DetectionInsertGridBodyDomReact = DetectionInsertGridBodyDomReact;
        var DetectionInsertGridBodyDomVm = (function (_super) {
            __extends(DetectionInsertGridBodyDomVm, _super);
            function DetectionInsertGridBodyDomVm(config) {
                _super.call(this);
                this.isfrist = true;
                this.ReactType = DetectionInsertGridBodyDomReact;
                this.ExamineData = [];
                this.ResultData = {};
                if (config) {
                    this.ExamineData = config.data;
                    this.ResultData = config.data;
                }
            }
            //计算需要合并的数量
            DetectionInsertGridBodyDomVm.prototype.rowspan = function () {
                var len = this.ExamineData[0].Submit.length;
                return len;
            };
            DetectionInsertGridBodyDomVm.prototype.getData = function () {
                var data = this.ResultData[0].Submit;
                return data;
            };
            DetectionInsertGridBodyDomVm.prototype.onclickImage = function (picture) {
                urlFile.Core.AkUrl.Current().openUrl("$winTOTALDETACIONIMAGEPAGE$" + picture + "$", true);
            };
            return DetectionInsertGridBodyDomVm;
        }(domCore.DomVm));
        DetectionInsertGridBodyDom.DetectionInsertGridBodyDomVm = DetectionInsertGridBodyDomVm;
        var DetectionInsertGridBodyDomStates = (function (_super) {
            __extends(DetectionInsertGridBodyDomStates, _super);
            function DetectionInsertGridBodyDomStates() {
                _super.apply(this, arguments);
            }
            return DetectionInsertGridBodyDomStates;
        }(domCore.DomStates));
        DetectionInsertGridBodyDom.DetectionInsertGridBodyDomStates = DetectionInsertGridBodyDomStates;
        var DetectionInsertGridBodyDomProps = (function (_super) {
            __extends(DetectionInsertGridBodyDomProps, _super);
            function DetectionInsertGridBodyDomProps() {
                _super.apply(this, arguments);
            }
            return DetectionInsertGridBodyDomProps;
        }(domCore.DomProps));
        DetectionInsertGridBodyDom.DetectionInsertGridBodyDomProps = DetectionInsertGridBodyDomProps;
    })(DetectionInsertGridBodyDom = exports.DetectionInsertGridBodyDom || (exports.DetectionInsertGridBodyDom = {}));
});
