var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./../../../05tool/Picker/PickListBaseDom", "./TotalDetectionSelecterDom"], function (require, exports, domFile, urlFile, React, PickListBaseDomFile, selectorFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var TotalDetectionPickListDom;
    (function (TotalDetectionPickListDom) {
        var TotalDetectionPickListDomAction = (function (_super) {
            __extends(TotalDetectionPickListDomAction, _super);
            function TotalDetectionPickListDomAction() {
                _super.apply(this, arguments);
            }
            return TotalDetectionPickListDomAction;
        }(domCore.DomAction));
        TotalDetectionPickListDom.TotalDetectionPickListDomAction = TotalDetectionPickListDomAction;
        var TotalDetectionPickListDomReact = (function (_super) {
            __extends(TotalDetectionPickListDomReact, _super);
            function TotalDetectionPickListDomReact() {
                _super.apply(this, arguments);
                this.state = new TotalDetectionPickListDomStates();
            }
            TotalDetectionPickListDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.selectorObj));
            };
            TotalDetectionPickListDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TotalDetectionPickListDomReact;
        }(domCore.DomReact));
        TotalDetectionPickListDom.TotalDetectionPickListDomReact = TotalDetectionPickListDomReact;
        var TotalDetectionPickListDomVm = (function (_super) {
            __extends(TotalDetectionPickListDomVm, _super);
            function TotalDetectionPickListDomVm(config) {
                _super.call(this);
                this.ReactType = TotalDetectionPickListDomReact;
                if (config) {
                    this.UniId = config.UniId;
                    var Selectorconfig = {
                        Unid: this.UniId
                    };
                    this.selectorObj = new selectorFile.TotalDetectionSelecterDom.TotalDetectionSelecterDomVm(Selectorconfig);
                }
            }
            TotalDetectionPickListDomVm.prototype.loadDom = function (items, callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/TotalDetection/GetAdviceList", {}, function (a) {
                    if (a) {
                        var Selectorconfig = {
                            //Unid: this.UniId,
                            advicetemple: a.Data
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
            return TotalDetectionPickListDomVm;
        }(PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm));
        TotalDetectionPickListDom.TotalDetectionPickListDomVm = TotalDetectionPickListDomVm;
        var TotalDetectionPickListDomStates = (function (_super) {
            __extends(TotalDetectionPickListDomStates, _super);
            function TotalDetectionPickListDomStates() {
                _super.apply(this, arguments);
            }
            return TotalDetectionPickListDomStates;
        }(domCore.DomStates));
        TotalDetectionPickListDom.TotalDetectionPickListDomStates = TotalDetectionPickListDomStates;
        var TotalDetectionPickListDomProps = (function (_super) {
            __extends(TotalDetectionPickListDomProps, _super);
            function TotalDetectionPickListDomProps() {
                _super.apply(this, arguments);
            }
            return TotalDetectionPickListDomProps;
        }(domCore.DomProps));
        TotalDetectionPickListDom.TotalDetectionPickListDomProps = TotalDetectionPickListDomProps;
    })(TotalDetectionPickListDom = exports.TotalDetectionPickListDom || (exports.TotalDetectionPickListDom = {}));
});
