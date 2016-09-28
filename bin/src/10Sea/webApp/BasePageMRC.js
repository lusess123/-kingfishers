var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../core/mcrv/AkMRCCreator"], function (require, exports, akMrcFile) {
    "use strict";
    var BasePageMRC = (function (_super) {
        __extends(BasePageMRC, _super);
        function BasePageMRC() {
            _super.apply(this, arguments);
            this.NoLayout = false;
            this.NoMenu = false;
        }
        BasePageMRC.prototype.init = function ($dom) {
            this.R.$JObj = $dom;
            this.C.init();
        };
        ;
        //this.setMRC
        //----------------------IUrl----
        BasePageMRC.prototype.setModel = function (p1, p2, p3) {
            this.C.setModel(p1, p2, p3);
        };
        ;
        BasePageMRC.prototype.loadMain = function ($dom) {
            this.init($dom);
        };
        ;
        BasePageMRC.prototype.loadLeft = function ($dom) {
            this.C.loadLeft($dom);
        };
        ;
        BasePageMRC.prototype.loadRight = function ($dom) {
            this.C.loadRight($dom);
        };
        ;
        BasePageMRC.prototype.loadMenu = function ($dom) {
            if (!this.NoMenu) {
                this.C.loadMenu($dom);
            }
        };
        ;
        BasePageMRC.prototype.clearPage = function ($dom) {
            if (this.C && this.C.clearPage) {
                this.C.clearPage($dom);
            }
            $dom.clear();
        };
        ;
        BasePageMRC.prototype.loadLayOut = function () {
            if (!this.NoLayout) {
                this.C.loadLayOut();
            }
        };
        ;
        return BasePageMRC;
    }(akMrcFile.AkMRCCreator));
    exports.BasePageMRC = BasePageMRC;
});
