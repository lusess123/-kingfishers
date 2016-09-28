

export class ImageUtil {

    public Imagedata: ImageData;
    public ResourceInfoObj: ResourceInfo[] = [];
    public Href: string;
    public GridHref: string;
    public GridWh = "38-38";
    public AlbumWh = "90-90";
    public AlbumHref = "/Content/PlatformThemes/SapphireBlue/images/default-photo.jpg";
    public GetImageHref(ImageJson: string) {
        try {
            this.Imagedata = $.parseJSON(ImageJson);
        }
        catch(err){
            this.Imagedata = null;
        }
        if (this.Imagedata && this.Imagedata.CoverIndex != undefined && this.Imagedata.ResourceInfoList && this.Imagedata.ResourceInfoList.length > 0) {
            if (this.Imagedata.CoverIndex >= this.Imagedata.ResourceInfoList.length)
                this.Imagedata.CoverIndex = this.Imagedata.ResourceInfoList.length - 1;

            this.ResourceInfoObj = [this.Imagedata.ResourceInfoList[this.Imagedata.CoverIndex]];

            if (this.ResourceInfoObj && this.ResourceInfoObj.length && this.ResourceInfoObj.length > 0) {

                if (this.ResourceInfoObj[0].HttpPath) {
                    this.Href = this.ResourceInfoObj[0].HttpPath;
                    if (this.ResourceInfoObj[0].ExtendList) {
                        if (this.ResourceInfoObj[0].ExtendList[this.GridWh]) {
                            this.GridHref = $.AKjs.AddUrlFileName(this.Href, this.GridWh)
                            // this.IsWh = true;
                        }
                        else {
                            this.GridHref = this.Href;
                        }

                        if (this.ResourceInfoObj[0].ExtendList[this.AlbumWh]) {
                            this.AlbumHref = $.AKjs.AddUrlFileName(this.Href, this.AlbumWh)

                        }
                        else {
                            this.AlbumHref = this.Href;
                        }
                    }
                }
            }
            else {
                this.GridHref = ImageJson;
            }

            return this.GridHref;
        }
    }


    public GetImageSrc(ImageJson: string)
    {

        try {
            this.Imagedata = $.parseJSON(ImageJson);
        }
        catch (err) {
            this.Imagedata = null;
        }
        if (this.Imagedata && this.Imagedata.CoverIndex != undefined && this.Imagedata.ResourceInfoList && this.Imagedata.ResourceInfoList.length > 0) {
            if (this.Imagedata.CoverIndex >= this.Imagedata.ResourceInfoList.length)
                this.Imagedata.CoverIndex = this.Imagedata.ResourceInfoList.length - 1;

            this.ResourceInfoObj = [this.Imagedata.ResourceInfoList[this.Imagedata.CoverIndex]];

            if (this.ResourceInfoObj && this.ResourceInfoObj.length && this.ResourceInfoObj.length > 0) {

                if (this.ResourceInfoObj[0].HttpPath) {
                    this.Href = this.ResourceInfoObj[0].HttpPath;
                }
            }
            else {
                this.Href = "";
            }

            return this.Href;
        }
    }
}

export interface ImageData {
    ResourceInfoList: ResourceInfo[];
    CoverIndex: number;
}

export interface ResourceInfo {
    ExtendList: KVData[];
    DocumentViewId: string;
    CanDocumentView: boolean;
    IsDocument: boolean;
    IsCover: boolean;
    IsImage: boolean;
    InfoType: boolean;
    Url: string;
    SiteInUrl: string;
    StorageConfigName: string;
    FileId: string;
    PathID: number;
    ExtName: string;
    FileNameTitle: string;
    FileSizeK: number;
    HttpPath: string;
    PhysicalPath: string;
}


export interface KVData {
    "60- 60": string;
    "38 - 38": string;
    "180-150": string;
    "150-180": string;
}