import baseColumn = require("./../Base/BaseColumn");
import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
   
    export class NormalColumnAction extends domFile.Core.DomAction {

    }

    export class NormalColumnReact extends baseColumn.ui.BaseColumnReact<NormalColumnProps, NormalColumnStates, NormalColumnAction> implements domFile.Core.IReact{

        public pSender(): React.ReactElement<any> {
            // try {
            var _hide = this.props.Vm.ColumnConfig.ControlType == "Hidden" ? "hide" : "";



            return <div  key={this.props.Vm.key}   className={"col-lg-" + this.props.Vm.getFormColumnsCols() +" col-sm-12 col-xs-12 Hu-dashed-line " + _hide} data-act-post={this.props.Vm.SubmitSign} >
                <div className="Hu-label Hu-pull-left">
                    <label >{this.props.Vm.ColumnConfig.DisplayName + " : "}</label>
                </div>
                <div className="Hu-input Hu-pull-right">
                    <div>{this.props.Vm.ControlObj.intoDom() }</div>
                </div>
            </div>;
        }
    }

    export class NormalColumnVm extends baseColumn.ui.BaseColumnVm {
       public ReactType = NormalColumnReact;
       protected pRegName = "NormalColumn";
      
       public getFormColumnsCols(): number
       {
           return this.getColumnsCols(this.ColumnNum);
       }
       public getColumnsCols(num?:number):number
       {
           if (!num) num = 4;
           if (num == 4) {
               switch (this.ColumnConfig.ShowType) {
                   //case 0:
                   //    return 12;
                   case 1:
                       return 3;
                   case 2:
                       return 6;
                   case 3:
                       return 8;
                   default:
                       return 12;
               }
           }
           else {
               if (num == 2) {
                   switch (this.ColumnConfig.ShowType) {
                       //case 0:
                       //    return 12;
                       case 1:
                           return 6;
                       case 2:
                           return 6;
                       case 3:
                           return 12;
                       default:
                           return 12;
                   }
               }
               else {
                   if (num == 3) {
                       switch (this.ColumnConfig.ShowType) {
                           //case 0:
                           //    return 12;
                           case 1:
                               return 4;
                           case 2:
                               return 8;
                           case 3:
                               return 12;
                           default:
                               return 12;
                       }
                   }

               }
           }
       }

    }

    export class NormalColumnProps extends baseColumn.ui.BaseColumnProps<NormalColumnVm>{ 
    }
    export class NormalColumnStates extends baseColumn.ui.BaseColumnStates {




    }
   iocFile.Core.Ioc.Current().RegisterType("Normal", baseColumn.ui.BaseColumnVm, NormalColumnVm);
   
}