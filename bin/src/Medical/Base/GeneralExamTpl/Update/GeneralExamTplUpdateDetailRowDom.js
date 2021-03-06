var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Ioc", "./../../../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var GeneralExamTplUpdateDetailRowDom;
    (function (GeneralExamTplUpdateDetailRowDom) {
        var GeneralExamTplUpdateDetailRowDomAction = (function (_super) {
            __extends(GeneralExamTplUpdateDetailRowDomAction, _super);
            function GeneralExamTplUpdateDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateDetailRowDomAction;
        }(domCore.DomAction));
        GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomAction = GeneralExamTplUpdateDetailRowDomAction;
        var GeneralExamTplUpdateDetailRowDomReact = (function (_super) {
            __extends(GeneralExamTplUpdateDetailRowDomReact, _super);
            function GeneralExamTplUpdateDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplUpdateDetailRowDomStates();
            }
            GeneralExamTplUpdateDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", {className: "hide"}, this.props.Vm.TextVmObjList["FID"].intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["ItemName"].intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["GreaterThan"].intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["LessThan"].intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["Unit"].intoDom()), React.createElement("td", null, this.props.Vm.IsPositiveCheck.intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["KeyWord"].intoDom()), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            GeneralExamTplUpdateDetailRowDomReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.delButtonRow();
            };
            GeneralExamTplUpdateDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GeneralExamTplUpdateDetailRowDomReact;
        }(domCore.DomReact));
        GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomReact = GeneralExamTplUpdateDetailRowDomReact;
        var GeneralExamTplUpdateDetailRowDomVm = (function (_super) {
            __extends(GeneralExamTplUpdateDetailRowDomVm, _super);
            function GeneralExamTplUpdateDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplUpdateDetailRowDomReact;
                this.TextVmObjList = {};
                this.ColVmObjList = {};
                this.IsNew = false;
                if (config) {
                    this.RowData = config.RowData;
                    if (config.IsNew) {
                        this.IsNew = config.IsNew;
                    }
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                }
                //this.initTextVm("FID");
                //this.initTextVm("ItemName");
                //this.initTextVm("GreaterThan");
                //this.initTextVm("LessThan");
                //this.initTextVm("Unit");
                //this.initTextVm("KeyWord");
                //this.IsPositiveCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                //this.IsPositiveCheck.dataValueSet(this.RowData.IsPositive);
                this.initColVm("FID", "TextVm");
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
            //        _exciteBean.dataValueSet(this.RowData[colName]);
            //        _exciteBean.onChangeHandle((val) => {
            //            this.RowData[colName] = val;
            //            return true;
            //        });
            //        this.TextVmObjList[_name] = _exciteBean;
            //    }
            //}
            GeneralExamTplUpdateDetailRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.setOriValue(this.RowData[colName]);
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            GeneralExamTplUpdateDetailRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                //for (var n in this.TextVmObjList) {
                //    this.TextVmObjList[n].IsChange = true;
                //}
                //this.IsPositiveCheck.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            GeneralExamTplUpdateDetailRowDomVm.prototype.delButtonRow = function () {
                this.emitAppEvent("medical/base/GeneralExamTpl/update/DetailRow", this.UniId, this.RowNumber);
            };
            GeneralExamTplUpdateDetailRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    _res = _obj.legal() && _res;
                }
                return _res;
            };
            GeneralExamTplUpdateDetailRowDomVm.prototype.getData = function () {
                var _this = this;
                var _data = {};
                var _Change = false;
                var fid = null;
                if (this.IsNew) {
                    _Change = true;
                }
                //for (var vn in this.TextVmObjList) {
                //    var txtObj = this.TextVmObjList[vn];
                //    txtObj.getChangeValFun((isChange, val, col) => {
                //        if (isChange || this.IsNew) {
                //            _Change = true;
                //            _data[txtObj.Tag] = txtObj.vmDataValueGet();
                //        }
                //    });
                //    if (txtObj.Tag == "FID") {
                //        fid = txtObj.vmDataValueGet();
                //    }
                //}
                //this.IsPositiveCheck.getChangeValFun((isChange, val, col) => {
                //    if (isChange || this.IsNew) {
                //        _data.IsPositive = val;
                //        _Change = true;
                //    }
                //});
                for (var vn in this.ColVmObjList) {
                    var colObj = this.ColVmObjList[vn];
                    colObj.getChangeValFun(function (isChange, val, col) {
                        if (isChange || _this.IsNew) {
                            _Change = true;
                            _data[colObj.Tag] = colObj.vmDataValueGet();
                        }
                    });
                    if (colObj.Tag == "FID") {
                        fid = colObj.vmDataValueGet();
                    }
                }
                if (_Change) {
                    _data.FID = fid;
                }
                return _data;
            };
            return GeneralExamTplUpdateDetailRowDomVm;
        }(domCore.DomVm));
        GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm = GeneralExamTplUpdateDetailRowDomVm;
        var GeneralExamTplUpdateDetailRowDomStates = (function (_super) {
            __extends(GeneralExamTplUpdateDetailRowDomStates, _super);
            function GeneralExamTplUpdateDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateDetailRowDomStates;
        }(domCore.DomStates));
        GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomStates = GeneralExamTplUpdateDetailRowDomStates;
        var GeneralExamTplUpdateDetailRowDomProps = (function (_super) {
            __extends(GeneralExamTplUpdateDetailRowDomProps, _super);
            function GeneralExamTplUpdateDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplUpdateDetailRowDomProps;
        }(domCore.DomProps));
        GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomProps = GeneralExamTplUpdateDetailRowDomProps;
    })(GeneralExamTplUpdateDetailRowDom = exports.GeneralExamTplUpdateDetailRowDom || (exports.GeneralExamTplUpdateDetailRowDom = {}));
});
