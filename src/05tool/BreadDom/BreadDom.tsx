import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import BreadItemDomFile = require("./BreadItemDom");

export module BreadDom {

    export class BreadDomAction extends domCore.DomAction {
    }
    export interface IReactBreadDomVm extends domCore.DomVm {
        Items: BreadItemDomFile.BreadItemDom.BreadItemDomVm[];
        NextLinkList: BreadItemDomFile.BreadItemDom.ILink[];
        IsExpand: boolean;
    }  

    export interface ITreeCodeTableModel {
        CODE_VALUE: string;
        CODE_TEXT: string;
        Children?: Array<ITreeCodeTableModel>;
        arrange?: string;
    }
    export class BreadDomReact extends domCore.DomReact<BreadDomProps, BreadDomStates, BreadDomAction> implements domCore.IReact {

        public state = new BreadDomStates();
        private _clickEapandFun() {
            this.props.Vm.IsExpand = !this.props.Vm.IsExpand;
            this.forceUpdate();
        }

        private _linkClickFun(val: string) {
           // var _isMenu = val.length >= 6 && val.toUpperCase().indexOf("$MENU$") == 0;
           //// urlFile.Core.AkUrl.Current().openUrl(a.Value, _isMenu);
           // urlFile.Core.AkUrl.Current().openUrl(val, _isMenu);

            urlFile.Core.AkUrl.Current().openUrlByNoMenu(val);
        }

        private _senderUL(): React.ReactElement<any> {
            if (this.props.Vm.NextLinkList && this.props.Vm.NextLinkList.length > 0) {
                return <ul className={"nav ACT-BREAD-UL Hz-scroll clearfix" + (this.props.Vm.IsExpand ? "" : " hide") }  style={{ overflow: "overlay" }}>
                    {
                        this.props.Vm.NextLinkList.map((item,i) => {
                            return <li className="col-lg-3 col-md-3 col-sm-4 col-xs-6 " key={i}><a onClick={() => { this._linkClickFun(item.Value); } }>{item.Text}</a></li>;
                        })
                    }
                </ul>;
            }
            else
                return null;
        }
        private fGetItems(): BreadItemDomFile.BreadItemDom.BreadItemDomVm[]
        {
            var _items: BreadItemDomFile.BreadItemDom.BreadItemDomVm[] = [];
            var _len = this.props.Vm.Items.length;
            for (var i: number = 0; i < _len; i++) {
                var _item = this.props.Vm.Items[_len - i - 1];
                _items.push(_item);
            }
            return _items;
        }
        public pSender(): React.ReactElement<any> {

            //this.props.Vm.
            return <div className="Hu-breadcrumb YSu-breadcrumb">
                <span>当前位置：</span>
                <ol className="breadcrumb ">{this.fGetItems().map((item,i) => {
                return item.intoDom(i);
            }) }
                    <li>
                            <a className={((this.props.Vm.NextLinkList && this.props.Vm.NextLinkList.length > 0) ? "" : "hide") }  onClick = {() => { this._clickEapandFun(); } }><i className={("icon-caret-") + (this.props.Vm.IsExpand ? "down " : "right ") + ("fa fa-caret-") + (this.props.Vm.IsExpand ? "down " : "right ") }></i>
                        </a>
                        {this._senderUL() }
                    </li>
                
            </ol>
            </div>;
        }
        protected pComponentDidUpdate(prevProps: BreadDomProps, prevState: BreadDomStates, prevContext: any): void {
            super.pComponentDidUpdate(prevProps, prevState, prevContext);
            if (this.props.Vm.NextLinkList && this.props.Vm.NextLinkList.length > 0) {
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    var _$dom = $(_dom);
                    var _w = $(window).width();
                    var _h = $(window).height();
                    _$dom.find(".ACT-BREAD-UL").css("width", _w * 0.5).css("max-height", _h - 60 - 30 - 30).css("min-height",_h/3);
                }
            }

        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
            $("body").click((a) => {
                var _$tar = $(a.target);
                // alert(1);
                 if (!_$tar.hasClass("ACT-BREAD-UL") && !_$tar.parents().hasClass("ACT-BREAD-UL")) {
                     if (this.props.Vm.IsExpand) {
                         this.props.Vm.IsExpand = false;
                         this.forceUpdate();
                     }
                }
            });
            var _dom = ReactDOM.findDOMNode(this);
            if (_dom) {
                var _$dom = $(_dom);
                var _w = $(window).width();
                var _h = $(window).height();
                _$dom.find(".ACT-BREAD-UL").css("max-height", _h - 60 - 30 - 30).css("min-height",_h/3);
            }
            
        }

        protected pInstall(): void {
            super.pInstall();
            var _dom = ReactDOM.findDOMNode(this);
            if (_dom) {
                var _$dom = $(_dom);
                var _w = $(window).width();
                var _h = $(window).height();
                _$dom.find(".ACT-BREAD-UL").css("max-height",  _h - 60 - 30 - 30).css("min-height",_h/3);
            }
        }


    }

   
    export interface IBreadDomConfig {

        TreeModel: ITreeCodeTableModel;
        HomeUrl?: string;
    }

    export interface ITreeDic {
        [key:string]: ITreeCodeTableModel
    }

    export class BreadDomVm extends domCore.DomVm implements IReactBreadDomVm {
        public ReactType = BreadDomReact;
       // public BreadName: string = "面包名称";
        public Items: BreadItemDomFile.BreadItemDom.BreadItemDomVm[] = [];
        public TreeModel: ITreeCodeTableModel;
        public TreeArrangeHash: ITreeDic = {};
        public TreeKeyHash: ITreeDic = {};
        public NextLinkList: BreadItemDomFile.BreadItemDom.ILink[] = [];
        public IsExpand: boolean;

        public HomeUrl: string = "$FEED$";
        public constructor(config?: IBreadDomConfig) {
            super();
            if (config) {
                this.TreeModel = config.TreeModel;
                this.initFast();
                if (config.HomeUrl) {
                    this.HomeUrl = config.HomeUrl;
                    //this.TreeModel.CODE_VALUE = this.HomeUrl;
                }
                //this.setBreadShow("0");
            }
        }

        private initFast()
        {
            this.fFastTree(this.TreeModel,"",0);
        }

        private fFastTree(treeModel: ITreeCodeTableModel, arrange: string, index: number)
        {
            treeModel.arrange = arrange + "_" + index;
          //  var _m = treeModel.CODE_VALUE.toUpperCase();
            var _str = treeModel.CODE_VALUE.toUpperCase();
            _str = _str.trim();
            if (_str && _str.length > 4 && (_str.lastIndexOf(".XML") == _str.length - 4)) {
                _str = _str.replace(".XML", "");
                // alert();
            }

            this.TreeKeyHash[_str] = treeModel;



            this.TreeArrangeHash[treeModel.arrange] = treeModel;
            if (treeModel.Children && treeModel.Children.length > 0) {
                treeModel.Children.forEach((m,i) => {
                    //------
                    this.fFastTree(m, treeModel.arrange, i);
                });
            }
        }

        private findNodeByKey(val: string): ITreeCodeTableModel
        {
            var _str = val.toUpperCase();
            if (_str && _str.length > 4 && (_str.lastIndexOf(".XML") == _str.length - 4)) {
                _str = _str.replace(".XML", "");
                // alert();
            }
            var _node = this.TreeKeyHash[_str];
            return _node;
        }

        private findNodeByArrange(arr: string): ITreeCodeTableModel {
            var _node = this.TreeArrangeHash[arr.toUpperCase()];
            return _node;
        }

        private getParentArrange(arr: string): string{
            var _i = arr.lastIndexOf("_");
            return arr.substring(0,_i);
        }


        public resetRoot()
        {
            this.setBreadShow("0");
        }

        public setBreadShow(val: string) {
            this.Items = [];
            var _node = this.findNodeByKey(val);
            if (_node) {
                var _arr = _node.arrange;

                var _item = new BreadItemDomFile.BreadItemDom.BreadItemDomVm({ HomeUrl: this.HomeUrl });
                _item.Text = _node.CODE_TEXT;
                _item.Value = _node.CODE_VALUE;
                this.Items.push(_item);
                var _parr = this.getParentArrange(_arr);
                if (_parr && _parr != "") {
                    this.setBreadItemParent(_parr, _item);
                }  
                this.NextLinkList = [];
                this.IsExpand = false;
                if (_node.Children) {
                    _node.Children.forEach((r) => {
                        var _link: BreadItemDomFile.BreadItemDom.ILink = { Text: r.CODE_TEXT, Value: r.CODE_VALUE };
                        this.NextLinkList.push(_link);
                    });
                }
            }
        }

        private setBreadItemParent(arr: string, item: BreadItemDomFile.BreadItemDom.BreadItemDomVm)
        {
           
                var _node = this.findNodeByArrange(arr);
                var _item = new BreadItemDomFile.BreadItemDom.BreadItemDomVm({ HomeUrl: this.HomeUrl });
                _item.Text = _node.CODE_TEXT;
                _item.Value = _node.CODE_VALUE;
                this.Items.push(_item);
                _item.LinkList = [];
                _node.Children.forEach((n) => {
                    _item.LinkList.push({ Text: n.CODE_TEXT, Value: n.CODE_VALUE });
                });
                if (arr != "_0") {
                    var _parr = this.getParentArrange(arr);
                    this.setBreadItemParent(_parr, _item);
                }
                else {
                    
                }
           // }
        }



        private expandItemByVal(val: string) {
            if (this.TreeModel.CODE_VALUE == val) {
            }
        }

    }
    export class BreadDomStates extends domCore.DomStates {
    }


    export class BreadDomProps extends domCore.DomProps<IReactBreadDomVm>{
    }



}


