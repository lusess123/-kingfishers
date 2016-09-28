var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/0Dom", "./../../01core/Url", "./../../05tool/ALink"], function (require, exports, React, domFile, urlFile, alinkFile) {
    "use strict";
    var domCore = domFile.Core;
    var ALink = alinkFile.ui.ALinkReact;
    var HosWorkRowDomDom;
    (function (HosWorkRowDomDom) {
        var HosWorkRowDomDomAction = (function (_super) {
            __extends(HosWorkRowDomDomAction, _super);
            function HosWorkRowDomDomAction() {
                _super.apply(this, arguments);
            }
            return HosWorkRowDomDomAction;
        }(domCore.DomAction));
        HosWorkRowDomDom.HosWorkRowDomDomAction = HosWorkRowDomDomAction;
        var HosWorkRowDomDomReact = (function (_super) {
            __extends(HosWorkRowDomDomReact, _super);
            function HosWorkRowDomDomReact() {
                _super.apply(this, arguments);
                this.state = new HosWorkRowDomDomStates();
            }
            HosWorkRowDomDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("li", {className: "nav-item", onClick: function () { _this.props.Vm.openXml(_this.props.Vm.RowData.FID); }}, React.createElement(ALink, {Vm: new alinkFile.ui.ALinkVm(false, { ClassName: "clearfix" }), href: "", children: null}, React.createElement("span", {title: ""}, this.props.Vm.RowData.Title, " "), React.createElement("small", null, this.props.Vm.RowData.outDate))));
            };
            HosWorkRowDomDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return HosWorkRowDomDomReact;
        }(domCore.DomReact));
        HosWorkRowDomDom.HosWorkRowDomDomReact = HosWorkRowDomDomReact;
        var HosWorkRowDomDomVm = (function (_super) {
            __extends(HosWorkRowDomDomVm, _super);
            function HosWorkRowDomDomVm(config) {
                _super.call(this);
                this.ReactType = HosWorkRowDomDomReact;
                if (config) {
                    this.RowData = config.RowData;
                }
            }
            HosWorkRowDomDomVm.prototype.openXml = function (val) {
                var url = "$winDefault$module/HospPerformance/Core/performance_system_announcement$Detail$" + val;
                urlFile.Core.AkUrl.Current().openUrl(url, true);
            };
            return HosWorkRowDomDomVm;
        }(domCore.DomVm));
        HosWorkRowDomDom.HosWorkRowDomDomVm = HosWorkRowDomDomVm;
        var HosWorkRowDomDomStates = (function (_super) {
            __extends(HosWorkRowDomDomStates, _super);
            function HosWorkRowDomDomStates() {
                _super.apply(this, arguments);
            }
            return HosWorkRowDomDomStates;
        }(domCore.DomStates));
        HosWorkRowDomDom.HosWorkRowDomDomStates = HosWorkRowDomDomStates;
        var HosWorkRowDomDomProps = (function (_super) {
            __extends(HosWorkRowDomDomProps, _super);
            function HosWorkRowDomDomProps() {
                _super.apply(this, arguments);
            }
            return HosWorkRowDomDomProps;
        }(domCore.DomProps));
        HosWorkRowDomDom.HosWorkRowDomDomProps = HosWorkRowDomDomProps;
    })(HosWorkRowDomDom = exports.HosWorkRowDomDom || (exports.HosWorkRowDomDom = {}));
});
