import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

export module BookMark {
    export class BookMarkAction extends domCore.DomAction {
    }

    export class BookMarkReact extends domCore.DomReact<BookMarkProps, BookMarkStates, BookMarkAction> implements domCore.IReact {

        public state = new BookMarkStates();

        public pSender(): React.ReactElement<any> {
            return <div className="left hide">
                <li><a onClick={() => { this.fun_collectClick(); } }>
                                    <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsCollect ? "hide" : "heart-o") } onClick={() => { this.fun_AddcollectClick(); } } ></i>
                                    <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsCollect ? "heart" : "hide") } ></i>
                                    <span>收藏</span></a></li>
                                <li><a><i className="fa fa-bars Hu-pointer"></i></a>
                                    <ul>
                                        <li><a href="#">书签</a>
                                        <ul>
                                            <li><a href="#">HTML</a></li>
                                            <li><a href="#">HTML</a></li>
                                            <li><a href="#">HTML</a></li>
                                            <li><a href="#">HTML</a></li>
                                            </ul>
                                            </li>
                                        </ul>
                                    </li>
                </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

      private fun_collectClick() {
            this.props.Vm.IsCollect = !this.props.Vm.IsCollect;
            this.forceUpdate();
        }
        private fun_AddcollectClick() {
            urlFile.Core.AkUrl.Current().openUrl("$winNEWCOLLECTPAGE$", true);
        }

    }
    export class BookMarkVm extends domCore.DomVm {
        public ReactType = BookMarkReact;

        public IsCollect: boolean;
        


    }
    export class BookMarkStates extends domCore.DomStates {
    }


    export class BookMarkProps extends domCore.DomProps<BookMarkVm>{
    }



}