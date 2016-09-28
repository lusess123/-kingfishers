import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import Tree = require("./../../05tool/Tree");
import BaseTreeFile = require("./BaseTree");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {

    export class BaseTreeSelectorAction extends BaseTreeFile.ui.BaseTreeAction {

    }

    export class BaseTreeSelectorStates extends BaseTreeFile.ui.BaseTreeStates {
        //public IsModalShow: boolean = false;
        public Text: string;
        public ModalTop: number = 0;
    }

    export class BaseTreeSelectorReact<P extends BaseTreeSelectorProps<BaseTreeSelectorVm>, S extends BaseTreeSelectorStates, A extends BaseTreeSelectorAction> extends BaseTreeFile.ui.BaseTreeReact<P, S, A> implements domFile.Core.IReact {


        private fCloseFun()
        {
            this.props.Vm.IsChange = true;
            this.props.Vm.IsModalShow = false;
            this.forceUpdate();
        }
       
        public pSender(): React.ReactElement<any> {
        //    var _content = ;




            return <div className="clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT">
                <input className="form-control" value={this.props.Vm.Text} disabled={true}>
                </input>
                <span onClick={(a) => { this.onButtonClick(); return false; } }
                    className="input-group-addon Hu-pointer">
                    <i className="icon-external-link fa fa-external-link-square"></i>
                </span>
                <div className={" Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.props.Vm.IsModalShow ? "show" : "hide") }>
                    <div className="Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff">
                            <div className="Hu-naiv">
                                <h3 className="Hu-modals-title pull-left">请选择</h3>
                                <a className="Hu-close Hu-pointer pull-right"
                                onClick={() => { this.fCloseFun(); } }><i className=" icon-remove fa fa-close"></i>
                            </a>
                                </div>
                            {this.initModalContent(super.pSender())}
                  </div>
                </div>
            </div>
                </div>
        }

        protected initModalContent(content: React.ReactElement<any>): React.ReactElement<any> {

            return <div className="Hm-modals Hm-modals-content">
                <div className="Hc-modals-list">{content}</div>
            </div>;

          
        };



        private onButtonClick() {

            //  var __this = this;
            this.setState((s, p) => {
                this.props.Vm.IsChange = true;
                this.props.Vm.IsModalShow = true;
                var st = $(document).scrollTop();//滚动条距顶部的距离    
                var ch = $(window).height();//屏幕的高度   
                var objT = Number(st);
                s.ModalTop = (Number(ch)) * 0.05;
                return s;
            });
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();

        }

    }


    export class BaseTreeSelectorProps<V extends BaseTreeSelectorVm> extends BaseColProps<V>{

    }



    export class BaseTreeSelectorVm extends BaseTreeFile.ui.BaseTreeVm {
        public Text: string = "";
        public IsModalShow: boolean = false;

    }
}