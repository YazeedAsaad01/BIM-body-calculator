const button = document.getElementById("button");
const input1 = document.getElementById("weight");
const input2 = document.getElementById("height");
const select1 = document.getElementById("unit1");
const select2 = document.getElementById("unit2");
const bgContainer = document.getElementById('bg-container'); 
const main = document.getElementsByTagName('main')[0];
const div = document.createElement('div');

function weightConvertor() {
    const theValue = select1.value;

    if (input1.value) {
        if (theValue === 'kg') {
            return input1.value;
        } else if (theValue === 'pound') {
            const theWeight = input1.value / 2.205;
            return theWeight;
        }else if (theValue === 'stone') {
            const theWeight = input1.value * 6.35;
            return theWeight;
        }
    }
}


function heightConvertor() {
    const theValue = select2.value;

    if (input2.value) {
        if (theValue === 'cm') {
            return input2.value;
        } else if (theValue === 'feet') {
            const theHeight = input2.value * 30.48;
            return theHeight;
        }    
    }
}

function bmiCalc(height,weight) {
    let justHeight = height() / 100;
    let yourBMI = weight() / (justHeight * justHeight);
    return yourBMI.toFixed(2);
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    theResult = bmiCalc(heightConvertor,weightConvertor);

    let html = '';

    if(theResult <= 18.5 ) {
        html = `Your BMI is ${theResult} so if you're feeling light as a feather, remember, eating a sandwich won't make you a heavyweight champion overnight. But hey, it might help you win the 'fastest eater' title at the next picnic!`;
    }else if(theResult > 18.5 && theResult <= 24.9) {
        html = `Your BMI is ${theResult} so congratulations! You're in the Goldilocks zone of BMI. Not too heavy, not too light, just right! Remember, moderation is key. So go ahead, have that slice of cake... just not the whole cake!`;
    }else if(theResult > 25 && theResult <= 29.9) {
        html = `Your BMI is ${theResult} so hey there, Captain Cuddly! It's all fun and games until your love handles start getting mistaken for extra carry-on luggage at the airport. Time to swap the midnight snacks for a midnight stroll!`;
    }else {
        html = `Your BMI is ${theResult} so welcome to the 'Heavyweight Champion' category! Remember, every journey begins with a single step... or in your case, maybe a few more steps than usual! Don't worry, though, you'll still reach your destination. Just be prepared for a few extra pit stops along the way!`;
    }

    div.textContent = html;
    div.className = 'result';
    main.appendChild(div);
});


