var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text"], function (require, exports, React, domFile, textFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageInsertDetailRowDom;
    (function (ExamPackageInsertDetailRowDom) {
        var ExamPackageInsertDetailRowDomAction = (function (_super) {
            __extends(ExamPackageInsertDetailRowDomAction, _super);
            function ExamPackageInsertDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertDetailRowDomAction;
        }(domCore.DomAction));
        ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomAction = ExamPackageInsertDetailRowDomAction;
        var ExamPackageInsertDetailRowDomReact = (function (_super) {
            __extends(ExamPackageInsertDetailRowDomReact, _super);
            function ExamPackageInsertDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageInsertDetailRowDomStates();
            }
            ExamPackageInsertDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", null, this.props.Vm.TextVmObjList["ItemId"].intoDom()), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle acsPointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            ExamPackageInsertDetailRowDomReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.delButtonRow();
            };
            ExamPackageInsertDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageInsertDetailRowDomReact;
        }(domCore.DomReact));
        ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomReact = ExamPackageInsertDetailRowDomReact;
        var ExamPackageInsertDetailRowDomVm = (function (_super) {
            __extends(ExamPackageInsertDetailRowDomVm, _super);
            function ExamPackageInsertDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageInsertDetailRowDomReact;
                this.TextVmObjList = {};
                this.IsNew = false;
                this.initTextVm("ItemId", "notNull");
                if (config) {
                    this.UniId = config.UniId;
                    this.RowData = config.RowData;
                }
            }
            ExamPackageInsertDetailRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.TextVmObjList) {
                    var _obj = this.TextVmObjList[vn];
                    _res = _obj.legal() && _res;
                }
                return _res;
            };
            ExamPackageInsertDetailRowDomVm.prototype.initTextVm = function (colName, legal) {
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
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            ExamPackageInsertDetailRowDomVm.prototype.delButtonRow = function () {
                this.emitAppEvent("medical/base/exampackage/insert/detailrow", this.UniId, this.RowNumber);
            };
            return ExamPackageInsertDetailRowDomVm;
        }(domCore.DomVm));
        ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomVm = ExamPackageInsertDetailRowDomVm;
        var ExamPackageInsertDetailRowDomStates = (function (_super) {
            __extends(ExamPackageInsertDetailRowDomStates, _super);
            function ExamPackageInsertDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertDetailRowDomStates;
        }(domCore.DomStates));
        ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomStates = ExamPackageInsertDetailRowDomStates;
        var ExamPackageInsertDetailRowDomProps = (function (_super) {
            __extends(ExamPackageInsertDetailRowDomProps, _super);
            function ExamPackageInsertDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageInsertDetailRowDomProps;
        }(domCore.DomProps));
        ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomProps = ExamPackageInsertDetailRowDomProps;
    })(ExamPackageInsertDetailRowDom = exports.ExamPackageInsertDetailRowDom || (exports.ExamPackageInsertDetailRowDom = {}));
});
