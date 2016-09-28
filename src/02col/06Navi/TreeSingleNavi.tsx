


import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import basecolFile = require("./../00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;
import BaseTreeFile = require("./../03selector/BaseTree");

export module TreeSingleNavi {
    export class TreeSingleNaviAction extends BaseColAction {
    }

    export class TreeSingleNaviReact extends BaseColReact<TreeSingleNaviProps, TreeSingleNaviStates, TreeSingleNaviAction> implements domCore.IReact {

        public state = new TreeSingleNaviStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals Hm-modals-content">{this._tDom(this.props.Vm.TreeObj, { nullNode: <div>树形控件</div> }) }</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactTreeSingleNaviVm extends BaseColVm {
        TreeObj: BaseTreeFile.ui.BaseTreeVm;
    }

    export interface ITreeSingleNaviConfig {


    }

    export class TreeSingleNaviVm extends BaseColVm implements IReactTreeSingleNaviVm {
        public ReactType = TreeSingleNaviReact;
        public TreeObj: BaseTreeFile.ui.BaseTreeVm;
        protected pIsMultiSelect: boolean;
        public constructor(config?: ITreeSingleNaviConfig) {
            super();
           // this.TreeObj = new 
        }
        protected pMakerInNavi(config?: basecolFile.Core.INaviMakerConfig) {
            super.pMakerInNavi(config); 
            if (config) {
                this.TreeObj = new BaseTreeFile.ui.BaseTreeVm({
                    RegName: config.NavigationColumnConfig.Options.RegName,
                    IsRootExpand:true
                });
                this.TreeObj.Tree.IsMultiSelect = this.pIsMultiSelect;
                this.TreeObj.Tree.onReactNodeClick((a) => {
                    // alert(a.IsActive);
                   // alert(a.Value);
                    //if (a.IsActive) {
                    //    this.pDataValueSet(a.Value);
                    //} else {
                    //    this.pDataValueSet("");
                    //}
                    var _strs:string = this.TreeObj.Tree.SelectNodes.map(a => a.Value).join(",");
                    this.pDataValueSet(_strs);
                    return true;
                })
            }
        }
    }
    export class TreeSingleNaviStates extends BaseColStates {
    }


    export class TreeSingleNaviProps extends BaseColProps<IReactTreeSingleNaviVm>{
    }

    iocFile.Core.Ioc.Current().RegisterType("TreeSingleNaviVm", BaseColVm, TreeSingleNaviVm);

}


