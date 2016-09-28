import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
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

    //树多选
    export class TreeMultiSelectorAction extends BaseTreeSelectorFile.ui.BaseTreeSelectorAction {

    }

    export class TreeMultiSelectorStates extends BaseTreeSelectorFile.ui.BaseTreeSelectorStates {

    }

    export class TreeMultiSelectorReact extends BaseTreeSelectorFile.ui.BaseTreeSelectorReact<TreeMultiSelectorProps, TreeMultiSelectorStates, TreeMultiSelectorAction> implements domFile.Core.IReact {

        public state: TreeMultiSelectorStates = new TreeMultiSelectorStates();

        public pSender(): React.ReactElement<any> {
            this.props.Vm.Tree.IsMultiSelect = true;
            return super.pSender();
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();

        }

        protected initModalContent(content: React.ReactElement<any>): React.ReactElement<any> {
            return React.DOM.div(
                { className: "Hm-modals Hm-modals-content" },
            React.DOM.h4(null, "请选择 :"), React.DOM.div({ className: "Hc-modals-list" }, content),
                React.DOM.button({
                    className: "btn btn-xs btn-primary",
                    onClick: () => {
                        this.onClickLiSetValue();
                    }
                }, "确定"));
        }

        protected onActiveNodeSetValue(): any {

        }

        //选择好选项之后 点击确定触发的事件
        private onClickLiSetValue(): void {
            //this.state.IsModalShow = false;
            this.props.Vm.IsModalShow = false;
            var _valArr = new Array<string>();
            var _txtArr = new Array<string>();

            this.props.Vm.Tree.SelectNodes.forEach((a) => {
                _txtArr.push(a.Text);
                _valArr.push("\"" + a.Value + "\"");

            });
            this.props.Vm.Text = _txtArr.join(",");
            var _ac: TreeMultiSelectorAction = new TreeMultiSelectorAction();
            _ac.Vm = this.props.Vm;
            this.pDispatcher(_ac);

            //调用Object的设置
            if (!this.props.Vm.reactDataValueSet(_valArr.join(","))) {
                this.forceUpdate();
            }
        }
    }

    export class TreeMultiSelectorProps extends BaseTreeSelectorFile.ui.BaseTreeSelectorProps<TreeMultiSelectorVm>{

    }



    export class TreeMultiSelectorVm extends BaseTreeSelectorFile.ui.BaseTreeSelectorVm {
        protected pRegName: string = "树多选选择器控件";
        public ReactType = TreeMultiSelectorReact;
        public SelectType: any; //选择时父子级节点的关联关系 {"Y":"ps","N":"ps"}

        public constructor() {
            super();
        }


        public static Test(): TreeMultiSelectorVm {
            var _bean: TreeMultiSelectorVm = new TreeMultiSelectorVm();
            _bean.dataValueSet("\"20150520195821537A039FDC72B3224C6AA5F6FE4B91BA0199\",\"20150520195533523A596724F77B6343EF9CDE0C11B8E24382\"");
            return _bean;
        }

    }

    iocFile.Core.Ioc.Current().RegisterType("TreeMultiSelectorVm", BaseColVm, TreeMultiSelectorVm);

}