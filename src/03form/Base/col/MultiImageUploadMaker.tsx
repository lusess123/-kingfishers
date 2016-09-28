import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import baseUpload = require("./BaseUploadMaker");

export module ui {
    export class MultiImageUploadMaker extends baseUpload.ui.BaseUpload {

    }

    export class DefaultMultiImageUploadMaker extends MultiImageUploadMaker {

    }

    iocFile.Core.Ioc.Current().RegisterType("MultiImageUpload", "IColMaker", DefaultMultiImageUploadMaker);
}