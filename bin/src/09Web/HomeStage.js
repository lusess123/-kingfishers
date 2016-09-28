var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "./../01core/Util", "react"], function (require, exports, domFile, utilFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Web;
    (function (Web) {
        var HomeStageAction = (function (_super) {
            __extends(HomeStageAction, _super);
            function HomeStageAction() {
                _super.apply(this, arguments);
            }
            return HomeStageAction;
        }(domCore.DomAction));
        Web.HomeStageAction = HomeStageAction;
        var HomeStageReact = (function (_super) {
            __extends(HomeStageReact, _super);
            function HomeStageReact() {
                _super.apply(this, arguments);
            }
            HomeStageReact.prototype.pSender = function () {
                //return React.DOM.div({}, React.DOM.button(
                //    {
                //        className:" button",
                //        onClick: (e) => {
                //            alert(123);
                //            utilFile.Core.Util.Noty("点击了我啊，哈哈哈" + new Date().toTimeString());
                //            this.fViewOnClick1(e);
                //    }
                //    }, "请点击"));
                var _this = this;
                return React.createElement("div", null, React.createElement("button", {onClick: function (e) {
                    utilFile.Core.Util.Noty("点击了我啊，哈哈哈" + new Date().toTimeString());
                    _this.fViewOnClick1(e);
                    return false;
                }}, "请点击"));
            };
            HomeStageReact.prototype.fViewOnClick1 = function (e) {
                if ($("#append_parent").length == 0) {
                    $("body").append($('<div id="append_parent"></div>'));
                }
                var _$this = $(e.target);
                var _src = "http://192.168.66.11:99/Core/User/logo/20151022135543373ABC6AB4ED87E5444FBA7262BA865DE15F.jpg";
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/imgdiscuz/js/common.js", "/AtawStatic/lib/03Extend/imgdiscuz/js/forum_viewthread.js", "/AtawStatic/lib/03Extend/imgdiscuz/js/common_extra.js", "/AtawStatic/lib/03Extend/imgdiscuz/img/style_1_forum_viewthread.css"], function () {
                    //window["zoomstatus"] = parseInt("1");
                    //window["imagemaxwidth"] = '500';
                    window["IMGDIR"] = 'AtawStatic/lib/03Extend/imgdiscuz/img/', window["VERHASH"] = 'zfhf', window["JSPATH"] = 'AtawStatic/lib/03Extend/imgdiscuz/js/';
                    _$this.attr("zoomfile", _src);
                    _$this.attr("file", _src);
                    _$this.attr("aid", "156139");
                    window["aimgcount"] = new Array();
                    window["aimgcount"][1000] = ['156139'];
                    window["attachimggroup"](1000);
                    window["attachimgshow"](1000);
                    var aimgfid = 0;
                    window["zoom"](_$this[0], _src, 0, 0, 0);
                });
            };
            return HomeStageReact;
        }(domCore.DomReact));
        Web.HomeStageReact = HomeStageReact;
        var HomeStageVm = (function (_super) {
            __extends(HomeStageVm, _super);
            function HomeStageVm() {
                _super.apply(this, arguments);
                this.ReactType = HomeStageReact;
            }
            return HomeStageVm;
        }(domCore.DomVm));
        Web.HomeStageVm = HomeStageVm;
        var HomeStageStates = (function (_super) {
            __extends(HomeStageStates, _super);
            function HomeStageStates() {
                _super.apply(this, arguments);
            }
            return HomeStageStates;
        }(domCore.DomStates));
        Web.HomeStageStates = HomeStageStates;
        var HomeStageProps = (function (_super) {
            __extends(HomeStageProps, _super);
            function HomeStageProps() {
                _super.apply(this, arguments);
            }
            return HomeStageProps;
        }(domCore.DomProps));
        Web.HomeStageProps = HomeStageProps;
    })(Web = exports.Web || (exports.Web = {}));
});
