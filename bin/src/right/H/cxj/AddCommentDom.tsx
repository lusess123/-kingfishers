


import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module AddCommentDom {
    export class AddCommentDomAction extends domCore.DomAction {
    }

    export class AddCommentDomReact extends domCore.DomReact<AddCommentDomProps, AddCommentDomStates, AddCommentDomAction> implements domCore.IReact {

        public state = new AddCommentDomStates();

        protected getEmotionDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find("span");
        }
        protected getTextareaDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find("textarea");
        }
        protected getSubmitDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find("a");
        }
        protected getShowDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find("div");
        }
        private fReplace_emDom(str) {
            str = str.replace(/\</g, '&lt;');
            str = str.replace(/\>/g, '&gt;');
            str = str.replace(/\n/g, '<br/>');
            str = str.replace(/\[em_([0-9]*)\]/g, '<img src="/Content/images/face/$1.gif" border="0" />');
            return str;
        }

        public pSender(): React.ReactElement<any> {
            return  <div className="clearfix">
                <textarea ref="saytext" id="saytext" name="saytext" className=" col-lg-12 col-md-12 col-sm-12 col-xs-12" placeholder="说两句吧..."></textarea>
                <div className="Hu-publish">
                    <span ref="emotion" className="Hu-pointer"><i className="fa-lg fa fa-smile-o"></i></span>
                    <a ref="submit" className="btn btn-xs">发表</a>
                         </div>
                         <div id="show" ref="showqq"></div>
                    </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

            var __this = this;
            utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/emotion/jquery.qqFace.js"], function () {
                var _txdom = __this.fGetTextareaDom();
                var _spdom = __this.fGetEmotionDom();
                var _submit = __this.fGetSubmitDom();
                var _show = __this.fGetShowDom();
                _spdom.qqFace({
                    id: "facebox",
                    assign: "saytext",
                    path: "/Content/images/face/"
                });
                _submit.click(function () {
                    var str = _txdom.val();
                    _show.html(__this.fReplace_emDom(str));
                });
            });
            
        }
        private fGetEmotionDom(): JQuery {
            var _reactObj = this.refs["emotion"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

        private fGetTextareaDom(): JQuery {
            var _reactObj = this.refs["saytext"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

        private fGetSubmitDom(): JQuery {
            var _reactObj = this.refs["submit"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }
        private fGetShowDom(): JQuery {
            var _reactObj = this.refs["showqq"];
            var _dom = ReactDOM.findDOMNode(_reactObj);
            var _$dom = $(_dom);
            return _$dom;
        }

    }
  
   export interface IReactAddCommentDomVm extends domCore.DomVm{
                   
   }

    export interface IAddCommentDomConfig  {
    
            
    }

    export class AddCommentDomVm extends domCore.DomVm implements IReactAddCommentDomVm {
        public ReactType = AddCommentDomReact;

        public constructor(config?:IAddCommentDomConfig){
            super();

        }

    }
    export class AddCommentDomStates extends domCore.DomStates {
    }


    export class AddCommentDomProps extends domCore.DomProps<IReactAddCommentDomVm>{
    }



}



