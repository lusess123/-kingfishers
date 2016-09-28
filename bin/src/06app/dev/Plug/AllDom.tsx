import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module AllDom {
    export class AllDomAction extends domCore.DomAction {
    }

    export class AllDomReact extends domCore.DomReact<AllDomProps, AllDomStates, AllDomAction> implements domCore.IReact {

        public state = new AllDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hg-relative">

                {this._initPlugTable() }
            </div>;
        }

        private _initPlugTimeline(): React.ReactElement<any> {


            return <div className="Hm-plug-timeline">
                <div className="Hu-main-timelime"><p className="text-right">ms</p></div>
                {this.divfor() }
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
                    {this._initInitialize() }
                    {this._initAssemblyTable() }
                    {this._initRegisterA()}
                
                </table>
                </div>;
        }

        private _initInitialize(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td>日志初始化</td>
                    <td>7.0004ms</td>
                </tr>
                <tr>
                    <td>消息总线初始化</td>
                    <td>1.0001ms</td>
                </tr>
                <tr>
                    <td>程序集开始检查</td>
                    <td></td>
                </tr>
            </tbody>;
        }

        private _initAssemblyTable(): React.ReactElement<any> {
            return <tbody >
                <table className="table">
                    {this._initAssemblyThead() }
                    {this._initAssemblyTbody() }
                    {this._initLoading() }
                    {this._initAssemblyTbody() }
                    {this._initAssemblyTbody() }
                </table>
            </tbody>;
        }

        private _initLoading(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td></td>
                    <td colSpan="4" className="Hs-red">
                         <b className="m-r"><i className="Hs-red fa fa-exclamation-triangle"></i>dll载入异常记录</b>
                        未能加载文件或程序集“Antlr3.Runtime, Version=3.4.1.9004, Culture=neutral, PublicKeyToken=eb42632606e9261f”或它的某一个依赖项。系统找不到指定的文件。</td>
                </tr>
            </tbody>;
        }


        private _initAssemblyThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th></th>
                    <th>程序集名称</th>
                    <th>版本号</th>
                    <th>检查的类型</th>
                    <th>耗时</th>
                </tr>
            </thead>;
        }

        private _initAssemblyTbody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td></td>
                    <td>WebActivatorEx</td>
                    <td>Version=2.0.0.0</td>
                    <td>
                        {this._initAssemblyTableN() }
                    </td>
                    <td>15.0006ms</td>
                </tr>
            </tbody>;
        }

        private _initAssemblyTableN(): React.ReactElement<any> {
            return <table className="table">
                <tbody>
                    <tr><td>Aspose.Cells.Attributes.PoweredByAttribute</td></tr>
                    <tr><td>ns0.Class0</td></tr>
                    <tr><td>ns0.Class1</td></tr>
                    <tr><td>Ataw.Framework.Core.ContextLegal <i className="m-l Hu-pointer fa fa-sort-down" onClick={() => { this.fun_AssemblyClick() } }></i></td></tr>
                    <tr className={this.props.Vm.IsAssemblyHidden ? " hide" : " "}><td>{this._initAssemblyTableNt() }</td></tr>
                </tbody>
            </table>;
        }

        private _initAssemblyTableNt(): React.ReactElement<any> {
            return <table className={"table" + (this.props.Vm.IsAssemblyHidden ? " hide" : " ") }>
                <thead>
                    <tr>
                        <th>注册名</th><th>基类</th><th>实例类</th><th>路径</th><th>作者</th><th>描述</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>ContextLegal</td><td>Ataw.Framework.Core.IServerLegal</td><td>Ataw.Framework.Core.ContextLegal</td><td>Ataw.Framework.Core.dll</td><td>zgl</td><td>服务端验证备注插件</td></tr>
                </tbody>
            </table>;
        }

       

        private fun_AssemblyClick() {
            this.props.Vm.IsAssemblyHidden = !this.props.Vm.IsAssemblyHidden;
            this.forceUpdate();
        }
        private fun_AssemblyTClick() {
            this.props.Vm.IsAssemblyTHidden = !this.props.Vm.IsAssemblyTHidden;
            this.forceUpdate();
        }
        private fun_AssemblyFClick() {
            this.props.Vm.IsAssemblyFHidden = !this.props.Vm.IsAssemblyFHidden;
            this.forceUpdate();
        }
        private fun_AssemblyTypeClick() {
            this.props.Vm.IsAssemblyTypeHidden = !this.props.Vm.IsAssemblyTypeHidden;
            this.forceUpdate();
        }
        private fun_AssemblyTypeFClick() {
            this.props.Vm.IsAssemblyTypeFHidden = !this.props.Vm.IsAssemblyTypeFHidden;
            this.forceUpdate();
        }

        private _initRegisterA(): React.ReactElement<any> {
            return <tbody>
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
                    <td>XML代码表注册<i className={"m-l Hu-pointer fa fa-sort-" + (this.props.Vm.IsRegisterHidden ? "down" : "up") } onClick={() => { this.fun_RegisterClick() } }></i></td>
                    <td>51.0029ms</td>
                </tr>
                {this._initRegister() }
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
                </tbody>;
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

    export interface IReactAllDomVm extends domCore.DomVm {
        IsAssemblyHidden: boolean;
        IsAssemblyTHidden: boolean;
        IsAssemblyTypeHidden: boolean;
        IsAssemblyFHidden: boolean;
        IsAssemblyTypeFHidden: boolean;   
        IsRegisterHidden: boolean;   
    }

    export interface IAllDomConfig {


    }

    export class AllDomVm extends domCore.DomVm implements IReactAllDomVm {
        public ReactType = AllDomReact;

        public IsAssemblyHidden: boolean;
        public IsAssemblyTHidden: boolean;
        public IsAssemblyTypeHidden: boolean;
        public IsAssemblyFHidden: boolean;
        public IsAssemblyTypeFHidden: boolean;
        public IsRegisterHidden: boolean;

        public constructor(config?: IAllDomConfig) {
            super();

        }

    }
    export class AllDomStates extends domCore.DomStates {
    }


    export class AllDomProps extends domCore.DomProps<IReactAllDomVm>{
    }



}


