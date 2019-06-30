import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private manager = new UserManager(environment.getClientSettings);
  user: User;
  private userSubject = new Subject<User>();
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.manager.getUser().then(user => {
      this.user = user;
      console.log('user', user);
    });
  }

  Login() {
    // redirect user to identity server
    this.manager.signinRedirect();
  }

  /**
   * Process response from the authorization endpoint. i.e receives and handles incoming tokens,
   * including token validation. At this point, we've effectively closed the loop and completed
   * the authentication process. We now have information about the authenticated User.
   */
  async CompleteAuthentication() {
    this.user = await this.manager.signinRedirectCallback();

    if (this.user) {
      this.userSubject.next(this.user);
      console.log('Authenticated User', this.user);
    }
  }

  authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  GetValues() {
    const url = 'http://localhost:55624/api/values';
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.authorizationHeaderValue()
      })
    };

    return this.http.get(url, httpOptions)
      .pipe(catchError(error => throwError(error) ));
  }
}
