import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module RegisterDom {
    export class RegisterDomAction extends domCore.DomAction {
    }

    export class RegisterDomReact extends domCore.DomReact<RegisterDomProps, RegisterDomStates, RegisterDomAction> implements domCore.IReact {

        public state = new RegisterDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hg-relative">
                {this._initPlugTable() }
            </div>;
        }

        private _initPlugTimeline(): React.ReactElement<any> {
            return <div className="Hm-plug-timeline">
                <div className="Hu-main-timelime"><p className="text-right">ms</p></div>
                {this.divfor()}
            </div>;
        }

        private _initPlugTable(): React.ReactElement<any> {
            return <div className="Hm-plug-table">
                <table className="table">
                <thead>
                    <tr>
                        <th>名称</th><th>时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>程序集插件注册</td>
                        <td>402.0229ms</td>
                    </tr>
                    <tr>
                        <td>执行全局配置的宏插件</td>
                        <td>1.0001ms</td>
                    </tr>
                    <tr>
                        <td>app配置注册</td>
                        <td>0ms</td>
                    </tr>
                    <tr>
                        <td>固定接口注册</td>
                        <td>24.0014ms</td>
                    </tr>
                    <tr>
                        <td>XML代码表注册<i className={"m-l Hu-pointer fa fa-sort-" + (this.props.Vm.IsRegisterHidden?"down":"up")} onClick={()=>{this.fun_RegisterClick()}}></i></td>
                        <td>51.0029ms</td>
                    </tr>
                    {this._initRegister()}
                    <tr>
                        <td>XML数据字典注册</td>
                        <td>14.0008ms</td>
                    </tr>
                    <tr>
                        <td>自定义js注册</td>
                        <td>0ms</td>
                    </tr>
                    <tr>
                        <td>全局插件</td>
                        <td>17.001ms</td>
                    </tr>
                </tbody>
            </table>
                </div>;
        }

        private _initRegister(): React.ReactElement<any> {
            return <div className={this.props.Vm.IsRegisterHidden?"":"hide"}>
                <div className="Hm-plug-table m-a">
                    <table className="table">
                        <thead>
                            <tr><th>注册名</th><th>基类</th><th>实例类</th><th>路径</th><th>作者</th><th>描述</th></tr>  
                        </thead>
                        <tbody>  
                            <tr>
                                <td>ML</td>
                                <td>Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]</td>
                                <td>Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]</td>
                                <td>Ataw.Framework.Core.dll</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]</td>
                                <td>Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]</td>
                                <td>Ataw.Framework.Core.dll</td>
                                <td></td>
                                <td></td>
                            </tr>
                             <tr>
                                <td>Leve</td>
                                <td>Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]</td>
                                <td>Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]</td>
                                <td>Ataw.Framework.Core.dll</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Hard</td>
                                <td>Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]</td>
                                <td>Ataw.Framework.Core.CodeTable`1[Ataw.Framework.Core.CodeDataModel]</td>
                                <td>Ataw.Framework.Core.dll</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
            </div>;
        }

        private fun_RegisterClick(){
            this.props.Vm.IsRegisterHidden=!this.props.Vm.IsRegisterHidden;
            this.forceUpdate();
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();
            
        }

        public divfor() {
            var array = [];
            var html = [];
            for (var i = 0; i < 30; i++) {
                array.push(i);
            }

            array.map((i, number) => {
                var left = 3.4 * i;
                var ms = i * 20
                html.push(< div className= "Hu-vertical-timelime" style= {{ "left": left + "%" }}><p>{ms}</p><em style={{ "left": 5 }}></em></div >)
            })


            return html.map((a) => { return a });
        }
    }
  
   export interface IReactRegisterDomVm extends domCore.DomVm{
        IsRegisterHidden: boolean;           
   }

    export interface IRegisterDomConfig  {
    
            
    }

    export class RegisterDomVm extends domCore.DomVm implements IReactRegisterDomVm {
        public ReactType = RegisterDomReact;

        public IsRegisterHidden: boolean;

        public constructor(config?:IRegisterDomConfig){
            super();

        }

    }
    export class RegisterDomStates extends domCore.DomStates {
    }


    export class RegisterDomProps extends domCore.DomProps<IReactRegisterDomVm>{
    }



}


