console.log("person1: Show Ticket")
console.log("person2: Show Ticket")
const promise=async()=>{
    const promisewifetobringticket = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Ticket'),3000)
    })
    const Popcorn = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Popcorn'),4000)
    })
    const butter = new Promise((resolve,reject)=>{
         setTimeout(()=>resolve('Butter'),6000)
     })
    const coldDrink = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('coldDrinks'),7000)
    })
    let ticket= await promisewifetobringticket;
    console.log(`I got the ${ticket}`)
    console.log("husband: We should go in");
    console.log("Wife: no I am hungry");
    let pop = await Popcorn;
    console.log(`husband: I got some${pop}`);
    console.log("Wife: i want some butter on it");
    let but = await butter;
    console.log(`husband: I got some ${but} on ${pop}`);
    console.log("Wife: Now i need ColdDrinks");
    let cdrink= await coldDrink;
    console.log(`Husband: I have got ${cdrink}`);

}
promise();
console.log("person4: Show Ticket")
console.log("person5: Show Ticket")