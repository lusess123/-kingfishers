import rer = require("./../core/mcrv/AkBaseRenderer");
import cer = require("./InBoxCer");
import util = require("./../../../01core/Util");

export class InBoxRer extends rer.AkBaseRenderer {
 public AkName = "InBoxRer";
 public $dvContain = null;
 public InBoxFormObj = null;
 public getC(): cer.InBoxCer {
     return util.Core.Util.Cast<cer.InBoxCer>(this.C);
 }
public initR() {
    this.$dvContain = $("<div></div>");
    this.$JObj.append(this.$dvContain);
    this.getC().loadMainContent("");
}

public loadModuleXmlMainR(res) {
    var _this = this;
    res.FunAfterInit = function (page) {
        //var _$naviMenu = $("<div id='ACT-NAVI-MENU' class='panel-body AKJS ACT_CONTROL'></div>");
        //                            var _$div = $("<div class='panel panel-default acs-leftBasePannel'></div>");
        //                            $.AKjs.AppGet().R.getLeft$DomR().find("#ACT-NAVI-MENU").prepend(_$div);
        //                            _this.initUserMailAccountsNavi(_$div);
        _this.InBoxFormObj = page.FormObjs["MAIL_INBOX"];
        _this.InBoxFormObj.SetCustomSearchDataFun = _this.setCustomSearchData();
    }
    res.IsPart = true;
    this.$dvContain.AtawListPage(res);
}

public initUserMailAccountsNavi($dom) {
    //            var _$div = $("<div class='panel panel-default acs-leftBasePannel'></div>");
    //            $dom.append(_$div);
    $dom.append("<div class='panel-heading'><a><i class='icon-caret-up'>帐户</i></a></div>");
    var _$body = $("<div class='panel-body'></div>");
    $dom.append(_$body);
    this.getC().loadUserMailAccounts(_$body);
}

public initMailAccountItems(res, $dom) {
    var _this = this;
    var groupName = "gn" + $.AKjs.getUniqueID();
    for (var i = 0; i < res.length; i++) {
        var _$radioItem = $("<div class='checkbox col-md-offset-0'>" +
            "<input type='Radio' value='" + res[i].Account + "' name='" + groupName + "'>" + res[i].Account + "</div>");
        $dom.append(_$radioItem);
        if (res[i].IsDefault) {
            _$radioItem.find("input").prop("checked", true);
        }
        _$radioItem.find("input").change(function () {
            if ($(this).is(":checked")) {
                //_this.InBoxFormObj.SetCustomSearchDataFun = _this.setCustomSearchData($(this).val());
                //_this.InBoxFormObj.searchDataList(1);
                _this.$dvContain.clear();
                $.AKjs.AppGet().R.getLeft$DomR().find("#ACT-NAVI-MENU").clear();
                var _ds = {};
                var _dt = _ds["CUSTOM_SEARCH"] = [{ EMAILACCOUNT: $(this).val() }];
                _this.getC().loadMainContent($.toJSON(_ds));
            }
        });
    }
};

public setCustomSearchData() {
    var _this = this;
    var account = $.AKjs.AppGet().R.getLeft$DomR().find(".ACT-EMAILACCOUNT-LIST input:checked").val();
    return function (ds) {
        var _dt = ds["CUSTOM_SEARCH"] = [{ EMAILACCOUNT: account }];

        //                if (_dt != null)
        //                    ds["MAIL_INBOX_Search"] = [$.extend({}, _dt[0], { EMAILTO: account })];
        //                else {
        //                    ds["MAIL_INBOX_Search"] = [$.extend({}, { EMAILTO: account })];
        //                }
        return ds;
    }
};

public loadLeft($dom) {
    var _$div = $("<div class='panel panel-default acs-leftBasePannel ACT-EMAILACCOUNT-LIST'></div>");
    $dom.find(".DESK-SYSTEM-NOTICE").after(_$div);
    this.initUserMailAccountsNavi(_$div);
    //_this.InBoxFormObj = _this.$dvContain.AtawControl().FormObjs["MAIL_INBOX"];
};


}