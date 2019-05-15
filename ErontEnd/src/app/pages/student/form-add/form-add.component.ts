import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { StudentService } from  '../../../services/student/student.service';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.scss']
})
export class FormAddComponent implements OnInit {
  addNewForm : FormGroup;
  is_loading : boolean = false;
  message : string = "";
  responce_type : string = "";

  constructor(
    private formBuilder : FormBuilder, 
    private service : StudentService
    ) { }

  ngOnInit() {

    
      this.addNewForm = this.formBuilder.group({        
        name: ['' , Validators.required],
        age: ['', ]
      });
    

      
    

  }


  add(){

    
    if (!this.addNewForm.valid){
      return false;
    } 
    this.is_loading = true;
    let param = this.addNewForm.value;
    this.service.store(param).
    subscribe((data:any)=>{
      this.is_loading = false;
      if(data.status){
        this.responce_type = 'success';
        this.message = "Successfully Saved!";
      }
      else{
        this.responce_type = 'error';
        this.message = "Somthing went wrong";
      }
    })
  }


}
