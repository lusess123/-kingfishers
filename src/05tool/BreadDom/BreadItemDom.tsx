import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module BreadItemDom {
    export class BreadItemDomAction extends domCore.DomAction {
    }

    export class BreadItemDomReact extends domCore.DomReact<BreadItemDomProps, BreadItemDomStates, BreadItemDomAction> implements domCore.IReact {

        public state = new BreadItemDomStates();

        private _linkClickFun(val: string) {
         //   var _isMenu = val.length >= 6 && val.toUpperCase().indexOf("$MENU$") == 0;
            // urlFile.Core.AkUrl.Current().openUrl(a.Value, _isMenu);
            if (val == "0")
                val = this.props.Vm.HomeUrl;
            urlFile.Core.AkUrl.Current().openUrlByNoMenu(val);
        }

        private _clickEapandFun()
        {
            this.props.Vm.IsExpand = !this.props.Vm.IsExpand;
            this.forceUpdate();
        }

        private _senderUL(): React.ReactElement<any> {
            if (this.props.Vm.LinkList && this.props.Vm.LinkList.length > 0) {
                return <ul className={"nav  ACT-MENU-ITEMS Hz-scroll clearfix " + (this.props.Vm.IsExpand ? "" : "hide") }  >
                       {
                        this.props.Vm.LinkList.map((item,i) => {
                            return <li className="col-lg-3 col-md-3 col-sm-4 col-xs-6 " key={i}><a onClick={() => { this._linkClickFun(item.Value); } }>{item.Text}</a></li>;
                        })
                          }
                      </ul>;
            }
            else
                return null;
        }

        public pSender(): React.ReactElement<any> {
            return <li key={this.props.Vm.key} className={((this.props.Vm.LinkList && this.props.Vm.LinkList.length > 0) ? "" : "active") }>
  
                <a onClick={() => { this._linkClickFun(this.props.Vm.Value); } }>{this.props.Vm.Text}</a>
                <a   className={"Hu-icon " + ((this.props.Vm.LinkList && this.props.Vm.LinkList.length > 0) ? "" : "hide") }    onClick = {() => { this._clickEapandFun(); } }><i className={("icon-caret-") + (this.props.Vm.IsExpand ? "down " : "right ") + ("fa fa-caret-") + (this.props.Vm.IsExpand ? "down " : "right ") }></i></a>
                      {this._senderUL()}
                   </li>;
        }

        protected pComponentWillUnmount(): void {
            super.pComponentWillUnmount();
            $("body").unbind("click", this.fExpandFun);

        }

        private fExpandFun: (eventObject: JQueryEventObject) => any;

       

        protected pComponentDidMount() {
            super.pComponentDidMount();

            this.fExpandFun = (a: JQueryEventObject) => {
                var _$tar = $(a.target);
              //  alert(2);
                if (!_$tar.hasClass("ACT-BREAD-UL") && !_$tar.parents().hasClass("ACT-BREAD-UL")) {
                    if (this.props.Vm.IsExpand) {
                        this.props.Vm.IsExpand = false;
                        this.forceUpdate();
                    }
                }
                return true;
            };

            $("body").bind("click", this.fExpandFun);
            var _dom = ReactDOM.findDOMNode(this);
            if (_dom) {
                var _$dom = $(_dom);
                var _w = $(window).width();
                var _h = $(window).height();
                _$dom.find(".ACT-MENU-ITEMS").css("width",_w * 0.5).css("max-height", _h - 60 - 30 - 30).css("min-height",_h/3);

                
            }
            
        }

        protected pInstall(): void {
            super.pInstall();
            var _dom = ReactDOM.findDOMNode(this);
            if (_dom) {
                var _$dom = $(_dom);
                var _w = $(window).width();
                var _h = $(window).height();
                _$dom.find(".ACT-MENU-ITEMS").css("width", _w * 0.5).css("max-height", _h - 60 - 30 - 30).css("min-height",_h/3);
            }
        }


    }

    export interface ILink {
        Text: string;
        Value: string;
    }

    export interface IReactBreadItemDomVm extends domCore.DomVm {
        Text: string;
        Value: string;
        IsExpand: boolean;
        HomeUrl?: string;
        LinkList: ILink[];

    }

    export interface IBreadItemDomConfig {
        Text?: string; 
        Value?: string;
        IsExpand?: boolean;
        LinkList?: ILink[];
        HomeUrl?: string;
    }

    export class BreadItemDomVm extends domCore.DomVm implements IReactBreadItemDomVm {
        public ReactType = BreadItemDomReact;
        public  Text: string;
        public Value: string;
        public IsExpand: boolean = false ;
        public LinkList: ILink[] = [];
        public HomeUrl: string = "$FEED$";

        public constructor(config?: IBreadItemDomConfig) {
            super();
            this.IsMulit = true;
            if (config) {
                this.Text = config.Text;
                this.Value = config.Value;
                this.IsExpand = config.IsExpand;
                this.LinkList = config.LinkList;
                if (config.HomeUrl) {
                    this.HomeUrl = config.HomeUrl;
                }
            }
           
           
        }

    }
    export class BreadItemDomStates extends domCore.DomStates {
    }


    export class BreadItemDomProps extends domCore.DomProps<IReactBreadItemDomVm>{
    }



}


