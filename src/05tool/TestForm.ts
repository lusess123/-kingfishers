import domFile = require("./../01core/0Dom");
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
import akTest = require("./AkTest");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import Amount = require("./../02col/01single/Amount");
import AmountDetail = require("./../02col/01single/AmountDetail");
import Date = require("./../02col/01single/Date");
import DataTime = require("./../02col/01single/DateTime");
import Detail = require("./../02col/01single/Detail");
import DetailArea = require("./../02col/01single/DetailArea");
import DetailDate = require("./../02col/01single/DetailDate");
import Editor = require("./../02col/01single/Editor");
import FileDetail = require("./../02col/01single/FileDetail");
import Hidden = require("./../02col/01single/Hidden");
import Password = require("./../02col/01single/Password");
import Text = require("./../02col/01single/Text");
import TextArea = require("./../02col/01single/TextArea")
import Radio = require("./../02col/01single/Radio");
import Link = require("./../02col/01single/Link");
import DownLink=require("./../02col/01single/DownLink")
import CheckBox = require("./../02col/02Mulite/CheckBox");
import Combo = require("./../02col/02Mulite/Combo");
import SingleCheckBox = require("./../02col/02Mulite/SingleCheckBox");
import Mulselector = require("./../02col/03selector/Mulselector");
import Selector = require("./../02col/03selector/selector");
import MoneryControl = require("./../02col/03selector/MomeryControl");

import SingleImageUpload = require("./../02col/04upload/SingleImageUpload");
import SingleFileUpload = require("./../02col/04upload/SingleFileUpload");
import MultiFileUpload = require("./../02col/04upload/MultiFileUpload");
import MultiImageUpload = require("./../02col/04upload/MultiImageUpload");
import TwoColumns = require("./../02col/05composite/TwoColumns");
import TwoColumnsDetail = require("./../02col/05composite/TwoColumnsDetail");
import Time = require("./../02col/01single/Time");
import Pcas = require("./../02col/01single/PCAS");
import ImageDetail = require("./../02col/01single/ImageDetail");
import listBox = require("./../02col/02Mulite/Listbox");
import StarScore = require("./../02col/01single/StarScore");
import Pagination = require("./Pagination");
import formMulitSelector = require("./../02col/03selector/FormMulitSelector");
import formSingleSelector = require("./../02col/03selector/FormSingleSelector");

import baseTreeSelector = require("./../02col/03selector/BaseTreeSelector");
import TreeSelector = require("./../02col/03selector/TreeSelector");
import MulitTreeSelector = require("./../02col/03selector/TreeMultiSelector");

import Grid = require("./../03form/Grid/GridForm");
import Normal = require("./../03form/Norml/NormalForm");
import BaseColumnGroup = require("./../03form/Base/BaseColumnGroup");
import NormalColumnGroup = require("./../03form/Norml/NormalColumnGroup");
import gridColumngroup = require("./../03form/Grid/GridColumnGroup");

import checkBoxNaviFile = require("./../02col/06Navi/CheckBoxNavi"); checkBoxNaviFile;
import pickSelectorFile = require("./../02col/03selector/PickSelector"); pickSelectorFile;
import pickSingleSelectorFile = require("./../02col/03selector/PickSingleSelector"); pickSingleSelectorFile;
import TreeSingleNaviFile = require("./../02col/06Navi/TreeSingleNavi"); TreeSingleNaviFile;
import TreeMultiNaviFile = require("./../02col/06Navi/TreeMultiNavi"); TreeMultiNaviFile;
//import Selector2File = require("./../02col/03selector/Selector2"); Selector2File;
export module test {
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
    gridColumngroup.ui.GridColumnGroupVm; MulitTreeSelector;
    export class TestFormAction extends domFile.Core.DomAction {
        // LogList: Array<string>;
    }

    export class TestFormReact extends domFile.Core.DomReact<TestFormProps, any, TestFormAction> implements domFile.Core.IReact {
        public pSender(): React.ReactElement<any> {
            return React.DOM.ul({ className: "nav"},
                this.props.Vm.TestList.map((a, i) => {
                    return a.intoDom(i,(i + 1).toString())
                })
            );
        }
    }

    export class TestFormVm extends domFile.Core.DomVm {
        public ReactType = TestFormReact;
        public TestList: Array<akTest.test.TestVm> = new Array<akTest.test.TestVm>();

    }
    export class TestFormProps extends domFile.Core.DomProps<TestFormVm>{
    }

    
} 

