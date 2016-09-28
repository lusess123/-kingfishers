var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../BasePageCer", "./../../../01core/Util"], function (require, exports, cer, util) {
    "use strict";
    var WorkflowGuideCer = (function (_super) {
        __extends(WorkflowGuideCer, _super);
        function WorkflowGuideCer() {
            _super.apply(this, arguments);
            this.AppCer = null;
            this.WorkflowDefName = "";
        }
        WorkflowGuideCer.prototype.getM = function () {
            return util.Core.Util.Cast(this.M);
        };
        WorkflowGuideCer.prototype.getR = function () {
            return util.Core.Util.Cast(this.R);
        };
        WorkflowGuideCer.prototype.init = function () {
            var _this = this;
            _this.getM().getModuleXmlPageDataM(this.WorkflowDefName, function (res) {
                if (res.type === 1 && res.guideXml) {
                    _this.getR().loadModuleXmlMainR({ WorkflowDefName: _this.WorkflowDefName, GuideXml: res.guideXml, DisplayName: res.displayName });
                    _this.loadMenu();
                }
                else {
                    alert("未配置向导页");
                }
            });
        };
        WorkflowGuideCer.prototype.setModel = function (p1, p2, p3) {
            this.WorkflowDefName = p1;
        };
        ;
        WorkflowGuideCer.prototype.loadMenu = function () {
        };
        ;
        WorkflowGuideCer.prototype.clearPage = function () {
            $.AKjs.AppGet().hideNavi();
            $.AKjs.AppGet().clearWindow();
        };
        ;
        return WorkflowGuideCer;
    }(cer.BasePageCer));
    exports.WorkflowGuideCer = WorkflowGuideCer;
});
