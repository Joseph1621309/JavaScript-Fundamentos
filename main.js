//Racha da conta
let tip = 0.10

while (true){
    let n_people = Number(prompt("How much people came to this dinner?: "))
    if (n_people <=1){
        alert("We're a group so, a group have mote then 1 person.")
    }else{
        alert(`Perfect! So we're ${n_people} of us;`)
        break}
}

while (true){
    let q_tip = prompt("Are We going to pay the tip of 10% extra? (y) or (n): ")
    if (q_tip.toLowerCase() === 'n'){
        tip = 0
        break
    }else if(q_tip.toLowerCase() === 's'){
        break
    }else{
        alert("It's yes or not")
    }
}

alert("Ok, Excuse me waiter!")
while (true){
    let bill = Number(prompt(" How much was the bill?: "))
    if (bill < 0){
        alert("how is the bill negative? Tell the real value of bill! ")
    }else{
        break
    }
}
let group_bill = (bill + (bill * tip))/ n_people 

alert(`Well, seeing as we're in ${n_people}, so it's going ${group_bill.toFixed(2)} for each one of us. `)


