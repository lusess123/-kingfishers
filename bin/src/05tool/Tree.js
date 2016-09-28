var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        var TreeAction = (function (_super) {
            __extends(TreeAction, _super);
            function TreeAction() {
                _super.apply(this, arguments);
            }
            return TreeAction;
        }(domFile.Core.DomAction));
        ui.TreeAction = TreeAction;
        var TreeReact = (function (_super) {
            __extends(TreeReact, _super);
            function TreeReact() {
                _super.apply(this, arguments);
                this.pIsSetScreenMaxHeight = true;
                this.pIsSetScreenHeight = true;
            }
            TreeReact.prototype.pSender = function () {
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
            };
            TreeReact.prototype.h_ulSend = function (className) {
                var _ul = React.createElement("ul", {className: "nav " + className}, this.props.Vm.Roots.map(function (a, i) {
                    if (!a.IsHide) {
                        return a.intoDom(i);
                    }
                }));
                return React.createElement("div", {className: "Hc-tree-naiv Hz-scroll", key: this.props.Vm.key, style: {
                    "overflowY": "auto"
                }}, _ul);
            };
            TreeReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                this._resizeFun = function () {
                    _this.forceUpdate();
                };
                $(window).bind("resize", this._resizeFun);
                //$(window).bind("resize", (a) => {
                //    alert(a);
                //})
            };
            TreeReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                if (this._resizeFun) {
                    $(window).unbind("resize", this._resizeFun);
                }
            };
            return TreeReact;
        }(domFile.Core.DomReact));
        ui.TreeReact = TreeReact;
        var TreeNodeReact = (function (_super) {
            __extends(TreeNodeReact, _super);
            function TreeNodeReact() {
                _super.apply(this, arguments);
            }
            TreeNodeReact.prototype.ExpandClick = function () {
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
                }
                else {
                    if (this.props.Vm.IsParent) {
                        this.props.Vm.Expand();
                    }
                }
                this.props.Vm.TreeObj.forceUpdate("");
            };
            TreeNodeReact.prototype.ActiveNode = function () {
                if (!this.props.Vm.IsDisableSelect) {
                    var _vm = this.props.Vm;
                    _vm.Active();
                    //广播选中
                    var _ac = new TreeAction();
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
            };
            TreeNodeReact.prototype.pSender = function () {
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
            };
            TreeNodeReact.prototype.className_getChildCheck = function () {
                return this.props.Vm.IsChildCheck ? " Hz-checked" : " ";
            };
            TreeNodeReact.prototype.h_Send = function (s, className) {
                var _this = this;
                var _tpl = this.props.Vm.TreeObj.NodeTplFun ? this.props.Vm.TreeObj.NodeTplFun(this.props.Vm) : [this.props.Vm.Text];
                var _nodeTpl = this.props.Vm.TreeObj.NNodeTplFun ? this.props.Vm.TreeObj.NNodeTplFun(this.props.Vm) : null;
                var _isLeaf = !this.props.Vm.IsParent; //this.props.Vm.Children.length == 0;
                var _i = React.createElement("i", {className: !this.props.Vm.NoExpand ? " icon-minus-sign fa fa-minus-circle" : " icon-minus-sign  fa fa-plus-circle", onClick: function (e) { _this.ExpandClick(); }});
                var _ii = React.createElement("i", {className: (this.props.Vm.NodeIcoSrc)});
                var _icon = _isLeaf ? _ii : _ii;
                var _iicon = _isLeaf ? "" : _i;
                var _ul = React.createElement("ul", {className: "nav nav-1 " + (!this.props.Vm.NoExpand ? "" : "hide")}, this.props.Vm.Children.map(function (a, i) {
                    return a.intoDom(i);
                }));
                var _children = _isLeaf ? null : _ul;
                var _codeIcon = React.createElement("i", {className: this.props.Vm.ExtData ? this.props.Vm.ExtData.Icon : ""});
                var _c = ((this.props.Vm.IsActive ? "active Hz-checked" : "") + "  Hu-pointer Hu-title" + (_isLeaf ? " acsTreeNaivTitleBg " : "")) + (this.className_getChildCheck()) + (this.props.Vm.IsDisableSelect ? " Hz-disabled" : " ");
                var _isEast = this.props.Vm.TreeObj.StyleName == "East";
                if (!this.props.Vm.TreeObj.NodeTplFun) {
                    return React.createElement("li", {className: className, key: this.props.Vm.key}, React.createElement("a", {className: _c + " text-center"}, _isEast ?
                        [_icon, React.createElement("span", null, _codeIcon, React.createElement("span", {onClick: function () { _this.ActiveNode(); }, title: this.props.Vm.Text, dangerouslySetInnerHTML: { __html: this.props.Vm.Text }})), this.props.children]
                        : [_iicon, React.createElement("span", null, _codeIcon, " ", React.createElement("span", {onClick: function () { _this.ActiveNode(); }, title: this.props.Vm.Text, dangerouslySetInnerHTML: { __html: this.props.Vm.Text }})), this.props.children]), _nodeTpl, React.createElement("div", null, this.props.Vm.Mesg), _children);
                }
                else {
                    return React.createElement("li", {className: className, key: this.props.Vm.key}, React.createElement("a", {className: _c}, _isEast ?
                        [_icon, React.createElement("span", null, _codeIcon, React.createElement("span", {onClick: function () { _this.ActiveNode(); }, title: this.props.Vm.Text}, " ", _tpl)), this.props.children]
                        : [_iicon, React.createElement("span", null, _codeIcon, " ", React.createElement("span", {onClick: function () { _this.ActiveNode(); }, title: this.props.Vm.Text}, " ", _tpl)), this.props.children]), _nodeTpl, React.createElement("div", null, this.props.Vm.Mesg), _children);
                }
            };
            return TreeNodeReact;
        }(domFile.Core.DomReact));
        ui.TreeNodeReact = TreeNodeReact;
        var TreeProps = (function (_super) {
            __extends(TreeProps, _super);
            function TreeProps() {
                _super.apply(this, arguments);
            }
            return TreeProps;
        }(domFile.Core.DomProps));
        ui.TreeProps = TreeProps;
        var TreeNodeProps = (function (_super) {
            __extends(TreeNodeProps, _super);
            function TreeNodeProps() {
                _super.apply(this, arguments);
            }
            return TreeNodeProps;
        }(domFile.Core.DomProps));
        ui.TreeNodeProps = TreeNodeProps;
        var TreeStates = (function (_super) {
            __extends(TreeStates, _super);
            function TreeStates() {
                _super.apply(this, arguments);
            }
            return TreeStates;
        }(domFile.Core.DomStates));
        ui.TreeStates = TreeStates;
        var TreeNodeTplReact = (function (_super) {
            __extends(TreeNodeTplReact, _super);
            function TreeNodeTplReact() {
                _super.apply(this, arguments);
            }
            TreeNodeTplReact.prototype.pSender = function () {
                return React.DOM.span(null, this.props.Vm.TreeNode.Text);
            };
            return TreeNodeTplReact;
        }(domFile.Core.DomReact));
        ui.TreeNodeTplReact = TreeNodeTplReact;
        var TreeNodeTplProps = (function (_super) {
            __extends(TreeNodeTplProps, _super);
            function TreeNodeTplProps() {
                _super.apply(this, arguments);
            }
            return TreeNodeTplProps;
        }(domFile.Core.DomProps));
        ui.TreeNodeTplProps = TreeNodeTplProps;
        var TreeNodeTplVm = (function (_super) {
            __extends(TreeNodeTplVm, _super);
            function TreeNodeTplVm() {
                _super.apply(this, arguments);
            }
            return TreeNodeTplVm;
        }(domFile.Core.DomVm));
        ui.TreeNodeTplVm = TreeNodeTplVm;
        var TreeVm = (function (_super) {
            __extends(TreeVm, _super);
            function TreeVm(config) {
                _super.call(this);
                this.Roots = new Array();
                this.ReactType = TreeReact;
                this.pRegName = "树形";
                this.SelectNodes = new Array();
                this.CheckNodes = [];
                this.Height = 350; //树的高度，0表示跟页面可视高度一样
                this.StyleName = "H"; //"Base"  "H"  "East"
                this.ModifyNodeList = [];
                this.IsYesParent = false;
                this.IsYesChild = false;
                this.IsNoParent = false;
                this.IsNoChild = false;
                this.IsOnlyLeafCanSelect = false;
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
            TreeVm.prototype.updateModify = function () {
                this.ModifyNodeList.forEach(function (n) {
                    //n.IsChange = true;
                    // n.IsMulit = true;
                    n.forceUpdate("");
                });
                this.ModifyNodeList = [];
            };
            TreeVm.prototype.pushModifyNode = function (node) {
                var _isN = false;
                for (var i = 0; i < this.ModifyNodeList.length; i++) {
                    if (node == this.ModifyNodeList[i]) {
                        _isN = true;
                        break;
                    }
                }
                if (!_isN) {
                    this.ModifyNodeList.push(node);
                }
            };
            TreeVm.prototype.pushSelectNode = function (nodeVm) {
                var _len = this.SelectNodes.length;
                var _has = false;
                for (var i = 0; i < _len; i++) {
                    if (this.SelectNodes[_len] == nodeVm) {
                        _has = true;
                        break;
                    }
                }
                if (!_has) {
                    this.SelectNodes.push(nodeVm);
                }
            };
            TreeVm.prototype.onReactNodeClick = function (fun) {
                this.getEmit().addListener("node_click", fun);
            };
            TreeVm.prototype.appendToNode = function (nodeVM, parentNode) {
                var _this = this;
                var _node = this.fToNode(nodeVM);
                _node.ParentNodeVm = parentNode;
                if (!parentNode.Children)
                    parentNode.Children = [];
                parentNode.Children.push(_node);
                if (nodeVM.Children) {
                    nodeVM.Children.forEach(function (a) {
                        _this.appendToNode(a, _node);
                    });
                }
                return _node;
            };
            TreeVm.prototype.fToNode = function (nodeVM) {
                var _node = new TreeNodeVm();
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
            };
            TreeVm.prototype.initTreeVm = function (nodeVM) {
                var _this = this;
                this.Roots = [];
                this.SelectNodes = [];
                this.ModifyNodeList = [];
                this.CheckNodes = [];
                var _node = this.fToNode(nodeVM);
                // if (nodeVM.is)
                if (nodeVM.CODE_VALUE != "0") {
                    this.Roots = [_node];
                    _node.IsRoot = true;
                }
                if (nodeVM.Children != null && nodeVM.Children.length > 0) {
                    _node.IsParent = true;
                    nodeVM.Children.forEach((function (_n) {
                        //if (node.CODE_VALUE == "0") {
                        //    this.Roots.push(_n);
                        //}
                        _this.fInitTreeVm(_n, _node);
                        _node.IsRoot = true;
                    }));
                }
            };
            TreeVm.prototype.fInitTreeVm = function (nodeVm, pNode) {
                var _this = this;
                var _node = this.fToNode(nodeVm);
                if (pNode.Value == "0") {
                    this.Roots.push(_node);
                    _node.IsRoot = true;
                }
                pNode.Children.push(_node);
                _node.ParentNodeVm = pNode;
                if (nodeVm.Children != null && nodeVm.Children.length > 0) {
                    _node.IsParent = true;
                    nodeVm.Children.forEach((function (_n) {
                        _this.fInitTreeVm(_n, _node);
                    }));
                }
            };
            TreeVm.prototype.GetNodeByFun = function (nodevm, nodeSelectorFun) {
                //alert(1);
                // if (key == node.Value) {
                if (nodeSelectorFun(nodevm)) {
                    return nodevm;
                }
                else {
                    if (nodevm.Children != null && nodevm.Children.length > 0) {
                        for (var i = 0; i < nodevm.Children.length; i++) {
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
            };
            TreeVm.prototype.getNodeByFunRoot = function (nodeSelectorFun) {
                var _this = this;
                var _res = new Array();
                this.Roots.forEach(function (root) {
                    var _node = _this.GetNodeByFun(root, nodeSelectorFun);
                    if (_node != null) {
                        _res.push(_node);
                    }
                });
                return _res;
            };
            TreeVm.prototype.getNodeByKey = function (keys) {
                var _this = this;
                var _res = new Array();
                keys.forEach(function (a) {
                    _this.Roots.forEach(function (root) {
                        var _node = _this.GetNodeByFun(root, function (node) {
                            return node.Value == a;
                        });
                        if (_node != null) {
                            _res.push(_node);
                        }
                    });
                });
                return _res;
            };
            TreeVm.prototype.ExpandParent = function (vm) {
                vm.IsChange = true;
                vm.NoExpand = false;
                if (vm.ParentNodeVm) {
                    this.ExpandParent(vm.ParentNodeVm);
                }
            };
            //当前节点不需要展开，只展开父节点
            TreeVm.prototype.pExpandParent = function (vm, noExpand) {
                vm.IsChange = true;
                vm.NoExpand = noExpand;
                if (vm.ParentNodeVm) {
                    this.pExpandParent(vm.ParentNodeVm, false);
                }
            };
            TreeVm.prototype.shrinkRoots = function () {
                var _this = this;
                this.Roots.forEach(function (root) {
                    root.IsHide = false;
                    root.IsActive = false;
                    root.NoExpand = true;
                    // root.forceUpdate("");
                    _this.pushModifyNode(root);
                });
            };
            TreeVm.prototype.resetRootNode = function () {
                var _this = this;
                this.SelectNodes.forEach(function (r) {
                    r.IsActive = false;
                    r.IsChildCheck = false;
                    r.checkParentCheckToFalse(r);
                    _this.pushModifyNode(r);
                });
                this.Roots.forEach(function (root) {
                    root.IsHide = false;
                    root.IsActive = false;
                    root.NoExpand = true;
                    // root.forceUpdate("");
                    _this.pushModifyNode(root);
                });
                //this.ModifyNodeList.forEach((n) => {
                //    //n.IsChange = true;
                //    // n.IsMulit = true;
                //    n.forceUpdate("");
                //});
                // this.ModifyNodeList = [];
                this.updateModify();
                this.forceUpdate("");
            };
            TreeVm.prototype.ExpandNode = function (nodeSelectorFun, isSubmit) {
                var _this = this;
                var _res = new Array();
                //  this.SelectNodes = null;
                this.Roots.forEach(function (root) {
                    var _node = _this.GetNodeByFun(root, nodeSelectorFun);
                    if (_node != null) {
                        root.IsHide = false;
                        _res.push(_node);
                    }
                    else {
                        root.IsHide = true;
                    }
                });
                //if (_res.length == 0) {
                //    this.Roots.forEach((root) => {
                //        root.IsHide = false;
                //    });
                //}
                _res.forEach(function (node) {
                    _this.SelectNodes.push(node);
                    // node.IsActive = true;
                    if (!node.IsActive) {
                        node.Active();
                    }
                    _this.ExpandParent(node);
                });
                if (isSubmit) {
                    this.forceUpdate("");
                }
                return _res;
            };
            return TreeVm;
        }(domFile.Core.DomVm));
        ui.TreeVm = TreeVm;
        var TreeNodeVm = (function (_super) {
            __extends(TreeNodeVm, _super);
            function TreeNodeVm() {
                _super.apply(this, arguments);
                this.ReactType = TreeNodeReact;
                this.NoExpand = true;
                this.Children = new Array();
                this.pRegName = "树节点";
                this.IsHide = false;
                this.IsChildCheck = false;
            }
            TreeNodeVm.prototype.updateModify = function () {
                this.TreeObj.updateModify();
            };
            TreeNodeVm.prototype.pushModifyNode = function (node) {
                this.TreeObj.pushModifyNode(node);
            };
            TreeNodeVm.prototype.GetNodeKeyByFun = function (fun) {
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
            };
            TreeNodeVm.prototype.Expand = function () {
                if (this.OnExpandFun && this.Children.length == 0) {
                    this.OnExpandFun(this);
                }
                this.NoExpand = !this.NoExpand;
                _super.prototype.forceUpdate.call(this, "");
            };
            TreeNodeVm.prototype.checkParentCheckToTrue = function (node) {
                if (node.ParentNodeVm) {
                    var _old = node.ParentNodeVm.IsChildCheck;
                    if (!_old) {
                        node.ParentNodeVm.IsChildCheck = true;
                        this.pushModifyNode(node.ParentNodeVm);
                    }
                    this.checkParentCheckToTrue(node.ParentNodeVm);
                }
            };
            //取消一下父节点 拥有 的效果
            TreeNodeVm.prototype.checkParentCheckToFalse = function (node) {
                if (node.ParentNodeVm) {
                    var _old = node.ParentNodeVm.IsChildCheck;
                    if (_old) {
                        node.ParentNodeVm.IsChildCheck = false;
                        this.pushModifyNode(node.ParentNodeVm);
                    }
                    this.checkParentCheckToFalse(node.ParentNodeVm);
                }
            };
            TreeNodeVm.prototype.checkParentVmCheck = function (nodevm, isCheck) {
                if (nodevm.ParentNodeVm) {
                    nodevm.ParentNodeVm.IsChildCheck = isCheck;
                    nodevm.IsChildCheck = isCheck;
                    if (this.TreeObj.IsMultiSelect) {
                        //选中的时候 关联父节点
                        if (this.TreeObj.IsYesParent && isCheck) {
                            nodevm.ParentNodeVm.IsActive = isCheck;
                            this.TreeObj.pushSelectNode(nodevm.ParentNodeVm);
                        }
                        else {
                            if (this.TreeObj.IsNoParent && (!isCheck)) {
                                nodevm.ParentNodeVm.IsActive = isCheck;
                                this.TreeObj.SelectNodes = this.TreeObj.SelectNodes.filter(function (a) {
                                    return a != nodevm.ParentNodeVm;
                                });
                            }
                        }
                    }
                    this.pushModifyNode(nodevm.ParentNodeVm);
                    this.checkParentVmCheck(nodevm.ParentNodeVm, isCheck);
                }
            };
            TreeNodeVm.prototype.checkChildrenVm = function (nodevm, isCheck) {
                var _this = this;
                if (nodevm.Children) {
                    //-------
                    nodevm.Children.forEach(function (n) {
                        var _old = n.IsActive;
                        n.IsActive = isCheck;
                        n.IsChildCheck = isCheck;
                        if (isCheck) {
                            _this.TreeObj.pushSelectNode(n);
                        }
                        if (_old != isCheck) {
                            _this.pushModifyNode(n);
                        }
                        _this.checkChildrenVm(n, isCheck);
                    });
                }
            };
            TreeNodeVm.prototype.fWillYesActive_Multi = function () {
                //选中节点的设置 
                this.IsActive = true;
                this.pushModifyNode(this);
                this.TreeObj.SelectNodes.push(this);
                this.checkParentVmCheck(this, true);
                if (this.TreeObj.IsMultiSelect && this.TreeObj.IsYesChild) {
                    this.checkChildrenVm(this, true);
                }
                this.updateModify();
            };
            TreeNodeVm.prototype.fWillNoActive_Multi = function () {
                var _this = this;
                this.IsActive = false;
                this.IsChildCheck = false;
                this.checkParentVmCheck(this, false);
                this.pushModifyNode(this);
                //取消结点 更新
                this.TreeObj.SelectNodes = this.TreeObj.SelectNodes.filter(function (a) {
                    return a != _this;
                });
                if (this.TreeObj.IsMultiSelect && this.TreeObj.IsNoChild) {
                    this.checkChildrenVm(this, false);
                }
                //不考虑取消关联，对选中的重新设置一下父节点
                this.TreeObj.SelectNodes.forEach(function (n) {
                    n.checkParentCheckToTrue(n);
                });
                this.updateModify();
            };
            TreeNodeVm.prototype.fWillYesActive_Single = function () {
                //取消所有的节点
                var _this = this;
                this.TreeObj.SelectNodes.forEach(function (se) {
                    se.IsActive = false;
                    se.IsChildCheck = false;
                    _this.pushModifyNode(se);
                    //上级节点也取消
                    _this.checkParentCheckToFalse(se);
                });
                //选中节点的设置 
                this.IsActive = true;
                this.pushModifyNode(this);
                this.TreeObj.SelectNodes = [this];
                this.checkParentVmCheck(this, true);
                this.updateModify();
            };
            TreeNodeVm.prototype.fWillNoActive_Single = function () {
                var _this = this;
                this.TreeObj.SelectNodes.forEach(function (se) {
                    se.IsActive = false;
                    se.IsChildCheck = false;
                    _this.checkParentCheckToFalse(se);
                    _this.pushModifyNode(se);
                });
                this.IsActive = false;
                this.IsChildCheck = false;
                this.checkParentCheckToFalse(this);
                this.pushModifyNode(this);
                this.TreeObj.SelectNodes = [];
                this.updateModify();
            };
            TreeNodeVm.prototype.Active = function () {
                if (this.IsActive) {
                    //取消
                    if (!this.TreeObj.IsMultiSelect) {
                        this.fWillNoActive_Single();
                    }
                    else {
                        this.fWillNoActive_Multi();
                    }
                }
                else {
                    //选中
                    if (!this.TreeObj.IsMultiSelect) {
                        this.fWillYesActive_Single();
                    }
                    else {
                        this.fWillYesActive_Multi();
                    }
                }
            };
            TreeNodeVm.prototype.setParentVmCheck = function (nodevm) {
                if (nodevm.ParentNodeVm) {
                    var _old = nodevm.ParentNodeVm.IsChildCheck;
                    nodevm.ParentNodeVm.IsChildCheck = nodevm.IsActive;
                    nodevm.ParentNodeVm.IsChildCheck = false;
                    nodevm.ParentNodeVm.Children.forEach(function (n) {
                        if (n.IsActive || n.IsChildCheck) {
                            nodevm.ParentNodeVm.IsChildCheck = true;
                        }
                    });
                    if (_old != nodevm.ParentNodeVm.IsChildCheck) {
                        nodevm.ParentNodeVm.forceUpdate("");
                    }
                    this.setParentVmCheck(nodevm.ParentNodeVm);
                }
            };
            TreeNodeVm.prototype.hideElseRootNode = function (isSubmit) {
                this.fFindRootNode(this);
                if (isSubmit) {
                    this.forceUpdate("");
                }
            };
            TreeNodeVm.prototype.findRoot = function (nodevm) {
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
            };
            TreeNodeVm.prototype.fFindRootNode = function (nodevm) {
                if (!nodevm.IsRoot) {
                    if (nodevm.ParentNodeVm) {
                        if (nodevm.ParentNodeVm.IsRoot) {
                            nodevm.ParentNodeVm.IsHide = false;
                            nodevm.TreeObj.Roots.forEach(function (a) {
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
                    nodevm.TreeObj.Roots.forEach(function (a) {
                        if (a != nodevm) {
                            a.IsHide = true;
                        }
                    });
                }
            };
            return TreeNodeVm;
        }(domFile.Core.DomVm));
        ui.TreeNodeVm = TreeNodeVm;
    })(ui = exports.ui || (exports.ui = {}));
});
