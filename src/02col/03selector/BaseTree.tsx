import domFile = require("./../../01core/0Dom");
import basecolFile = require("./../00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import Tree = require("./../../05tool/Tree");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    //--------------------基本树控件----------
    export class BaseTreeAction extends BaseColAction {

    }

    export class BaseTreeReact<P extends BaseTreeProps<BaseTreeVm>, S extends BaseTreeStates, A extends BaseTreeAction> extends BaseColReact<P, S, A> implements domFile.Core.IReact {

     

        protected pInstall(): void {

            super.pInstall();

            var _vm = this.props.Vm;
            // var _val = _vm.dataValueGet();
            var _tree = _vm.Tree;
            this.props.Vm.getDataPromise().done((a) => {
                this.props.Vm.initTreeData(a);
            });
        

        }

       



        public pSender(): React.ReactElement<any> {
            if (this.props.Vm.IsNull) {
                return <div className="acsPaddingT2 text-center">
                       {this.props.Vm.senderNullFun()}
                      </div>;
            } else {
                var _tree = this.props.Vm.Tree;
                return _tree.intoDom();
            }
        }

    }




    export class BaseTreeProps<V extends BaseTreeVm> extends BaseColProps<V>{

    }


    export class BaseTreeStates extends BaseColStates {
    }

    export interface IReactFun {
        (vm: BaseTreeVm): React.ReactElement<any> | string;
    }

    export interface IBaseTreeVm {
        IsRootExpand?: boolean;
        RegName?: string;
        NullReactFun?: IReactFun;
        IsAllTree?: boolean;
    }

    export class BaseTreeVm extends BaseColVm {

        public ReactType = BaseTreeReact;

        public RegName: string = "MenuCodeTable";
        public LoadUrl: string = "/core/Selector/LoadTreeFormatJson";
        public SubLoadUrl: string = "/core/Selector/LoadSubTreeFormatJson";
        public Tree: Tree.ui.TreeVm ;
        public IsRootExpand: boolean = false;
        public IsNull: boolean = false;
       
        public NullReactFun: IReactFun;
        public constructor(config?: IBaseTreeVm) {
            super();
            this.Tree = new Tree.ui.TreeVm({
                OnExpandFun: (nodeVm) => {
                    this.clickSubTreeLoading(nodeVm);
                },
                OnActiveNodeSetValue: (nodeVm) => {
                    this.onActiveNodeSetValue(nodeVm);
                }
            });
            if (config) {
                if (config.RegName) {
                    this.RegName = config.RegName;
                }
                if (config.IsRootExpand) {
                    this.IsRootExpand = config.IsRootExpand;
                }
                if (config.NullReactFun)
                {
                    this.NullReactFun = config.NullReactFun;
                }
                if (config.IsAllTree) {
                    this.LoadUrl = "/core/Selector/LoadAllTreeFormatJson";
                }
            }

        }

        protected onActiveNodeSetValue(nodeVm: Tree.ui.TreeNodeVm): any {
           // var _thisObj = this;
            // return (nodeVm: Tree.ui.TreeNodeVm) => {
            if (this.Tree.IsMultiSelect) {
                    var _valArr = new Array<string>();
                    this.Tree.SelectNodes.forEach((a) => {
                        _valArr.push("\"" + a.Value + "\"");
                    });
                    this.reactDataValueSet(_valArr.join(","));
                }
            else {
                if (this.Tree.SelectNodes.length > 0) {
                    this.reactDataValueSet(this.Tree.SelectNodes[0].Value);
                    } else {
                        this.reactDataValueSet("");
                    }

                }
           // }
        };

        public vmDataValueSet(val: string) {
            super.vmDataValueSet(val);
            this.SetNodeSelected();
            this.Tree.forceUpdate("");
        }

        public senderNullFun(): React.ReactElement<any> | string
        {
            if (this.NullReactFun) {
                return this.NullReactFun(this);
            }
            else
                return "没有树形数据";
        }

        //设置节点选中状态
        public SetNodeSelected(): void {
            var _tree = this.Tree;
            var _val = this.dataValueGet();
            var _keys: Array<string> = new Array<string>();
            if (_val) {
                var _valArr = _val.split(",");
                _valArr.forEach((a) => {
                    _keys.push(a.replace(/\"/g, ""));
                });
            }
            var _newSelectNodes = _tree.getNodeByKey(_keys);
            if (_newSelectNodes.length > 0)//新选中节点数大于0，清除旧选中节点的选中状态,并展开新节点
            {
                if (_tree.SelectNodes.length > 0) {
                    _tree.SelectNodes.forEach((a) => {
                        a.IsActive = false;
                        a.forceUpdate("");
                    });
                }
            }
            _tree.SelectNodes = _newSelectNodes.length > 0 ? _newSelectNodes : _tree.SelectNodes;
            if (_tree.SelectNodes.length > 0) {
                _tree.SelectNodes.forEach((a) => {
                    a.IsActive = true;
                    _tree.pExpandParent(a, true);
                    a.forceUpdate("");
                });
            }
        };

        private setPostDataFun(): string {
            var ds = {};
            var _rows = [];
            ds = { _OPERATION: _rows };
            var _val = this.dataValueGet();
            if (_val) {
                var _valArr = _val.split(",");
                _valArr.forEach((a) => {
                    _rows.push({ KeyValue: a.replace(/\"/g, "") });
                });
            }
            return JSON.stringify(ds);
        }

        public initTreeData(  data: TreeData.ITreeCodeTableModel[] ) {
            if (data.length > 0) {
                this.IsNull = false;
                this.Tree.initTreeVm({
                    CODE_TEXT: "根节点",
                    CODE_VALUE: "0",
                    Children: data
                    
                });

               // this.Tree.on
              
               // this.Tree.initTreeVm();
            }
            else {
                this.IsNull = true;
            }
            this.Tree.IsChange = true;
            this.forceUpdate("");
        }


        public getDataPromise(): JQueryPromise<TreeData.ITreeCodeTableModel[]>
        {
            var _p: JQueryDeferred<TreeData.ITreeCodeTableModel[]> = $.Deferred<TreeData.ITreeCodeTableModel[]>(); 
            urlFile.Core.AkPost(this.LoadUrl,
                {
                    regName: this.RegName,
                    ds: this.setPostDataFun()
                },
                (a) => {
                    var _treeRootModel: TreeData.ITreeCodeTableModel[] = a;
                    _p.resolve(_treeRootModel);

                });

            return _p.promise();

        }

        private clickSubTreeLoading(nodeVm: Tree.ui.TreeNodeVm)
        {
            // return function (nodeVm: Tree.ui.TreeNodeVm) {
            urlFile.Core.AkPost(this.SubLoadUrl, { regName: this.RegName, CODE_VALUE: nodeVm.Value }, (a) => {

                var _sonNodesModel: Array<TreeData.ITreeCodeTableModel> = a;
                _sonNodesModel.forEach((a) => {
                    this.Tree.appendToNode(a, nodeVm);
                });
                    nodeVm.forceUpdate("");
                });
           // }
        } 

  
    }
}

export namespace TreeData {
    export interface ITreeCodeTableModel {
        CODE_VALUE: string;
        CODE_TEXT: string;
        ExtData: IExtData;
        isParent: boolean;
        Children: Array<ITreeCodeTableModel>;
        ParentId: string;
        IsSelect?: boolean;
    }

    export interface IExtData {
        RightValue: string;
        Icon: string;
        RightType: string | number;
    }
}