var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var UploadFormDom;
    (function (UploadFormDom) {
        var UploadFormDomAction = (function (_super) {
            __extends(UploadFormDomAction, _super);
            function UploadFormDomAction() {
                _super.apply(this, arguments);
            }
            return UploadFormDomAction;
        }(domCore.DomAction));
        UploadFormDom.UploadFormDomAction = UploadFormDomAction;
        var UploadFormDomReact = (function (_super) {
            __extends(UploadFormDomReact, _super);
            function UploadFormDomReact() {
                _super.apply(this, arguments);
                this.state = new UploadFormDomStates();
            }
            UploadFormDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("form", {method: "post", encType: "multipart/form-data"}, React.createElement("input", {type: "file", name: "fileName", size: "15", input: true, enctype: "multipart/form-data", maxlength: "100"})));
            };
            UploadFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UploadFormDomReact;
        }(domCore.DomReact));
        UploadFormDom.UploadFormDomReact = UploadFormDomReact;
        var UploadFormDomVm = (function (_super) {
            __extends(UploadFormDomVm, _super);
            function UploadFormDomVm(config) {
                _super.call(this);
                this.ReactType = UploadFormDomReact;
            }
            return UploadFormDomVm;
        }(domCore.DomVm));
        UploadFormDom.UploadFormDomVm = UploadFormDomVm;
        var UploadFormDomStates = (function (_super) {
            __extends(UploadFormDomStates, _super);
            function UploadFormDomStates() {
                _super.apply(this, arguments);
            }
            return UploadFormDomStates;
        }(domCore.DomStates));
        UploadFormDom.UploadFormDomStates = UploadFormDomStates;
        var UploadFormDomProps = (function (_super) {
            __extends(UploadFormDomProps, _super);
            function UploadFormDomProps() {
                _super.apply(this, arguments);
            }
            return UploadFormDomProps;
        }(domCore.DomProps));
        UploadFormDom.UploadFormDomProps = UploadFormDomProps;
    })(UploadFormDom = exports.UploadFormDom || (exports.UploadFormDom = {}));
});
