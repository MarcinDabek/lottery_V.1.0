const number = document.querySelectorAll('.grid-item');
let playerNumbers = document.querySelector('[data-player]')
let machineNumbers = document.querySelector('[data-machine]')
const drawNumbers = document.querySelector('.button-settings')
const winButton = document.querySelector('.btn-win')
const winNumbers1 = document.querySelector('.winning-numbers')
const BasketNumbers = new DrawingMachine();


for (const numberElement of number) {
        numberElement.addEventListener('click', () => {
            if (BasketNumbers.yourNumbers.length > 5) {
                drawNumbers.removeAttribute('disabled')
            } else {
                numberElement.style.backgroundColor = 'darkblue';
                const a = Number(numberElement.textContent);
                BasketNumbers.addNumber(a);
                const newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'grid-item')
                playerNumbers.appendChild(newDiv);
                newDiv.innerText = a.toString();
                playerNumbers.appendChild(newDiv);
                }
        },{once:true})
    }

 drawNumbers.addEventListener('click', () => {
     if (BasketNumbers.drawnNumbers.length > 5) {
         drawNumbers.setAttribute('button-settings', 'disabled')
     } else {
         for (let i = 0; i < 6; i++) {
             BasketNumbers.drawnNumbers.push(Math.floor(Math.random() * 46) + 1);
             const newDiv = document.createElement('div');
             newDiv.setAttribute('class', 'grid-item')
             newDiv.innerText = BasketNumbers.drawnNumbers[i];
             machineNumbers.appendChild(newDiv);
         }
     }
     if(BasketNumbers.yourNumbers.length > 5 ) {
         winButton.removeAttribute('disabled');
         winButton.addEventListener('click', () => {
                 const winNumbers = BasketNumbers.yourNumbers.filter(x => BasketNumbers.drawnNumbers.includes(x));
                 const winNumbersLength = winNumbers.length.toString();
                 const newH2 = document.createElement('h2');
                 newH2.setAttribute('class', 'text')
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
             }
         )}

 })


















