var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyInsertDetailRowDom;
    (function (AnomalyInsertDetailRowDom) {
        var AnomalyInsertDetailRowDomAction = (function (_super) {
            __extends(AnomalyInsertDetailRowDomAction, _super);
            function AnomalyInsertDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertDetailRowDomAction;
        }(domCore.DomAction));
        AnomalyInsertDetailRowDom.AnomalyInsertDetailRowDomAction = AnomalyInsertDetailRowDomAction;
        var AnomalyInsertDetailRowDomReact = (function (_super) {
            __extends(AnomalyInsertDetailRowDomReact, _super);
            function AnomalyInsertDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyInsertDetailRowDomStates();
            }
            AnomalyInsertDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", null, this.props.Vm.ColVmObjList["ItemName"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["GreaterThan"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["LessThan"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["Unit"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["IsPositive"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["KeyWord"].intoDom()), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            AnomalyInsertDetailRowDomReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.delButtonRow();
            };
            AnomalyInsertDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AnomalyInsertDetailRowDomReact;
        }(domCore.DomReact));
        AnomalyInsertDetailRowDom.AnomalyInsertDetailRowDomReact = AnomalyInsertDetailRowDomReact;
        var AnomalyInsertDetailRowDomVm = (function (_super) {
            __extends(AnomalyInsertDetailRowDomVm, _super);
            function AnomalyInsertDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyInsertDetailRowDomReact;
                this.TextVmObjList = {};
                this.ColVmObjList = {};
                if (config) {
                    this.UniId = config.UniId;
                    this.RowData = config.RowData;
                }
                //this.initTextVm("ItemName", "notNull");
                //this.initTextVm("GreaterThan");
                //this.initTextVm("LessThan");
                //this.initTextVm("Unit");
                //this.initTextVm("KeyWord");
                //this.IsPositiveCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.initColVm("ItemName", "TextVm", "notNull");
                this.initColVm("GreaterThan", "TextVm");
                this.initColVm("LessThan", "TextVm");
                this.initColVm("Unit", "TextVm");
                this.initColVm("KeyWord", "TextVm");
                this.initColVm("IsPositive", "SingleCheckBoxVm");
            }
            //private initTextVm(colName: string, legal?: string) {
            //    var _name = colName.toString()
            //    var isexcite = false;
            //    for (var vn in this.TextVmObjList) {
            //        var _obj = this.TextVmObjList[_name];
            //        if (_obj) {
            //            isexcite = true;
            //            _exciteBean = _obj;
            //        }
            //    }
            //    if (!isexcite) {
            //        var _exciteBean: textFile.ui.TextVm = new textFile.ui.TextVm;
            //        _exciteBean.Tag = colName;
            //        _exciteBean.LegalObj.Kind = legal ? legal : "";
            //        _exciteBean.onChangeHandle((val) => {
            //            this.RowData[colName] = val;
            //            return true;
            //        });
            //        this.TextVmObjList[_name] = _exciteBean;
            //    }
            //}
            AnomalyInsertDetailRowDomVm.prototype.initColVm = function (colName, colType, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            AnomalyInsertDetailRowDomVm.prototype.delButtonRow = function () {
                this.emitAppEvent("medical/base/Anomaly/Insert/DetailRow", this.UniId, this.RowNumber);
            };
            AnomalyInsertDetailRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                //for (var n in this.TextVmObjList) {
                //    this.TextVmObjList[n].IsChange = true;
                //}
                //this.IsPositiveCheck.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            AnomalyInsertDetailRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    _res = _obj.legal() && _res;
                }
                return _res;
            };
            return AnomalyInsertDetailRowDomVm;
        }(domCore.DomVm));
        AnomalyInsertDetailRowDom.AnomalyInsertDetailRowDomVm = AnomalyInsertDetailRowDomVm;
        var AnomalyInsertDetailRowDomStates = (function (_super) {
            __extends(AnomalyInsertDetailRowDomStates, _super);
            function AnomalyInsertDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertDetailRowDomStates;
        }(domCore.DomStates));
        AnomalyInsertDetailRowDom.AnomalyInsertDetailRowDomStates = AnomalyInsertDetailRowDomStates;
        var AnomalyInsertDetailRowDomProps = (function (_super) {
            __extends(AnomalyInsertDetailRowDomProps, _super);
            function AnomalyInsertDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyInsertDetailRowDomProps;
        }(domCore.DomProps));
        AnomalyInsertDetailRowDom.AnomalyInsertDetailRowDomProps = AnomalyInsertDetailRowDomProps;
    })(AnomalyInsertDetailRowDom = exports.AnomalyInsertDetailRowDom || (exports.AnomalyInsertDetailRowDom = {}));
});
