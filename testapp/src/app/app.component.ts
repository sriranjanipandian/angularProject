import { element } from 'protractor';
import { Component, OnInit} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm:FormGroup;
  title1 = 'testapp';
  ip=" ";
  i1;
  s;
  result=[];
  // textbox for add and remove
  enter(event:any){
  
    if (event.keyCode==13){
    this.result.push(this.ip);
    this.ip=' ';
   }
  }
  // adding element
  add() 
   {
    //  this.result=this.ip + this.result;
    if(this.ip.length==1){
      alert("enter something");
    }
    else{
      alert("accepted");
      this.result.push(this.ip);
    }
     this.ip=' ';
   }
  //  removing a particular element
   remove(i1:any)
   {
     this.s=this.result.indexOf(i1);
     this.result.splice(this.s,1);
   }
  //  onsubmit(form:NgForm)
  //  {
  //    console.log(form);
  //  }
//  To validate username and email:
   ngOnInit(){
     this.signupForm=new FormGroup({
       'username':new FormControl(null,Validators.required),'email': new FormControl(null,[Validators.required,Validators.email])
     });
    }
  // for submit button:
    onsubmit(){
      
      console.log(this.signupForm);
      if(this.signupForm.valid==true){alert("Form Submitted");}

    }
  


   //   constructor(){
//     setTimeout(()=>{
//       this.buttonstatus=false;
//     },2000);
//   }
// 
}
