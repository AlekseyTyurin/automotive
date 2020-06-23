import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  authService(user: any) {
    return this.http.post('http://localhost:3000/auth/login', user).pipe(
      tap(res => {
        // console.log(res['access_token']);
        if (res['access_token']) {
          this.router.navigate(['/home'])
        }
      })
    )
  }
}
