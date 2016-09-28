
import pageCerFile = require("./../../BasePageCer");
import mFile = require("./TsMer");
import rFile = require("./TsRer");
import utilFile = require("./../../../../01core/Util");
export class TsCer extends pageCerFile.BasePageCer
{
   public AppCer = null;
   public LayOutName = "";

   public getM(): mFile.TsMer {
       return utilFile.Core.Util.Cast<mFile.TsMer>(this.M);
   }
   public getR(): rFile.TsRer {
       return utilFile.Core.Util.Cast<rFile.TsRer>(this.R);
   }


   public init() {
       this.getR().initR();
   }
  




 public setModel  (p1, p2, p3) {

    this.getM().PageName = p1;
    this.getM().P1 = p2;
    this.getM().P2 = p3;

};

public loadMenu  () {

    $.AKjs.AppGet().Menu.gotoMenuLoction("$ts$" + this.getM().PageName + "$" + this.getM().P1);

};
 public clearPage() {
    $.AKjs.AppGet().hideNavi();
    $.AKjs.AppGet().clearWindow();
};
}