


import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import listFile=require("./CommentListDom");
import addFile=require("./AddCommentDom");

export module Comment {
    export class CommentAction extends domCore.DomAction {
    }

    export class CommentReact extends domCore.DomReact<CommentProps, CommentStates, CommentAction> implements domCore.IReact {

        public state = new CommentStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="clearfix">
                    <a className="btn btn-xs btn-primary pull-right" onClick={() => { this.fun_isComment(); } }>评论</a>
                    <a className="btn btn-xs pull-right m-r">3</a>
                    </div>
                <div className={"Hu-content clearfix " + (this.props.Vm.IsComment ? "":" hide")}>
                 {this.props.Vm.AddComment.intoDom()}                
                </div>              
                {this.props.Vm.CommentData.intoDom()}
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
            
        }

         private fun_isComment() {
            this.props.Vm.IsComment = !this.props.Vm.IsComment;
            this.forceUpdate();
        }
    }
  
   export interface IReactCommentVm extends domCore.DomVm{
        IsComment: boolean;
        CommentData:listFile.CommentListDom.CommentListDomVm;
        AddComment:addFile.AddCommentDom.AddCommentDomVm;         
   }

    export interface ICommentConfig  {
    
            
    }

    export class CommentVm extends domCore.DomVm implements IReactCommentVm {
        public ReactType = CommentReact;

        public IsComment: boolean = false;
        public CommentData:listFile.CommentListDom.CommentListDomVm =new listFile.CommentListDom.CommentListDomVm();
        public AddComment:addFile.AddCommentDom.AddCommentDomVm = new addFile.AddCommentDom.AddCommentDomVm();

        public constructor(config?:ICommentConfig){
            super();

        }

    }
    export class CommentStates extends domCore.DomStates {
    }


    export class CommentProps extends domCore.DomProps<IReactCommentVm>{
    }



}



