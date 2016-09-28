var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, pageCerFile, utilFile) {
    "use strict";
    var UserDocumentCenterCer = (function (_super) {
        __extends(UserDocumentCenterCer, _super);
        function UserDocumentCenterCer() {
            _super.apply(this, arguments);
            this.AkName = "UserDocumentCenterCer";
        }
        UserDocumentCenterCer.prototype.getM = function () {
            return utilFile.Core.Util.Cast(this.M);
        };
        UserDocumentCenterCer.prototype.getR = function () {
            return utilFile.Core.Util.Cast(this.R);
        };
        UserDocumentCenterCer.prototype.init = function () {
            var _this = this;
            this.getR().initR(this.getM().UserId);
            this.getM().getModuleXmlPageData(function (res) {
                _this.getR().loadModuleXmlMainR(res);
            });
        };
        ;
        UserDocumentCenterCer.prototype.setModel = function (p1, p2, p3) {
            this.getM().UserId = p1;
            if (p2 != null) {
                this.getM().pid = p2;
            }
            else {
                this.getM().pid = "0";
            }
        };
        ;
        UserDocumentCenterCer.prototype.getFilePathC = function (option) {
            var _this = this;
            this.getM().getFilePathM(option, function (res) {
                _this.getR().createFilePathR(res);
            });
        };
        UserDocumentCenterCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
        };
        ;
        return UserDocumentCenterCer;
    }(pageCerFile.BasePageCer));
    exports.UserDocumentCenterCer = UserDocumentCenterCer;
});
