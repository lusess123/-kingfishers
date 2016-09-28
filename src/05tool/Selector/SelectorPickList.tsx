import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickListBaseDomFile = require("./../Picker/PickListBaseDom");
import Entity = require("./../../../Typings/0Type/Entity");
import Pagination = require("./../../05tool/Pagination");
import pageViewFile = require("./../../07data/PageView");

export module SelectorPickList {
    export class SelectorPickListAction extends domCore.DomAction {
    }

    export class SelectorPickListReact extends domCore.DomReact<SelectorPickListProps, SelectorPickListStates, SelectorPickListAction> implements domCore.IReact {

        public state = new SelectorPickListStates();
        private li_clickFun(item: IPickItem) {
            this.props.Vm.addItem(item);
        }
        private fInputOnChange(e: React.FormEvent) {

            var _val = e.target["value"];
            if (this.props.Vm.Text != _val) {
                this.props.Vm.Text = _val;
                this.props.Vm.searchList();
            }

        }

        private _text(str): string {
            try {
                var _texts = $(str).text();
                if (_texts == "") {
                    return str;
                }
                else
                    return _texts;
            }
            catch (ff) {
                return str;
            }
        }

        private _fSendUl():React.ReactElement<any>
        {
            return <ul className="nav nav-tabs clearfix">
                {
                    this.props.Vm.PickList.map((item) => {
                        return <li className={"nav-item Hu-pointer Hc-multi-selector pull-left   " + (item.IsSelect ? "Hz-selected" : "") }>
                            <a onClick={() => { this.li_clickFun(item) } }>
                                {this._text(item.Text)}
                                {item.IsSelect ? <em/> : null}
                                {item.IsSelect ? <i className="icon-ok fa fa-check"></i> : null}
                            </a>
                        </li>;

                    })
                }
            </ul>;
        }

        public pSender(): React.ReactElement<any> {
            return <div className="Hc-list-item  ">
                <input className="col-lg-12 col-md-12 col-sm-12 col-xs-12 " value={this._text( this.props.Vm.Text)} onChange={(e) => { this.fInputOnChange(e); } }  ></input>
                {
                    this.props.Vm.PickList.length > 0 ? 
                    <div>
                        {this._tDom(this.props.Vm.PaginationObj) }
                        {this._fSendUl() }
                        {this._tDom(this.props.Vm.PaginationObj) }
                    </div>
                    :
                    <div>{"搜索不到数据..."}</div>
                }
               
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactSelectorPickListVm extends PickListBaseDomFile.PickListBaseDom.IReactPickListBaseDomVm {
        PaginationObj: Pagination.tool.PaginationVm;
        Text: string;
        searchList();
    }

    export interface ISelectorPickListConfig extends PickListBaseDomFile.PickListBaseDom.IPickListBaseDomConfig {


    }
    export interface IPickItem {
        Text: string;
        Key: string;
        IsSelect?: boolean;
    }
    export class SelectorPickListVm extends PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm implements IReactSelectorPickListVm {
        public ReactType = SelectorPickListReact;
        public RegName: string = "MRPUserCodeData";
        public PaginationObj: Pagination.tool.PaginationVm;
        public Text: string;

        public constructor(config?: ISelectorPickListConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
            }
            this.PaginationObj = new Pagination.tool.PaginationVm();
            this.PaginationObj.PageNo = 0;
            this.PaginationObj.IsMulit = true;
            this.PaginationObj.PageClickEvent = (a) => {
                this.fLoadDom("", a, () => {
                    this.forceUpdate("");
                });
            };
           
        }

        public searchList() {
            this.fLoadDom( this.Text, this.PaginationObj.PageNo, () => {
                this.forceUpdate("");
            });
        }

        private fLoadDom( key: string, pageIndex: number , callback: Function) {
            //key: _val, pageIndex: 0
            // alert($.toJSON(items));
            var items = this.SelectPickList;
            this.PickList = [];
            if (this.IsSingle) {
              //  this.Text = items[0].Text;

            }
            urlFile.Core.AkPost("/core/Selector/Search", {
                RegName: this.RegName,
                key: key,
                pageIndex: pageIndex
            }, (a) => {
                var _data: Entity.entity.SelectorModel = a;
                this.PaginationObj.PageNo = _data.Index;
                this.PaginationObj.PageSize = _data.Size;
                this.PaginationObj.TotalCount = _data.Total;
                _data.List.forEach((d) => {

                    var _item: IPickItem = {
                        Text: d.CODE_TEXT,
                        Key: d.CODE_VALUE,
                        IsSelect: false
                    };

                    if (items.filter((a) => a.Key == _item.Key).length > 0) {
                        _item.IsSelect = true;
                    }

                    this.PickList.push(_item);

                });
                this.IsChange = true;
                callback();

            });
        }

        protected loadDom(items: IPickItem[], callback: Function) {
            //alert($.toJSON(items));
            this.SelectPickList = items.map((i) => {
                return { Key: i.Key, Text:i.Text }
            });
            this.fLoadDom( "", 0, callback);
        }

    }
    export class SelectorPickListStates extends domCore.DomStates {
    }


    export class SelectorPickListProps extends domCore.DomProps<IReactSelectorPickListVm>{
    }



}


