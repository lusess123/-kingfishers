import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import listFile=require("./CommentListDom");
import addFile=require("./AddCommentDom");
import dataFile=require("./Comment");

export module CommentPage {
    export class CommentPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class CommentPageReact extends basewedPageFile.Web.BaseWebPageReact<CommentPageProps, CommentPageStates, CommentPageAction> implements domCore.IReact {

        public state = new CommentPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.Comment.intoDom()}
            </div>;
        }


        private fun_isComment() {
            this.props.Vm.IsComment = !this.props.Vm.IsComment;
            this.forceUpdate();
        }



    }

    export interface IReactCommentPageVm extends basewedPageFile.Web.BaseWebPageVm {
        IsComment: boolean;
        CommentData:listFile.CommentListDom.CommentListDomVm;
        AddComment:addFile.AddCommentDom.AddCommentDomVm;
        Comment:dataFile.Comment.CommentVm;
    }

    export interface ICommentPageConfig {


    }
    export class CommentPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactCommentPageVm {
        public ReactType = CommentPageReact;
        public Title: string = "CommentPage页面;";

        public IsComment: boolean = false;
        public CommentData:listFile.CommentListDom.CommentListDomVm =new listFile.CommentListDom.CommentListDomVm();
        public AddComment:addFile.AddCommentDom.AddCommentDomVm = new addFile.AddCommentDom.AddCommentDomVm();
        public Comment:dataFile.Comment.CommentVm =new dataFile.Comment.CommentVm();
        public constructor(config?: ICommentPageConfig) {
            super();

        }

        private init(config: ICommentPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class CommentPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class CommentPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactCommentPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("COMMENTPAGE", basewedPageFile.Web.BaseWebPageVm, CommentPageVm);

}
