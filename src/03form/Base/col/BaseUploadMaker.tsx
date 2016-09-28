import domFile = require("./../01core/0Dom"); import basecolFile = require("./../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import BaseColumn = require("./../BaseColumn");
import BaseForm = require("./../BaseForm");
import PageView = require("./../../07data/PageView");
import iocFile = require("./../../../01core/Ioc");
import kvFile = require("./../../../07data/Kv");

import baseColMaker = require("./BaseColMaker");

export module ui {

    export class BaseUpload extends baseColMaker.ui.BaseColMaker<BaseColVm>
    {
        public maker()
        {
            var temp: any = this.BaseColVm;
            this.ColVm = temp;
            var tv = this.ColVm;
            var c = this.ColumnConfig;
            var _pageView = this.PageView;

            if (tv != null)
            {
                var _temp: any = c.Options;
                var _uPtions: PageView.data.IUploadOption = _temp;
                tv["UploadName"] = _uPtions.UploadName;
                tv["StorageName"] = _uPtions.StorageName;
                tv["ImageSizeWidth"] = _uPtions.ImageSizeWidth;
                tv["ImageSizeHeight"] = _uPtions.ImageSizeHeight;
                tv["IsCut"] = _uPtions.IsCut ? _uPtions.IsCut : false;
                tv["HasDocumentCenter"] = _uPtions.HasDocumentCenter ? _uPtions.HasDocumentCenter : false;
                tv["MinUploadCount"] = _uPtions.MinUploadCount ? _uPtions.MinUploadCount : null;
            }


            super.maker();
        }
    }   
}