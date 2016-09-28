var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "react"], function (require, exports, basecolFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var ImageSizeItemAction = (function (_super) {
            __extends(ImageSizeItemAction, _super);
            function ImageSizeItemAction() {
                _super.apply(this, arguments);
            }
            return ImageSizeItemAction;
        }(BaseColAction));
        ui.ImageSizeItemAction = ImageSizeItemAction;
        var ImageSizeItemReact = (function (_super) {
            __extends(ImageSizeItemReact, _super);
            function ImageSizeItemReact() {
                _super.apply(this, arguments);
            }
            ImageSizeItemReact.prototype.pSender = function () {
                //return React.DOM.li(null,React.DOM.a({className:this.props.Vm.aClassName},this.props.Vm.aContent));
                //return React.DOM.option({
                //    value: this.props.Vm.ItemValue,
                //    key: this.props.Vm.Itemkey
                //}, this.props.Vm.ItemValue);
                return React.createElement("option", {value: this.props.Vm.ItemValue, key: this.props.Vm.Itemkey}, this.props.Vm.ItemValue);
            };
            return ImageSizeItemReact;
        }(BaseColReact));
        ui.ImageSizeItemReact = ImageSizeItemReact;
        var ImageSizeItemProps = (function (_super) {
            __extends(ImageSizeItemProps, _super);
            function ImageSizeItemProps() {
                _super.apply(this, arguments);
            }
            return ImageSizeItemProps;
        }(BaseColProps));
        ui.ImageSizeItemProps = ImageSizeItemProps;
        var ImageSizeItemStates = (function (_super) {
            __extends(ImageSizeItemStates, _super);
            function ImageSizeItemStates() {
                _super.apply(this, arguments);
            }
            return ImageSizeItemStates;
        }(BaseColStates));
        ui.ImageSizeItemStates = ImageSizeItemStates;
        var ImageSizeItemVm = (function (_super) {
            __extends(ImageSizeItemVm, _super);
            function ImageSizeItemVm() {
                _super.apply(this, arguments);
                this.ReactType = ImageSizeItemReact;
            }
            return ImageSizeItemVm;
        }(BaseColVm));
        ui.ImageSizeItemVm = ImageSizeItemVm;
    })(ui = exports.ui || (exports.ui = {}));
});
