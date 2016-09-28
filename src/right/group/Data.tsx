
import dataFile = require("./../../07data/data");
export namespace Group {
    export interface IGroupData {
        GroupID: string;
        //FParentFID: string;
        FParentFName: string;//上级机构
        GroupName: string;//机构名
        GroupCode: string;//机构编码
        FPhone: string;//联系方式
        FControlUnitName: string;
        UPDATE_TIME: string;//更新时间
    }
    export interface IGroupDetailData {
        GroupID: string;
        FParentFID: string;
        FParentFName: string;
        GroupName: string;
        GroupCode: string;
        FPhone: string;
        GroupDescrible: string; //机构描述
        FAddress: string;  //地址
        Fax: string;  //传真
        Post: string; //邮政编码
        //ProductFIDs: string; //所属产品
    }

    export interface IGroupButtonData
    {
        RightID : string;
        ParentID: string;
        RightKey: string;
        ID: string;//menuid
        Name: string;//rightkey
        RightValue: string;
        RightType: string;
        RightDesc: string;
        Pid: string;//parentid
        Icon: string;
        OrderID: string;
        Uniquekey: string;
        KeyType: string;
        FcontrolUnitID: string;
    }
    export interface PagerListData<T> {
        Pager: dataFile.Right.PagerData;
        List: Array<T>;
    }
    export interface GroupPagerListData extends PagerListData<IGroupData> {
    }
}