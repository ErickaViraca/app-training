import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const USERS_API = environment.url;

@Injectable()
export class UsersService {

constructor(private httpClient: HttpClient) { }

getUsers(): Observable<any> {
  return this.httpClient.get(USERS_API + '/users');
}

getUserById(id): Observable<any> {
  return this.httpClient.get(`${USERS_API}/${id}`);
}

getReposByUser(userLogin): Observable<any> {
  console.log(`${USERS_API}/users/${userLogin}+ '/repos'`);
  return this.httpClient.get(`${USERS_API}/users/${userLogin}+ '/repos'`);
}

}