import inquirer from "inquirer";

let Converters = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1,
        "AED":0.016 ,
        "KWD": 0.0013,
        "SAR":0.016
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1,
        "AED":4.48 ,
        "KWD":0.37 ,
        "SAR":4059
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1,
        "AED":3.67 ,
        "KWD":0.31 ,
        "SAR":3.76
    },
    "SAR": {
        "USD": 0.27,
        "GBP": 0.22,
        "PKR": 60.78,
        "AED": 0.98,
        "KWD": 0.081,
        "SAR":1
    },
    "AED": {
        "USD": 0.27,
        "GBP": 0.22,
        "PKR": 62.15,
        "AED": 1,
        "KWD":0.083 ,
        "SAR":1.02
    },
    "KWD": {
        "USD": 3.27,
        "GBP": 2.68,
        "PKR": 747.69,
        "AED":12.2 ,
        "KWD":1 ,
        "SAR":12.30
    },
}
async function CurrencyConverter() {
    
const answer: { from: "PKR" | "GBP" | "USD"| "SAR"|"AED"|"KWD", to: "PKR" | "GBP" | "USD"|"SAR"|"AED"|"KWD", amount: number } = await inquirer.prompt([
    {
        type: 'list',
        name: 'from',
        choices: ["PKR", "GBP", "USD","AED","KWD","SAR"],
        message: "Select Your Currency: "
    },
    {
        type: 'list',
        name: 'to',
        choices: ["PKR", "GBP", "USD","AED","KWD","SAR"],
        message: "Select Your Convert  Currency:"
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter Your convertion amount:'
    }
]);

const { from, to, amount } = answer;

if (from && to && amount) {
    let result = Converters[from][to] * amount;
    console.log(`Your ${amount} ${from} is ${result} ${to}`);
} else {
    console.log('Invalid Inputs');
}

}
async function startAgain(){
    do{
        await CurrencyConverter();
        var again = await inquirer
    .prompt({
            type: "input",
            name: "restart",
            message: "Do u want to countinue? Press y/n"
           })
        }
        while(again.restart=="y" || again.restart=="Y" ||again.restart=="Yes" || again.restart=="YES" || again.restart=="yes");
    }
    startAgain();