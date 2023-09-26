import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  formData: any = {};
  responseMessage: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const apiUrl = 'https://renting-api.onrender.com/users/register';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer 6nv9i5abfaipo2yks0vku611ut9y7x',
      'Content-Type': 'application/json'
    });

    this.http.post(apiUrl, this.formData, { headers })
      .subscribe((data: any) => {
        if (data.success) {
          this.responseMessage = 'Registration successful: ' + data.msg;
        } else {
          this.responseMessage = 'Registration failed: ' + data.msg;
        }
      }, error => {
        console.error(error);
        this.responseMessage = 'An error occurred while registering.';
      });
  }
}
