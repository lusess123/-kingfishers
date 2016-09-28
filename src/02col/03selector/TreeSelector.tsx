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
import BaseTreeFile = require("./BaseTree");
import BaseTreeSelectorFile = require("./BaseTreeSelector");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    //树选择器基类
   



    //树单选
    export class TreeSingleSelectorAction extends BaseTreeSelectorFile.ui.BaseTreeSelectorAction {

    }

    export class TreeSingleSelectorStates extends BaseTreeSelectorFile.ui.BaseTreeSelectorStates {

    }

    export class TreeSingleSelectorReact extends BaseTreeSelectorFile.ui.BaseTreeSelectorReact<TreeSingleSelectorProps, TreeSingleSelectorStates, TreeSingleSelectorAction> implements domFile.Core.IReact {


        public state: TreeSingleSelectorStates = new TreeSingleSelectorStates();


        public pSender(): React.ReactElement<any> {
           // this.props.Vm.Tree.IsMultiSelect = false;
            return super.pSender();
        }


        protected pComponentDidMount(): void {
            super.pComponentDidMount();

        }

       


    }
 

    export class TreeSingleSelectorProps extends BaseTreeSelectorFile.ui.BaseTreeSelectorProps<TreeSingleSelectorVm>{

    }



    export class TreeSingleSelectorVm extends BaseTreeSelectorFile.ui.BaseTreeSelectorVm {
        protected pRegName: string = "树单选选择器控件";
        public ReactType = TreeSingleSelectorReact;

        public constructor() {
            super();
            this.Tree.IsMultiSelect = false;
            this.onActiveNodeSetValue = (nodeVm: Tree.ui.TreeNodeVm) => {
                //  this.state.IsModalShow = false;
                this.IsModalShow = false;
                this.Text = nodeVm.Text;
                var _ac: TreeSingleSelectorAction = new TreeSingleSelectorAction();
                _ac.Vm = this;
              //  this.pDispatcher(_ac);

                //调用Object的设置
                if (!this.reactDataValueSet(nodeVm.Value)) {
                    this.forceUpdate("");
                }
            }
        }


        public static Test(): TreeSingleSelectorVm {
            var _bean: TreeSingleSelectorVm = new TreeSingleSelectorVm();
            _bean.dataValueSet("20150520195821537A039FDC72B3224C6AA5F6FE4B91BA0199");
            return _bean;
        }

    }

     iocFile.Core.Ioc.Current().RegisterType("TreeSingleSelectorVm", BaseColVm, TreeSingleSelectorVm)
 


}
export namespace TreeData {
    export interface ITreeCodeTableModel {
        CODE_VALUE: string;
        CODE_TEXT: string;
        ExtData: IExtData;
        isParent: boolean;
        Children: Array<ITreeCodeTableModel>;
        ParentId: string;
    }

    export interface IExtData {
        RightValue: string;
        Icon: string;
        RightType: string|number;
    }
}