var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var MedicalRowDom;
    (function (MedicalRowDom) {
        var MedicalRowDomAction = (function (_super) {
            __extends(MedicalRowDomAction, _super);
            function MedicalRowDomAction() {
                _super.apply(this, arguments);
            }
            return MedicalRowDomAction;
        }(domCore.DomAction));
        MedicalRowDom.MedicalRowDomAction = MedicalRowDomAction;
        var MedicalRowDomReact = (function (_super) {
            __extends(MedicalRowDomReact, _super);
            function MedicalRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MedicalRowDomStates();
            }
            MedicalRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("tr", null, React.createElement("td", null, this.props.Vm.rowNumber + 1), React.createElement("td", null, this.props.Vm.RowData.Name), React.createElement("td", null, " ", React.createElement("a", {className: "text-danger", onClick: function () { _this.props.Vm.delOpt(_this.props.Vm.rowNumber); }}, "删除"))));
            };
            MedicalRowDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            MedicalRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MedicalRowDomReact;
        }(domCore.DomReact));
        MedicalRowDom.MedicalRowDomReact = MedicalRowDomReact;
        var MedicalRowDomVm = (function (_super) {
            __extends(MedicalRowDomVm, _super);
            function MedicalRowDomVm(config) {
                _super.call(this);
                this.ReactType = MedicalRowDomReact;
                if (config) {
                    this.RowData = config.RowData;
                    this.rowNumber = config.rowNumber;
                    this.UniId = config.Unit;
                    this.isedit = config.isedit;
                }
            }
            MedicalRowDomVm.prototype.delOpt = function (vals) {
                if (this.isedit) {
                    if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                        this.emitAppEvent("medical/Anomaly/tools/delAnomalyConclusion", this.UniId, vals);
                    }
                }
                else {
                    alert("您不能修改！");
                }
            };
            return MedicalRowDomVm;
        }(domCore.DomVm));
        MedicalRowDom.MedicalRowDomVm = MedicalRowDomVm;
        var MedicalRowDomStates = (function (_super) {
            __extends(MedicalRowDomStates, _super);
            function MedicalRowDomStates() {
                _super.apply(this, arguments);
            }
            return MedicalRowDomStates;
        }(domCore.DomStates));
        MedicalRowDom.MedicalRowDomStates = MedicalRowDomStates;
        var MedicalRowDomProps = (function (_super) {
            __extends(MedicalRowDomProps, _super);
            function MedicalRowDomProps() {
                _super.apply(this, arguments);
            }
            return MedicalRowDomProps;
        }(domCore.DomProps));
        MedicalRowDom.MedicalRowDomProps = MedicalRowDomProps;
    })(MedicalRowDom = exports.MedicalRowDom || (exports.MedicalRowDom = {}));
});
