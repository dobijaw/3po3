import '../scss/index.scss';

import { DOMelements } from './base';

import renderGameVariantView from './view/renderGameVariantView';
import showVariantPopUp from './view/showVariantPopUp';
import AIChoice from './model/AIChoice';



const initGame = () => {

    renderGameVariantView();

    // Update and reset State


    // 2. Reset all Scores UI


    DOMelements.variantBtn.addEventListener('click', showVariantPopUp);




    const newAiChoice = new AIChoice(100);
    newAiChoice.drawSymbolImg(true);

    setTimeout(() => { newAiChoice.stopSymbolInterval() }, 5000)





    // const aiSymbolBox = document.querySelector('.board__box--ai');
    // const aiSymbolImg = [...document.querySelectorAll('.board__img--ai')];
    // aiSymbolImg.forEach(img => { img.style.opacity = 0 })
    // const counterNums = [1, 2, 3]
    // let counter = 0;

    // let aiInterval = setInterval(() => {
    //     if (counter === 3) counter = 0;
    //     aiSymbolImg.forEach(img => { img.style.opacity = 0 })
    //     aiSymbolImg[counter].style.opacity = 1;


    //     counter++;
    // }, 80);

    // setTimeout(() => {
    //     clearInterval(aiInterval)
    // }, 5000)

    // const playerSymbolsBtns = [...document.querySelectorAll('.board__box--option2')];
    // playerSymbolsBtns.forEach(symbol => {
    //     symbol.addEventListener('click', () => {
    //         clearInterval(aiInterval);
    //         symbol.style.background = '#C4CFD5';
    //     })
    // })
































}

document.addEventListener('DOMContentLoaded', () => initGame());