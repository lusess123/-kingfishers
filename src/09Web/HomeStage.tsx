import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Web {
    export class HomeStageAction extends domCore.DomAction {
        // LogList: Array<string>;
    }

    export class HomeStageReact extends domCore.DomReact<HomeStageProps, HomeStageStates, HomeStageAction> implements domCore.IReact {



        public pSender(): React.ReactElement<any> {
            //return React.DOM.div({}, React.DOM.button(
            //    {
            //        className:" button",
            //        onClick: (e) => {
            //            alert(123);
            //            utilFile.Core.Util.Noty("点击了我啊，哈哈哈" + new Date().toTimeString());
            //            this.fViewOnClick1(e);
            //    }
            //    }, "请点击"));

            return <div>
                        <button onClick={(e) => {
                            utilFile.Core.Util.Noty("点击了我啊，哈哈哈" + new Date().toTimeString());
                            this.fViewOnClick1(e);
                            return false; 
                     } }>请点击</button>
                </div>
        }

        private fViewOnClick1(e) {
            if ($("#append_parent").length == 0) {
                $("body").append($('<div id="append_parent"></div>'));
            }
            var _$this = $(e.target);
            var _src = "http://192.168.66.11:99/Core/User/logo/20151022135543373ABC6AB4ED87E5444FBA7262BA865DE15F.jpg";
            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/imgdiscuz/js/common.js", "/AtawStatic/lib/03Extend/imgdiscuz/js/forum_viewthread.js", "/AtawStatic/lib/03Extend/imgdiscuz/js/common_extra.js", "/AtawStatic/lib/03Extend/imgdiscuz/img/style_1_forum_viewthread.css"], () => {
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
        }


    }
    export class HomeStageVm extends domCore.DomVm {
        public ReactType = HomeStageReact;


    }
    export class HomeStageStates extends domCore.DomStates {

    }


    export class HomeStageProps extends domCore.DomProps<HomeStageVm>{
    }
}