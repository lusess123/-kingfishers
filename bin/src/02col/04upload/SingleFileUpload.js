var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseFileUploa", "./../00core/baseCol", "./../../01core/Ioc"], function (require, exports, baseFileUpload, basecolFile, iocFile) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        //alert("SingleFileUploadReact");
        var SingleFileUploadAction = (function (_super) {
            __extends(SingleFileUploadAction, _super);
            function SingleFileUploadAction() {
                _super.apply(this, arguments);
            }
            return SingleFileUploadAction;
        }(baseFileUpload.ui.BaseFileUploadAction));
        ui.SingleFileUploadAction = SingleFileUploadAction;
        var SingleFileUploadReact = (function (_super) {
            __extends(SingleFileUploadReact, _super);
            function SingleFileUploadReact() {
                _super.apply(this, arguments);
            }
            SingleFileUploadReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
            };
            return SingleFileUploadReact;
        }(baseFileUpload.ui.BaseFileUploadReact));
        ui.SingleFileUploadReact = SingleFileUploadReact;
        var SingleFileUploadProps = (function (_super) {
            __extends(SingleFileUploadProps, _super);
            function SingleFileUploadProps() {
                _super.apply(this, arguments);
            }
            return SingleFileUploadProps;
        }(baseFileUpload.ui.BaseFileUploadProps));
        ui.SingleFileUploadProps = SingleFileUploadProps;
        var SingleFileUploadStates = (function (_super) {
            __extends(SingleFileUploadStates, _super);
            function SingleFileUploadStates() {
                _super.apply(this, arguments);
            }
            return SingleFileUploadStates;
        }(baseFileUpload.ui.BaseFileUploadStates));
        ui.SingleFileUploadStates = SingleFileUploadStates;
        var SingleFileUploadVm = (function (_super) {
            __extends(SingleFileUploadVm, _super);
            function SingleFileUploadVm() {
                _super.apply(this, arguments);
                this.ReactType = SingleFileUploadReact;
            }
            return SingleFileUploadVm;
        }(baseFileUpload.ui.BaseFileUploadVm));
        ui.SingleFileUploadVm = SingleFileUploadVm;
        iocFile.Core.Ioc.Current().RegisterType("SingleFileUploadVm", BaseColVm, SingleFileUploadVm);
    })(ui = exports.ui || (exports.ui = {}));
});
