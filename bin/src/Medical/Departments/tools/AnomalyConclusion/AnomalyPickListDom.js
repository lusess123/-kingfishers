var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../05tool/Picker/PickListBaseDom", "./AnomalySelectorDom", "./AnomalyConExamTableDom"], function (require, exports, domFile, urlFile, React, PickListBaseDomFile, selectorFile, Table1) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var AnomalyPickListDom;
    (function (AnomalyPickListDom) {
        var AnomalyPickListDomAction = (function (_super) {
            __extends(AnomalyPickListDomAction, _super);
            function AnomalyPickListDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyPickListDomAction;
        }(domCore.DomAction));
        AnomalyPickListDom.AnomalyPickListDomAction = AnomalyPickListDomAction;
        var AnomalyPickListDomReact = (function (_super) {
            __extends(AnomalyPickListDomReact, _super);
            function AnomalyPickListDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyPickListDomStates();
            }
            AnomalyPickListDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.selectorObj));
                ;
            };
            AnomalyPickListDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return AnomalyPickListDomReact;
        }(domCore.DomReact));
        AnomalyPickListDom.AnomalyPickListDomReact = AnomalyPickListDomReact;
        var AnomalyPickListDomVm = (function (_super) {
            __extends(AnomalyPickListDomVm, _super);
            function AnomalyPickListDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyPickListDomReact;
                if (config) {
                    this.UniId = config.UniId;
                    var Selectorconfig = {
                        Unid: this.UniId
                    };
                    this.selectorObj = new selectorFile.AnomalySelectorDom.AnomalySelectorDomVm(Selectorconfig);
                }
            }
            AnomalyPickListDomVm.prototype.pRegAppEvent = function () {
                var _this = this;
                _super.prototype.pRegAppEvent.call(this);
                this.listenAppEvent("medical/Departments/tools/AnomalyConclusion", this.UniId, function (fid) {
                    urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/GetExamItem", {
                        FID: fid
                    }, function (a) {
                        var list = [];
                        if (a.Data && a.Data.length > 0) {
                            a.Data.forEach(function (b) {
                                var model = { FID: b.FID, ItemName: b.ItemName, GreaterThan: b.GreaterThan, LessThan: b.LessThan, KeyWord: b.KeyWord, IsPositive: b.IsPositive };
                                list.push(model);
                            });
                        }
                        var table1config = { Unid: _this.UniId, ListData: list };
                        _this.selectorObj.table1 = new Table1.AnomalyConExamTableDom.AnomalyConExamTableDomVm(table1config);
                        _this.selectorObj.IsChange = true;
                        _this.forceUpdate("");
                    });
                });
            };
            AnomalyPickListDomVm.prototype.loadDom = function (items, callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/GetAnomalyConclusionList", {}, function (a) {
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
            return AnomalyPickListDomVm;
        }(PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm));
        AnomalyPickListDom.AnomalyPickListDomVm = AnomalyPickListDomVm;
        var AnomalyPickListDomStates = (function (_super) {
            __extends(AnomalyPickListDomStates, _super);
            function AnomalyPickListDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyPickListDomStates;
        }(domCore.DomStates));
        AnomalyPickListDom.AnomalyPickListDomStates = AnomalyPickListDomStates;
        var AnomalyPickListDomProps = (function (_super) {
            __extends(AnomalyPickListDomProps, _super);
            function AnomalyPickListDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyPickListDomProps;
        }(domCore.DomProps));
        AnomalyPickListDom.AnomalyPickListDomProps = AnomalyPickListDomProps;
    })(AnomalyPickListDom = exports.AnomalyPickListDom || (exports.AnomalyPickListDom = {}));
});
