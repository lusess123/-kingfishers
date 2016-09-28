import akMrcFile = require("./../core/mcrv/AkMRCCreator");
import akCerFile = require("./BasePageCer");
import akMFile = require("./../core/mcrv/AkBaseModel");
import akRer = require("./../core/mcrv/AkBaseRenderer");
import iPageFile = require("./../core/IPage");

export class BasePageMRC<CT extends akCerFile.BasePageCer, MT extends akMFile.AkBaseModel, RT extends akRer.AkBaseRenderer> extends akMrcFile.AkMRCCreator<CT, MT, RT> implements iPageFile.IPage
{

    public NoLayout: boolean = false;
    public NoMenu: boolean = false;

    public init($dom: JQuery) {
        this.R.$JObj = $dom;
        this.C.init();
    };


    //this.setMRC

    //----------------------IUrl----
    public setModel(p1, p2, p3) {
        this.C.setModel(p1, p2, p3);
    };

    public loadMain($dom: JQuery) {
        this.init($dom);
    };

    public loadLeft($dom: JQuery) {
        this.C.loadLeft($dom);
    };

    public loadRight($dom: JQuery) {
        this.C.loadRight($dom);
    };

    public loadMenu($dom: JQuery) {

        if (!this.NoMenu) {
            this.C.loadMenu($dom);
        }
    };

    public clearPage($dom: JQuery) {
        if (this.C && this.C.clearPage) {
            this.C.clearPage($dom);
        }
        $dom.clear();

    };

    public loadLayOut() {
        if (!this.NoLayout) {
            this.C.loadLayOut();
        }
    };

}