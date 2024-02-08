// practice task 1
function calculateMoney(ticketSale){

    if(ticketSale < 0){
        return "Invalid Number"
    }

  else{
      // income
    const perTicket = 120;
    const totalTicketPrice = perTicket * ticketSale;

    // costs
    const conciergeCosts = 500;

    const totalStaff = 8;
    const staffCosts = totalStaff * 50;

    const totalCosts = conciergeCosts + staffCosts;

    const remainedMoney = totalTicketPrice - totalCosts;
    return remainedMoney;
  }



}
const result = calculateMoney(10);
console.log(result)