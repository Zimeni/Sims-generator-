$(document).ready(function(){  
    function init(){
        // General fields
        var gender = ["male", "female"];
        var race = ["race 1", "race 2", "race 3", "race 4",];
        var raceSpecial = ["raceSpecial 1", "raceSpecial 2", "raceSpecial 3",];
        var age = ["age 1", "age 2", "age 3"];
        //Personality fields
        var character = ["character 1", "character 2", "character 3", "character 4",];
        var favourites = ["favourites 1", "favourites 2", "favourites 3", "favourites 4",];
        var zodiac = ["zodiac 1", "zodiac 2", "zodiac 3", "zodiac 4",];
        var dream = ["dream 1", "dream 2", "dream 3", "dream 4",];
        //Life fields
        var career = ["career 1", "career 2", "career 3", "career 4",];
        var familyStatus = ["status 1", "career 2", "career 3",];
        var childrenNumber = ["1", "2", "3",];
        var petsNumber = ["1", "2", "3",];
        // Pets fields
        var petType = ["dog", "cat", "horse",];
        var petAge = ["age 1", "age 2", "age 3"];
        var petBreed = ["breed 1", "breed 2", "breed 3",];
        var petCharacter = ["character 1", "character 2", "character 3", "character 4",];
        
        // special vars:
        var raceNum;
        
       
        var inputFields = document.getElementsByClassName('field');
        for(var i=0;i<inputFields.length;i++){
            inputFields[i].addEventListener("click", setRandomParam);
        }
        
        var sections = document.getElementsByClassName('section');
        for(var i=0;i<sections.length;i++){
            sections[i].addEventListener("click", setRandomParam);
        }
    };
    
    function setRandomParam(element){
        var random;
        var elementId = element.target.id;
        switch(elementId){
            // General Fields:    
            case "gender": random = generate(2);
                break;
            case "race": random = raceNum = generate(7);
                break;
            case "special": if(raceNum===3) random = generate(6); // for Fairy
                            else if(raceNum===6) random = generate(15); // for Ghost
                break;
            case "age": random = generate(6);
                break;
            case "character1": random = generate(95);
                break;
            case "character2": random = generate(95);
                break;
            case "character3": random = generate(95);
                break;
            case "character4": random = generate(156);
                break;
            case "character5": random = generate(156);
                break;
            case "likes1": random = generate (20); // Color
                break;
            case "likes2": random = generate (53); // Food: Ламинария jast for mermaids, 1 положительная - for vampires
                break;
            case "likes3": random = generate (28); // Music
                break;
            case "zodiac": random = generate(12);
                break;
            case "dream": random = generate();
                break;
            case "career": 
                break;
            case "status": random = generate(); 
                break;
            case "childrenNumber": random = generate();
                break;
            case "petNumber": random = generate();
                break;
            case "petType": random = generate(7); // собаками, кошками, птицами, ящерицами, грызунами и змеями,  верховой лошадью.
                break;
            case "petAge": random = generate();
                break;
            case "petBreed": random = generate();
                break;
            case "petCharacter1": random = generate(30);
                break;
            case "petCharacter2": random = generate(30);
                break;
            case "petCharacter3": random = generate(30);
                break;
            //Personality fields:    
            //Sections:
            case "general": setGeneralSection(4); // set data for 4 fields in General section
                break;   
            case "personality": random = generate(30);
                break;    
                
            default: console.log("Error in setRandomParam()->switch ");
        }
        setGeneralField(elementId, random);
        console.log(element.target.id + " " + random);
    };
    
    function generate(range){
        return Math.floor(1+ Math.random() * range);
        
    };
    
    /**************************
    *******General section*****
    ***************************
    */
    function setGeneralField(elementId, random){
        if(elementId==="gender"){
            if(random===1){
                document.getElementById("gender").innerHTML = "Женский";
            }
            else {
                document.getElementById("gender").innerHTML = "Мужской";
            }        
        }
        else if(elementId==="race"){
            if(random!==3 && random!==6){
                document.getElementById("special").innerHTML = "-";
            }
            
            if(random==1){
                document.getElementById("race").innerHTML = "Человек";
            }
            else if(random==2){
                document.getElementById("race").innerHTML = "Оборотень";
            }
            else if(random==3){
                document.getElementById("race").innerHTML = "Фея";
                setSpecialGeneralField(generate(6));
            }
            else if(random==4){
                document.getElementById("race").innerHTML = "Ведьма";
            }
            else if(random==5){
                document.getElementById("race").innerHTML = "Вампир";
            }
            else if(random==6){
                document.getElementById("race").innerHTML = "Призрак";
                setSpecialGeneralField(generate(15));
            }
            else if(random==7){
                document.getElementById("race").innerHTML = "Джинн";
            }
            
        }
        else if(elementId==="special" && document.getElementById("race").innerHTML!=="-"){ // Special fro Fairy and Ghost
                setSpecialGeneralField(random);
        }
        else if(elementId==="age"){
            switch(random){
                case 1: document.getElementById("age").innerHTML = "Малыш";
                    break;
                case 2: document.getElementById("age").innerHTML = "Ребенок";
                    break;
                case 3: document.getElementById("age").innerHTML = "Подросток";
                    break;
                case 4: document.getElementById("age").innerHTML = "Молодой";
                    break;
                case 5: document.getElementById("age").innerHTML = "Взрослый";
                    break;
                case 6: document.getElementById("age").innerHTML = "Пожилой";
                    break;
            }
        }
    }
    
    function setGeneralSection(fields){
        var randomArr = [];
        var fieldNameArr=[];
        
        randomArr[0] = generate(2); //gender
        fieldNameArr[0] = "gender";
        
        randomArr[1] = generate(7); //race
        fieldNameArr[1] = "race";
        
        if(randomArr[1]===3) randomArr[2] = generate(6); // for Fairy
        else if(randomArr[1]===6) randomArr[2] = generate(15);// for Ghost
        fieldNameArr[2] = "special";
        
        randomArr[3] = generate(6); //age
        fieldNameArr[3] = "age";
        
        for(var i=0;i<fields;i++){
            setGeneralField(fieldNameArr[i], randomArr[i]);
        }
    }
        
    function setSpecialGeneralField(random){
            if(document.getElementById("race").innerHTML === "Фея"){
                switch(random){
                    case 1: document.getElementById("special").innerHTML = "Ивовые прутья";
                        break;
                    case 2: document.getElementById("special").innerHTML = "Мечтательная стрекоза";
                        break;
                    case 3: document.getElementById("special").innerHTML = "Величественный монарх";
                        break;
                    case 4: document.getElementById("special").innerHTML = "Вихрь";
                        break;
                    case 5: document.getElementById("special").innerHTML = "Капризный папоротник";
                        break;
                    case 6: document.getElementById("special").innerHTML = "Работящий шмель";
                        break;
                }
            }
            else if(document.getElementById("race").innerHTML === "Призрак"){
                switch(random){
                    case 1: document.getElementById("special").innerHTML = "Старость";
                        break;
                    case 2: document.getElementById("special").innerHTML = "Утопление";
                        break;
                    case 3: document.getElementById("special").innerHTML = "Голод";
                        break;
                    case 4: document.getElementById("special").innerHTML = "Удар током";
                        break;
                    case 5: document.getElementById("special").innerHTML = "Пожар";
                        break;
                    case 6: document.getElementById("special").innerHTML = "Проклятие мумии";
                        break;
                    case 7: document.getElementById("special").innerHTML = "Метеорит";
                        break;
                    case 8: document.getElementById("special").innerHTML = "Гибель на море";
                        break;
                    case 9: document.getElementById("special").innerHTML = "Человек-статуя";
                        break;
                    case 10: document.getElementById("special").innerHTML = "Превращение";
                        break;
                    case 11: document.getElementById("special").innerHTML = "Спиритический сеанс";
                        break;
                    case 12: document.getElementById("special").innerHTML = "Смерть от мармеладки";
                        break;
                    case 13: document.getElementById("special").innerHTML = "Замерз до смерти";
                        break;
                    case 14: document.getElementById("special").innerHTML = "Смерть от удара тупым предметом";
                        break;
                    case 15: document.getElementById("special").innerHTML = "Смерть от разглагольствования";
                        break;
                }
            }
    }
    
    /**************************
    ****Personality section****
    ***************************
    */
    
    setPersonalityField(elementId, random){
        
    }
    
    init();
    
    /*document.getElementById("gender").addEventListener("click", function(){
       document.getElementById("gender").innerHTML = "lala";
    });*/
});