var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var GradeDesignDetailDom;
    (function (GradeDesignDetailDom) {
        var GradeDesignDetailDomAction = (function (_super) {
            __extends(GradeDesignDetailDomAction, _super);
            function GradeDesignDetailDomAction() {
                _super.apply(this, arguments);
            }
            return GradeDesignDetailDomAction;
        }(domCore.DomAction));
        GradeDesignDetailDom.GradeDesignDetailDomAction = GradeDesignDetailDomAction;
        var GradeDesignDetailDomReact = (function (_super) {
            __extends(GradeDesignDetailDomReact, _super);
            function GradeDesignDetailDomReact() {
                _super.apply(this, arguments);
                this.state = new GradeDesignDetailDomStates();
            }
            GradeDesignDetailDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("p", null, "总分：", this.props.Vm.TemplateGradeData.TotalScore), this._initTable());
            };
            GradeDesignDetailDomReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover YSm-table-range"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "名称"), React.createElement("th", null, "分数范围"))), React.createElement("tbody", null, this.props.Vm.TemplateGradeData.GradeList.map(function (row, i) {
                    return React.createElement("tr", null, React.createElement("td", null, row.Name), React.createElement("td", null, React.createElement("div", null, " ", React.createElement("label", {className: "pull-left"}, row.LowerScore), " < 分数 < =  ", React.createElement("label", {className: "pull-right"}, row.UpperScore), " ")));
                })));
            };
            GradeDesignDetailDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GradeDesignDetailDomReact;
        }(domCore.DomReact));
        GradeDesignDetailDom.GradeDesignDetailDomReact = GradeDesignDetailDomReact;
        var GradeDesignDetailDomVm = (function (_super) {
            __extends(GradeDesignDetailDomVm, _super);
            function GradeDesignDetailDomVm(config) {
                _super.call(this);
                this.ReactType = GradeDesignDetailDomReact;
                this.TemplateGradeData = { TotalScore: "0", GradeList: [] };
                this.IsFetchedData = false;
                if (config)
                    this.init(config);
            }
            GradeDesignDetailDomVm.prototype.init = function (config) {
                if (config && config.TemplateGradeData) {
                    this.TemplateGradeData = config.TemplateGradeData;
                }
                ;
            };
            return GradeDesignDetailDomVm;
        }(domCore.DomVm));
        GradeDesignDetailDom.GradeDesignDetailDomVm = GradeDesignDetailDomVm;
        var GradeDesignDetailDomStates = (function (_super) {
            __extends(GradeDesignDetailDomStates, _super);
            function GradeDesignDetailDomStates() {
                _super.apply(this, arguments);
            }
            return GradeDesignDetailDomStates;
        }(domCore.DomStates));
        GradeDesignDetailDom.GradeDesignDetailDomStates = GradeDesignDetailDomStates;
        var GradeDesignDetailDomProps = (function (_super) {
            __extends(GradeDesignDetailDomProps, _super);
            function GradeDesignDetailDomProps() {
                _super.apply(this, arguments);
            }
            return GradeDesignDetailDomProps;
        }(domCore.DomProps));
        GradeDesignDetailDom.GradeDesignDetailDomProps = GradeDesignDetailDomProps;
    })(GradeDesignDetailDom = exports.GradeDesignDetailDom || (exports.GradeDesignDetailDom = {}));
});
