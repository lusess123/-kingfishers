import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./Data");
import classInfoRow = require("./ClassInfoRowDom");

export module DllInfoRowDom {
    export class DllInfoRowDomAction extends domCore.DomAction {
    }

    export class DllInfoRowDomReact extends domCore.DomReact<DllInfoRowDomProps, DllInfoRowDomStates, DllInfoRowDomAction> implements domCore.IReact {

        public state = new DllInfoRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td className={this.props.Vm.NameIsNull ? "hide" : ""}>{this.props.Vm.TrueName}</td>
                <td className={this.props.Vm.NameIsNull ? "hide" : ""}>{this.props.Vm.VersionsName}</td>
                <td className={this.props.Vm.NameIsNull ? "hide" : " "}>
                   {this.props.Vm.RowIsNull ? "" : (this._initDllTable()) }
                </td>
                <td colSpan={this.props.Vm.NameIsNull ? "4" : ""} className={this.props.Vm.NameIsNull ? "Hs-red" : ""} style={{ "white-space": "normal" }}>
                    <i className={this.props.Vm.NameIsNull ?"fa fa-exclamation-triangle":""}></i>
                    <code>{this.props.Vm.DllError}</code>
                </td>
            </tr>;


        }

        public _initDllTable(): React.ReactElement<any> {
            return <div>
                <div className="Hu-pointer" onClick={() => { this.fun_TableClick() } }><span>展开查看详细</span><i className="fa fa-ellipsis-h Hu-pointer"> </i>({this.props.Vm.ClassInfoList.length}) </div>
                <table className={"table" + (this.props.Vm.TableIsHidden ? " " :" hide") }>

                {this._initDllThead() }

                {this._initDllTbody() }

            </table>
                </div>;
        }

        public _initDllThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th>注册名</th><th>基类</th><th>作者</th><th>生成时间</th><th>提示信息</th><th>错误信息</th>
                </tr>
            </thead>;
        }

        public _initDllTbody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.ClassInfoList.map((a) => { return a.intoDom(); })
                }
            </tbody>;
        }

        private fun_TableClick() {
            this.props.Vm.TableIsHidden = !this.props.Vm.TableIsHidden;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactDllInfoRowDomVm extends domCore.DomVm {
        Name: string;
        ClassInfoList: classInfoRow.ClassInfoRowDom.ClassInfoRowDomVm[];
        DllError: string;
        RowIsNull: boolean;
        NameIsNull: boolean
        TrueName: string;
        VersionsName: string;
        TableIsHidden: boolean
    }

    export interface IDllInfoRowDomConfig {
        Name: string;
        ClassInfoList: dataFile.Pluginlog.ClassInfoData[];
        DllError: string;
    }

    export class DllInfoRowDomVm extends domCore.DomVm implements IReactDllInfoRowDomVm {
        public ReactType = DllInfoRowDomReact;

        public TrueName: string;
        public VersionsName: string;
        public Name: string;
        public ClassInfoList: classInfoRow.ClassInfoRowDom.ClassInfoRowDomVm[] = [];
        public DllError: string;
        public Row: classInfoRow.ClassInfoRowDom.ClassInfoRowDomVm;
        public Data: dataFile.Pluginlog.ClassInfoData[];

        public RowIsNull: boolean = false;
        public NameIsNull: boolean = false;
        public TableIsHidden: boolean = false;

        public constructor(config?: IDllInfoRowDomConfig) {
            super();

            if (config.Name) {

                this.TrueName = config.Name;

                this.VersionsName = config.Name;

                if (config.Name.length == 0) {
                    this.NameIsNull = true;
                } else {
                    this.TrueName = this.TrueName.substring(0, this.TrueName.lastIndexOf(','));
                    this.TrueName = this.TrueName.substring(0, this.TrueName.lastIndexOf(','));
                    this.TrueName = this.TrueName.substring(0, this.TrueName.lastIndexOf(','));
                    this.VersionsName = this.VersionsName.substring(0, this.VersionsName.lastIndexOf(','));
                    this.VersionsName = this.VersionsName.substring(0, this.VersionsName.lastIndexOf(','));
                    this.VersionsName = this.VersionsName.substr(this.VersionsName.indexOf(',') + 1, 100);
                    this.VersionsName = this.VersionsName.substr(9);
                }
            } else {
                this.NameIsNull = true;
            }

            if (config.DllError) {
                this.DllError = config.DllError;
                this.DllError = this.DllError.substring(0, this.DllError.indexOf('\r\n'));

            }

            if (config.ClassInfoList) {
                this.Data = config.ClassInfoList;

                if (this.Data.length == 0) {
                    this.RowIsNull = true;
                } else {
                    this.Data.forEach((a) => {
                        var config: classInfoRow.ClassInfoRowDom.IClassInfoRowDomConfig = {
                            RegName: a.RegName, BaseClass: a.BaseClass, Author: a.Author,
                            CreatTime: a.CreateTime, Mesg: a.Mesg, ClassInfoError: a.Error
                        };

                        this.Row = new classInfoRow.ClassInfoRowDom.ClassInfoRowDomVm(config);

                        this.ClassInfoList.push(this.Row);
                    });
                }
            } else {
                this.RowIsNull = true;

            }

        }
    }
    export class DllInfoRowDomStates extends domCore.DomStates {
    }


    export class DllInfoRowDomProps extends domCore.DomProps<IReactDllInfoRowDomVm>{
    }



}


