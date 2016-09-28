import pageCerFile = require("./../BasePageCer");
import mFile = require("./MenuMer");
import rFile = require("./MenuRer");
import utilFile = require("./../../../01core/Util");
export class MenuCer extends pageCerFile.BasePageCer
{
   public AppCer = null;
   public Key :string = "";
   public LayOutName: string = "TTV";

   public getR():rFile.MenuRer
   {
       return utilFile.Core.Util.Cast<rFile.MenuRer>(this.R);
   }

   public init  () {
   // var _this = this;
     this.getR().loadModuleXmlMainR(this.Key);
   };


 public setModel  (p1, p2, p3) {
    this.Key = p1;
};

 public loadMenu  () {
    $.AKjs.AppGet().Menu.gotoMenuLoction(this.Key);
};

public clearPage () {
    $.AKjs.AppGet().hideNavi();
};
}