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
        var FileShowItemAction = (function (_super) {
            __extends(FileShowItemAction, _super);
            function FileShowItemAction() {
                _super.apply(this, arguments);
            }
            return FileShowItemAction;
        }(BaseColAction));
        ui.FileShowItemAction = FileShowItemAction;
        var FileShowItemReact = (function (_super) {
            __extends(FileShowItemReact, _super);
            function FileShowItemReact() {
                _super.apply(this, arguments);
            }
            FileShowItemReact.prototype.fDeleteOnClick = function (e) {
                this.props.Vm.UploadObj.ShowItemList.splice(this.props.Vm.itemIndex, 1);
                this.props.Vm.UploadObj.ResourceInfoList.splice(this.props.Vm.itemIndex, 1);
                var _resStr = JSON.stringify({
                    CoverIndex: this.props.Vm.UploadObj.CoverIndex,
                    ResourceInfoList: this.props.Vm.UploadObj.ResourceInfoList
                });
                this.props.Vm.UploadObj.dataValueSet(_resStr);
                this.props.Vm.UploadObj.ShowItemList.forEach(function (x) {
                    x.IsChange = true;
                });
                this.forceUpdate();
            };
            FileShowItemReact.prototype.pSender = function () {
                var _this = this;
                this.props.Vm.Title = this.props.Vm.ResourceInfo.FileNameTitle + this.props.Vm.ResourceInfo.ExtName + "(" + this.props.Vm.ResourceInfo.FileSizeK + "K)";
                //return React.DOM.div({ ref: "fileItem", className: "acsUpLoad-result-href" },
                //    React.DOM.a({ target: "_blank", href: this.props.Vm.ResourceInfo.HttpPath }, this.props.Vm.Title),
                //    this.props.Vm.IsDetail ? null : React.DOM.i({ className: "fa fa-close", onClick: (e) => { this.fDeleteOnClick(e) } }));
                return React.createElement("div", {ref: "fileItem"}, React.createElement("a", {target: "_blank", href: this.props.Vm.ResourceInfo.HttpPath}, this.props.Vm.Title), this.props.Vm.IsDetail ? null : React.createElement("i", {className: "icon-remove fa fa-close", onClick: function (e) { _this.fDeleteOnClick(e); return false; }}));
            };
            return FileShowItemReact;
        }(BaseColReact));
        ui.FileShowItemReact = FileShowItemReact;
        var FileShowItemProps = (function (_super) {
            __extends(FileShowItemProps, _super);
            function FileShowItemProps() {
                _super.apply(this, arguments);
            }
            return FileShowItemProps;
        }(BaseColProps));
        ui.FileShowItemProps = FileShowItemProps;
        var FileShowItemStates = (function (_super) {
            __extends(FileShowItemStates, _super);
            function FileShowItemStates() {
                _super.apply(this, arguments);
            }
            return FileShowItemStates;
        }(BaseColStates));
        ui.FileShowItemStates = FileShowItemStates;
        var FileShowItemVm = (function (_super) {
            __extends(FileShowItemVm, _super);
            function FileShowItemVm() {
                _super.apply(this, arguments);
                this.ReactType = FileShowItemReact;
                this.ResourceInfo = null;
                this.UploadObj = null;
                this.Title = "";
                this.itemIndex = 0;
                this.IsDetail = false;
            }
            return FileShowItemVm;
        }(BaseColVm));
        ui.FileShowItemVm = FileShowItemVm;
    })(ui = exports.ui || (exports.ui = {}));
});
