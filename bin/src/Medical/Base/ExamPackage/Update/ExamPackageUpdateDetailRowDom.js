var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageUpdateDetailRowDom;
    (function (ExamPackageUpdateDetailRowDom) {
        var ExamPackageUpdateDetailRowDomAction = (function (_super) {
            __extends(ExamPackageUpdateDetailRowDomAction, _super);
            function ExamPackageUpdateDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateDetailRowDomAction;
        }(domCore.DomAction));
        ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomAction = ExamPackageUpdateDetailRowDomAction;
        var ExamPackageUpdateDetailRowDomReact = (function (_super) {
            __extends(ExamPackageUpdateDetailRowDomReact, _super);
            function ExamPackageUpdateDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageUpdateDetailRowDomStates();
            }
            ExamPackageUpdateDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", {className: "hide"}, this.props.Vm.TextVmObjList["FID"].intoDom()), React.createElement("td", null, this.props.Vm.TextVmObjList["ItemId"].intoDom()), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle acsPointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            ExamPackageUpdateDetailRowDomReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.delButtonRow();
            };
            ExamPackageUpdateDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageUpdateDetailRowDomReact;
        }(domCore.DomReact));
        ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomReact = ExamPackageUpdateDetailRowDomReact;
        var ExamPackageUpdateDetailRowDomVm = (function (_super) {
            __extends(ExamPackageUpdateDetailRowDomVm, _super);
            function ExamPackageUpdateDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageUpdateDetailRowDomReact;
                this.TextVmObjList = {};
                this.IsNew = false;
                if (config) {
                    this.RowData = config.RowData;
                    this.UniId = config.UniId;
                }
                this.initTextVm("FID");
                this.initTextVm("ItemId", "notNull");
            }
            ExamPackageUpdateDetailRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.TextVmObjList) {
                    var _obj = this.TextVmObjList[vn];
                    _res = _obj.legal() && _res;
                }
                return _res;
            };
            ExamPackageUpdateDetailRowDomVm.prototype.getData = function () {
                var _this = this;
                var _data = {};
                var _Change = false;
                var fid = null;
                if (this.IsNew) {
                    _Change = true;
                }
                for (var vn in this.TextVmObjList) {
                    var txtObj = this.TextVmObjList[vn];
                    txtObj.getChangeValFun(function (isChange, val, col) {
                        if (isChange || _this.IsNew) {
                            _Change = true;
                            _data[txtObj.Tag] = txtObj.vmDataValueGet();
                        }
                    });
                    if (txtObj.Tag == "FID") {
                        fid = txtObj.vmDataValueGet();
                    }
                }
                if (_Change) {
                    _data.FID = fid;
                }
                return _data;
            };
            ExamPackageUpdateDetailRowDomVm.prototype.initTextVm = function (colName, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.TextVmObjList) {
                    var _obj = this.TextVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = new textFile.ui.TextVm;
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            ExamPackageUpdateDetailRowDomVm.prototype.delButtonRow = function () {
                this.emitAppEvent("medical/base/exampackage/update/DetailRow", this.UniId, this.RowNumber);
            };
            return ExamPackageUpdateDetailRowDomVm;
        }(domCore.DomVm));
        ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomVm = ExamPackageUpdateDetailRowDomVm;
        var ExamPackageUpdateDetailRowDomStates = (function (_super) {
            __extends(ExamPackageUpdateDetailRowDomStates, _super);
            function ExamPackageUpdateDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateDetailRowDomStates;
        }(domCore.DomStates));
        ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomStates = ExamPackageUpdateDetailRowDomStates;
        var ExamPackageUpdateDetailRowDomProps = (function (_super) {
            __extends(ExamPackageUpdateDetailRowDomProps, _super);
            function ExamPackageUpdateDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageUpdateDetailRowDomProps;
        }(domCore.DomProps));
        ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomProps = ExamPackageUpdateDetailRowDomProps;
    })(ExamPackageUpdateDetailRowDom = exports.ExamPackageUpdateDetailRowDom || (exports.ExamPackageUpdateDetailRowDom = {}));
});
