export namespace Sns
{
    export interface INew {
        UserName: string;
        UserId: string;
        UserPic: string;

        NewContent: string;
        ShowTime: Date;
        ReadTime: Date;
        IsRead: boolean;
    }


    export interface NewData
    {
           DayString: string;
           CreateDateTime: string;
           FromUserName: string;
           FromUserId: string;
           Content: string;
    }

    export interface DayNewData {
        DayString: string;
        NewDataList: NewData[];
    }

    export interface FeedData {
        DayNewList: DayNewData[];
    }
}