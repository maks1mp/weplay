import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Repositories, User, Readme } from './../utils/utils';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class GitApiService {
    private uri =  'https://api.github.com/';
    
    constructor (private http: Http) {}

    getFullData(userName:string): Observable<any> {
        let user_uri = `${this.uri}users/${userName}`,
            repos_uri = `${user_uri}/repos?per_page=1000`;

        let getUserData = this.http.get(user_uri).map(res => res.json()),
            getRepos = this.http.get(repos_uri).map(res => res.json());

        return Observable.forkJoin([getUserData, getRepos]);
    }
    getRepoReadme(repoTitle:string, user:string): Observable<Readme> {
        return this.http.get(`${this.uri}repos/${user}/${repoTitle}/readme`)
            .map( (response: Response) => response.json() );
    }
}