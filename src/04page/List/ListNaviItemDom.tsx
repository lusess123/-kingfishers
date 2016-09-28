import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import baseColFile = require("./../../02col/00core/baseCol");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ListNaviItemDom {
    export class ListNaviItemDomAction extends domCore.DomAction {
    }

    export class ListNaviItemDomReact extends domCore.DomReact<ListNaviItemDomProps, ListNaviItemDomStates, ListNaviItemDomAction> implements domCore.IReact {

        public state = new ListNaviItemDomStates();
        protected ScreenDomName: string = ".ACT-CONTENT";
        protected pIsSetScreenMaxHeight: boolean = true;
        public pSender(): React.ReactElement<any> {
            return <div className="panel">
                <div className="Hm-panel-node Hu-pointer" onClick={() => { this.fun_NodeShow() } }>
                    <i className={" icon-angle-down fa fa-angle-down " + (this.props.Vm.IsNodeShow ? "active":"")}></i>
                    <span>{this.props.Vm.Title}</span>
                </div>
                <div className={" ACT-CONTENT  Hg-overflow-auto Hz-scroll p-y " + (this.props.Vm.IsNodeShow ? "hide" : "") }>
                    {this._tDom(this.props.Vm.ColVm, { nullNode: <div><i className=" fa fa-exclamation-triangle Hs-red ">{this.props.Vm.ControlTypeName}</i></div> }) }              
                    </div>
                   </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
        public fun_NodeShow() {
            this.props.Vm.IsNodeShow = !this.props.Vm.IsNodeShow;
            this.forceUpdate();
        }


    }

   

    export interface IListNaviItemDomConfig {
        ColConfig: baseColFile.Core.INavigationColumn;
        DataSet: IDataSet;
        UniId?: string;
    }

    export class ListNaviItemDomVm extends domCore.DomVm {
        public ReactType = ListNaviItemDomReact;

        public ColVm: baseColFile.Core.BaseColVm;
        public Title: string;
        public Name: string;
        public UniId: string;
        public ControlTypeName: string;
        public IsNodeShow: boolean = false;
        public IsRadioNavi: boolean;
        public constructor(config?: IListNaviItemDomConfig) {
            super();
            if (config) {
                if (config.ColConfig) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    if (config.ColConfig.ControlType) {
                        var _c: string = config.ColConfig.ControlType;
                        if (_c.toUpperCase() == "RADIONAVI") {
                            _c = "CheckBoxNavi";
                            this.IsRadioNavi = true;
                        }
                        this.ControlTypeName = _c;
                        var tv: baseColFile.Core.BaseColVm =
                            iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(_c + "Vm", baseColFile.Core.BaseColVm);
                        if (tv) {
                        tv.makerInNavi({ NavigationColumnConfig: config.ColConfig, DataSet: config.DataSet });
                       
                            this.ColVm = tv;
                            this.Title = config.ColConfig.DisplayName;
                            this.Name = config.ColConfig.Name;
                            tv.onChangeHandle((s) => {
                                //alert(s);
                                if (this.IsRadioNavi) {
                                  s =   s.replace(/\"/g, "")
                                   // s.replace();
                                }
                                this.emitAppEvent("04page/ListPage", this.UniId, s)
                                return true;
                            });
                        }
                    }
                }
            }
        }

        public getDataValue():string 
        {
            return this.ColVm.vmDataValueGet();
        }

    }
    export class ListNaviItemDomStates extends domCore.DomStates {
    }


    export class ListNaviItemDomProps extends domCore.DomProps<ListNaviItemDomVm>{
    }

    export interface IDict<T> {
        [index: string]: T;
    }

    //-----------------IData-----------------
    export interface IDataRow extends IDict<string | number> {
        [index: string]: string | number;
    }

    //export interface IDataTable extends IDict<IDataRow> {
    //    [index: string]: IDataRow;
    //}

    export interface IDataSet extends IDict<Array<IDataRow>> {
        [index: string]: Array<IDataRow>;
    }

   
}


