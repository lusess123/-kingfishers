var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./../../../05tool/Picker/PickListBaseDom", "./DepartSelectorDom", "./DeptConclusionExamItem/DeptConExamTableDom"], function (require, exports, domFile, urlFile, React, PickListBaseDomFile, selectorFile, Table1) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DepartPickListDom;
    (function (DepartPickListDom) {
        var DepartPickListDomAction = (function (_super) {
            __extends(DepartPickListDomAction, _super);
            function DepartPickListDomAction() {
                _super.apply(this, arguments);
            }
            return DepartPickListDomAction;
        }(domCore.DomAction));
        DepartPickListDom.DepartPickListDomAction = DepartPickListDomAction;
        var DepartPickListDomReact = (function (_super) {
            __extends(DepartPickListDomReact, _super);
            function DepartPickListDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartPickListDomStates();
            }
            DepartPickListDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.selectorObj));
                ;
            };
            DepartPickListDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DepartPickListDomReact;
        }(domCore.DomReact));
        DepartPickListDom.DepartPickListDomReact = DepartPickListDomReact;
        var DepartPickListDomVm = (function (_super) {
            __extends(DepartPickListDomVm, _super);
            function DepartPickListDomVm(config) {
                _super.call(this);
                this.ReactType = DepartPickListDomReact;
                if (config) {
                    this.UniId = config.UniId;
                    var Selectorconfig = {
                        Unid: this.UniId
                    };
                    this.selectorObj = new selectorFile.DepartSelectorDom.DepartSelectorDomVm(Selectorconfig);
                }
            }
            DepartPickListDomVm.prototype.pRegAppEvent = function () {
                var _this = this;
                _super.prototype.pRegAppEvent.call(this);
                this.listenAppEvent("medical/Departments/tool/DeptConclusion", this.UniId, function (fid) {
                    urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetExamItem", {
                        FID: fid
                    }, function (a) {
                        var list = [];
                        if (a.Data && a.Data.length > 0) {
                            a.Data.forEach(function (b) {
                                var model = { FID: b.FID, ItemName: b.ItemName, GreaterThan: b.condetion.GreaterThan, LessThan: b.condetion.LessThan, KeyWord: b.condetion.KeyWord, IsPositive: b.condetion.IsPositive };
                                list.push(model);
                            });
                        }
                        var table1config = { Unid: _this.UniId, ListData: list };
                        _this.selectorObj.table1 = new Table1.DeptConExamTableDom.DeptConExamTableDomVm(table1config);
                        //this.table1.IsChange = true;
                        //this.table1.RowList.forEach((a) => {
                        //    a.IsChange = true;
                        //})
                        _this.selectorObj.IsChange = true;
                        _this.forceUpdate("");
                    });
                });
            };
            DepartPickListDomVm.prototype.loadDom = function (items, callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetDepartConclusionList", {}, function (a) {
                    if (a) {
                        var Selectorconfig = {
                            //Unid: this.UniId,
                            derpartData: a.Data
                        };
                        _this.selectorObj.init(Selectorconfig);
                        //this.selectorObj.init1(Selectorconfig);
                        _this.selectorObj.table.IsChange = true;
                        _this.selectorObj.table.RowList.forEach(function (a) {
                            a.IsChange = true;
                        });
                        _this.selectorObj.forceUpdate("");
                    }
                });
                callback();
            };
            return DepartPickListDomVm;
        }(PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm));
        DepartPickListDom.DepartPickListDomVm = DepartPickListDomVm;
        var DepartPickListDomStates = (function (_super) {
            __extends(DepartPickListDomStates, _super);
            function DepartPickListDomStates() {
                _super.apply(this, arguments);
            }
            return DepartPickListDomStates;
        }(domCore.DomStates));
        DepartPickListDom.DepartPickListDomStates = DepartPickListDomStates;
        var DepartPickListDomProps = (function (_super) {
            __extends(DepartPickListDomProps, _super);
            function DepartPickListDomProps() {
                _super.apply(this, arguments);
            }
            return DepartPickListDomProps;
        }(domCore.DomProps));
        DepartPickListDom.DepartPickListDomProps = DepartPickListDomProps;
    })(DepartPickListDom = exports.DepartPickListDom || (exports.DepartPickListDom = {}));
});
