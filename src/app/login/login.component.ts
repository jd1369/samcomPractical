import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  
  constructor(private fb:FormBuilder,
    private authServie:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  this.loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })
  }

  loginUser(){
    if(this.loginForm.valid){
      const{email,password}=this.loginForm.value

      this.authServie.login(email,password).subscribe(
        response=>{
          if(response = this.loginForm.value){
            console.log("successful")
            this.router.navigate(['/dashboard'])
          }
        },
        error=>{
          console.error('login failed',error)
        }
      )
    }

  }

}
