var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseImageUpload", "./../00core/baseCol", "./../../01core/Ioc"], function (require, exports, baseImageupload, basecolFile, iocFile) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        //alert("SingleImageUploadReact");
        var SingleImageUploadAction = (function (_super) {
            __extends(SingleImageUploadAction, _super);
            function SingleImageUploadAction() {
                _super.apply(this, arguments);
            }
            return SingleImageUploadAction;
        }(baseImageupload.ui.BaseImageUploadAction));
        ui.SingleImageUploadAction = SingleImageUploadAction;
        var SingleImageUploadReact = (function (_super) {
            __extends(SingleImageUploadReact, _super);
            function SingleImageUploadReact() {
                _super.apply(this, arguments);
            }
            SingleImageUploadReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
            };
            return SingleImageUploadReact;
        }(baseImageupload.ui.BaseImageUploadReact));
        ui.SingleImageUploadReact = SingleImageUploadReact;
        var SingleImageUploadProps = (function (_super) {
            __extends(SingleImageUploadProps, _super);
            function SingleImageUploadProps() {
                _super.apply(this, arguments);
            }
            return SingleImageUploadProps;
        }(baseImageupload.ui.BaseImageUploadProps));
        ui.SingleImageUploadProps = SingleImageUploadProps;
        var SingleImageUploadStates = (function (_super) {
            __extends(SingleImageUploadStates, _super);
            function SingleImageUploadStates() {
                _super.apply(this, arguments);
            }
            return SingleImageUploadStates;
        }(baseImageupload.ui.BaseImageUploadStates));
        ui.SingleImageUploadStates = SingleImageUploadStates;
        var SingleImageUploadVm = (function (_super) {
            __extends(SingleImageUploadVm, _super);
            function SingleImageUploadVm() {
                _super.apply(this, arguments);
                this.ReactType = SingleImageUploadReact;
            }
            return SingleImageUploadVm;
        }(baseImageupload.ui.BaseImageUploadVm));
        ui.SingleImageUploadVm = SingleImageUploadVm;
        iocFile.Core.Ioc.Current().RegisterType("SingleImageUploadVm", BaseColVm, SingleImageUploadVm);
    })(ui = exports.ui || (exports.ui = {}));
});
