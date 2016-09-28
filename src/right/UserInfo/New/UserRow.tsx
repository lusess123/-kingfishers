import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import userInsertRowFile = require("./UserInsertRow");
import textFile = require("./../../../02col/01single/Text");
export module UserRow {
    export class UserRowAction extends domCore.DomAction { }
    export class UserRowReact extends domCore.DomReact<UserRowProps, UserRowStates, UserRowAction> implements domCore.IReact {
        public state = new UserRowStates();
        public pSender(): React.ReactElement<any> {
            return (
                <div>
                    {this.props.Vm.UserInsertRow.intoDom()}
                    </div>
                )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IUserRowVmConfig
    {
        UserInsertRow?: userInsertRowFile.UserInsertRow.IUserInsertRowVmConfig;
    }

    export class UserRowVm extends domCore.DomVm {
        public ReactType = UserRowReact;

        public UserInsertRow: userInsertRowFile.UserInsertRow.UserInsertRowVm;
        public constructor(config: IUserRowVmConfig ) {
            super();
            if (config) {
                if (config.UserInsertRow) {
                    this.UserInsertRow = new userInsertRowFile.UserInsertRow.UserInsertRowVm(config.UserInsertRow);
                }
            }
        }
    }

    export class UserRowStates extends domCore.DomStates { }
    export class UserRowProps extends domCore.DomProps<UserRowVm> { }
}