var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Util", "react"], function (require, exports, basecolFile, utilFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var ThumbnailItemAction = (function (_super) {
            __extends(ThumbnailItemAction, _super);
            function ThumbnailItemAction() {
                _super.apply(this, arguments);
            }
            return ThumbnailItemAction;
        }(BaseColAction));
        ui.ThumbnailItemAction = ThumbnailItemAction;
        var ThumbnailItemReact = (function (_super) {
            __extends(ThumbnailItemReact, _super);
            function ThumbnailItemReact() {
                _super.apply(this, arguments);
            }
            ThumbnailItemReact.prototype.pSender = function () {
                //var ss = JSON.stringify(this.props.Vm.divStyle);
                //alert(this.props.Vm.imgClassName+":"+ss);
                //return React.DOM.div({ className: "thumbnail", style: this.props.Vm.divStyle},
                //    React.DOM.a({ rel: "sexylightbox", target: "_blank", href: this.props.Vm.href },
                //        React.DOM.img({ className: this.props.Vm.imgClassName, style: this.props.Vm.imgStyle, src: this.props.Vm.href})),
                //    React.DOM.label({ className: "ACT-IMAGE-TITLE", title: this.props.Vm.imgTitle }, utilFile.Core.Util.InterceptStringDisplay(this.props.Vm.imgTitle,5))//,
                //    //React.DOM.a({ className: "ACT_SET_MAIN_ITEM pull-right", title: "设置为封面" },
                //    //    React.DOM.i({ className:"fa fa-save (alias)"}))
                //);
                return React.createElement("div", {className: "thumbnail", style: this.props.Vm.divStyle}, React.createElement("a", {ref: "sexylightbox", target: "_blank", href: this.props.Vm.href}, React.createElement("img", {className: this.props.Vm.imgClassName, style: this.props.Vm.imgStyle, src: this.props.Vm.href}, React.createElement("label", {className: "ACT-IMAGE-TITLE", title: this.props.Vm.imgTitle}, utilFile.Core.Util.InterceptStringDisplay(this.props.Vm.imgTitle, 5)))));
            };
            return ThumbnailItemReact;
        }(BaseColReact));
        ui.ThumbnailItemReact = ThumbnailItemReact;
        var ThumbnailItemProps = (function (_super) {
            __extends(ThumbnailItemProps, _super);
            function ThumbnailItemProps() {
                _super.apply(this, arguments);
            }
            return ThumbnailItemProps;
        }(BaseColProps));
        ui.ThumbnailItemProps = ThumbnailItemProps;
        var ThumbnailItemStates = (function (_super) {
            __extends(ThumbnailItemStates, _super);
            function ThumbnailItemStates() {
                _super.apply(this, arguments);
            }
            return ThumbnailItemStates;
        }(BaseColStates));
        ui.ThumbnailItemStates = ThumbnailItemStates;
        var ThumbnailItemVm = (function (_super) {
            __extends(ThumbnailItemVm, _super);
            function ThumbnailItemVm() {
                _super.apply(this, arguments);
                this.ReactType = ThumbnailItemReact;
            }
            return ThumbnailItemVm;
        }(BaseColVm));
        ui.ThumbnailItemVm = ThumbnailItemVm;
    })(ui = exports.ui || (exports.ui = {}));
});
