import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authService(user: any) {
    return this.http.post('http://localhost:3000/auth/login', user).pipe(
      tap(res => console.log(res))
    )
  }
}
