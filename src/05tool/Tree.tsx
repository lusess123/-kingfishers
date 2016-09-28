import domFile = require("./../01core/0Dom");
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class TreeAction extends domFile.Core.DomAction {
        public IsActive: boolean;
    }

    export class TreeReact extends domFile.Core.DomReact<TreeProps, TreeStates, TreeAction> implements domFile.Core.IReact {
        protected pIsSetScreenMaxHeight: boolean = true;
        protected pIsSetScreenHeight: boolean = true;
        public pSender(): React.ReactElement<any> {

            switch (this.props.Vm.StyleName) {
                case "H":
                    return this.h_ulSend("Hu-prototype");
                case "Base":
                    return this.h_ulSend();
                case "East":
                    return this.h_ulSend("Hu-east");
                default:
                    return null;
            }

        }

        private h_ulSend(className?: string): React.ReactElement<any> {
            var _ul = <ul className={"nav " + className }>
                {
                    this.props.Vm.Roots.map((a,i) => {
                        if (!a.IsHide) {
                            return a.intoDom(i);
                        }
                    })
                }
            </ul>

            return <div className="Hc-tree-naiv Hz-scroll"  key={this.props.Vm.key}
                style={{
                    "overflowY": "auto"
                }}
                >{_ul}</div>
        }


        private _resizeFun: any;
        protected pComponentDidMount() {
            super.pComponentDidMount();
            this._resizeFun = () => {
                this.forceUpdate();
            };
            $(window).bind("resize", this._resizeFun)

            //$(window).bind("resize", (a) => {
            //    alert(a);
            //})
        }

        protected pComponentWillUnmount(): void {
            super.pComponentWillUnmount();
            if (this._resizeFun) {
                $(window).unbind("resize", this._resizeFun)
            }

        }



    }
    export class TreeNodeReact extends domFile.Core.DomReact<TreeNodeProps, TreeStates, TreeAction> implements domFile.Core.IReact {

        public ExpandClick() {
            // if (this.props.Vm.Children.length > 0) {
            //if (this.props.Vm.IsRoot) {
            //    //this.props.Vm.par
            //    this.props.Vm.TreeObj.shrinkRoots();
            //    this.props.Vm.TreeObj.updateModify();
            //}

            if (this.props.Vm.IsRoot && this.props.Vm.IsParent && !this.props.Vm.NoExpand) {
                //this.props.Vm.par
                this.props.Vm.TreeObj.shrinkRoots();
                this.props.Vm.TreeObj.updateModify();
                //alert("处理好了根节点 : " + this.props.Vm.NoExpand);
            } else {
                if (this.props.Vm.IsParent) {
                    this.props.Vm.Expand();
                }
            }
            this.props.Vm.TreeObj.forceUpdate("");

        }

        public ActiveNode() {
            if (!this.props.Vm.IsDisableSelect) {
                var _vm = this.props.Vm;
                _vm.Active();
                //广播选中
                var _ac: TreeAction = new TreeAction();
                _ac.Vm = _vm;
                _ac.IsActive = true;

                _ac.Id = "select";
                this.pDispatcher(_ac);

                if (_vm.OnActiveNodeSetValue) {
                    _vm.OnActiveNodeSetValue(_vm);
                }
                if (_vm.TreeObj) {
                    _vm.TreeObj.getEmit().emit("node_click", _vm);
                }
            }
            else {
                this.ExpandClick();
            }
            //this.props.Vm.TreePbj.getEmit().once("cancle", a=> {
            //    this.props.Vm.IsActive = false;
            //});
        }



        public pSender(): React.ReactElement<any> {

            switch (this.props.Vm.TreeObj.StyleName) {
                case "H":
                    return this.h_Send("H", "Hg-relative Hu-item  acsFadeInLeftAnimate");
                case "Base":
                    return this.h_Send("Base", "Hg-relative Hu-item Hm-xsd");
                case "East":
                    return this.h_Send("East");
                default:
                    return null;
            }


        }


        private className_getChildCheck(): string {
            return this.props.Vm.IsChildCheck ? " Hz-checked" : " ";
        }


        private h_Send(s: string, className?: string): React.ReactElement<any> {
            var _tpl = this.props.Vm.TreeObj.NodeTplFun ? this.props.Vm.TreeObj.NodeTplFun(this.props.Vm) : [this.props.Vm.Text];
            var _nodeTpl = this.props.Vm.TreeObj.NNodeTplFun ? this.props.Vm.TreeObj.NNodeTplFun(this.props.Vm) : null;
            var _isLeaf = !this.props.Vm.IsParent;//this.props.Vm.Children.length == 0;
            var _i = <i className={!this.props.Vm.NoExpand ? " icon-minus-sign fa fa-minus-circle" : " icon-minus-sign  fa fa-plus-circle"} onClick={(e) => { this.ExpandClick(); } }></i>;
            var _ii = <i className={(this.props.Vm.NodeIcoSrc) }></i>
            var _icon = _isLeaf ? _ii : _ii;
            var _iicon = _isLeaf ? "" : _i;
            var _ul = <ul className={ "nav nav-1 "+ (!this.props.Vm.NoExpand ? "" : "hide")}>
                {
                    this.props.Vm.Children.map((a,i) => {
                        return a.intoDom(i);
                    })
                }
            </ul>;
            var _children = _isLeaf ? null : _ul;

          
            var _codeIcon = <i className={this.props.Vm.ExtData ? this.props.Vm.ExtData.Icon : ""}></i>;
            var _c = ((this.props.Vm.IsActive ? "active Hz-checked" : "") + "  Hu-pointer Hu-title" + (_isLeaf ? " acsTreeNaivTitleBg " : "")) + (this.className_getChildCheck()) + (this.props.Vm.IsDisableSelect ? " Hz-disabled" : " ");
            var _isEast = this.props.Vm.TreeObj.StyleName == "East";
            if (!this.props.Vm.TreeObj.NodeTplFun) {
                return <li className={className} key={this.props.Vm.key}>
                    <a className={_c + " text-center"}>
                        { _isEast ?
                            [_icon, <span>{ _codeIcon}< span onClick={() => { this.ActiveNode(); } }   title={this.props.Vm.Text} dangerouslySetInnerHTML={{ __html: this.props.Vm.Text }}></span></span>, this.props.children]
                            : [_iicon, <span>{_codeIcon} < span onClick={() => { this.ActiveNode(); } }   title={this.props.Vm.Text} dangerouslySetInnerHTML={{ __html: this.props.Vm.Text }}></span></span>, this.props.children]

                        }
                    </a>
                    {_nodeTpl}
                    <div>{this.props.Vm.Mesg}</div>
                    {_children }
                </li >;
            } else {
                return <li className={className} key={this.props.Vm.key}>
                    <a className={_c}>
                        { _isEast ?
                            [_icon, <span>{_codeIcon}< span onClick={() => { this.ActiveNode(); } }   title={this.props.Vm.Text}> {_tpl}</span></span>, this.props.children]
                            : [_iicon, <span>{_codeIcon} < span onClick={() => { this.ActiveNode(); } }   title={this.props.Vm.Text}> {_tpl}</span></span>, this.props.children]

                        }
                    </a>
                    {_nodeTpl}
                    <div>{this.props.Vm.Mesg}</div>
                    {_children }
                </li >;
            }
        }


    }

    export class TreeProps extends domFile.Core.DomProps<TreeVm>  {
    }
    export class TreeNodeProps extends domFile.Core.DomProps<TreeNodeVm> {

    }
    export class TreeStates extends domFile.Core.DomStates {

    }

    export class TreeNodeTplReact extends domFile.Core.DomReact<TreeNodeTplProps, any, any> implements domFile.Core.IReact {

        public pSender(): React.ReactElement<any> {

            return React.DOM.span(null, this.props.Vm.TreeNode.Text);
        }

    }

    export class TreeNodeTplProps extends domFile.Core.DomProps<TreeNodeTplVm> {

    }

    export class TreeNodeTplVm extends domFile.Core.DomVm implements domFile.Core.IVm {
        public TreeNode: TreeNodeVm;
        public ReactType: TreeNodeTplReact;

    }

    export interface INodeSelectorFun {
        (node: TreeNodeVm): boolean;
    }
    export interface ITreeCodeTableModel {
        CODE_VALUE: string;
        CODE_TEXT: string;
        CODE_ICON?: string;
        ExtData?: IExtData;
        open?: boolean;
        Children?: Array<ITreeCodeTableModel>;
        isParent?: boolean;
        IsSelect?: boolean;
        IsDisableSelect?: boolean;
    }
    export interface IExtData {
        RightValue: string;
        Icon?: string;
        RightType?: string | number;
    }


    export interface ITreeVm {
        StyleName?: string;

        //选中取消的时候是否关联上下级节点 当然只有在多选的时候才有用
        IsYesParent?: boolean;
        IsYesChild?: boolean;

        IsNoParent?: boolean;
        IsNoChild?: boolean;

        IsMultiSelect?: boolean;

        IsOnLeafCanSelect?: boolean;

        IcoSrc?: string;

        NodeTplFun?: INodeTplFun;
        NNodeTplFun?: INNodeTplFun;
        OnExpandFun?: IOnExpandFun;
        OnActiveNodeSetValue?: IOnActiveNodeSetValue;
    }

    export class TreeVm extends domFile.Core.DomVm implements domFile.Core.IVm {
        public Roots: Array<TreeNodeVm> = new Array<TreeNodeVm>();
        public ReactType = TreeReact;
        //  public ReactTreeNodeTplRegName = "TreeNodeTplReact";
        public NodeTplFun: INodeTplFun;
        public NNodeTplFun: INNodeTplFun;
        protected pRegName = "树形";
        public SelectNodes: Array<TreeNodeVm> = new Array<TreeNodeVm>();
        public CheckNodes: TreeNodeVm[] = [];
        public IsMultiSelect: boolean;
        public Height: number = 350;//树的高度，0表示跟页面可视高度一样

        public StyleName: string = "H";//"Base"  "H"  "East"

        public ModifyNodeList: TreeNodeVm[] = [];
        public IsYesParent: boolean = false;
        public IsYesChild: boolean = false;

        public IsNoParent: boolean = false;
        public IsNoChild: boolean = false;
        public IsOnlyLeafCanSelect: boolean = false;
        public OnExpandFun: IOnExpandFun;
        public OnActiveNodeSetValue: IOnActiveNodeSetValue;

        public constructor(config?: ITreeVm) {
            super();
            if (config) {
                if (config.StyleName) {
                    this.StyleName = config.StyleName;
                }
                if (config.IsYesParent)
                    this.IsNoChild = config.IsYesParent;
                if (config.IsYesChild)
                    this.IsNoChild = config.IsYesChild;
                if (config.IsNoParent)
                    this.IsNoChild = config.IsNoParent;
                if (config.IsNoChild)
                    this.IsNoChild = config.IsNoChild;
                if (config.IsMultiSelect) {

                    this.IsMultiSelect = config.IsMultiSelect;
                }
                if (config.IsOnLeafCanSelect) {
                    this.IsOnlyLeafCanSelect = config.IsOnLeafCanSelect;
                }
                if (config.NodeTplFun) {
                    this.NodeTplFun = config.NodeTplFun;
                }
                if (config.NNodeTplFun) {
                    this.NNodeTplFun = config.NNodeTplFun;
                }
                if (config.OnExpandFun) {
                    this.OnExpandFun = config.OnExpandFun;
                }
                if (config.OnActiveNodeSetValue) {
                    this.OnActiveNodeSetValue = config.OnActiveNodeSetValue;
                }
            }

        }


        public updateModify() {
            this.ModifyNodeList.forEach((n) => {
                //n.IsChange = true;
                // n.IsMulit = true;
                n.forceUpdate("");
            });

            this.ModifyNodeList = [];

        }

        public pushModifyNode(node: TreeNodeVm) {
            var _isN: boolean = false;
            for (var i = 0; i < this.ModifyNodeList.length; i++) {
                if (node == this.ModifyNodeList[i]) {
                    _isN = true;
                    break;
                }
            }
            if (!_isN) {
                this.ModifyNodeList.push(node);
            }
        }

        public pushSelectNode(nodeVm: TreeNodeVm) {
            var _len = this.SelectNodes.length;
            var _has: boolean = false;
            for (var i: number = 0; i < _len; i++) {
                if (this.SelectNodes[_len] == nodeVm) {
                    _has = true;
                    break;
                }
            }

            if (!_has) {
                this.SelectNodes.push(nodeVm);
            }
        }


        public onReactNodeClick(fun: INodeSelectorFun) {
            this.getEmit().addListener("node_click", fun);
        }
        public appendToNode(nodeVM: ITreeCodeTableModel, parentNode: TreeNodeVm): TreeNodeVm
        {
            var _node = this.fToNode(nodeVM);
            _node.ParentNodeVm = parentNode;
            if (!parentNode.Children) parentNode.Children = [];
            parentNode.Children.push(_node);
            if (nodeVM.Children) {
                nodeVM.Children.forEach((a) => {
                    this.appendToNode(a, _node);
                });
            }
            return _node;
        }

        private fToNode(nodeVM: ITreeCodeTableModel): TreeNodeVm
        {
            var _node: TreeNodeVm = new TreeNodeVm();
            _node.TreeObj = this;
            _node.Value = nodeVM.CODE_VALUE.trim();
            _node.Text = nodeVM.CODE_TEXT;

            _node.ExtendObj = nodeVM.ExtData;
            _node.NoExpand = !nodeVM.open;
            _node.IsParent = nodeVM.isParent;
            _node.IsActive = nodeVM.IsSelect;
            _node.IsDisableSelect = nodeVM.IsDisableSelect;
            _node.ExtData = nodeVM.ExtData;

            if (this.OnExpandFun) {
                _node.OnExpandFun = this.OnExpandFun;
            }
            if (this.OnActiveNodeSetValue) {
                _node.OnActiveNodeSetValue = this.OnActiveNodeSetValue;
            }

            if (this.IsOnlyLeafCanSelect && !_node.IsDisableSelect) {
                if (_node.IsParent || (nodeVM.Children && nodeVM.Children.length > 0)) {
                    _node.IsDisableSelect = true;
                }
             }
            return _node;
        }

        public initTreeVm(nodeVM: ITreeCodeTableModel) {
            this.Roots = [];
            this.SelectNodes = [];
            this.ModifyNodeList = [];
            this.CheckNodes = [];
            var _node: TreeNodeVm = this.fToNode(nodeVM);
           // if (nodeVM.is)
            if (nodeVM.CODE_VALUE != "0") {
                this.Roots = [_node];
                _node.IsRoot = true;
            }

            if (nodeVM.Children != null && nodeVM.Children.length > 0) {
                _node.IsParent = true;
                nodeVM.Children.forEach((
                    _n => {
                        //if (node.CODE_VALUE == "0") {
                        //    this.Roots.push(_n);
                        //}
                        this.fInitTreeVm(_n, _node);
                        _node.IsRoot = true;
                    }
                ));
            }
        }

        private fInitTreeVm(nodeVm: ITreeCodeTableModel, pNode: TreeNodeVm) {
            var _node: TreeNodeVm = this.fToNode(nodeVm);

            if (pNode.Value == "0") {
                this.Roots.push(_node);
                _node.IsRoot = true;
            }
            pNode.Children.push(_node);
            _node.ParentNodeVm = pNode;
            if (nodeVm.Children != null && nodeVm.Children.length > 0) {
                _node.IsParent = true;
                nodeVm.Children.forEach((
                    _n => {
                        
                        this.fInitTreeVm(_n, _node);
                    }
                ));
            }
        }

        public GetNodeByFun(nodevm: TreeNodeVm, nodeSelectorFun: INodeSelectorFun): TreeNodeVm {
            //alert(1);
            // if (key == node.Value) {
            if (nodeSelectorFun(nodevm)) {

                return nodevm;
            }
            else {
                if (nodevm.Children != null && nodevm.Children.length > 0) {
                    for (var i: number = 0; i < nodevm.Children.length; i++) {
                        var a = nodevm.Children[i];
                        var _node = this.GetNodeByFun(a, nodeSelectorFun);
                        if (_node != null) {
                            return _node;
                        }
                    }

                }
                else
                    return null;
            }

            // return null;
        }

        public getNodeByFunRoot(nodeSelectorFun: INodeSelectorFun) {
            var _res: Array<TreeNodeVm> = new Array<TreeNodeVm>();

            this.Roots.forEach((root) => {

                var _node = this.GetNodeByFun(root, nodeSelectorFun);
                if (_node != null) {
                    _res.push(_node);
                }

            })




            return _res;
        }

        public getNodeByKey(keys: Array<string>): Array<TreeNodeVm> {

            var _res: Array<TreeNodeVm> = new Array<TreeNodeVm>();
            keys.forEach((a) => {
                this.Roots.forEach((root) => {

                    var _node = this.GetNodeByFun(root, (node) => {
                        return node.Value == a;
                    });
                    if (_node != null) {
                        _res.push(_node);
                    }

                })

            });


            return _res;
        }


        public ExpandParent(vm: TreeNodeVm) {
            vm.IsChange = true;
            vm.NoExpand = false;
            if (vm.ParentNodeVm) {
                this.ExpandParent(vm.ParentNodeVm);
            }
        }

        //当前节点不需要展开，只展开父节点
        public pExpandParent(vm: TreeNodeVm, noExpand: boolean) {
            vm.IsChange = true;
            vm.NoExpand = noExpand;
            if (vm.ParentNodeVm) {
                this.pExpandParent(vm.ParentNodeVm, false);
            }
        }

        public shrinkRoots()
        {
            this.Roots.forEach((root) => {
                root.IsHide = false;
                root.IsActive = false;
                root.NoExpand = true;
                // root.forceUpdate("");
                this.pushModifyNode(root);
            });
            
        }

        public resetRootNode()
        {
            this.SelectNodes.forEach((r) => {
                r.IsActive = false;
                r.IsChildCheck = false;

                r.checkParentCheckToFalse(r);
                this.pushModifyNode(r);
            });
            this.Roots.forEach((root) => {
                root.IsHide = false;
                root.IsActive = false;
                root.NoExpand = true;
               // root.forceUpdate("");
                this.pushModifyNode(root);
            });
            
            //this.ModifyNodeList.forEach((n) => {
            //    //n.IsChange = true;
            //    // n.IsMulit = true;
            //    n.forceUpdate("");
            //});

            // this.ModifyNodeList = [];
            this.updateModify();
            this.forceUpdate("");
        }

        public ExpandNode(nodeSelectorFun: INodeSelectorFun, isSubmit: boolean) {
            var _res: Array<TreeNodeVm> = new Array<TreeNodeVm>();
            //  this.SelectNodes = null;
            this.Roots.forEach((root) => {

                var _node = this.GetNodeByFun(root, nodeSelectorFun);
                if (_node != null) {
                    root.IsHide = false;
                    _res.push(_node);
                } else {
                    root.IsHide = true;
                }

            })

            //if (_res.length == 0) {
            //    this.Roots.forEach((root) => {
            //        root.IsHide = false;
            //    });
            //}

            _res.forEach((node) => {
                this.SelectNodes.push(node);
                // node.IsActive = true;
                if (!node.IsActive) {
                    node.Active();
                }
                this.ExpandParent(node);

            });
            if (isSubmit) {
                this.forceUpdate("");
            }
            return _res;
        }

    }

    export interface INodeTplFun {
        (nodeVm: TreeNodeVm): React.ReactElement<any>[]
    }

    export interface INNodeTplFun {
        (nodeVm: TreeNodeVm): React.ReactElement<any>[]
    }


    export interface IOnExpandFun {
        (nodeVm: TreeNodeVm): void
    }

    export interface IOnActiveNodeSetValue {
        (nodeVm: TreeNodeVm): void
    }

    export class TreeNodeVm extends domFile.Core.DomVm implements domFile.Core.IVm {
        public ReactType = TreeNodeReact;
        public Text: string;
        public Mesg: string;
        public Value: string;
        public NoLeaf: boolean;
        public ItemType: string;
        public NoExpand: boolean = true;
        public IsActive: boolean;
        public Children: Array<TreeNodeVm> = new Array<TreeNodeVm>();
        protected pRegName = "树节点";
        public TreeObj: TreeVm;
        public ExtendObj: any;
        public IsRoot: boolean;
        // public TplName: string = "";
        public ParentNodeVm: TreeNodeVm;
        public IsHide: boolean = false;
        public IsParent: boolean;
        public OnExpandFun: IOnExpandFun;

        public OnActiveNodeSetValue: IOnActiveNodeSetValue;
        public ParentId: string;
        public IsDisableSelect: boolean ;
        public NodeIcoSrc: string;
        public ExtData: IExtData;

        public updateModify() {
            this.TreeObj.updateModify();

        }

        public pushModifyNode(node: TreeNodeVm) {
            this.TreeObj.pushModifyNode(node);
        }


        public IsChildCheck: boolean = false;



        public GetNodeKeyByFun(fun: { (nodevm: TreeNodeVm): boolean }): TreeNodeVm {
            if (fun(this)) {
                return this;
            }
            else {
                if (this.Children.length > 0) {
                    return this.Children[0].GetNodeKeyByFun(fun);
                }
                else
                    return this;
            }
        }

        public Expand() {
            if (this.OnExpandFun && this.Children.length == 0) {
                this.OnExpandFun(this);
            }
            this.NoExpand = !this.NoExpand;
            super.forceUpdate("");
        }

        private checkParentCheckToTrue(node: TreeNodeVm) {
            if (node.ParentNodeVm) {
                var _old: boolean = node.ParentNodeVm.IsChildCheck;
                if (!_old) {
                    node.ParentNodeVm.IsChildCheck = true;
                    this.pushModifyNode(node.ParentNodeVm);
                }
                this.checkParentCheckToTrue(node.ParentNodeVm);
            }
        }

        //取消一下父节点 拥有 的效果
        public checkParentCheckToFalse(node: TreeNodeVm)
        {
            if (node.ParentNodeVm) {
                var _old: boolean = node.ParentNodeVm.IsChildCheck;
                if (_old) {
                    node.ParentNodeVm.IsChildCheck = false;
                    this.pushModifyNode(node.ParentNodeVm);
                }
                this.checkParentCheckToFalse(node.ParentNodeVm);
            }
        }

        private checkParentVmCheck(nodevm: TreeNodeVm, isCheck: boolean) {
            if (nodevm.ParentNodeVm) {
                nodevm.ParentNodeVm.IsChildCheck = isCheck;
                nodevm.IsChildCheck = isCheck;
                if (this.TreeObj.IsMultiSelect) {
                    //选中的时候 关联父节点
                    if (this.TreeObj.IsYesParent && isCheck) {   
                        nodevm.ParentNodeVm.IsActive = isCheck;

                        this.TreeObj.pushSelectNode(nodevm.ParentNodeVm);
                        
                    } else {
                        if (this.TreeObj.IsNoParent && (!isCheck)) {
                            nodevm.ParentNodeVm.IsActive = isCheck;
                            this.TreeObj.SelectNodes = this.TreeObj.SelectNodes.filter((a) => {
                                    return a != nodevm.ParentNodeVm
                                });
                        }
                    }
                }

                this.pushModifyNode(nodevm.ParentNodeVm);
                this.checkParentVmCheck(nodevm.ParentNodeVm, isCheck);
            }
        }

        private checkChildrenVm(nodevm: TreeNodeVm, isCheck: boolean) {
            if (nodevm.Children) {
                //-------
                nodevm.Children.forEach((n) => {
                    var _old: boolean = n.IsActive;
                    n.IsActive = isCheck;
                    n.IsChildCheck = isCheck;
                    if (isCheck) {
                        this.TreeObj.pushSelectNode(n);
                    }

                    if (_old != isCheck) {
                        this.pushModifyNode(n);
                    }
                    this.checkChildrenVm(n, isCheck);
                });
            }
        }

        private fWillYesActive_Multi() {
            //选中节点的设置 
            this.IsActive = true;
            this.pushModifyNode(this);

            this.TreeObj.SelectNodes.push(this);
            this.checkParentVmCheck(this, true);
            if (this.TreeObj.IsMultiSelect && this.TreeObj.IsYesChild) {
                this.checkChildrenVm(this, true);
            }
            this.updateModify();
        }

       

        private fWillNoActive_Multi() {
            this.IsActive = false;
            this.IsChildCheck = false;

            this.checkParentVmCheck(this, false);

            this.pushModifyNode(this);

            //取消结点 更新
            this.TreeObj.SelectNodes = this.TreeObj.SelectNodes.filter((a) => {
                return a != this
            });

           

            if (this.TreeObj.IsMultiSelect && this.TreeObj.IsNoChild) {
                this.checkChildrenVm(this, false);
            }

            //不考虑取消关联，对选中的重新设置一下父节点
            this.TreeObj.SelectNodes.forEach((n) => {
                n.checkParentCheckToTrue(n);
            });

            this.updateModify();

        }




        private fWillYesActive_Single() {
            //取消所有的节点

            this.TreeObj.SelectNodes.forEach((se) => {
                se.IsActive = false;
                se.IsChildCheck = false;
                this.pushModifyNode(se);
                //上级节点也取消
                this.checkParentCheckToFalse(se);
            });


            //选中节点的设置 
            this.IsActive = true;
            this.pushModifyNode(this);
            
            this.TreeObj.SelectNodes = [this];
            this.checkParentVmCheck(this, true);
            this.updateModify();

        }

        private fWillNoActive_Single() {

            this.TreeObj.SelectNodes.forEach((se) => {
                se.IsActive = false;
                se.IsChildCheck = false;

                this.checkParentCheckToFalse(se);

                this.pushModifyNode(se);
            });

            this.IsActive = false;
            this.IsChildCheck = false;

            this.checkParentCheckToFalse(this);
            this.pushModifyNode(this);

            
            this.TreeObj.SelectNodes = [];
            this.updateModify();
        }


        public Active() {
            if (this.IsActive) {
                //取消

                if (!this.TreeObj.IsMultiSelect) {
                    this.fWillNoActive_Single();
                }
                else {
                    this.fWillNoActive_Multi();
                }

            } else {
                //选中
                if (!this.TreeObj.IsMultiSelect) {
                    this.fWillYesActive_Single();
                }
                else {
                    this.fWillYesActive_Multi();
                    //开始做关联......

                }

            }

        }

        private setParentVmCheck(nodevm: TreeNodeVm) {
            if (nodevm.ParentNodeVm) {
                var _old = nodevm.ParentNodeVm.IsChildCheck;
                nodevm.ParentNodeVm.IsChildCheck = nodevm.IsActive;
                nodevm.ParentNodeVm.IsChildCheck = false;
                nodevm.ParentNodeVm.Children.forEach((n) => {
                    if (n.IsActive || n.IsChildCheck) {
                        nodevm.ParentNodeVm.IsChildCheck = true;
                    }
                });

                if (_old != nodevm.ParentNodeVm.IsChildCheck) {
                    nodevm.ParentNodeVm.forceUpdate("");
                }

                this.setParentVmCheck(nodevm.ParentNodeVm);
            }
        }

        public hideElseRootNode(isSubmit: boolean) {
            this.fFindRootNode(this);
            if (isSubmit) {
                this.forceUpdate("");
            }
        }

        public findRoot(nodevm: TreeNodeVm): TreeNodeVm{
            if (nodevm.IsRoot)
                return nodevm;
            if (nodevm.ParentNodeVm) {
                if (nodevm.ParentNodeVm.IsRoot)
                    return nodevm.ParentNodeVm;
                else {
                    return this.findRoot(nodevm.ParentNodeVm);
                }
            }
            else {
                if (nodevm.IsRoot)
                    return nodevm;
                else {
                    return null;
                }
            }
        }

        private fFindRootNode(nodevm: TreeNodeVm) {
            if (!nodevm.IsRoot) {
                if (nodevm.ParentNodeVm) {
                    if (nodevm.ParentNodeVm.IsRoot) {
                        nodevm.ParentNodeVm.IsHide = false;
                        nodevm.TreeObj.Roots.forEach((a) => {
                            if (a != nodevm.ParentNodeVm) {
                                a.IsHide = true;
                            }
                        });
                    }
                    else {
                        this.fFindRootNode(nodevm.ParentNodeVm);
                    }
                }
            }
            else {
                nodevm.IsHide = false;
                nodevm.TreeObj.Roots.forEach((a) => {
                    if (a != nodevm) {
                        a.IsHide = true;
                    }
                });
            }
        }

    }
}