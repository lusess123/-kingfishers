
import appFile = require("./../AppController");

export class AppLayOut
{
    public LayOut = {
        VTV: [0, 12, 0, 1],
        TTV: [2, 10, 0, 3],
        TTT: [2, 8, 2, 0],
        VTT: [0, 10, 2, 2],
        HTV: [4, 8, 0, 3]
    };
    public App: appFile.AppController;

    public constructor(app: appFile.AppController) {
        this.App = app;
    }

//---------
public layOutTransFormPage (name:string) {
    
    this.App.getR().toggleLeftLong(name == "HTV" || name == this.LayOut["HTV"].join(""));
    // if(name)
    var _lot = this.LayOut[name];
    // this.App.R.toggleAppClassR(_lot[0], _lot[1], _lot[2], true);
    if (_lot) {
        this.App.getR().setAppClassR(_lot[0], _lot[1], _lot[2]);
    }
    else {
        if (name.indexOf(",") > 0) {
            var _names = name.split(",");
        }
        else {
            var _names = name.split("");
        }
        this.App.getR().setAppClassR(_names[0], _names[1], _names[2]);
        //alert();
    }
    this.App.getR().reSetPage();
    //this.App.M.updateUserScreenMode(_lot[3]);
    this.App.getM().LayOutName = name;
    };

public layOutTransFormC(name:string) {
    for (var col in this.LayOut) {
        if (col != name) {
            var _lot = this.LayOut[col];
            this.App.getR().toggleAppClassR(_lot[0], _lot[1], _lot[2], false);
        }
    }
    var _lot = this.LayOut[name];
    //  this.App.R.toggleAppClassR(_lot[0], _lot[1], _lot[2], true);
    this.App.getR().setAppClassR(_lot[0], _lot[1], _lot[2]);
    this.App.getM().updateUserScreenMode(_lot[3]);
    this.App.getM().LayOutName = name;
    // alert();

};
 public layOutTransFormMainC()  {
    if (this.App.getM().LayOutName == "TTT") {
        this.layOutTransFormPage("VTV");
        this.App.getM().LayOutName = "VTV";
        this.App.getR().toggleAppBtClassR(true);
    }
    else {
        this.layOutTransFormPage("TTT");
        this.App.getM().LayOutName = "TTT";
        this.App.getR().toggleAppBtClassR(false);
    }
};

 public layOutShowBar (isleft:boolean, istoleft:boolean) {
    if (isleft == true) {
        if (istoleft == true) {
            this.layOutTransFormC("V" + this.App.getM().LayOutName.substring(1));
        }
        else {
            this.layOutTransFormC("T" + this.App.getM().LayOutName.substring(1));
        }
    }
    else {
        if (istoleft == true) {
            this.layOutTransFormC(this.App.getM().LayOutName.substring(0, 2) + "T");
        }
        else {
            this.layOutTransFormC(this.App.getM().LayOutName.substring(0, 2) + "V");
        }
    }

};


 public updateUserScreenModeC (name:string) {
    var _lot = this.LayOut[name];
    this.App.getM().updateUserScreenMode(_lot[3]);

};
  public loadUserScreenModeC  () {

};
}