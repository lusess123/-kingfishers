import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import PageView = require("./../../07data/PageView");
import basePage = require("./../../03form/Base/BasePage");
import listPage = require("./../../04page/ListPage");
import urlFile = require("./../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class FormSelectorAction extends BaseColAction {
    }

    export class FormSelectorReact<P extends FormSelectorProps<FormSelectorVm>, S extends FormSelectorState, A extends FormSelectorAction> extends BaseColReact<P, S, A> implements domFile.Core.IReact {

        public _thisReact = this;
        public pSender(): React.ReactElement<any> {

            //this.props.Vm._content = new listPage.ui.ListPageVm;
            //ListPage 的

            return <div className="clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT">
                        <input className="form-control"
                            value={this.props.Vm.Text}
                            disabled={true}>
                        </input>
                        <span onClick={(a) => { this.onButtonClick(); return false; } }
                    className="input-group-addon Hu-pointer">
                    <i className="fa fa-external-link-square"></i>
                        </span>
                </div>
                        <div className={" col-lg-12 col-md-12 col-sm-12 col-xs-12 " + (this.state.IsModalShow ? "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal clearfix " : " ") }   style={{ top: this.state.ModalTop.toString() + 'px' }}>
                                    
                                    {this.props.Vm.Content ? this.props.Vm.Content.intoDom() : "正在加载中。。。。"}
                                
                             </div>
            </div>
        }

        public onButtonClick() {
            var thisFormSelector = this;
            urlFile.Core.AkPost("/core/Selector/LoadPage", {
                ds: this.props.Vm.getPostDsStr, RegName: this.props.Vm.RegName, pageStyle: "List", xml: this.props.Vm.ModuleXml
            }, (a) => {
                this.props.Vm.PageView = a;
                if (this.props.Vm.PageView) {
                    this.props.Vm.Content.create(this.props.Vm.PageView);
                    this.props.Vm.Content.SaveEvent = () => {
                        this.SaveButtonClick();
                    }

                    this.props.Vm.Content.SingleSelectEvent = () => {
                        //将React的值传进去
                        this.SingleSelectClick(thisFormSelector);
                    }
                      
                }
                this.props.Vm.Content.IsChange = true;
                this.props.Vm.IsChange = true;
                this.forceUpdate();
            });
            this.setState((s, p) => {
                this.props.Vm.IsChange = true;
                s.IsModalShow = true;
                var st = $(document).scrollTop();//滚动条距顶部的距离    
                var ch = $(window).height();//屏幕的高度   
                var objT = Number(st);
                s.ModalTop = (Number(ch)) * 0.05;
                return s;
            });
        }

        //多选时点击的按钮时候的事件
        public SaveButtonClick() {
            this.setState((s, p) => {
                this.props.Vm.IsChange = true;
                s.IsModalShow = false;
                p.Vm.dataValueSet(p.Vm.Content.getSelectKeysByListForm().toString());
                p.Vm.Text = p.Vm.Content.getSelectKeysByListForm().toString();
                return s;
            })
        }

 
        public SingleSelectClick(e: FormSelectorReact<P, S, A>): void {
            alert("单选");
            
            e.setState((s, p) => {
                this.props.Vm.IsChange = true;
                s.IsModalShow = false;
                p.Vm.dataValueSet("默认值");
                //只要将配置文件的中的列名去到就可以
                p.Vm.Text = "默认值";
                return s;
            })
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
        }
    }

    export class FormSelectorState extends BaseColStates {
        public IsModalShow: boolean = false;
        public Text: string;
        public ModalTop: number = 0;
        public PageVm: basePage.ui.BasePageVm = new basePage.ui.BasePageVm;
    }

    export class FormSelectorProps<V extends FormSelectorVm> extends BaseColProps<V>
    {

    }

    export class FormSelectorVm extends BaseColVm {
        public ModuleXml: string;
        public RegName: string;
        //是否是选择器
        public isSelector: boolean = true;
        //是否是多选
        public isSingleSelect: boolean = false;
        //选中的值
        public Text: string = "";
        public getPostDsStr = "";
        //页面请求之后返回的数据
        public PageView: PageView.data.IPageView = null;
        public Content: listPage.ui.ListPageVm = new listPage.ui.ListPageVm;



    }
}