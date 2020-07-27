import { LightningElement,track } from 'lwc';

export default class HellosWorld extends LightningElement {
    @track greet="good Morning";
    @track displaydiv=false;
    @track citylist=['jaipur','hyderabad','guntur'];

    greetingChangeHandler(event){
        this.greet=event.target.value;
    }
    showDivHandler(event){
        this.displaydiv=event.target.checked;
    }
}