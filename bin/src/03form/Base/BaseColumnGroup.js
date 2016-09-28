var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom"], function (require, exports, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var ui;
    (function (ui) {
        var BaseColumnGroupAction = (function (_super) {
            __extends(BaseColumnGroupAction, _super);
            function BaseColumnGroupAction() {
                _super.apply(this, arguments);
            }
            return BaseColumnGroupAction;
        }(domCore.DomAction));
        ui.BaseColumnGroupAction = BaseColumnGroupAction;
        var BaseColumnGroupReact = (function (_super) {
            __extends(BaseColumnGroupReact, _super);
            function BaseColumnGroupReact() {
                _super.apply(this, arguments);
            }
            BaseColumnGroupReact.prototype.pSender = function () {
                return null;
            };
            BaseColumnGroupReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BaseColumnGroupReact;
        }(domCore.DomReact));
        ui.BaseColumnGroupReact = BaseColumnGroupReact;
        var BaseColumnGroupVm = (function (_super) {
            __extends(BaseColumnGroupVm, _super);
            function BaseColumnGroupVm() {
                _super.apply(this, arguments);
                this.ReactType = BaseColumnGroupReact;
                this.ColumnObjList = new Array();
                //在这里要将这里面所有的Group里面的
                this.DisplayName = "";
                this.Columns = new Array();
                //是否要加个ColumnGroup的属性
                this.ColumnGroup = new Array();
            }
            return BaseColumnGroupVm;
        }(domCore.DomVm));
        ui.BaseColumnGroupVm = BaseColumnGroupVm;
        var BaseColumnGroupStates = (function (_super) {
            __extends(BaseColumnGroupStates, _super);
            function BaseColumnGroupStates() {
                _super.apply(this, arguments);
            }
            return BaseColumnGroupStates;
        }(domCore.DomStates));
        ui.BaseColumnGroupStates = BaseColumnGroupStates;
        var BaseColumnGroupProps = (function (_super) {
            __extends(BaseColumnGroupProps, _super);
            function BaseColumnGroupProps() {
                _super.apply(this, arguments);
            }
            return BaseColumnGroupProps;
        }(domCore.DomProps));
        ui.BaseColumnGroupProps = BaseColumnGroupProps;
        var ColumnConfig = (function () {
            function ColumnConfig() {
            }
            return ColumnConfig;
        }());
        ui.ColumnConfig = ColumnConfig;
        var ColumnGroupConfig = (function () {
            function ColumnGroupConfig() {
                this.Columns = Array();
            }
            return ColumnGroupConfig;
        }());
        ui.ColumnGroupConfig = ColumnGroupConfig;
    })(ui = exports.ui || (exports.ui = {}));
});
