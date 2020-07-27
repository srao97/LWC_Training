import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResults=[];
    @track showPreviousResult=false;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber=event.target.value;
        }else if(inputBoxName === 'secondNumber'){
            this.secondNumber=event.target.value;
        }
    }
    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult=`Result of ${firstN}+${secondN} is ${firstN+secondN}`;
        this.previousResults.push(this.currentResult);

    }
    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult=`Result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResults.push(this.currentResult);
    }
    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult=`Result of ${firstN}x${secondN} is ${firstN*secondN}`;
        this.previousResults.push(this.currentResult);
    }
    dividedHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult=`Result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.previousResults.push(this.currentResult);
    }
    showPreviousResultToggle(event){
        this.showPreviousResult=event.target.checked;
    }
}