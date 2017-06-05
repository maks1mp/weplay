import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SearchComponent } from './components/search.component';
import { UserComponent } from './components/user.component';
import { ReposComponent } from './components/repos.component';
import { ReadmeComponent } from './components/readme.component';

import { GitApiService } from './api/methods';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    ReposComponent,
    ReadmeComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GitApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
