import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./ReviewCer");
import utilFile = require("./../../../01core/Util");

import seaFile = require("./../../sea");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class ReviewRer extends baseRerFile.AkBaseRenderer {
    public AkName = "ReviewRer";
    public Option = null;
    public ADMIN = false;
    public $dvContain = null;
    public EditorObj = null;
    public initR ($dom) {

};
public loadModuleXmlMainR (fid, adimin, url) {
    var _$dom = this.$JObj;
    _$dom.html("");
    //seajs.use(['jquery', 'AkReviewInit'], function ($, iner) {
    //    iner.load(_$dom, { FID: fid, ADMIN: adimin, URL: url });
    //});

};
}