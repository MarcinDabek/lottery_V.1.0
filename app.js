const number = document.querySelectorAll('.grid-item');
let playerNumbers = document.querySelector('[data-player]')
let machineNumbers = document.querySelector('[data-machine]')
const lotteryButton = document.querySelector('.button-start-lottery')
const winButton = document.querySelector('.btn-win')
const winNumbers1 = document.querySelector('.winning-numbers')
const BasketNumbers = new DrawingMachine();


for (const numberElement of number) {
        numberElement.addEventListener('click', () => {
            if (BasketNumbers.yourNumbers.length > 5) { // check if player choose 6 numbers activate Start button
                lotteryButton.removeAttribute('disabled')
            } else { // player choose numbers
                numberElement.style.backgroundColor = 'darkblue';
                const a = Number(numberElement.textContent); // take value from tag
                BasketNumbers.addNumber(a);
                // create number which player choose:
                const newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'grid-item')
                playerNumbers.appendChild(newDiv);
                newDiv.innerText = a.toString();
                playerNumbers.appendChild(newDiv);
                }
        },{once:true}) //protect button to click only once
    }

 lotteryButton.addEventListener('click', () => {
         for (let i = 0; i < 6; i++) {
             BasketNumbers.randomNumbers()
             const newDiv = document.createElement('div');
             newDiv.setAttribute('class', 'grid-item')
             newDiv.innerText = BasketNumbers.drawnNumbers[i];
             machineNumbers.appendChild(newDiv);
         }
     if(BasketNumbers.yourNumbers.length > 5) {
         winButton.removeAttribute('disabled'); //check that player and random numbers are choose to activate check prizes
         winButton.addEventListener('click', () => {
             //compare two arrays and return win array:
                 const winNumbers = BasketNumbers.yourNumbers.filter(x => BasketNumbers.drawnNumbers.includes(x))
             //get array length to check how many numbers is correct
                 const winNumbersLength = winNumbers.length.toString();
                 const newH2 = document.createElement('h2');
                 newH2.setAttribute('class', 'text')
             //check how many numbers player have and show him his prizes
                 switch(winNumbersLength) {
                     case '0':
                         newH2.innerText = `Nothing try again to be rich !!!`;
                         return winNumbers1.appendChild(newH2);
                     case '1':
                         newH2.innerText = `Only 1 try again`;
                         return winNumbers1.appendChild(newH2);
                     case '2':
                         newH2.innerText = `Only 2 try again`;
                         return winNumbers1.appendChild(newH2);
                     case '3':
                         newH2.innerText = `You have ${winNumbersLength} numbers match`;
                         return winNumbers1.appendChild(newH2);
                     case '4':
                         newH2.innerText = `You have ${winNumbersLength} numbers match`;
                         return winNumbers1.appendChild(newH2);
                     case '5':
                         newH2.innerText = `You have ${winNumbersLength} numbers match`;
                         return winNumbers1.appendChild(newH2);
                     case '6':
                         newH2.innerText = `You have ${winNumbersLength} numbers match`;
                         return winNumbers1.appendChild(newH2);

                 }
             },{once:true}
         )}

 })


















