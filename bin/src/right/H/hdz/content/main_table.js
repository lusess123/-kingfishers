var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/Pagination", "./table", "./shortCut"], function (require, exports, domFile, React, PaginationFile, tableFile, shortcutFile) {
    "use strict";
    var domCore = domFile.Core;
    var tableVm = tableFile.table.tableVm;
    var shortcutVm = shortcutFile.shortcut.shortcutVm;
    var mainTable;
    (function (mainTable) {
        var mainTableAction = (function (_super) {
            __extends(mainTableAction, _super);
            function mainTableAction() {
                _super.apply(this, arguments);
            }
            return mainTableAction;
        }(domCore.DomAction));
        mainTable.mainTableAction = mainTableAction;
        var mainTableReact = (function (_super) {
            __extends(mainTableReact, _super);
            function mainTableReact() {
                _super.apply(this, arguments);
                this.state = new mainTableStates();
            }
            mainTableReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "makeup"}, React.createElement("a", {className: "button e-default"}, React.createElement("i", {className: "fa fa-plus"}), "新增")), this.props.Vm.TableObj.intoDom());
            };
            mainTableReact.prototype._initPager = function () {
                return this.props.Vm.PagerObj.intoDom();
            };
            mainTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return mainTableReact;
        }(domCore.DomReact));
        mainTable.mainTableReact = mainTableReact;
        var mainTableVm = (function (_super) {
            __extends(mainTableVm, _super);
            function mainTableVm(config) {
                _super.call(this);
                this.ReactType = mainTableReact;
                this.TableObj = new tableVm();
                this.ShortCutObj = new shortcutVm();
                this.IsMainTableShow = false;
                //this.ShortCutObj.UniId = this.UniId;
                //this.listenAppEvent("_shortcut", this.UniId, (rowIndex: number) => {
                //    this.IsMainTableShow = !this.IsMainTableShow;
                //    this.forceUpdate("");
                //});
                var pagerVm = this.PagerObj = new PaginationFile.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 20;
                pagerVm.TotalCount = 80;
                pagerVm.PageClickEvent = function (pageIndex) {
                    //this.props.Vm.loadPageData(pageIndex);
                    pagerVm.PageNo = pageIndex;
                    pagerVm.IsChange = true;
                    pagerVm.forceUpdate("");
                };
            }
            return mainTableVm;
        }(domCore.DomVm));
        mainTable.mainTableVm = mainTableVm;
        var mainTableStates = (function (_super) {
            __extends(mainTableStates, _super);
            function mainTableStates() {
                _super.apply(this, arguments);
            }
            return mainTableStates;
        }(domCore.DomStates));
        mainTable.mainTableStates = mainTableStates;
        var mainTableProps = (function (_super) {
            __extends(mainTableProps, _super);
            function mainTableProps() {
                _super.apply(this, arguments);
            }
            return mainTableProps;
        }(domCore.DomProps));
        mainTable.mainTableProps = mainTableProps;
    })(mainTable = exports.mainTable || (exports.mainTable = {}));
});
