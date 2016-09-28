


import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import addFile=require("./AddCommentDom");

export module CommentListDom {
    export class CommentListDomAction extends domCore.DomAction {
    }

    export class CommentListDomReact extends domCore.DomReact<CommentListDomProps, CommentListDomStates, CommentListDomAction> implements domCore.IReact {

        public state = new CommentListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <span onClick={() => { this.fun_isShow(); } }>
                    <a className="btn btn-sm">{this.props.Vm.IsShow ? "展开列表":"收起列表"}</a>
                    <i className={"icon-caret-"+ (this.props.Vm.IsShow ? "right" : "down" )+
                        " fa fa-caret-"+ (this.props.Vm.IsShow ? "right" : "down")+" Hu-pointer"}></i></span>
                <div className={"Hm-comment-list" + (this.props.Vm.IsShow ? " hide":"")}>
                    <div className="Hm-item">
                        <div className="Hu-head-img">
                            <img src="../lib/akCss/images/user.jpg" />
                        </div>
                        <div className="Hu-comment-detail">
                            <div className="clearfix">
                                <a>信使系统管理员</a>
                                <span className="pull-right">2016年9月18日16: 03</span>
                            </div>
                            <div>
                                <p>阿里已将未来的目标着眼于全球：“为一千万家企业提供生存、成长和发展的平台，为全世界创造一亿就业机会，为全世界二十亿消费者服务。"</p>
                            </div>
                            <div className="clearfix" >
                            <a className="pull-right m-l">删除</a>
                                <a className="pull-right"  onClick={() => { this.fun_isReplya(); } }>
                                {this.props.Vm.IsReplya ? "取消回复":"回复"}</a>                            
                            </div>
                          <div className={this.props.Vm.IsReplya ? "Hu-content ":"hide"}>
                               {this.props.Vm.ReplyComment.intoDom()}
                            </div>   
                        </div>               
                    </div> 
                    <div className="Hm-item">
                        <div className="Hu-head-img">
                            <img src="../lib/akCss/images/user.jpg" />
                        </div>
                        <div className="Hu-comment-detail">
                            <div className="clearfix">
                                <a>一叶知秋</a>
                                <span className="pull-right">2016年9月18日15: 03</span>
                            </div>
                            <div>
                                <p>阿里已将未来的目标着眼于全球：“为一千万家企业提供生存、成长和发展的平台，为全世界创造一亿就业机会，为全世界二十亿消费者服务。"</p>
                            </div>
                            <div className="clearfix" >
                            <a className="pull-right m-l hide">删除</a>
                                <a className="pull-right"  onClick={() => { this.fun_isReplyb(); } }>
                                {this.props.Vm.IsReplyb ? "取消回复":"回复(2)"}</a>                            
                            </div>
                            <div className={this.props.Vm.IsAddReplyShow ? "Hu-content ":"hide"}>
                                {this.props.Vm.ReplyComment.intoDom()}</div>  
                           <div>
                             <p><a>moumou</a><span>回复</span><a>一叶知秋</a>：
                                <span>伽马射线暴是来自宇宙空间的伽马射线短时间突然增强的现象。</span>
                                <a onClick={() => { this.fun_isAddReplyShow();}}>
                                    {this.props.Vm.IsAddReplyShow ? "取消回复":"回复"}</a>
                                </p> 
                             <p><a>信使系统管理员</a><span>回复</span><a>一叶知秋</a>：
                                <span>placeholder 属性规定描述文本区域预期值的简短提示。</span>
                                <a>删除</a></p> 
                            </div>
                        </div>   
                    </div> 

                    <div className="Hm-item">
                        <div className="Hu-head-img">
                            <img src="../lib/akCss/images/user.jpg" />
                        </div>
                        <div className="Hu-comment-detail">
                            <div className="clearfix">
                                <a>一叶知秋</a>
                                <span className="pull-right">2016年9月18日15: 03</span>
                            </div>
                            <div>
                                <p>阿里已将未来的目标着眼于全球：“为一千万家企业提供生存、成长和发展的平台，为全世界创造一亿就业机会，为全世界二十亿消费者服务。"</p>
                            </div>
                            <div className="clearfix" >
                                <a className="pull-right m-l hide">删除</a>
                                <a className="pull-right"  onClick={() => { this.fun_isReplyc(); } }>
                                {this.props.Vm.IsReplyc ? "取消回复":"回复"}</a>                            
                            </div>
                            <div className={this.props.Vm.IsReplyc ? "Hu-content" :"hide" }>
                               {this.props.Vm.ReplyComment.intoDom()}
                            </div>   
                        </div>               
                    </div> 
                  </div> 
                </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
            
        }

        private fun_isReplya() {
            this.props.Vm.IsReplya = !this.props.Vm.IsReplya;
            this.forceUpdate();
        }
        private fun_isReplyb() {
            this.props.Vm.IsReplyb = !this.props.Vm.IsReplyb;
            this.forceUpdate();
        }
        private fun_isReplyc() {
            this.props.Vm.IsReplyc = !this.props.Vm.IsReplyc;
            this.forceUpdate();
        }
        private fun_isAddReplyShow() {
            this.props.Vm.IsAddReplyShow = !this.props.Vm.IsAddReplyShow;
            this.forceUpdate();
        }
        private fun_isShow() {
            this.props.Vm.IsShow = !this.props.Vm.IsShow;
            this.forceUpdate();
        }
    }
  
   export interface IReactCommentListDomVm extends domCore.DomVm{
          IsReplya: boolean;
          IsReplyb: boolean;
          IsReplyc: boolean;
          IsAddReplyShow: boolean;
          IsShow: boolean;
          ReplyComment:addFile.AddCommentDom.AddCommentDomVm;
   }

    export interface ICommentListDomConfig  {
    
            
    }

    export class CommentListDomVm extends domCore.DomVm implements IReactCommentListDomVm {
        public ReactType = CommentListDomReact;

        public IsReplya: boolean = false;
        public IsReplyb: boolean = false;
        public IsReplyc: boolean = false;
        public IsAddReplyShow: boolean = false;
        public IsShow: boolean = false;
        public ReplyComment:addFile.AddCommentDom.AddCommentDomVm = new addFile.AddCommentDom.AddCommentDomVm();
        public constructor(config?:ICommentListDomConfig){
            super();

        }

    }
    export class CommentListDomStates extends domCore.DomStates {
    }


    export class CommentListDomProps extends domCore.DomProps<IReactCommentListDomVm>{
    }



}


