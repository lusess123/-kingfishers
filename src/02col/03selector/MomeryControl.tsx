import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import Entity = require("./../../../Typings/0Type/Entity");
import Pagination = require("./../../05tool/Pagination");

/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class MomeryAction extends BaseColAction {

    }

    export class MomeryReact extends BaseColReact<MomeryProps, MomeryStates, MomeryAction> implements domFile.Core.IReact {
        //状态要初始化
        // private _this = this;

        public state: MomeryStates = this.getInitialState();

        public getInitialState(): MomeryStates {
            var s = new MomeryStates();
            s.Pagination.Vm.PageClickEvent = (a) => {
               
                urlFile.Core.AkPost("/core/momery/Search", {
                    RegName: this.props.Vm.RegName,
                    pageIndex: a,
                    key: "",
                    callback: Math.random()
                }, (a) => {
                    var _data = a;
                    this.state.ItemList.length = 0;
                    this.state.Pagination.Vm.PageNo = a.Index;
                    this.state.Pagination.Vm.TotalCount = a.Total;
                    //this.state.Pagination.Vm.PageSize = a.Size;
                    _data.List.forEach((b) => {
                        var _bean = new Entity.entity.SelectorItem();
                        //_bean.Key = b.CODE_VALUE;
                        _bean.Text = b;
                        this.state.ItemList.push(_bean);
                    })
                    this.state.Pagination.Vm.IsChange = true;
                    this.forceUpdate();
                }
                )
            }
            return s;
        }

        //文本框改变内容
        protected pInputOnChange(e: React.FormEvent) {
            this.state.IsOpenData = false;
            var _val = e.target["value"];
            this.state.SearchText = _val;
            this.props.Vm.Text = _val;
            this.state.ItemList = [];
            this.Search(_val, 0);
        }

        private onButtonClick() {
            this.getInitialState();
            var ch = $(window).height();//屏幕的高度  
            this.state.ModalTop = (Number(ch)) * 0.05;
            this.state.IsModalShow = true;
            this.state.IsOpenData = true;
            //每更新一次就要 清空数据
            this.state.ItemList.length = 0;
            this.Search("", 0);
        }

        protected AddData() {
            //要将数据添加进去 先拿到文本框中的值才能添加
            var _this = this;
            if (this.state.SearchText && this.state.SearchText != "") {
                urlFile.Core.AkPost("/core/momery/Add", {
                    //ds: _this.getPostDsStr(),
                    text: this.state.SearchText,
                    regName: this.props.Vm.RegName,
                    callback: Math.random()
                }, function (data) {
                    //查询出来  然后清空text中的值
                    _this.state.SearchText = "";
                    _this.Search("", 0);
                });
            }
        }

        protected Remove(a: Entity.entity.SelectorItem) {
            var _this = this;
            //点击事件
     
            urlFile.Core.AkPost("/core/momery/Remove", {
                //ds: _this.getPostDsStr(),
                text: a.Text,
                regName: this.props.Vm.RegName,
                callback: Math.random()
            }, function (data) {
                    _this.Search("", 0);
                })
        }

        public Search(key, pageIndex) {
            var _this = this;
            //每查询一次将数据清空一次
            this.state.ItemList.length = 0;
            urlFile.Core.AkPost("/core/momery/Search", {
                // ds: this.props.Vm.getPostDsStr(),
                pageIndex: pageIndex,
                regName: this.props.Vm.RegName,
                key: key,
                callback: Math.random()
            }, function (data) {
                var _date = data;
                _this.state.Pagination.Vm.PageSize = _date.Size;
                _this.state.Pagination.Vm.PageNo = _date.Index;
                _this.state.Pagination.Vm.TotalCount = _date.Total;
                _date.List.forEach((b) => {
                    var _bean = new Entity.entity.SelectorItem();
                    _bean.Text = b;
                    _bean.IsSelect = false;
                    _this.state.ItemList.push(_bean);
                })
                _this.state.Pagination.Vm.IsChange = true;
                _this.forceUpdate();
            })
        }

        protected onClickLiSetValue(a: Entity.entity.SelectorItem) {
            //关闭弹出框 设置值
            this.state.IsModalShow = false;
            this.state.IsOpenData = true;

            var _ac: MomeryAction = new MomeryAction();
            _ac.Vm = this.props.Vm;
            this.pDispatcher(_ac);

            this.props.Vm.Text = a.Text;
            this.props.Vm.dataValueSet(a.Text);
            this.state.Pagination.Vm.IsChange = true;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {

            //将text的数据传入到this.SeacrchText中
            var valueLink = {
                value: this.state.SearchText,
                requestChange: (val: string) => {
                    this.props.Vm.IsChange = true;
                    this.setState((a, b) => {
                        a.SearchText = val;
                        return a;
                    })
                }
            };


            //var _fillMenu = React.DOM.ul({
            //    className: "large-9 medium-8 small-8 acsSeclectContent"
            //},
            //    !this.state.IsOpenData ?
            //        this.state.ItemList.map((a) => {
            //            return React.DOM.li(
            //                {
            //                    className: "Hu-pointer " + (a.Key == this.props.Vm.vmdataValue() ? "active" : ""),
            //                    keyValue: a.Key,
            //                    onClick: () => {
            //                        this.onClickLiSetValue(a);
            //                    }
            //                }, a.Text
            //            );
            //        }) : "",
            //    (this.state.ItemList.length > 0 && !this.state.IsOpenData) ? React.DOM.li(
            //        {
            //            className: "Hu-pointer ",
            //            onClick: () => {
            //                this.onButtonClick();
            //            }
            //        }
            //        , "查看更多...") : ""
            //);


            var _fillMenu2 = <ul className="col-lg-9 col-md-9 col-sm-9 Hu-select-content">
                                {
                                [!this.state.IsOpenData ?
                                    (this.state.ItemList.map((a) => {
                                        return <li
                                            className={"Hu-pointer " + (a.Key == this.props.Vm.vmdataValue() ? "active" : "") } key={a.Key} onClick={() => { this.onClickLiSetValue(a); return false;  } }>
                                            {a.Text}
                                            </li>
                                    })) : ("") ,

                                (this.state.ItemList.length > 0 && !this.state.IsOpenData) ?
                    <li className="Hu-pointer " onClick={() => { this.onButtonClick(); return false; } }>查看更多...</li> : ""
                                ]}
                </ul>

           

            var _content2 = <div className="Hm-modals Hm-modals-content">
                               <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 input-group clearfix">
                    <input className="form-control"
                                        valueLink={valueLink}></input>
                                    <span className="input-group-addon Hu-pointer "
                                             onClick={() => { this.AddData(); } }>
                                            <i className="fa fa-plus"></i>
                                    </span>
                                    <span className="input-group-addon Hu-pointer "
                                            onClick={() => { this.Search(this.state.SearchText, 0);} }>
                                            <i className="fa fa-search"></i>
                                        </span>
                                  </div>
                                
                                  <div className="row">
                                        <ul className="acsList clearfix">
                                           {
                                            this.state.ItemList ? this.state.ItemList.map((a) => {
                            return <li>
                                        <a className="Hu-pointer " keyValue={a.Key}
                                            onClick={() => { this.onClickLiSetValue(a) } }>{a.Text}</a>
                                        <a className="Hu-pointer " onClick={() => { this.Remove(a) }}>删除</a>
                                </li>
                                            }) : ""
                                                }
                                         </ul>
                                    </div>
                             </div>  

            //return React.DOM.div({ className: "ACT-M-PARENT c-select clearfix" }, React.DOM.input({
            //    className: "large-8 medium-7 small-6 columns",
            //    value: this.props.Vm.Text,
            //    onChange: (e) => { this.pInputOnChange(e) },
            //    onFocus: (e) => { this.pInputOnChange(e) },
            //    //onBlur: (e) => { console.log(e);  this.fInputObBlur(e)}
            //}),
            //    React.DOM.a(
            //        {
            //            onClick: (a) => { this.onButtonClick(); },
            //            className: "large-1 medium-1 small-2 columns acsPaddingLR0 Hu-pointer"
            //        },
            //        React.DOM.button({ className: "button tiny success acsTinyBtn" }, React.DOM.i({ className: "fa fa-external-link-square" }))
            //    ), this.state.ItemList.length > 0 && !this.state.IsOpenData ? _fillMenu : "",
            //    React.DOM.div(
            //        {
            //            className: "acsModalBg " + (this.state.IsModalShow ? "show" : "hide")
            //        }
            //    ),
            //    React.DOM.div(
            //        {
            //            className: (" large-12 medium-12 small-12 columns acsModalPanel acsModal " + (this.state.IsModalShow ? "show" : "hide")),
            //            style: {
            //                top: this.state.ModalTop.toString() + "px"
            //            }

            //        }, _content,
            //        //<a class="close-reveal-modal" aria-label="Close">&#215;</a>
            //        React.DOM.a({
            //            className: "Hu-close",
            //            onClick: (a) => {
            //                this.setState((s, p) => {
            //                    this.props.Vm.IsChange = true;
            //                    s.IsModalShow = false;
            //                    return s;
            //                });
            //                // this.forceUpdate();
            //            }
            //        }, React.DOM.i({
            //            className: "fa fa-close Hu-pointer "
            //        }))
            //    )

            //);


            return <div className="clearfix"><div className="col-lg-8 col-md-8 col-sm-10 col-xs-10 input-group Hm-input-group ACT-M-PARENT">
                <input className="form-control ACT-INPUT"
                          value={this.props.Vm.Text}
                          onChange={(e) => { this.pInputOnChange(e) } }
                          onFocus={(e) => { this.pInputOnChange(e) } }
                    ></input>
                <span onClick={(a) => { this.onButtonClick(); return false; } }
                    className="input-group-addon Hu-pointer">
                    <i className="fa fa-external-link-square"></i>
                </span>
                    {this.state.ItemList.length > 0 && !this.state.IsOpenData ? _fillMenu2 : ""}
                    <div className={ "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.state.IsModalShow ? "show" : "hide") }>
                      <div
                    className={" Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff " + (this.state.IsModalShow ? "show" : "hide") }
                    style={{ top: this.state.ModalTop.toString() + 'px' }}>
                        <div className="Hu-naiv">
                            <h3 className="Hu-modals-title pull-left">填写</h3>
                            <a className="Hu-close Hu-pointer pull-right" onClick={() => {
                        this.setState((s, p) => {
                            this.props.Vm.IsChange = true;
                            s.IsModalShow = false;
                            return s;
                        })
                    } }>
                      <i className="icon-remove fa fa-close Hu-pointer "></i>
                    </a>
                        </div>
                    {_content2}
                    </div>          
                 </div>  
            </div>
                </div>
        }
    }

    export class MomeryProps extends BaseColProps<MomeryVm>
    {

    }


    export class MomeryStates extends BaseColStates {
        public ItemList: Array<Entity.entity.SelectorItem> = new Array<Entity.entity.SelectorItem>();
        public IsModalShow: boolean = false;
        public IsOpenData: boolean = false;
        public Text: string;
        public ModalTop: number = 0;
        public SearchText: string;
        public SearchChangeText: string;
        //分页控件
        public Pagination: Pagination.tool.PaginationProps = new Pagination.tool.PaginationProps;
    }

    export class MomeryVm extends BaseColVm {
        protected pRegName: string = "记忆控件";
        public ReactType = MomeryReact;
        public ItemList: Array<Entity.entity.SelectorItem> = new Array<Entity.entity.SelectorItem>();
        public RegName: string = "SqMomery";
        public Text: string = "";
        public static Test(): MomeryVm {
            var _bean: MomeryVm = new MomeryVm();
            //var _d: MomeryStates = new MomeryStates();
            return _bean;
        }
    }

    iocFile.Core.Ioc.Current().RegisterType("MomeryVm", BaseColVm, MomeryVm);
}
