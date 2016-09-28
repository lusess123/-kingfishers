var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/01single/Text"], function (require, exports, domFile, React, TextFile) {
    "use strict";
    var domCore = domFile.Core;
    var GradeDesignDom;
    (function (GradeDesignDom) {
        var GradeDesignDomAction = (function (_super) {
            __extends(GradeDesignDomAction, _super);
            function GradeDesignDomAction() {
                _super.apply(this, arguments);
            }
            return GradeDesignDomAction;
        }(domCore.DomAction));
        GradeDesignDom.GradeDesignDomAction = GradeDesignDomAction;
        var GradeDesignDomReact = (function (_super) {
            __extends(GradeDesignDomReact, _super);
            function GradeDesignDomReact() {
                _super.apply(this, arguments);
                this.state = new GradeDesignDomStates();
            }
            GradeDesignDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("p", null, "总分：", this.props.Vm.TemplateGradeData.TotalScore), this._initTable());
            };
            GradeDesignDomReact.prototype._initTable = function () {
                var _this = this;
                return React.createElement("table", {className: "table table-striped table-bordered table-hover YSm-table-range"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "名称"), React.createElement("th", null, "分数范围"))), React.createElement("tbody", null, this.props.Vm.TemplateGradeData.GradeList.map(function (row, i) {
                    return React.createElement("tr", null, React.createElement("td", null, row.Name), React.createElement("td", null, React.createElement("div", null, _this.props.Vm.LowerScoreTextObjList[i].intoDom(), " < 分数 < = ", _this.props.Vm.UpperScoreTextObjList[i].intoDom())));
                })));
            };
            GradeDesignDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GradeDesignDomReact;
        }(domCore.DomReact));
        GradeDesignDom.GradeDesignDomReact = GradeDesignDomReact;
        var GradeDesignDomVm = (function (_super) {
            __extends(GradeDesignDomVm, _super);
            //public TotalScore: string="0";
            function GradeDesignDomVm(config) {
                _super.call(this);
                this.ReactType = GradeDesignDomReact;
                this.TextObj = new TextFile.ui.TextVm;
                //public RowList: dataFile.Data.IAppraisalGradeData[] = [];
                this.TemplateGradeData = { TotalScore: "0", GradeList: [] };
                //  public UpperScoreTextObj: TextFile.ui.TextVm = new TextFile.ui.TextVm();
                //  public LowerScoreTextObj: TextFile.ui.TextVm = new TextFile.ui.TextVm();
                this.UpperScoreTextObjList = [];
                this.LowerScoreTextObjList = [];
                this.IsFetchedData = false;
                if (config)
                    this.init(config);
            }
            GradeDesignDomVm.prototype.init = function (config) {
                var _this = this;
                if (config && config.TemplateGradeData) {
                    this.IsFetchedData = true;
                    this.TemplateGradeData = config.TemplateGradeData;
                    this.TemplateGradeData.GradeList.forEach(function (row) {
                        var upperTextVm = new TextFile.ui.TextVm();
                        upperTextVm.dataValueSet(row.UpperScore);
                        var lowerTextVm = new TextFile.ui.TextVm();
                        lowerTextVm.dataValueSet(row.LowerScore);
                        upperTextVm.onChangeHandle(function (val) {
                            row.UpperScore = val;
                            return true;
                        });
                        lowerTextVm.onChangeHandle(function (val) {
                            row.LowerScore = val;
                            return true;
                        });
                        _this.UpperScoreTextObjList.push(upperTextVm);
                        _this.LowerScoreTextObjList.push(lowerTextVm);
                    });
                }
            };
            GradeDesignDomVm.prototype.getData = function () {
                return this.TemplateGradeData.GradeList;
            };
            return GradeDesignDomVm;
        }(domCore.DomVm));
        GradeDesignDom.GradeDesignDomVm = GradeDesignDomVm;
        var GradeDesignDomStates = (function (_super) {
            __extends(GradeDesignDomStates, _super);
            function GradeDesignDomStates() {
                _super.apply(this, arguments);
            }
            return GradeDesignDomStates;
        }(domCore.DomStates));
        GradeDesignDom.GradeDesignDomStates = GradeDesignDomStates;
        var GradeDesignDomProps = (function (_super) {
            __extends(GradeDesignDomProps, _super);
            function GradeDesignDomProps() {
                _super.apply(this, arguments);
            }
            return GradeDesignDomProps;
        }(domCore.DomProps));
        GradeDesignDom.GradeDesignDomProps = GradeDesignDomProps;
    })(GradeDesignDom = exports.GradeDesignDom || (exports.GradeDesignDom = {}));
});
