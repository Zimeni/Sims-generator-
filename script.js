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
        
        var inputFields = document.getElementsByClassName('field');
        for(var i=0;i<inputFields.length;i++){
            inputFields[i].addEventListener("click", generate);
        }
    };
    
    function generate(element){
        var elementId = element.target.id;
        switch(elementId){
            case "gender":
                break;
            case "race":
                break;
            case "special":
                break;
            case "age":
                break;
            case "character1":
                break;
            case "character2":
                break;
            case "character3":
                break;
            case "character4":
                break;
            case "character5":
                break;
            case "likes1":
                break;
            case "likes2":
                break;
            case "likes3":
                break;
            case "zodiac":
                break;
            case "dream":
                break;
            case "career":
                break;
            case "status":
                break;
            case "childrenNumber":
                break;
            case "petNumber":
                break;
            case "petType":
                break;
            case "petAge":
                break;
            case "petBreed": console.log("jkjk");
                break;
            case "petCharacter1":
                break;
            case "petCharacter2":
                break;
            case "petCharacter3":
                break;
            default: console.log("Error in generate()->switch ");
        }
        console.log(element.target.id);
    }
    
    
    
    
    init();
    
    document.getElementById("gender").addEventListener("click", function(){
        $(".gender").text("lala");
    });
});