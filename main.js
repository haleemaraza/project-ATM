import inquirer from "inquirer";
async function startATMConversation() {
    console.log("welcome to HBL");
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "userid",
            message: "Enter your user ID"
        },
        {
            type: "number",
            name: "userpin",
            message: "Enter your password"
        },
        {
            type: "list",
            name: "accounttype",
            choices: ["Current Account", "Saving Account"],
            message: "Select your account"
        },
        {
            type: "list",
            name: "transactiontype",
            choices: ["Fash Cash withdraw", "Normal Withdraw"],
            message: "Select your Transaction Type"
        },
        {
            type: "list",
            name: "amount",
            choices: [5000, 10000, 15000, 20000],
            message: "Select your Withdraw amount PKR",
            when(answers) {
                return answers.transactiontype === "Fash Cash withdraw";
            },
        },
        {
            type: "number",
            name: "amount",
            message: "Select your Withdraw amount PKR",
            when(answers) {
                return answers.transactiontype === "Normal Withdraw";
            },
        },
    ]);
    if (answers.userid && answers.userpin) {
        console.log("proccessing your request");
        let balance = Math.floor(Math.random() * 100000000);
        console.log("your current balance is : ", balance.toLocaleString());
        let interamount = answers.amount;
        if (balance >= interamount) {
            let remainingbalance = balance - interamount;
            console.log("Transaction Successful your remaining balance is :", remainingbalance.toLocaleString());
        }
        else {
            console.log("Insuffincient Balance . PLEASE try again, with lower amount");
        }
    }
}
startATMConversation();
