class DrawingMachine {
    constructor() {
        this.yourNumbers = [];
        this.drawnNumbers = [];

    }
    // Function put choose numbers to array
    addNumber (chooseNumber) {
        this.yourNumbers.push(chooseNumber);
    }

    // Function put random numbers to array
    randomNumbers(){
        this.drawnNumbers.push(Math.floor(Math.random() * 46) + 1);
    }
}
