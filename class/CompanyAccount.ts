import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan(num: number): void {
        if (this.status === true) {
            this.setBalance(num);
        }
    }
}
