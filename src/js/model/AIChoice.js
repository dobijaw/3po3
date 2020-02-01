class AIChoice {
    constructor(timeInterval = 80) {
        this.timeInterval = timeInterval;
    }

    drawSymbol() {
        let drawnSymbol = null;

        this.symbolInterval = setInterval(() => {
            drawnSymbol = Math.floor(Math.random() * 3);
        }, this.timeInterval);

        return drawnSymbol;
    }

    drawSymbolImg(isRandom = false) {
        const AISymbolImg = [...document.querySelectorAll('.board__img--ai')];
        let counter = 0;

        function drawAgain() {
            return Math.floor(Math.random() * 3);
        }

        this.symbolInterval = setInterval(() => {
            let random = 0;

            if (isRandom) {
                do {
                    random = drawAgain();
                } while (counter === random)

                counter = random;
            }

            counter = counter === 3 ? 0 : counter;

            console.log(counter);
            AISymbolImg.forEach(symbol => { symbol.style.opacity = 0 });
            AISymbolImg[counter].style.opacity = 1;

            if (!isRandom) counter++
        }, this.timeInterval);
    }

    stopSymbolInterval() {
        clearInterval(this.symbolInterval);
    }
}

export default AIChoice;