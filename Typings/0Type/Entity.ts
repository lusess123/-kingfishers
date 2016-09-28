export module entity {

    export class SelectorItem {
        public IsSelect: boolean;
        public Key: string;
        public Text: string;
    }

    export class SelectorModel {
        public List: Array<CodeDataModel>;
        public Total: number;
        public Index: number;
        public Size: number;
    }

    //票号和金额
    export class NumMoney {
        public Num: string;//规定是16位的
        public Money: string;
        public isCheck: boolean = true;
    }

} 