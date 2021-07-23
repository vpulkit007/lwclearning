import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track
    inputVar = 'World';
    @track
    isChecked = false;

    @track
    cityList = ['Jaipur','Bangalore'];
    

    changeMethod(event)
    {
        this.inputVar = event.target.value;
    }
    changeMethod1(event)
    {
        this.isChecked = event.target.checked;
    }
}