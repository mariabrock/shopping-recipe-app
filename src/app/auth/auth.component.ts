import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from './auth.service';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  inLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitch() {
    this.inLoginMode = !this.inLoginMode;
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if(this.inLoginMode) {
      //...
    }else{
      this.authService.signup(email, password)
        .subscribe({
          next: (resData) => {
            console.log(resData);
            this.isLoading = false;
            },
          error: (errorMessage) => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
          }
        });
        // .subscribe(resData => {
        //     console.log(resData);
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
    }

    form.reset();
  }
}
