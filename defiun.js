


/*Déclaration des variables*/

let defiun = document.getElementById("button1");

let regles = document.getElementById("regles");

let divquestion1 = document.createElement('div');

let center = document.querySelector("center");

let allbutton = document.getElementsByTagName('button');

let defi1btn = document.querySelector("#button1")
/*Création bouton*/







let bpause = document.createElement('button');


let giveUp = document.createElement('button');


let bool = false;

let tabquizz1 =[];

    /* Déclaration des variables du timer */
let timer = document.getElementById("tmp");

let temps1 = 120;

let intervalle =1000;
let minutes ="02";
let seconds ="00";


/*Variable compteur de bonne réponse*/
let b = 0;
let m = 0;


    


let paraquestion1 = document.createElement('p');


let listerep1 = document.createElement('div');



function finDeJeu1() {

    if(temps1 <= 0){  
        window.alert('Fin de jeu');
        defi1btn.addEventListener('click',defi1);
        window.location.reload();
        
    }

    

}


let divreponse1 = document.createElement('div');

let buttonrep1 = document.createElement('button');

let buttonrep2 = document.createElement('button');

let buttonrep3 = document.createElement('button');

let buttonrep4 = document.createElement('button');


function time() {
   
    if (bool == false) {
        
        DiminuerTemps1();
    

    } else {
        temps1 = temps1
    }

}
function fonctiontimer(){

    timer.innerHTML = minutes + ":" + seconds;
    setInterval(time, intervalle); // diminuer le temps à chaque seconde


}
bpause.addEventListener('click',function(){
    
    if (bool == false) {

        bpause.innerHTML = 'Reprendre'
        divreponse1.remove();
        bool = true;
        console.log('MArche pas')




    } else if (bool == true) {

        bool = false;
        bpause.innerHTML = 'Pause'
        
        reCall();
        console.log('Marche')



    } else {
        reCall();

    }

})


function DiminuerTemps1 (){
    
 
    temps1--;
    console.log('test avant')
    window.localStorage.setItem('temps',temps1)
   // timer.innerHTML =(temps1);   
    minutes = parseInt(temps1 / 60, 10);
    seconds = parseInt(temps1 % 60, 10);
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (seconds < 10){
        seconds = "0" + seconds
    }
    timer.innerHTML = minutes + ":" + seconds;
    finDeJeu1();
}

    /* Bannière*/

let divbanniere = document.createElement('div');
let banniere1 = document.createElement('p');
  
function banniere(){
   
    center.appendChild(divbanniere);
    divbanniere.appendChild(banniere1);

    banniere1.innerHTML = "Bonnes réponses : "+ b + " / " +  " Mauvaises réponses : "+ m;
    window.localStorage.setItem("bonne rep",b);
    window.localStorage.setItem("mauvaise rep",m)
}




window.localStorage.clear();




function ajoutTemps(){
    b++; //bonne réponse
    if(temps1 <= 176){
        temps1 = temps1+5;
        console.log(temps1);
    }else if(temps1 == 179 ){
        temps1= temps1+2;
    }else if(temps1 == 178 ){
        temps1= temps1+3;
    }else if(temps1 == 177 ){
        temps1= temps1+4;
    }
}
function perdTemps(){

    temps1 = temps1 - 1; // On enlève 2 seconde du point de vue de l'utilisateur
                         // ensuite ajouter la fonction de fin de jeu une fois que le temps est est strictement inférieur à 0
    m++;    //  mauvaise réponse
}



function abandon1(){
    window.alert('Vous avez abandonnée.')
    refresh();
}


function abandonetpause(){
    center.appendChild(giveUp);
    giveUp.innerHTML = "Abandonner"
    giveUp.addEventListener('click',abandon1)

    center.appendChild(bpause);

    bpause.innerHTML ="Pause"
    fonctiontimer();
}

function reCall(){
    //let idpara = document.getElementById('parabanniere')

    divreponse1.remove();
    divquestion1.remove();
    divbanniere.remove();
    banniere();

    defi1();
}

function defi1(){

    
    


    let tabrep = [];

    
    
    regles.remove();    // supprime tout les éléments de la div regles
 

    let numrandrep = Math.floor(Math.random()*tabrep.length);
    let randrep = tabrep[numrandrep];
 
    /* definition du randrep correpodant à une réponse choisi au hasard */

    let rand = Math.floor(Math.random()*allQuestions.length);





    buttonrep1.style.background = 'white'
    buttonrep2.style.background = 'white'
    buttonrep3.style.background = 'white'
    buttonrep4.style.background = 'white'

    

    /* Création des boutons*/

        /* bouton abandonée et pause*/

        
    
    divreponse1.appendChild(buttonrep1);
    tabrep.unshift('rep1')



    divreponse1.appendChild(buttonrep2);
    tabrep.unshift('rep2')

    divreponse1.appendChild(buttonrep3);


    divreponse1.appendChild(buttonrep4);


    if (allQuestions[rand].rep3 == undefined){
        buttonrep3.remove()
     
    }else{
        tabrep.unshift('rep3')
    }

    if (allQuestions[rand].rep4 == undefined){
        buttonrep4.remove()
    }else{
        tabrep.unshift('rep4')
    }

    console.log('tableau: '+tabrep)

    let quizz = allQuestions[rand].quizz;

    for (let i in tabquizz){
        if (i==quizz){
            quizz = allQuestions[rand].quizz;
    }}
    
    tabquizz.unshift(quizz);
    

    

    center.appendChild(divquestion1);
    divquestion1.appendChild(paraquestion1);

    center.appendChild(divreponse1);
    paraquestion1.innerHTML = quizz;


    for(let key in allQuestions[rand]){

        
        let goodrep = allQuestions[rand]["goodrep"];

        
        //console.log(goodrep)
        
        // if(key == "rep1" || key == "rep2" || key == "rep3" || key == "rep4"){
        //     let w = window.localStorage.setItem(key,allQuestions[44][key])
        // }
        
        //let repdefi1 = localStorage.getItem("i");
        //console.log(repdefi1)

     
    
        function reposition1(){

            divreponse1.remove();
        
         
            if(key.charAt(3)==goodrep){

            for (let key1 in allQuestions[rand]){
                let buttonrep1 = document.createElement('button');

                center.appendChild(buttonrep1);
                buttonrep1.innerHTML = allQuestions[rand][key];
                buttonrep1.addEventListener('click',defi1);

                let buttonrep2 = document.createElement('button');
                center.appendChild(buttonrep2);
                buttonrep2.innerHTML = allQuestions[rand][key+1];
                if(key1[2]!=undefined){
                    let buttonrep3 = document.createElement('button');
                    center.appendChild(buttonrep3);
                    buttonrep3.innerHTML = allQuestions[rand][key];

                }
                
                if(key1[3]!=undefined){
                 let buttonrep4 = document.createElement('button');
                 center.appendChild(buttonrep4);
                 buttonrep4.innerHTML = allQuestions[rand][key];
                }
            }    
   

            

            }
            
        }
   
       if(key == "rep1"){
            

                buttonrep1.addEventListener('mouseover', giveColor);
                buttonrep1.addEventListener('mouseout', removeColor);

                buttonrep1.innerHTML = allQuestions[rand][key];
                tabrep.pop(numrandrep);
            
            
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 1")
                buttonrep1.addEventListener('click',ajoutTemps);
                buttonrep1.addEventListener('click',reCall)
            }else{
                buttonrep1.addEventListener('click',perdTemps);
                buttonrep1.addEventListener('click',reCall)
            }



        }else if(key == "rep2"){
            

            buttonrep2.addEventListener('mouseover', giveColor);
            buttonrep2.addEventListener('mouseout', removeColor);

            buttonrep2.innerHTML = allQuestions[rand][key];
            
            if(key.charAt(3) == goodrep){
               // console.log("Bonne réponse 2")
               buttonrep2.addEventListener('click',ajoutTemps);
               buttonrep2.addEventListener('click',reCall)
               
            }else{
                buttonrep2.addEventListener('click',perdTemps);
                buttonrep2.addEventListener('click',reCall)
            }
        }else if(key == "rep3"){
            
            buttonrep3.addEventListener('mouseover', giveColor);
            buttonrep3.addEventListener('mouseout', removeColor);

            buttonrep3.innerHTML = allQuestions[rand][key];
        
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 3")
                buttonrep3.addEventListener('click',ajoutTemps);
                buttonrep3.addEventListener('click',reCall)
                
            }else{
                buttonrep3.addEventListener('click',perdTemps);
                buttonrep3.addEventListener('click',reCall)
            }
        
        }else if(key == "rep4"){
            
            buttonrep4.addEventListener('mouseover', giveColor);
            buttonrep4.addEventListener('mouseout', removeColor);

            buttonrep4.innerHTML = allQuestions[rand][key];

            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 4")
                buttonrep4.addEventListener('click',ajoutTemps);
                buttonrep4.addEventListener('click',reCall)
            }else{
                buttonrep4.addEventListener('click',perdTemps);
                buttonrep4.addEventListener('click',reCall)

            }
        
        }
      
        


    }



    //console.log(paraquestion1)

    // for(let key in allQuestions[1]){

    //     window.localStorage.setItem(key,allQuestions[1][key])


    // }

} 


defiun.addEventListener('click',abandonetpause)

defiun.addEventListener('click',banniere);

defiun.addEventListener('click',defi1);


