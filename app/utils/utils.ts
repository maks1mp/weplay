export interface User {
    name: string;
    img: string;
    login: string;
}

export interface Repository {
    name: string;
    language: string;
}

export interface Readme {
    link: string;
    content: string;
    isVisible: boolean;
}

export interface AppStatus {
    status:any;
    error:string;
}

export interface Repositories extends Array<Repository> {}

export const defaultUserData:User = {
    name: '',
    img: '',
    login: ''
}

export const defaultAppBehavior:AppStatus = {
    error: '',
    status: 'success'    
}
export const defaultQuery:string = '';

export const defaultReadme:Readme = {
    link: '',
    content: '',
    isVisible: false
};

export const defaultRepositories:Repositories[] = [];