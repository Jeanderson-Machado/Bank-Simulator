export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    readonly status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName(): string {
        return this.name;
    }

    deposit(num: number): void {
        if (this.validateStatus()) {
            this.balance += num;
        }
    }

    withdraw(num: number): void {
        if (this.validateStatus()) {
            if (this.balance >= num) {
                this.balance -= num;
            } else {
                console.log("you cannot withdrow");
            }
        }
    }

    getBalance(): number {
        return this.balance;
    }

    setBalance(num: number): void {
        this.balance += num;
    }

    validateStatus(): boolean {
        if (this.status) {
            return this.status;
        }

        throw new Error("Conta inválida");
    }
}
