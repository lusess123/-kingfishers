var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./ListNaviItemDom", "react"], function (require, exports, domFile, naviItemFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ListNaviDom;
    (function (ListNaviDom) {
        var ListNaviDomAction = (function (_super) {
            __extends(ListNaviDomAction, _super);
            function ListNaviDomAction() {
                _super.apply(this, arguments);
            }
            return ListNaviDomAction;
        }(domCore.DomAction));
        ListNaviDom.ListNaviDomAction = ListNaviDomAction;
        var ListNaviDomReact = (function (_super) {
            __extends(ListNaviDomReact, _super);
            function ListNaviDomReact() {
                _super.apply(this, arguments);
                this.state = new ListNaviDomStates();
            }
            ListNaviDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.NaviItemList.map(function (item) {
                    return _this._T_(item.intoDom());
                }));
            };
            ListNaviDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ListNaviDomReact;
        }(domCore.DomReact));
        ListNaviDom.ListNaviDomReact = ListNaviDomReact;
        var ListNaviDomVm = (function (_super) {
            __extends(ListNaviDomVm, _super);
            function ListNaviDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ListNaviDomReact;
                this.NaviItemList = [];
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    if (config.NaviItemList) {
                        config.NaviItemList.forEach(function (item) {
                            var naviItem = new naviItemFile.ListNaviItemDom.ListNaviItemDomVm(item);
                            _this.NaviItemList.push(naviItem);
                        });
                    }
                }
            }
            return ListNaviDomVm;
        }(domCore.DomVm));
        ListNaviDom.ListNaviDomVm = ListNaviDomVm;
        var ListNaviDomStates = (function (_super) {
            __extends(ListNaviDomStates, _super);
            function ListNaviDomStates() {
                _super.apply(this, arguments);
            }
            return ListNaviDomStates;
        }(domCore.DomStates));
        ListNaviDom.ListNaviDomStates = ListNaviDomStates;
        var ListNaviDomProps = (function (_super) {
            __extends(ListNaviDomProps, _super);
            function ListNaviDomProps() {
                _super.apply(this, arguments);
            }
            return ListNaviDomProps;
        }(domCore.DomProps));
        ListNaviDom.ListNaviDomProps = ListNaviDomProps;
    })(ListNaviDom = exports.ListNaviDom || (exports.ListNaviDom = {}));
});
