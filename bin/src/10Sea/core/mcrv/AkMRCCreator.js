var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../AkBase", "./../../AkJs"], function (require, exports, akBaseFile, akFile) {
    "use strict";
    var AkMRCCreator = (function (_super) {
        __extends(AkMRCCreator, _super);
        function AkMRCCreator(c, m, r) {
            _super.call(this);
            this.C = c;
            this.M = m;
            this.R = r;
            this.creatorSelf();
        }
        AkMRCCreator.prototype.creatorSelf = function () {
            if (this.R)
                this.R.C = this.C;
            if (this.C) {
                this.C.M = this.M;
                this.C.R = this.R;
            }
            if (this.M)
                this.M.C = this.C;
        };
        ;
        AkMRCCreator.prototype.dispose = function () {
            akFile.DisposeObj(this.R);
            akFile.DisposeObj(this.C);
            akFile.DisposeObj(this.M);
        };
        return AkMRCCreator;
    }(akBaseFile.AkBase));
    exports.AkMRCCreator = AkMRCCreator;
    ;
});
