var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../Base/BaseMDMasterDom", "./../../../03form/Norml/NormalRow", "./../../../02col/01single/Text", "./../../Base/RightNormalColumDom"], function (require, exports, BaseMDMasterDomFile, NormalRowFile, TextFile, RightNormalColumDomFile) {
    "use strict";
    var OrgDetailMasterDom;
    (function (OrgDetailMasterDom) {
        var OrgDetailMasterDomReact = (function (_super) {
            __extends(OrgDetailMasterDomReact, _super);
            function OrgDetailMasterDomReact() {
                _super.apply(this, arguments);
            }
            OrgDetailMasterDomReact.prototype.vm = function () {
                var _anyVm = this.props.Vm;
                var _newVm = _anyVm;
                return _newVm;
            };
            OrgDetailMasterDomReact.prototype.pSender = function () {
                return this.vm().RowDomVm.intoDom();
            };
            OrgDetailMasterDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return OrgDetailMasterDomReact;
        }(BaseMDMasterDomFile.BaseMDMasterDom.BaseMDMasterDomReact));
        OrgDetailMasterDom.OrgDetailMasterDomReact = OrgDetailMasterDomReact;
        var OrgDetailMasterDomVm = (function (_super) {
            __extends(OrgDetailMasterDomVm, _super);
            function OrgDetailMasterDomVm() {
                _super.call(this);
                this.ReactType = OrgDetailMasterDomReact;
                this.Data = {};
                this.createNormalRow();
            }
            OrgDetailMasterDomVm.prototype.createNormalRow = function () {
                var _this = this;
                var normalRow = new NormalRowFile.ui.NormalRowVm();
                for (var i = 0; i < 10; i++) {
                    var columnObj = new RightNormalColumDomFile.RightNormalColumDom.RightNormalColumDomVm();
                    columnObj.ColumnConfig = { Name: "ACT" + i.toString(), DisplayName: "显示名称" + i.toString(), ShowType: 2 };
                    normalRow.ColumnObjList.push(columnObj);
                }
                this.RowDomVm = normalRow;
                this.RowDomVm.ColumnObjList.forEach(function (obj, i) {
                    _this.Data["column" + i] = "值" + i;
                    obj.ControlObj = new TextFile.ui.TextVm();
                    obj.ControlObj.LegalObj.Kind = "notNull";
                    obj.ControlObj.vmdataValue(_this.Data["column" + i]);
                    obj.onChangeHandle(function (val) {
                        _this.Data["column" + i] = val;
                        return true;
                    });
                });
            };
            OrgDetailMasterDomVm.prototype.legal = function () {
                var isSuccess = true;
                this.RowDomVm.ColumnObjList.forEach(function (obj, i) {
                    if (!obj.ControlObj.legal()) {
                        isSuccess = false;
                    }
                });
                return isSuccess;
            };
            OrgDetailMasterDomVm.prototype.submit = function () {
                return this.legal();
            };
            return OrgDetailMasterDomVm;
        }(BaseMDMasterDomFile.BaseMDMasterDom.BaseMDMasterDomVm));
        OrgDetailMasterDom.OrgDetailMasterDomVm = OrgDetailMasterDomVm;
    })(OrgDetailMasterDom = exports.OrgDetailMasterDom || (exports.OrgDetailMasterDom = {}));
});
