import { DioAccount } from "./DioAccount";

export class MenagerAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }
    deposit(num: number): void {
        if (this.validateStatus()) {
            this.setBalance(num + 10);
            console.log("This is your current balance: " + this.getBalance());
        }
    }
}
