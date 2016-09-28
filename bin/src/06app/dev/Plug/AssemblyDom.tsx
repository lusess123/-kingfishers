import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module AssemblyDom {
    export class AssemblyDomAction extends domCore.DomAction {
    }

    export class AssemblyDomReact extends domCore.DomReact<AssemblyDomProps, AssemblyDomStates, AssemblyDomAction> implements domCore.IReact {

        public state = new AssemblyDomStates();

         public pSender(): React.ReactElement<any> {
            return <div className="Hm-plug-table Hg-relative">
                {this._initAssemblyTable() }
            </div>;
        }

        private _initAssemblyTable():React.ReactElement<any>{
            return <table className="table">
                    {this._initAssemblyThead()}
                    {this._initAssemblyTbody() }
                    {this._initLoading()}
                    {this._initAssemblyTbody()}
                    {this._initAssemblyTbody()}
                </table>;
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


        private _initAssemblyThead():React.ReactElement<any>{
            return <thead>
                    <tr>
                        <th></th>
                        <th>程序集名称</th>
                        <th>版本号</th>
                        <th>检查的类型</th>
                        <th>路径</th>
                        <th>耗时</th>
                    </tr>
                </thead>;
        }

        private _initAssemblyTbody():React.ReactElement<any>{
            return <tbody>
                    <tr>
                        <td></td>
                        <td>WebActivatorEx</td>
                        <td>Version=2.0.0.0</td>
                        <td>
                            {this._initAssemblyTableN()}
                        </td>
                         <td>Ataw.Framework.Core.dll</td>
                        <td>15.0006ms</td>
                    </tr>
                </tbody>;
        }

        private _initAssemblyTableN():React.ReactElement<any>{
            return <table className="table">
                <tbody>
                        <tr><td>Aspose.Cells.Attributes.PoweredByAttribute</td></tr>
                        <tr><td>ns0.Class0</td></tr>
                        <tr><td>ns0.Class1</td></tr>
                        <tr><td>Ataw.Framework.Core.ContextLegal <i className="m-l Hu-pointer fa fa-sort-down" onClick={()=>{this.fun_AssemblyClick()}}></i></td></tr>
                        <tr className={this.props.Vm.IsAssemblyHidden ? " hide" : " "}><td>{this._initAssemblyTableNt() }</td></tr>
                </tbody>
                </table>;
        }

        private _initAssemblyTableNt():React.ReactElement<any>{
            return <table className={"table" + (this.props.Vm.IsAssemblyHidden?" hide":" ")}>
                    <thead>
                        <tr>
                            <th>注册名</th><th>基类</th><th>作者</th><th>描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>ContextLegal</td><td>Ataw.Framework.Core.IServerLegal</td><td>zgl</td><td>服务端验证备注插件</td></tr>
                    </tbody>
                </table>;
        }

       private fun_AssemblyClick(){
            this.props.Vm.IsAssemblyHidden=!this.props.Vm.IsAssemblyHidden;
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
  
   export interface IReactAssemblyDomVm extends domCore.DomVm{
         IsAssemblyHidden: boolean;
   }

    export interface IAssemblyDomConfig  {
    
            
    }

    export class AssemblyDomVm extends domCore.DomVm implements IReactAssemblyDomVm {
        public ReactType = AssemblyDomReact;

        public IsAssemblyHidden: boolean;

        public constructor(config?:IAssemblyDomConfig){
            super();

        }

    }
    export class AssemblyDomStates extends domCore.DomStates {
    }


    export class AssemblyDomProps extends domCore.DomProps<IReactAssemblyDomVm>{
    }



}

