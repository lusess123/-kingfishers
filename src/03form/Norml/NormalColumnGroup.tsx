import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import baseColumnGroup = require("./../../03form/Base/BaseColumnGroup");
import PageView = require("./../07data/PageView");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    export class NormalRowGroupAction extends baseColumnGroup.ui.BaseColumnGroupAction {
    }

    export class NormalRowGroupReact extends baseColumnGroup.ui.BaseColumnGroupReact<NormalRowGroupProps, NormalRowGroupStates, NormalRowGroupAction> implements domCore.IReact {

        public state = new NormalRowGroupStates();

        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        private initTitle(): React.ReactElement<any> {
            return this.props.Vm.IsSingleRow ? null : (
                <span className= "pull-right collapsed Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }><i className={"icon-caret-" + (this.props.Vm.IsItemFormHide ? "right " : "down ") + "fa fa-caret-" + (this.props.Vm.IsItemFormHide ? "right" : "down") }></i></span>
            );
        }

        public pSender(): React.ReactElement<any> {
            //return <div>
            //            <h3>{this.props.Vm.title}</h3>
            //           {this.props.Vm.ControlList.map((a, i) => {
            //               var control: domFile.Core.BaseColVm = iocFile.Core.Ioc.Current().FetchInstance<domFile.Core.BaseColVm>(a + "Vm", domFile.Core.BaseColVm);
            //              return control.intoDom();
            //           }) }
            //    </div>

            return <form className="clearfix "  key={this.props.Vm.key}>
                <fieldset>
                    <legend>{this.props.Vm.ColumGroupCofing.DisplayName ? this.props.Vm.ColumGroupCofing.DisplayName : "其它 "}
                        {this.initTitle() }
                    </legend>
                    <div className={this.props.Vm.IsItemFormHide ? "hide" : " "}>
                        {
                        this.props.Vm.ColumnObjList.map((column, i) => {
                             return column.intoDom();
                         })
                    }
                        </div>
                     </fieldset>
                    </form>
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }


    }
    export class NormalRowGroupVm extends baseColumnGroup.ui.BaseColumnGroupVm {
        //肯定要有个控件集合
        public ReactType = NormalRowGroupReact;
        //用来装预定的控件
        public ControlList: Array<String> = new Array<string>();
        public title: String = "";
        public IsSingleRow: boolean = false;
        public IsItemFormHide: boolean;


    }
    export class NormalRowGroupStates extends baseColumnGroup.ui.BaseColumnGroupStates {
    }


    export class NormalRowGroupProps extends baseColumnGroup.ui.BaseColumnGroupProps<NormalRowGroupVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NormalColumnGroupVm", baseColumnGroup.ui.BaseColumnGroupVm, NormalRowGroupVm);
}