import { LightningElement,track,api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
  @track  value = ['red'];

  options =[
    { label: 'Red Marker',  value: 'red' },
    { label: 'Blue Marker', value: 'blue' },
    { label: 'Green Marker', value: 'green' },
    { label: 'Black Marker', value: 'black' }
  ];
    @api
    selectCheckbox(checkboxValue){
        const selectedCheckBox = this.options.find(checkbox =>{
            return checkboxValue === checkbox.value;
        })
        if(selectedCheckBox){
            this.value = selectedCheckBox.value;
            return "Successfully Checked";
        }
        return "No Checkbox found";
    }

}