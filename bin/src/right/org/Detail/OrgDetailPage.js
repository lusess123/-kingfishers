var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../04page/BaseWebPage", "./../../Base/BaseMDPage", "./../../Base/BaseMDRowDom", "./OrgDetailMasterDom"], function (require, exports, React, iocFile, utilFile, basewedPageFile, baseMDPageFile, baseMDRowDomFile, OrgDetailMasterDomFile) {
    "use strict";
    var OrgDetailPage;
    (function (OrgDetailPage) {
        var OrgDetailPageAction = (function (_super) {
            __extends(OrgDetailPageAction, _super);
            function OrgDetailPageAction() {
                _super.apply(this, arguments);
            }
            return OrgDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        OrgDetailPage.OrgDetailPageAction = OrgDetailPageAction;
        var OrgDetailPageReact = (function (_super) {
            __extends(OrgDetailPageReact, _super);
            function OrgDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new OrgDetailPageStates();
            }
            OrgDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-modals"}, React.createElement("h4", null, this.props.Vm.Title), React.createElement("div", null, this.props.Vm.RowList.map(function (row) {
                    return row.intoDom();
                })));
            };
            return OrgDetailPageReact;
        }(baseMDPageFile.BaseMDPage.BaseMDPageReact));
        OrgDetailPage.OrgDetailPageReact = OrgDetailPageReact;
        var OrgDetailPageVm = (function (_super) {
            __extends(OrgDetailPageVm, _super);
            function OrgDetailPageVm() {
                _super.call(this);
                this.ReactType = OrgDetailPageReact;
                for (var i = 0; i < 10; i++) {
                    var _newrow = new baseMDRowDomFile.BaseMDRowDom.BaseMDRowDomVm();
                    _newrow.MasterTitle = "组织机构";
                    _newrow.HasNoDetail = true;
                    _newrow.BaseMDRowShell.Index = i + 1;
                    _newrow.BaseMDRowReactHook.ThReactList = [];
                    _newrow.MasterObj = new OrgDetailMasterDomFile.OrgDetailMasterDom.OrgDetailMasterDomVm();
                    this.RowList.push(_newrow);
                }
            }
            OrgDetailPageVm.prototype.submit = function () {
                _super.prototype.submit.call(this);
                var _success = true;
                var rows = [];
                this.RowList.forEach(function (row) {
                    var _master = utilFile.Core.Util.Cast(row.MasterObj);
                    //alert((row.MasterObj.constructor).toString() + "   " + (_master.constructor).toString());
                    //alert(utilFile.Core.Util.GetClassName(row.MasterObj) + "   " + utilFile.Core.Util.GetClassName(_master));
                    if (_master.submit && !_master.submit()) {
                        _success = false;
                    }
                    rows.push(_master.Data);
                });
                alert(JSON.stringify(rows));
                return _success;
            };
            return OrgDetailPageVm;
        }(baseMDPageFile.BaseMDPage.BaseMDPageVm));
        OrgDetailPage.OrgDetailPageVm = OrgDetailPageVm;
        var OrgDetailPageStates = (function (_super) {
            __extends(OrgDetailPageStates, _super);
            function OrgDetailPageStates() {
                _super.apply(this, arguments);
            }
            return OrgDetailPageStates;
        }(baseMDPageFile.BaseMDPage.BaseMDPageStates));
        OrgDetailPage.OrgDetailPageStates = OrgDetailPageStates;
        var OrgDetailPageProps = (function (_super) {
            __extends(OrgDetailPageProps, _super);
            function OrgDetailPageProps() {
                _super.apply(this, arguments);
            }
            return OrgDetailPageProps;
        }(baseMDPageFile.BaseMDPage.BaseMDPageProps));
        OrgDetailPage.OrgDetailPageProps = OrgDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ORGDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, OrgDetailPageVm);
    })(OrgDetailPage = exports.OrgDetailPage || (exports.OrgDetailPage = {}));
});
