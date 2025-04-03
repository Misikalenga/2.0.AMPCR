// afficher et cacher les block


let quizH = document.getElementById("quizH");
let bQuizH = document.getElementById("blockQuizH");
let note = document.getElementById("notes");
 
quizH.addEventListener('click', function(){
    bQuizH.style.display = "block";
    quizH.style.border = "5px solid white";
    note.style.display = "block";
})


// Quiz Hard

const color = ["rgb(248, 121, 121)","rgb(121, 248, 178)","rgb(246, 248, 121)","rgb(121, 187, 248)"]
let carteBlock = document.getElementById("carteBlock");
let carte = document.getElementById("carte");
let rendu = document.getElementById("rendu");
let reponse = document.getElementById("reponse");
let action = document.getElementById("action");
let action2 = document.getElementById("action2");
let oui = document.getElementById("oui");
let non = document.getElementById("non");
oui.style.display = "none";
non.style.display = "none";

let score = 0;
let total = 0;

let dataEH = carteJson;

let index = 0;


let startH = document.getElementById("startH");
let askQuizH = document.getElementById("askQuizH");
let quizStartH = document.getElementById("quizStartH");
let rep1H = document.getElementById("rep1H");
let rep2H = document.getElementById("rep2H");
let rep3H = document.getElementById("rep3H");
let rep4H = document.getElementById("rep4H");
let revisionH = document.getElementById("revisionsH");

let popUp = document.getElementById("popUp");

// option

let carteH = document.getElementById("carteH");
let carteOnH = document.getElementById("carteOnH");
let carteActiveH = false;

carteH.addEventListener('click', function() {
    if (carteActiveH == false){
        carteActiveH = true;
        carteOnH.style.transform = "translateX(24px)";
        carteOnH.style.background = "rgb(121, 248, 178)";
        repQ();
        ouiNon();
    }else{
        carteActiveH = false;
        carteOnH.style.transform = "translateX(0px)";
        carteOnH.style.background = "rgb(121, 187, 248)";
        repQ();
        ouiNon();
    }
})

let inverserH = document.getElementById("inverserH");
let inverserOnH = document.getElementById("inverserOnH");
let inverserActiveH = false;

inverserH.addEventListener('click', function() {
    if (inverserActiveH == false){
        inverserActiveH = true;
        inverserOnH.style.transform = "translateX(24px)";
        inverserOnH.style.background = "rgb(121, 248, 178)";
    }else{
        inverserActiveH = false;
        inverserOnH.style.transform = "translateX(0px)";
        inverserOnH.style.background = "rgb(121, 187, 248)";
    }
})

let revoirH = document.getElementById("revoirH");
let revoirOnH = document.getElementById("revoirOnH");
let revoirActiveH = false;

revoirH.addEventListener('click', function() {
    if (revoirActiveH == false){
        revoirActiveH = true;
        revoirOnH.style.transform = "translateX(24px)";
        revoirOnH.style.background = "rgb(121, 248, 178)";
    }else{
        revoirActiveH = false;
        revoirOnH.style.transform = "translateX(0px)";
        revoirOnH.style.background = "rgb(121, 187, 248)";
    }
})


// bouton start H



let repQuizH = Object.entries(dataEH);

startH.addEventListener('click', function(){
        score = 0;
        total = 0;
        note.innerHTML = "<i>" + score + "/" + total + "</i>";
        repQuizH = Object.entries(dataEH);


})

// Quiz question H


let piegeQuiz1H = Object.entries(dataEH);
let piegeQuiz2H = Object.entries(dataEH);
let piegeQuiz3H = Object.entries(dataEH);
let indexQH = 0;
let indexQP1H = 0;
let indexQP2H = 0;
let indexQP3H = 0;

let [cleRepH, valeurRepH] = repQuizH[indexQH];
let [clePi1H, valeurPi1H] = repQuizH[indexQP1H];
let [clePi2H, valeurPi2H] = repQuizH[indexQP2H];
let [clePi3H, valeurPi3H] = repQuizH[indexQP3H];


let repListH= [];
let askListH= [];

let aH = 0;
let bH = 0;
let cH = 0;
let dH = 0;

let saveQuestH = "";
let saveRepH ="";

// Quiz question H end

let positif = false;

let couleurCarte = "";

//syllabus appel

let backBlock = document.getElementById("backBlock");

let backSyllabus = document.getElementById("back");


let scrollPage = 0;
let pageLieu = document.documentElement.scrollTop + (document.documentElement.clientHeight /2 ) ;

let syllab = Object.entries(syllabusJson);
let [cleS,valS]=syllab[0];
//syllabus appel end

function incorecteRep() {
        let compte = 0;
        let incorecte = setInterval(function() {
            compte +=1;
            bQuizH.style.background = "rgb(248, 121, 121)";
            setTimeout(function(){
                bQuizH.style.background = "rgb(255, 255, 255)";
                if (compte >=2){
                    clearInterval(incorecte);
                }
            },250);
        },500);
}


function corecteRep() {
    let compte = 0;
    let incorecte = setInterval(function() {
        compte +=1;
        bQuizH.style.background = "rgb(121, 248, 178)";
        setTimeout(function(){
            bQuizH.style.background = "rgb(255, 255, 255)";
            if (compte >=1){
                clearInterval(incorecte);
            }
        },400);
    },500);
}


function quizAskH(){
    if (repQuizH.length > 4){
        
        // console.log("a"+repQuizH.length)




        indexQH = 0;
        indexQP1H = 0;
        indexQP2H = 0;
        indexQP3H = 0;

        aH = 0;
        bH = 0;
        cH = 0;
        dH = 0;



        while (indexQH === indexQP1H || indexQH === indexQP2H || indexQH === indexQP3H || indexQP1H === indexQP2H || indexQP1H === indexQP3H || indexQP2H === indexQP3H ){
            indexQH = Math.floor(Math.random() * repQuizH.length);
            indexQP1H = Math.floor(Math.random() * repQuizH.length);
            indexQP2H = Math.floor(Math.random() * repQuizH.length);
            indexQP3H = Math.floor(Math.random() * repQuizH.length);
        }

        [cleRepH, valeurRepH] = repQuizH[indexQH];
        [clePi1H, valeurPi1H] = repQuizH[indexQP1H];
        [clePi2H, valeurPi2H] = repQuizH[indexQP2H];
        [clePi3H, valeurPi3H] = repQuizH[indexQP3H];


        



        // console.log( aH, bH, cH, dH)
        if (inverserActiveH == false){
            repListH = [valeurRepH, valeurPi1H, valeurPi2H, valeurPi3H];

            while (aH === bH || aH === cH || aH === dH || bH === cH || bH === dH || cH === dH ){
                aH = Math.floor(Math.random() * repListH.length);
                bH = Math.floor(Math.random() * repListH.length);
                cH = Math.floor(Math.random() * repListH.length);
                dH = Math.floor(Math.random() * repListH.length);
            }
            rendu.innerHTML = '<h2 style= "text-align: center; ">'  + cleRepH + '</h2>';
            rep1H.innerHTML = repListH[aH];
            rep2H.innerHTML = repListH[bH];
            rep3H.innerHTML = repListH[cH];
            rep4H.innerHTML = repListH[dH];
        }else{
            askListH = [cleRepH,clePi1H,clePi2H,clePi3H];
            
            while (aH === bH || aH === cH || aH === dH || bH === cH || bH === dH || cH === dH ){
                aH = Math.floor(Math.random() * askListH.length);
                bH = Math.floor(Math.random() * askListH.length);
                cH = Math.floor(Math.random() * askListH.length);
                dH = Math.floor(Math.random() * askListH.length);
            }
            rendu.innerHTML = '<h4 style= "text-align: center; ">'  + valeurRepH + '</h4>';
            rep1H.innerHTML = askListH[aH];
            rep2H.innerHTML = askListH[bH];
            rep3H.innerHTML = askListH[cH];
            rep4H.innerHTML = askListH[dH]; 
        }


        saveQuestH = cleRepH;
        saveRepH = valeurRepH;

        
    }else{
        rep1H.innerHTML = "Game Over";
        rep2H.innerHTML = "Game Over";
        rep3H.innerHTML = "Game Over";
        rep4H.innerHTML = "Game Over";
    }
    

}
quizAskH();

function repQ(){
    
    if (carteActiveH == true){
        rep1H.style.display = "block";
        rep2H.style.display = "block";
        rep3H.style.display = "block";
        rep4H.style.display = "block";

        rep1H.addEventListener('click', function(){
            if (repListH[aH]=== valeurRepH || askListH[aH] === cleRepH){
                rep1H.innerHTML = "Bonne réponse";
                positif = true;
                if (repQuizH.length > 4){
                    score += 1;
                    total += 1;
                    note.innerHTML = "<i>" + score + "/" + total + "</i>";
                    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
                    if(revoirActiveH == false){
                        repQuizH.splice(indexQH,1);
                        // syllab.splice(indexQH,1);
                    }
                    corecteRep()
                    setTimeout(quizAskH, 1000);
                    ankiAsk();
                }

            }else{
                rep1H.innerHTML = "Mauvaise réponse";
                positif = false;
                if (repQuizH.length > 4){
                    total += 1;
                    note.innerHTML = "<i>" + score + "/" + total + "</i>";
                    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
                    setTimeout(quizAskH, 1000);
                    ankiAsk();
                    incorecteRep();
                }
            }

        })
        rep2H.addEventListener('click', function(){
            if (repListH[bH] === valeurRepH || askListH[bH] === cleRepH){
                rep2H.innerHTML = "Bonne réponse";
                positif = true;
                if (repQuizH.length > 4){
                    score += 1;
                    total += 1;
                    note.innerHTML = "<i>" + score + "/" + total + "</i>";
                    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
                    if(revoirActiveH == false){
                        repQuizH.splice(indexQH,1);
                        // syllab.splice(indexQH,1);
                    }
                    corecteRep()
                    setTimeout(quizAskH, 1000);
                    ankiAsk();
                }

            }else{
                rep2H.innerHTML = "Mauvaise réponse";
                positif = false;
                if (repQuizH.length > 4){
                    total += 1;
                    note.innerHTML = "<i>" + score + "/" + total + "</i>";
                    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
                    setTimeout(quizAskH, 1000);
                    ankiAsk();
                    incorecteRep();
                }
            }

        })
        rep3H.addEventListener('click', function(){
            if (repListH[cH] === valeurRepH || askListH[cH] === cleRepH){
                rep3H.innerHTML = "Bonne réponse";
                positif = true;
                if (repQuizH.length > 4){
                    score += 1;
                    total += 1;
                    note.innerHTML = "<i>" + score + "/" + total + "</i>";
                    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
                    if(revoirActiveH == false){
                        repQuizH.splice(indexQH,1);
                        // syllab.splice(indexQH,1);
                    }
                    corecteRep()
                    setTimeout(quizAskH, 1000);
                    ankiAsk();
                }


            }else{
                rep3H.innerHTML = "Mauvaise réponse";
                positif = false;
                if (repQuizH.length > 4){
                    total += 1;
                    note.innerHTML = "<i>" + score + "/" + total + "</i>";
                    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
                    setTimeout(quizAskH, 1000);
                    ankiAsk();
                    incorecteRep();
                }
            }

        })
        rep4H.addEventListener('click', function(){
            if (repListH[dH] === valeurRepH || askListH[dH] === cleRepH){
                rep4H.innerHTML = "Bonne réponse";
                positif = true;
                if (repQuizH.length > 4){
                    score += 1;
                    total += 1;
                    note.innerHTML = "<i>" + score + "/" + total + "</i>";
                    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
                    if(revoirActiveH == false){
                        repQuizH.splice(indexQH,1);
                        // syllab.splice(indexQH,1);
                    }
                    corecteRep()
                    setTimeout(quizAskH, 1000);
                    ankiAsk();
                }


            }else{
                rep4H.innerHTML = "Mauvaise réponse";
                positif = false;
                if (repQuizH.length > 4){
                    total += 1;
                    note.innerHTML = "<i>" + score + "/" + total + "</i>";
                    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
                    setTimeout(quizAskH, 1000);
                    ankiAsk();
                    incorecteRep();
                }
            }

        })

    }else{
        rep1H.style.display = "none";
        rep2H.style.display = "none";
        rep3H.style.display = "none";
        rep4H.style.display = "none";
    }
}

repQ();



// CARTE



function ouiNon(){

    oui.style.display = "none";
    non.style.display = "none";
    if (inverserActiveH == false){
        if (carteActiveH == false){
            reponse.innerHTML = '<p style= "text-align: center; "><b style= " background:' + couleurCarte + '">' + saveQuestH + " </b><br/> " + saveRepH + '</p>';
            oui.style.display="block";
            non.style.display= "block";       
        }else{
            reponse.style.display = "block";
            reponse.innerHTML = '<p style= "text-align: center; "><b style= " background:' + couleurCarte + '">' + saveQuestH + '</b></p>' + 
                                '<h3 style= "text-align: center; " class="anim" ><b style= " background: ' + couleurCarte + '">' + "↓ Fait un choix ↓" +  '</b></h3>';
        }
    }else{
        if (carteActiveH == false){
            reponse.innerHTML = '<p style= "text-align: center; ">' + saveRepH + ' <br/><b style= " background:' + couleurCarte + '"> ' + saveQuestH + '</b></p>';
            oui.style.display="block";
            non.style.display= "block";       
        }else{
            reponse.style.display = "block";
            reponse.innerHTML = '<p style= "text-align: center; "><b style= " background:' + couleurCarte + '">' + saveRepH + '</b></p>' + 
                                '<h3 style= "text-align: center; " class="anim" ><b style= " background:' + couleurCarte + '">' + "↓ Fait un choix ↓" +  '</b></h3>';
        }
    }
        
}

// syllabus

let syllabRep = "";

function back(){
    backBlock.style.display = "none";
    clearInterval(scrollPage);
}


function syllabus(index){
    scrollPage = setInterval(function() {
        pageLieu = document.documentElement.scrollTop + (document.documentElement.clientHeight /2 ) ;
        backBlock.style.top = pageLieu + "px";
    },100);
    

    
    for (i in syllabusJson){
        if (i ===cleRepH){
            console.log(syllabusJson[i]);
            syllabRep = syllabusJson[i]
        }else{
            console.log("sa marche pas");
        }
    }


    backBlock.style.display="block";
    // [cleS,valS]=syllab[index];
    popUp.innerHTML ="<h3>" + cleRepH + "</h3>" + "<p>"+ syllabRep +"</p>";
}

// syllabus end

function ankiAsk(){
    
    carteColorIndex = Math.floor(Math.random()* color.length);
    couleurCarte = color[carteColorIndex];
    action.style.background= couleurCarte;
    carteBlock.style.transition= "all 0.6s ease";
    carteBlock.style.opacity= "0";
    if (positif == true){
        carteBlock.style.transform= "translateX(-150px)";
    }else{
        carteBlock.style.transform= "translateX(150px)";
    }
    
    setTimeout(function(){
        carte.style.transform= "rotateY(0deg)";
        carteBlock.style.transform= "translateX(0px)";
        carteBlock.style.transform= "translateY(-350px)";

    },500);
    setTimeout(function(){
        
        carteBlock.style.transition= "all 0.8s ease";
        carteBlock.style.transform= "translateY(0px)";
        carteBlock.style.opacity= "1";

    },1000);
    


    action.addEventListener('click', function(){
        carte.style.transform= "rotateY(-180deg)";
        ouiNon();
    });

    action2.addEventListener('click', function(){
        if (carteActiveH == false){          
                carte.style.transform = "rotateY(-180deg) scale(105%)";
                setTimeout(function(){
                    carte.style.transform = "rotateY(-180deg)  scale(100%)";
                },200)     
        }else{
                carte.style.transform = "rotateY(0deg)";
        }
    });
}

non.addEventListener('click', function(){
    
    positif = false;
    total += 1;
    note.innerHTML= '<i>' + score + '/' + total + '</i>';
    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
    setTimeout(quizAskH, 1000);
    ankiAsk();
    incorecteRep();

})


oui.addEventListener('click', function(){
    
    positif = true;
    score += 1;
    total += 1;
    note.innerHTML= '<i>' + score + '/' + total + '</i>';
    revisionH.innerHTML = '<p style="background:' + couleurCarte + '; cursor: pointer;" onclick="syllabus('+saveQuestH+')"><b>' + saveQuestH + "</b> = " + saveRepH + "<br/></p>" + revisionH.innerHTML;
    if(revoirActiveH == false){
        repQuizH.splice(indexQH,1);
        // syllab.splice(indexQH,1);
    }
    corecteRep()
    setTimeout(quizAskH, 1000);
    ankiAsk();

    

})

ankiAsk();


