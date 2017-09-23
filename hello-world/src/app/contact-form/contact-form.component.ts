import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   
    categories = [{id:1,name:'Development'},{id:2,name:'Art'},{id:3,name:'Language'}]
    contactMethods = [
        {id:1,name:'Email'},{id:2,name:'Phone'},{id:3,name:'Office'}
        
        ];
    
   
    
    log(x){
    console.log(x);    
    }

    submit(f){
        
    console.log(f);    
    }
}
