import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Web {
    export class TableDemoAction extends domCore.DomAction {
        // LogList: Array<string>;
    }

    export class TableDemoReact extends domCore.DomReact<TableDemoProps, TableDemoStates, TableDemoAction> implements domCore.IReact {



        public pSender(): React.ReactElement<any> {
 

            return <div>
                   <table>
                    <tbody>

                    <tr><th><div onClick={() => { this.fgetWidth() }}><i     className={"fa fa-caret-left"}></i>{this.props.Vm.width00}<i className={"fa fa-caret-right"}  ></i></div></th>
                        <th><div><i   className={"fa fa-caret-left"}></i>{this.props.Vm.width01}<i className={"fa fa-caret-right"}  draggable={true} ></i></div></th>
                            <th>{this.props.Vm.width11}</th>
                            <th>{this.props.Vm.width12}</th>
                            </tr>

                    <tr><td><div><i className={"fa fa-caret-left"}></i><i className={"fa fa-caret-right"}></i></div></td>
                        <td><div><i className={"fa fa-caret-left"}></i><i className={"fa fa-caret-right"}></i></div></td>
                            <td></td>
                            <td></td>
                            </tr>

                     <tr><td></td><td></td><td></td><td></td></tr>
                     <tr><td></td><td></td><td></td><td></td></tr>
                     <tr><td></td><td></td><td></td><td></td></tr>
                     <tr><td></td><td></td><td></td><td></td></tr>
                        </tbody>
                   </table>
                    </div>;
        }

        private fgetWidth()
        {
            var _dom = ReactDOM.findDOMNode(this);
            $(_dom).find("th").each((index, elem) => {

                switch (index) {
                    case 0:
                        //  alert($(elem).width());
                        this.props.Vm.width00 = $(elem).width();
                        break;
                    case 1:
                        this.props.Vm.width01 = $(elem).width();
                        break;
                    case 2:
                        this.props.Vm.width11 = $(elem).width();
                        break;
                    case 3:
                        this.props.Vm.width12 = $(elem).width();
                        break;
                    default:
                        break;
                }

            });
            this.props.Vm.forceUpdate("");
          //  this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
            this.fgetWidth();
           // var _dom = this.getDOMNode();
          // alert();
           
            this.forceUpdate();
        }

    


    }
    export class TableDemoVm extends domCore.DomVm {
        public ReactType = TableDemoReact;
        public width00: number = 123; 
        public width01: number; 
        public width11: number; 
        public width12: number; 

    }
    export class TableDemoStates extends domCore.DomStates {

    }


    export class TableDemoProps extends domCore.DomProps<TableDemoVm>{
    }
}