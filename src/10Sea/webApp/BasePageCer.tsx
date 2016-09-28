import akcerFile = require("./../core/mcrv/AkBaseController");

export class BasePageCer extends akcerFile.AkBaseController{
    public AppCer = null;
    public NoMenu: boolean = false;
    public LayOutName = "TTV";

    public init($dom?:JQuery) {

    };


    public setModel(p1, p2, p3) {


    };

    public loadLeft($dom: JQuery) {

    };

    public loadRight($dom: JQuery) {

    };

    public loadMenu($dom: JQuery) {
        //alert(this.M.ModeName);
        //$.AKjs.AppGet().Menu.gotoMenuLoction("$" + this.M.ModeName + "$");
    };   

    public clearPage($dom: JQuery) {

    };

   
    public loadLayOut() {
        if (this.LayOutName != "") {
            $.AKjs.AppGet().LayOut.layOutTransFormPage(this.LayOutName);
        }
    }

}