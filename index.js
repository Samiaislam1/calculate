const calculate = () => {

    const firstInput = document.getElementById('1st');
    const firstText = firstInput.value;
    const fristNumber = parseFloat(firstText);

    const calculates = fristNumber * 1000;
    const text = document.getElementById('result-1');

    const resultText = text.innerText;
    text.innerText = calculates;
    const result = parseFloat(resultText);


    const secondInput = document.getElementById('2nd');
    const secondText = secondInput.value;
    const secondNumber = parseFloat(secondText);

    const calculates2 = secondNumber * 500;
    const text2 = document.getElementById('result-2');

    const resultText2 = text2.innerText;
    text2.innerText = calculates2;
    const result2 = parseFloat(resultText2);

    const thirdInput = document.getElementById('3rd');
    const thirdText = thirdInput.value;
    const thirdNumber = parseFloat(thirdText);

    const calculates3 = thirdNumber * 200;
    const text3 = document.getElementById('result-3');

    const resultText3 = text3.innerText;
    text3.innerText = calculates3;
    const result3 = parseFloat(resultText3);
    const forthInput = document.getElementById('4th');
    const forthText = forthInput.value;
    const forthNumber = parseFloat(forthText);

    const calculates4 = forthNumber * 100;
    const text4 = document.getElementById('result-4');

    const resultText4 = text4.innerText;
    text4.innerText = calculates4;
    const result4 = parseFloat(resultText4);

    const fivethInput = document.getElementById('5th');
    const fivethText = fivethInput.value;
    const fivethNumber = parseFloat(fivethText);

    const calculates5 = fivethNumber * 50;
    const text5 = document.getElementById('result-5');

    const resultText5 = text5.innerText;
    text5.innerText = calculates5;
    const result5 = parseFloat(resultText5);

    const sixthInput = document.getElementById('6th');
    const sixthText = sixthInput.value;
    const sixthNumber = parseFloat(sixthText);

    const calculates6 = sixthNumber * 20;
    const text6 = document.getElementById('result-6');

    const resultText6 = text6.innerText;
    text6.innerText = calculates6;
    const result6 = parseFloat(resultText6);


    const seventhInput = document.getElementById('7th');
    const seventhText = seventhInput.value;
    const seventhNumber = parseFloat(seventhText);

    const calculates7 = seventhNumber * 10;
    const text7 = document.getElementById('result-7');

    const resultText7 = text7.innerText;
    text7.innerText = calculates7;
    const result7 = parseFloat(resultText7);

    const eightInput = document.getElementById('8th');
    const eightText = eightInput.value;
    const eightNumber = parseFloat(eightText);

    const calculates8 = eightNumber * 5;
    const text8 = document.getElementById('result-8');

    const resultText8 = text8.innerText;
    text8.innerText = calculates8;
    const result8 = parseFloat(resultText8);

    // const totalInput = document.getElementById('total');
    // const inputText = totalInput.value;
    // const inputNumber = parseFloat(inputText);

    // const totalAmount = result + result2 + result3 + result4 + result5 + result6 + result7 + result8;


    const totalText = document.getElementById('total');
    const total = totalText.innerText;
    const totalNumber = parseFloat(total);
    const totalAmount = result + result2 + result3 + result4 + result5 + result6 + result7 + result8;

    totalText.innerText = totalAmount;

};



