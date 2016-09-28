var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "react"], function (require, exports, basecolFile, iocFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var LinkAction = (function (_super) {
            __extends(LinkAction, _super);
            function LinkAction() {
                _super.apply(this, arguments);
            }
            return LinkAction;
        }(BaseColAction));
        ui.LinkAction = LinkAction;
        var LinkProps = (function (_super) {
            __extends(LinkProps, _super);
            function LinkProps() {
                _super.apply(this, arguments);
            }
            return LinkProps;
        }(BaseColProps));
        ui.LinkProps = LinkProps;
        var LinkVm = (function (_super) {
            __extends(LinkVm, _super);
            function LinkVm() {
                _super.apply(this, arguments);
                this.ReactType = LinkReact;
                this.pRegName = "链接控件";
                this.Href = "";
                this.Text = "链接";
                this.Target = "_bank";
            }
            LinkVm.prototype.dataValueGet = function () {
                return this.pDataValue;
            };
            LinkVm.Test = function () {
                var bean = new LinkVm();
                bean.initDataValue("链接,www.baidu.com");
                return bean;
            };
            return LinkVm;
        }(BaseColVm));
        ui.LinkVm = LinkVm;
        var LinkState = (function (_super) {
            __extends(LinkState, _super);
            function LinkState() {
                _super.apply(this, arguments);
            }
            return LinkState;
        }(BaseColStates));
        ui.LinkState = LinkState;
        var LinkReact = (function (_super) {
            __extends(LinkReact, _super);
            function LinkReact() {
                _super.apply(this, arguments);
            }
            LinkReact.prototype.pSender = function () {
                var _val = this.props.Vm.dataValueGet().split(",");
                this.props.Vm.Text = _val[0];
                this.props.Vm.Href = _val[1];
                return React.createElement("a", {href: this.props.Vm.Href, target: this.props.Vm.Target}, this.props.Vm.Text);
            };
            return LinkReact;
        }(BaseColReact));
        ui.LinkReact = LinkReact;
        iocFile.Core.Ioc.Current().RegisterType("LinkVm", BaseColVm, LinkVm);
    })(ui = exports.ui || (exports.ui = {}));
});
