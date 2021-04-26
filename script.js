'use strict'
const person = {
    female: {
        Name: "Marie",
        Lastname: "Curie",
        Inventions: {
            first: "Theory of Radioactivity",
            second: "Radium",
            third: "Polonium"
        }
    },
    male: {
        Name: "Thomas",
        Surname: "Edison",
        Inventions: {
            first: "Electronic lightbulb",
            second: "Motion picture camera"
        }

    }

}
//console.log(person)

for(let savybe in person){
  console.log(savybe);
  // randu kaip aprašytisekantčią duomenų struktūrą į gylį
  //console.log(person[savybe])
  // suku antrą ciklą joje
  for(let antras in person[savybe]){
    // pasitikrinu, matau spausdina stalčių pavadinimus
      //console.log(antras)
      // tikrinu toliau    
     //uzduotis: jei kintamamojo reiksme Object, suk dar viena cikla
             
          
          if (typeof (person[savybe][antras]) !== "object"){
          //console.log("yes");
           console.log(antras + ": "+person[savybe][antras]) }
           else {
              for(let trecias in person[savybe][antras]){
                console.log(trecias + ": "+person[savybe][antras][trecias]); 
              }
           }

        }
        
     
  }

