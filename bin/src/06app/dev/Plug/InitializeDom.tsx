import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module InitializeDom {
    export class InitializeDomAction extends domCore.DomAction {
    }

    export class InitializeDomReact extends domCore.DomReact<InitializeDomProps, InitializeDomStates, InitializeDomAction> implements domCore.IReact {

        public state = new InitializeDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hg-relative">
  
                    {this._initPlugTable()}
                </div>;
        }

        private _initPlugTimeline(): React.ReactElement<any>{
           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            return <div className="Hm-plug-timeline">
                <div className="Hu-main-timelime"><p className="text-right">ms</p></div>
                {this.divfor()}
                </div>;
        }

        private _initPlugTable(): React.ReactElement<any>{
            return <div className="Hm-plug-table">
                    <table className="table">
                    <thead>
                        <tr>
                            <th>名称</th><th>时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>日志初始化</td>
                            <td>7.0004ms</td>
                            </tr>
                            <tr>
                            <td>消息总线初始化</td>
                            <td>1.0001ms</td>
                        </tr>
                    </tbody>
                    </table>
                </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
            
        }

        public divfor()
        {
            var array = [];
            var html = [];
            for (var i = 0; i < 30; i++) {  
                array.push(i);
            }

            array.map((i, number) => {
                var left = 3.4 * i;
                var ms = i * 20
                html.push(< div className= "Hu-vertical-timelime" style= {{ "left": left + "%" }}><p>{ms}</p><em style={{"left": 5}}></em></div >)
            })


            return html.map((a) => { return a });
        }
    }
  
   export interface IReactInitializeDomVm extends domCore.DomVm{
                   
   }

    export interface IInitializeDomConfig  {
    
            
    }

    export class InitializeDomVm extends domCore.DomVm implements IReactInitializeDomVm {
        public ReactType = InitializeDomReact;

        public constructor(config?:IInitializeDomConfig){
            super();

        }



    }
    export class InitializeDomStates extends domCore.DomStates {
    }


    export class InitializeDomProps extends domCore.DomProps<IReactInitializeDomVm>{
    }



}


