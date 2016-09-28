import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import PageView = require("./../07data/PageView");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class BaseColumnAction extends  BaseColAction {

    }

    export class BaseColumnReact<P extends BaseColumnProps<BaseColumnVm>, S extends BaseColumnStates, A extends BaseColumnAction>
        extends domFile.Core.DomReact<P, S, A> implements domFile.Core.IReact {

        protected pGetErrorName() {
            return this.props.Vm.ColumnConfig.DisplayName + " 【" + this.props.Vm.ColumnConfig.Name + "】 \r\n" + super.pGetErrorName() + "\r\n";
        }

        

        public pSender(): React.ReactElement<any> {
           // try {
            var _hide = this.props.Vm.ColumnConfig.ControlType == "Hidden" ? "hide" : "";



            return <div   key={this.props.Vm.key} className={"col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line acs-label-block" + _hide} data-act-post={this.props.Vm.SubmitSign} >
                <div className="pull-left Hu-label">
                    <label ></label>
                </div>
                <div className="pull-left Hu-input">
                    <label >{this.props.Vm.ControlObj.intoDom()}</label>
                </div>
            </div>;
        }

    }

    export class BaseColumnVm extends BaseColVm {
        //public ReactType = NormalColumnReact;
        

        public ControlObj: BaseColVm;
        public ColumnConfig: PageView.data.IColumn;
        public SubmitSign: string;
        public ColumnNum: number = 4; 
        protected pRegName = "BaseColumn";

        public link()
        {
            if (this.ControlObj) {
                this.ControlObj.getEmit().addListener("BaseColVm_change", () => {
                    this.getEmit().emit("BaseColumnVm_change", this);
                });
            }
        }

      //  public Column: data.IColumn;
    }

    export class BaseColumnProps<V extends BaseColumnVm> extends BaseColProps<V>{




    }

    export class BaseColumnStates extends BaseColStates{




    }

}