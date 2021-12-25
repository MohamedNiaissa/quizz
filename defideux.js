




/*Déclaration des variables*/

let regles2 = document.getElementById("regles");

let divquestion2 = document.createElement('div');


// let allbutton = document.getElementsByTagName('button');

let defi2btn = document.querySelector("#button2")
/*Création bouton*/

let bpause2 = document.createElement('button');


let giveUp2 = document.createElement('button');


let bool2 = false;

    /* Déclaration des variables du timer */
let timer2 = document.getElementById("tmp");

let temps2 = 20;

let intervalle2 =1000;
let minutes2 ="02";
let seconds2 ="00";


/*Variable compteur de bonne réponse*/
let good= 0;
let bad = 0;

let tabquizz = [];

    


let paraquestion2 = document.createElement('p');


// let listerep1 = document.createElement('div');



function nextQuestion() {

    if(temps2 <= 0){  
       
       defi2();
       temps2 = 21;
        
    }
}


let divreponse2 = document.createElement('div');

let buttonrep1defi2 = document.createElement('button');

let buttonrep2defi2 = document.createElement('button');

let buttonrep3defi2 = document.createElement('button');

let buttonrep4defi2 = document.createElement('button');


function time2() {
   
    if (bool2 == false) {
        
        DiminuerTemps2();
    

    } else {
        temps2 = temps2
    }

}
function fonctiontimer2(){

    timer2.innerHTML = minutes2 + ":" + seconds2;
    setInterval(time2, intervalle2); // diminuer le temps à chaque seconde


}




bpause2.addEventListener('click', bpausefunction)

function bpausefunction(){
    
    if (bool2 == false) {

        bpause2.innerHTML = 'Reprendre'
        divreponse2.remove();
        bool2 = true;
        console.log('MArche pas')




    } else if (bool2 == true) {

        bool2 = false;
        bpause2.innerHTML = 'Pause'
        
        reCall2();
        console.log('Marche')
    } else {
        reCall2();

    }

}





function DiminuerTemps2 (){
    
 
    temps2--;
    window.localStorage.setItem('temps',temps2)
   // timer2.innerHTML =(temps2);   
    minutes2 = parseInt(temps2 / 60, 10);
    seconds2 = parseInt(temps2 % 60, 10);
    if (minutes2 < 10){
        minutes2 = "0" + minutes2
    }
    if (seconds2 < 10){
        seconds2 = "0" + seconds2
    }
    timer2.innerHTML = minutes2 + ":" + seconds2;
    nextQuestion();
}

    /* Bannière*/

let divbanniere2 = document.createElement('div');
let banniere2 = document.createElement('p');
  
function banniere2f(){
   
    center.appendChild(divbanniere2);
    divbanniere2.appendChild(banniere2);




    window.localStorage.setItem("bonne rep",good);
    window.localStorage.setItem("mauvaise rep",bad)

    

    
    console.log("testlocal après");


}








function ResetTempsandGoodAnswer(){
    good++; //good réponse

    temps2 =21  // 20 du point de vue de l'utilisateur( car décrément au démarrage)
}


function ResetTempsandBadAnswer(){
    bad++;    //  mauvaise réponse


    temps2 = 21 
                         // ensuite ajouter la fonction de fin de jeu une fois que le temps est est strictement inférieur à 0
  
}



function abandon2(){
    window.alert('Vous avez abandonnée.')
    refresh();
}


function abandonetpause2(){
    center.appendChild(giveUp2);
    giveUp2.innerHTML = "Abandonner"
    giveUp2.addEventListener('click',abandon2)

    center.appendChild(bpause2);

    bpause2.innerHTML ="Pause"
    fonctiontimer2();
}

function reCall2(){
    //let idpara = document.getElementById('parabanniere')

    divreponse2.remove();
    divquestion2.remove();
    divbanniere2.remove();
    banniere2f();
   


    defi2();
}


function FiveMistake(){
    if (bad == 5){
        window.alert('Perdu , vous avez fait 5 erreurs et '+good+' bonne réponse');
        window.location.reload();
        window.localStorage.clear();

    }


  
}

function defi2(){

    //  console.log('testtttttttt')
    let tabrep = [];
   // window.alert('defi 2')
    // defi2btn.addEventListener('click',function(){
    //     window.alert('defi 2');
    // })
    
    regles2.remove();    // supprime tout les éléments de la div regles2
 

    let numrandrep = Math.floor(Math.random()*tabrep.length);
    let randrep = tabrep[numrandrep];
 
    /* definition du randrep correpodant à une réponse choisi au hasard */

    let rand = Math.floor(Math.random()*allQuestions.length);


    buttonrep1defi2.style.background = 'white'
    buttonrep2defi2.style.background = 'white'
    buttonrep3defi2.style.background = 'white'
    buttonrep4defi2.style.background = 'white'

   

    /* Création des boutons*/

        /* bouton abandonée et pause*/

        
    
    divreponse2.appendChild(buttonrep1defi2);
    tabrep.unshift('rep1')



    divreponse2.appendChild(buttonrep2defi2);
    tabrep.unshift('rep2')

    divreponse2.appendChild(buttonrep3defi2);


    divreponse2.appendChild(buttonrep4defi2);


    if (allQuestions[rand].rep3 == undefined){
        buttonrep3defi2.remove()
     
    }else{
        tabrep.unshift('rep3')
    }

    if (allQuestions[rand].rep4 == undefined){
        buttonrep4defi2.remove()
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
    

    console.log('Quizz' + quizz)


    

    center.appendChild(divquestion2);
    divquestion2.appendChild(paraquestion2);

    center.appendChild(divreponse2);
    paraquestion2.innerHTML = quizz;


    for(let key in allQuestions[rand]){

        let goodrep = allQuestions[rand]["goodrep"];        
        //console.log(goodrep)
        
        // if(key == "rep1" || key == "rep2" || key == "rep3" || key == "rep4"){
        //     let w = window.localStorage.setItem(key,allQuestions[44][key])
        // }
        
        //let repdefi2 = localStorage.getItem("i");
        //console.log(repdefi2)


   
       if(key == "rep1"){
            
                buttonrep1defi2.addEventListener('mouseover', giveColor);
                buttonrep1defi2.addEventListener('mouseout', removeColor);

                buttonrep1defi2.innerHTML = allQuestions[rand][key];
                tabrep.pop(numrandrep);
            
            
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 1")
                buttonrep1defi2.addEventListener('click',ResetTempsandGoodAnswer);
                buttonrep1defi2.addEventListener('click',reCall2)
            }else{
                buttonrep1defi2.addEventListener('click',ResetTempsandBadAnswer);
                buttonrep1defi2.addEventListener('click',reCall2)
            }



        }else if(key == "rep2"){
            

            buttonrep2defi2.addEventListener('mouseover', giveColor);
            buttonrep2defi2.addEventListener('mouseout', removeColor);

            buttonrep2defi2.innerHTML = allQuestions[rand][key];
            
            if(key.charAt(3) == goodrep){
               // console.log("Bonne réponse 2")
               buttonrep2defi2.addEventListener('click',ResetTempsandGoodAnswer);
               buttonrep2defi2.addEventListener('click',reCall2)
               
            }else{
                buttonrep2defi2.addEventListener('click',ResetTempsandBadAnswer);
                buttonrep2defi2.addEventListener('click',reCall2)
            }
        }else if(key == "rep3"){
            
            buttonrep3defi2.addEventListener('mouseover', giveColor);
            buttonrep3defi2.addEventListener('mouseout', removeColor);

            buttonrep3defi2.innerHTML = allQuestions[rand][key];
        
            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 3")
                buttonrep3defi2.addEventListener('click',ResetTempsandGoodAnswer);
                buttonrep3defi2.addEventListener('click',reCall2)
                
            }else{
                buttonrep3defi2.addEventListener('click',ResetTempsandBadAnswer);
                buttonrep3defi2.addEventListener('click',reCall2)
            }
        
        }else if(key == "rep4"){
            
            buttonrep4defi2.addEventListener('mouseover', giveColor);
            buttonrep4defi2.addEventListener('mouseout', removeColor);

            buttonrep4defi2.innerHTML = allQuestions[rand][key];

            if(key.charAt(3) == goodrep){
                //console.log("Bonne réponse 4")
                buttonrep4defi2.addEventListener('click',ResetTempsandGoodAnswer);
                buttonrep4defi2.addEventListener('click',reCall2)
            }else{
                buttonrep4defi2.addEventListener('click',ResetTempsandBadAnswer);
                buttonrep4defi2.addEventListener('click',reCall2)

            }
        
        }
    }
    FiveMistake();



    //console.log(paraquestion2)

    // for(let key in allQuestions[1]){

    //     window.localStorage.setItem(key,allQuestions[1][key])


    // }

}


console.log('on passe ici')


defi2btn.addEventListener('click',abandonetpause2)

defi2btn.addEventListener('click',banniere2f);

defi2btn.addEventListener('click',defi2);


