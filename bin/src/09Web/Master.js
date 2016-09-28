var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "./../01core/Util", "./../01core/Url", "./TableDemo", "react"], function (require, exports, domFile, utilFile, urlFile, tableDemoFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Web;
    (function (Web) {
        var MasterAction = (function (_super) {
            __extends(MasterAction, _super);
            function MasterAction() {
                _super.apply(this, arguments);
            }
            return MasterAction;
        }(domCore.DomAction));
        Web.MasterAction = MasterAction;
        var MasterReact = (function (_super) {
            __extends(MasterReact, _super);
            function MasterReact() {
                _super.apply(this, arguments);
                this.state = new MasterStates();
            }
            MasterReact.prototype.pSender = function () {
                if (this.state.Stage) {
                    // return React.DOM.div({}, this.state.Stage.intoDom());
                    return React.createElement("div", null, this.state.Stage.intoDom());
                }
                else {
                    //return React.DOM.div({}, "空白的页面");
                    return React.createElement("div", null, "空白的页面");
                }
            };
            MasterReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                // alert();
                this.state.Stage = new tableDemoFile.Web.TableDemoVm();
                urlFile.Core.AkUrl.Current().bindHashChange(function (a) {
                    alert(" 刷新页面 " + a);
                    utilFile.Core.Util.ToggleLoading(true);
                    // this.bindPage(a);
                    // Core.Util.ToggleLoading(false);
                    // this.state.PageObj.
                });
                this.forceUpdate(function () {
                    utilFile.Core.Util.ToggleLoading(false);
                });
            };
            return MasterReact;
        }(domCore.DomReact));
        Web.MasterReact = MasterReact;
        var MasterVm = (function (_super) {
            __extends(MasterVm, _super);
            function MasterVm() {
                _super.apply(this, arguments);
                this.ReactType = MasterReact;
            }
            return MasterVm;
        }(domCore.DomVm));
        Web.MasterVm = MasterVm;
        var MasterStates = (function (_super) {
            __extends(MasterStates, _super);
            function MasterStates() {
                _super.apply(this, arguments);
            }
            return MasterStates;
        }(domCore.DomStates));
        Web.MasterStates = MasterStates;
        var MasterProps = (function (_super) {
            __extends(MasterProps, _super);
            function MasterProps() {
                _super.apply(this, arguments);
            }
            return MasterProps;
        }(domCore.DomProps));
        Web.MasterProps = MasterProps;
    })(Web = exports.Web || (exports.Web = {}));
});
