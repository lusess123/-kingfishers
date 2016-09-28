var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react", "./../02col/01single/Amount", "./../02col/01single/AmountDetail", "./../02col/01single/Date", "./../02col/01single/DateTime", "./../02col/01single/Detail", "./../02col/01single/DetailArea", "./../02col/01single/DetailDate", "./../02col/01single/Editor", "./../02col/01single/FileDetail", "./../02col/01single/Hidden", "./../02col/01single/Password", "./../02col/01single/Text", "./../02col/01single/TextArea", "./../02col/01single/Radio", "./../02col/01single/Link", "./../02col/01single/DownLink", "./../02col/02Mulite/CheckBox", "./../02col/02Mulite/Combo", "./../02col/02Mulite/SingleCheckBox", "./../02col/03selector/Mulselector", "./../02col/03selector/selector", "./../02col/03selector/MomeryControl", "./../02col/04upload/SingleImageUpload", "./../02col/04upload/SingleFileUpload", "./../02col/04upload/MultiFileUpload", "./../02col/04upload/MultiImageUpload", "./../02col/05composite/TwoColumns", "./../02col/05composite/TwoColumnsDetail", "./../02col/01single/Time", "./../02col/01single/PCAS", "./../02col/01single/ImageDetail", "./../02col/02Mulite/Listbox", "./../02col/01single/StarScore", "./Pagination", "./../02col/03selector/FormMulitSelector", "./../02col/03selector/FormSingleSelector", "./../02col/03selector/BaseTreeSelector", "./../02col/03selector/TreeMultiSelector", "./../03form/Grid/GridForm", "./../03form/Norml/NormalForm", "./../03form/Base/BaseColumnGroup", "./../03form/Norml/NormalColumnGroup", "./../03form/Grid/GridColumnGroup", "./../02col/06Navi/CheckBoxNavi", "./../02col/03selector/PickSelector", "./../02col/03selector/PickSingleSelector", "./../02col/06Navi/TreeSingleNavi", "./../02col/06Navi/TreeMultiNavi"], function (require, exports, domFile, React, Amount, AmountDetail, Date, DataTime, Detail, DetailArea, DetailDate, Editor, FileDetail, Hidden, Password, Text, TextArea, Radio, Link, DownLink, CheckBox, Combo, SingleCheckBox, Mulselector, Selector, MoneryControl, SingleImageUpload, SingleFileUpload, MultiFileUpload, MultiImageUpload, TwoColumns, TwoColumnsDetail, Time, Pcas, ImageDetail, listBox, StarScore, Pagination, formMulitSelector, formSingleSelector, baseTreeSelector, MulitTreeSelector, Grid, Normal, BaseColumnGroup, NormalColumnGroup, gridColumngroup, checkBoxNaviFile, pickSelectorFile, pickSingleSelectorFile, TreeSingleNaviFile, TreeMultiNaviFile) {
    "use strict";
    checkBoxNaviFile;
    pickSelectorFile;
    pickSingleSelectorFile;
    TreeSingleNaviFile;
    TreeMultiNaviFile;
    //import Selector2File = require("./../02col/03selector/Selector2"); Selector2File;
    var test;
    (function (test) {
        var grid = Grid.ui.GridFormVm;
        var normal = Normal.ui.NormalFormVm;
        var mulit = formMulitSelector.ui.FormMulitSelectorVm;
        var single = formSingleSelector.ui.FormSingleSelectorVm;
        var date = Date.ui.DateVm;
        var editor = Editor.ui.EditorVm;
        var dateTime = DataTime.ui.DateTimeVm;
        var detail = Detail.ui.DetailVm;
        var amount = Amount.ui.AmountVm;
        var amountDetail = AmountDetail.ui.AmountDetailVm;
        var detailArea = DetailArea.ui.DetailAreaVm;
        var detailDate = DetailDate.ui.DetailDateVm;
        var fileDetail = FileDetail.ui.FileDetailVm;
        var hidden = Hidden.ui.HiddenVm;
        var password = Password.ui.PasswordVm;
        var text = Text.ui.TextVm;
        var radio = Radio.ui.RadioVm;
        var checkBox = CheckBox.ui.CheckBoxVm;
        var combo = Combo.ui.ComboVm;
        var singcheckbox = SingleCheckBox.ui.SingleCheckBoxVm;
        var textArea = TextArea.ui.TextAreaVm;
        var mulselector = Mulselector.ui.MulselectorVm;
        var selector = Selector.ui.SelectorVm;
        var moneryControl = MoneryControl.ui.MomeryVm;
        var treeSelector = baseTreeSelector.ui.BaseTreeSelectorVm;
        var singleFileUpload = SingleFileUpload.ui.SingleFileUploadVm;
        var singleimageupload = SingleImageUpload.ui.SingleImageUploadVm;
        var multiImageUpload = MultiImageUpload.ui.MultiImageUploadVm;
        var multiFileUpload = MultiFileUpload.ui.MultiFileUploadVm;
        var twoColumns = TwoColumns.ui.TwoColumnsVm;
        var twoColumnsDetail = TwoColumnsDetail.ui.TwoColumnsDetailVm;
        var time = Time.ui.TimeVm;
        var pcas = Pcas.ui.PCASVm;
        var imageDetail = ImageDetail.ui.ImageDetailVm;
        var pagination = Pagination.tool.PaginationVm;
        var link = Link.ui.LinkVm;
        var downLink = DownLink.ui.DownLinkVm;
        var listbox = listBox.ui;
        var starScore = StarScore.ui;
        var baseColumn = BaseColumnGroup.ui;
        var gridColumnGroup = NormalColumnGroup.ui.NormalRowGroupVm;
        var normalColumnGroup = NormalColumnGroup.ui.NormalRowGroupVm;
        gridColumngroup.ui.GridColumnGroupVm;
        MulitTreeSelector;
        var TestFormAction = (function (_super) {
            __extends(TestFormAction, _super);
            function TestFormAction() {
                _super.apply(this, arguments);
            }
            return TestFormAction;
        }(domFile.Core.DomAction));
        test.TestFormAction = TestFormAction;
        var TestFormReact = (function (_super) {
            __extends(TestFormReact, _super);
            function TestFormReact() {
                _super.apply(this, arguments);
            }
            TestFormReact.prototype.pSender = function () {
                return React.DOM.ul({ className: "nav" }, this.props.Vm.TestList.map(function (a, i) {
                    return a.intoDom(i, (i + 1).toString());
                }));
            };
            return TestFormReact;
        }(domFile.Core.DomReact));
        test.TestFormReact = TestFormReact;
        var TestFormVm = (function (_super) {
            __extends(TestFormVm, _super);
            function TestFormVm() {
                _super.apply(this, arguments);
                this.ReactType = TestFormReact;
                this.TestList = new Array();
            }
            return TestFormVm;
        }(domFile.Core.DomVm));
        test.TestFormVm = TestFormVm;
        var TestFormProps = (function (_super) {
            __extends(TestFormProps, _super);
            function TestFormProps() {
                _super.apply(this, arguments);
            }
            return TestFormProps;
        }(domFile.Core.DomProps));
        test.TestFormProps = TestFormProps;
    })(test = exports.test || (exports.test = {}));
});
