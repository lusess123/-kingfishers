var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Url", "react", "react-dom", "./BreadItemDom"], function (require, exports, domFile, urlFile, React, ReactDOM, BreadItemDomFile) {
    "use strict";
    var domCore = domFile.Core;
    var BreadDom;
    (function (BreadDom) {
        var BreadDomAction = (function (_super) {
            __extends(BreadDomAction, _super);
            function BreadDomAction() {
                _super.apply(this, arguments);
            }
            return BreadDomAction;
        }(domCore.DomAction));
        BreadDom.BreadDomAction = BreadDomAction;
        var BreadDomReact = (function (_super) {
            __extends(BreadDomReact, _super);
            function BreadDomReact() {
                _super.apply(this, arguments);
                this.state = new BreadDomStates();
            }
            BreadDomReact.prototype._clickEapandFun = function () {
                this.props.Vm.IsExpand = !this.props.Vm.IsExpand;
                this.forceUpdate();
            };
            BreadDomReact.prototype._linkClickFun = function (val) {
                // var _isMenu = val.length >= 6 && val.toUpperCase().indexOf("$MENU$") == 0;
                //// urlFile.Core.AkUrl.Current().openUrl(a.Value, _isMenu);
                // urlFile.Core.AkUrl.Current().openUrl(val, _isMenu);
                urlFile.Core.AkUrl.Current().openUrlByNoMenu(val);
            };
            BreadDomReact.prototype._senderUL = function () {
                var _this = this;
                if (this.props.Vm.NextLinkList && this.props.Vm.NextLinkList.length > 0) {
                    return React.createElement("ul", {className: "nav ACT-BREAD-UL Hz-scroll clearfix" + (this.props.Vm.IsExpand ? "" : " hide"), style: { overflow: "overlay" }}, this.props.Vm.NextLinkList.map(function (item, i) {
                        return React.createElement("li", {className: "col-lg-3 col-md-3 col-sm-4 col-xs-6 ", key: i}, React.createElement("a", {onClick: function () { _this._linkClickFun(item.Value); }}, item.Text));
                    }));
                }
                else
                    return null;
            };
            BreadDomReact.prototype.fGetItems = function () {
                var _items = [];
                var _len = this.props.Vm.Items.length;
                for (var i = 0; i < _len; i++) {
                    var _item = this.props.Vm.Items[_len - i - 1];
                    _items.push(_item);
                }
                return _items;
            };
            BreadDomReact.prototype.pSender = function () {
                var _this = this;
                //this.props.Vm.
                return React.createElement("div", {className: "Hu-breadcrumb YSu-breadcrumb"}, React.createElement("span", null, "当前位置："), React.createElement("ol", {className: "breadcrumb "}, this.fGetItems().map(function (item, i) {
                    return item.intoDom(i);
                }), React.createElement("li", null, React.createElement("a", {className: ((this.props.Vm.NextLinkList && this.props.Vm.NextLinkList.length > 0) ? "" : "hide"), onClick: function () { _this._clickEapandFun(); }}, React.createElement("i", {className: ("icon-caret-") + (this.props.Vm.IsExpand ? "down " : "right ") + ("fa fa-caret-") + (this.props.Vm.IsExpand ? "down " : "right ")})), this._senderUL())));
            };
            BreadDomReact.prototype.pComponentDidUpdate = function (prevProps, prevState, prevContext) {
                _super.prototype.pComponentDidUpdate.call(this, prevProps, prevState, prevContext);
                if (this.props.Vm.NextLinkList && this.props.Vm.NextLinkList.length > 0) {
                    var _dom = ReactDOM.findDOMNode(this);
                    if (_dom) {
                        var _$dom = $(_dom);
                        var _w = $(window).width();
                        var _h = $(window).height();
                        _$dom.find(".ACT-BREAD-UL").css("width", _w * 0.5).css("max-height", _h - 60 - 30 - 30).css("min-height", _h / 3);
                    }
                }
            };
            BreadDomReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                $("body").click(function (a) {
                    var _$tar = $(a.target);
                    // alert(1);
                    if (!_$tar.hasClass("ACT-BREAD-UL") && !_$tar.parents().hasClass("ACT-BREAD-UL")) {
                        if (_this.props.Vm.IsExpand) {
                            _this.props.Vm.IsExpand = false;
                            _this.forceUpdate();
                        }
                    }
                });
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    var _$dom = $(_dom);
                    var _w = $(window).width();
                    var _h = $(window).height();
                    _$dom.find(".ACT-BREAD-UL").css("max-height", _h - 60 - 30 - 30).css("min-height", _h / 3);
                }
            };
            BreadDomReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                var _dom = ReactDOM.findDOMNode(this);
                if (_dom) {
                    var _$dom = $(_dom);
                    var _w = $(window).width();
                    var _h = $(window).height();
                    _$dom.find(".ACT-BREAD-UL").css("max-height", _h - 60 - 30 - 30).css("min-height", _h / 3);
                }
            };
            return BreadDomReact;
        }(domCore.DomReact));
        BreadDom.BreadDomReact = BreadDomReact;
        var BreadDomVm = (function (_super) {
            __extends(BreadDomVm, _super);
            function BreadDomVm(config) {
                _super.call(this);
                this.ReactType = BreadDomReact;
                // public BreadName: string = "面包名称";
                this.Items = [];
                this.TreeArrangeHash = {};
                this.TreeKeyHash = {};
                this.NextLinkList = [];
                this.HomeUrl = "$FEED$";
                if (config) {
                    this.TreeModel = config.TreeModel;
                    this.initFast();
                    if (config.HomeUrl) {
                        this.HomeUrl = config.HomeUrl;
                    }
                }
            }
            BreadDomVm.prototype.initFast = function () {
                this.fFastTree(this.TreeModel, "", 0);
            };
            BreadDomVm.prototype.fFastTree = function (treeModel, arrange, index) {
                var _this = this;
                treeModel.arrange = arrange + "_" + index;
                //  var _m = treeModel.CODE_VALUE.toUpperCase();
                var _str = treeModel.CODE_VALUE.toUpperCase();
                _str = _str.trim();
                if (_str && _str.length > 4 && (_str.lastIndexOf(".XML") == _str.length - 4)) {
                    _str = _str.replace(".XML", "");
                }
                this.TreeKeyHash[_str] = treeModel;
                this.TreeArrangeHash[treeModel.arrange] = treeModel;
                if (treeModel.Children && treeModel.Children.length > 0) {
                    treeModel.Children.forEach(function (m, i) {
                        //------
                        _this.fFastTree(m, treeModel.arrange, i);
                    });
                }
            };
            BreadDomVm.prototype.findNodeByKey = function (val) {
                var _str = val.toUpperCase();
                if (_str && _str.length > 4 && (_str.lastIndexOf(".XML") == _str.length - 4)) {
                    _str = _str.replace(".XML", "");
                }
                var _node = this.TreeKeyHash[_str];
                return _node;
            };
            BreadDomVm.prototype.findNodeByArrange = function (arr) {
                var _node = this.TreeArrangeHash[arr.toUpperCase()];
                return _node;
            };
            BreadDomVm.prototype.getParentArrange = function (arr) {
                var _i = arr.lastIndexOf("_");
                return arr.substring(0, _i);
            };
            BreadDomVm.prototype.resetRoot = function () {
                this.setBreadShow("0");
            };
            BreadDomVm.prototype.setBreadShow = function (val) {
                var _this = this;
                this.Items = [];
                var _node = this.findNodeByKey(val);
                if (_node) {
                    var _arr = _node.arrange;
                    var _item = new BreadItemDomFile.BreadItemDom.BreadItemDomVm({ HomeUrl: this.HomeUrl });
                    _item.Text = _node.CODE_TEXT;
                    _item.Value = _node.CODE_VALUE;
                    this.Items.push(_item);
                    var _parr = this.getParentArrange(_arr);
                    if (_parr && _parr != "") {
                        this.setBreadItemParent(_parr, _item);
                    }
                    this.NextLinkList = [];
                    this.IsExpand = false;
                    if (_node.Children) {
                        _node.Children.forEach(function (r) {
                            var _link = { Text: r.CODE_TEXT, Value: r.CODE_VALUE };
                            _this.NextLinkList.push(_link);
                        });
                    }
                }
            };
            BreadDomVm.prototype.setBreadItemParent = function (arr, item) {
                var _node = this.findNodeByArrange(arr);
                var _item = new BreadItemDomFile.BreadItemDom.BreadItemDomVm({ HomeUrl: this.HomeUrl });
                _item.Text = _node.CODE_TEXT;
                _item.Value = _node.CODE_VALUE;
                this.Items.push(_item);
                _item.LinkList = [];
                _node.Children.forEach(function (n) {
                    _item.LinkList.push({ Text: n.CODE_TEXT, Value: n.CODE_VALUE });
                });
                if (arr != "_0") {
                    var _parr = this.getParentArrange(arr);
                    this.setBreadItemParent(_parr, _item);
                }
                else {
                }
                // }
            };
            BreadDomVm.prototype.expandItemByVal = function (val) {
                if (this.TreeModel.CODE_VALUE == val) {
                }
            };
            return BreadDomVm;
        }(domCore.DomVm));
        BreadDom.BreadDomVm = BreadDomVm;
        var BreadDomStates = (function (_super) {
            __extends(BreadDomStates, _super);
            function BreadDomStates() {
                _super.apply(this, arguments);
            }
            return BreadDomStates;
        }(domCore.DomStates));
        BreadDom.BreadDomStates = BreadDomStates;
        var BreadDomProps = (function (_super) {
            __extends(BreadDomProps, _super);
            function BreadDomProps() {
                _super.apply(this, arguments);
            }
            return BreadDomProps;
        }(domCore.DomProps));
        BreadDom.BreadDomProps = BreadDomProps;
    })(BreadDom = exports.BreadDom || (exports.BreadDom = {}));
});
