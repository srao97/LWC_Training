import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle="Good Morning Harika";
    weight;
    height;

    @track bmi;

    onWeightChange(event){
        this.weight=parseFloat(event.target.value);
    }
    onHeightChange(event){
        this.height=parseFloat(event.target.value);
    }
    calculateBmi(){
        try{
        this.bmi=this.weight/(this.height*this.height);
        }catch(error){
            this.bmi=undefined;
        }
    }
    get bmiValue(){
        if(this.bmi === undefined){
            return "";
        }
        return 'Your Bmi is: ${this.bmi}';
    }
    }