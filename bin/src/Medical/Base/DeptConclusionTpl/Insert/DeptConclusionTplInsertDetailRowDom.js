var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConclusionTplInsertDetailRowDom;
    (function (DeptConclusionTplInsertDetailRowDom) {
        var DeptConclusionTplInsertDetailRowDomAction = (function (_super) {
            __extends(DeptConclusionTplInsertDetailRowDomAction, _super);
            function DeptConclusionTplInsertDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertDetailRowDomAction;
        }(domCore.DomAction));
        DeptConclusionTplInsertDetailRowDom.DeptConclusionTplInsertDetailRowDomAction = DeptConclusionTplInsertDetailRowDomAction;
        var DeptConclusionTplInsertDetailRowDomReact = (function (_super) {
            __extends(DeptConclusionTplInsertDetailRowDomReact, _super);
            function DeptConclusionTplInsertDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplInsertDetailRowDomStates();
            }
            DeptConclusionTplInsertDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", null, this.props.Vm.TextVmObjList["ItemName"].intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["GreaterThan"].intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["LessThan"].intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["Unit"].intoDom()), React.createElement("td", null, this.props.Vm.IsPositiveCheck.intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["KeyWord"].intoDom()), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            DeptConclusionTplInsertDetailRowDomReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.delButtonRow();
            };
            DeptConclusionTplInsertDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DeptConclusionTplInsertDetailRowDomReact;
        }(domCore.DomReact));
        DeptConclusionTplInsertDetailRowDom.DeptConclusionTplInsertDetailRowDomReact = DeptConclusionTplInsertDetailRowDomReact;
        var DeptConclusionTplInsertDetailRowDomVm = (function (_super) {
            __extends(DeptConclusionTplInsertDetailRowDomVm, _super);
            function DeptConclusionTplInsertDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionTplInsertDetailRowDomReact;
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
            DeptConclusionTplInsertDetailRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
            DeptConclusionTplInsertDetailRowDomVm.prototype.delButtonRow = function () {
                this.emitAppEvent("medical/base/DeptConclusionTpl/Insert/DetailRow", this.UniId, this.RowNumber);
            };
            DeptConclusionTplInsertDetailRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                //for (var n in this.TextVmObjList) {
                //    this.TextVmObjList[n].IsChange = true;
                //}
                //this.IsPositiveCheck.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            DeptConclusionTplInsertDetailRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    _res = _obj.legal() && _res;
                }
                return _res;
            };
            return DeptConclusionTplInsertDetailRowDomVm;
        }(domCore.DomVm));
        DeptConclusionTplInsertDetailRowDom.DeptConclusionTplInsertDetailRowDomVm = DeptConclusionTplInsertDetailRowDomVm;
        var DeptConclusionTplInsertDetailRowDomStates = (function (_super) {
            __extends(DeptConclusionTplInsertDetailRowDomStates, _super);
            function DeptConclusionTplInsertDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertDetailRowDomStates;
        }(domCore.DomStates));
        DeptConclusionTplInsertDetailRowDom.DeptConclusionTplInsertDetailRowDomStates = DeptConclusionTplInsertDetailRowDomStates;
        var DeptConclusionTplInsertDetailRowDomProps = (function (_super) {
            __extends(DeptConclusionTplInsertDetailRowDomProps, _super);
            function DeptConclusionTplInsertDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplInsertDetailRowDomProps;
        }(domCore.DomProps));
        DeptConclusionTplInsertDetailRowDom.DeptConclusionTplInsertDetailRowDomProps = DeptConclusionTplInsertDetailRowDomProps;
    })(DeptConclusionTplInsertDetailRowDom = exports.DeptConclusionTplInsertDetailRowDom || (exports.DeptConclusionTplInsertDetailRowDom = {}));
});
