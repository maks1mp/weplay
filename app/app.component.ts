import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { GitApiService } from './api/methods';

import { SearchComponent } from './components/search.component';
import { UserComponent } from './components/user.component';
import { ReposComponent } from './components/repos.component';
import { ReadmeComponent } from './components/readme.component';


import { AppStatus, Repositories, Repository, 
        User, Readme, defaultUserData, defaultAppBehavior, 
        defaultQuery, defaultReadme, defaultRepositories } from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  user:User = defaultUserData;
  query: string = defaultQuery;
  readme: Readme = defaultReadme;
  application:AppStatus = defaultAppBehavior;
  repositories:Repositories[] = defaultRepositories;

  constructor(private requests:GitApiService){}

  onError(error_message:string){
    this.application.error = error_message;
    this.application.status = 'error';
    this.repositories = defaultRepositories.slice();
    this.user = Object.assign({}, defaultUserData);
  }
  onSuccess(){
    this.application.error = null;
    this.application.status = 'success';
  }
  run():void{
    let userName = this.query;
    this.application.status = 'loading';
    this.requests.getFullData(userName).subscribe(
      (data:any) => {
        let userData = data[0],
            repositories = data[1];

        this.user = {
          img: userData.avatar_url,
          name: userData.name,
          login: userData.login
        };

        this.repositories = repositories.map( (repo:Repository) => ({
          name: repo.name,
          language: repo.language
        }));            

        this.onSuccess();
      },
      (error:any) => {
        if (error.status === 404) this.onError(`User ${this.query} not found!`);
        else this.onError('Connection or server error!');
      }
    );
  }
  
  onSearch(q:string):void{
    this.query = q;
    this.query ? this.run() : this.onError(`Type user login, it's empty now!`);
  }
  readmeErrorHandler(error:any){
    this.readme.isVisible = true;
    this.application.status = 'success';
    error.status === 404 ? this.readme.content = 'No readme in this repository!' : this.readme.content = 'Connection or server error!';
  }
  readmeEvent(repoName:string,fn:any){
    this.application.status = 'loading';
    this.requests.getRepoReadme(repoName, this.user.login).subscribe(
      fn,
      this.readmeErrorHandler.bind(this)
    )
  }
  redirectToGit(repo:Repository){
    let redirect = this.readmeEvent.bind(this, repo.name);
    redirect((response:any)=>{
      window.location.href = response.html_url;
    })
  }
  onCloseReadme(){
    this.readme.isVisible = false;
  }
  onShowReadmePreview(repo: Repository) {
    let showReadmeModal = this.readmeEvent.bind(this, repo.name);
    showReadmeModal((response:any) => {
        this.application.status = 'success';
        this.readme.isVisible = true;
        this.readme.content = atob(response.content);
      })
  }
  ngOnInit() {
    if (this.query) this.run();
  }
}
