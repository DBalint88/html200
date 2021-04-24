
let balance = 0
console.log('js is working')

function menu() {
    let selection;
    selection = prompt('Welcome.  Please choose an option: \r\n \r\n D to Deposit \r\n W to Withdraw \r\n B to view Balance \r\n Q to Quit.');
    switch (selection) {
      case null:
        //keepGoing = false;
        return;
      case 'D':
        let deposit = Number(prompt('Enter the amount to deposit.'));
        balance = balance + deposit;
        console.log(balance);
        menu();
        break;
      case 'W':
        let withdrawl = Number(prompt('Enter the amount to withdrawal.'));
        balance = balance - withdrawl
        console.log(balance);
        menu();
        break;
      case 'B':
        alert(`Your balance is $${balance.toFixed(2)}. Press OK to continue.`);
        menu();
        break;
      case 'Q':
        alert('Thank you for your business.  Goodbye.');
        //keepGoing = false;
        return;
      default:
        alert('Invalid selection.  Please try again.');
        menu();
        break;
    }

}
