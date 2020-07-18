//feetToMIle
function feetToMile(feet){
    if(feet <= 0){
        return "Distance can't be negative or zero";
    }else{
        let mile = feet / 5280;
        return mile;
    }
}

const result = feetToMile(10560);
console.log(result);


//woodCalculator
function woodCalculator(chair, table, bed){
    let chairWood = chair * 1;
    let tableWood = table * 3;
    let bedWood = bed * 5;

    let totalWood = chairWood + tableWood + bedWood;
    return totalWood; 
}

const woodResult = woodCalculator(12, 2, 3);
console.log(woodResult);


//brickCalculator
function brickCalculator(floor){
    
}


//tinyFriend
function tinyFriend(frinedsName){
    if(frinedsName = []){
        return "There is no friend's name here";
    }
    else{
        var tiny = frinedsName[0];
        for(let i = 0; i < frinedsName.length; i++){
            let currentFriendName = frinedsName[i];
            if(currentFriendName.length < tiny.length){
                tiny = currentFriendName;
            }
        }
        return tiny;
    }
}

const tinyFriendName = tinyFriend(["Fahim", "Imon", "Sam", "Tansir", "Musa"]);
console.log(tinyFriendName);