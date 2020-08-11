import { Injectable } from '@angular/core';
import{environment}from '../../../environments/environment';
import{HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
 /* the old way of make httpheader we replace it by iterceptor
 we add it in method  return this.http.get(`${environment.apiUrl}/posts`,this.head);

 token:string='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTMxNzYxMzUsImV4cCI6MTU5MzE3OTczNX0.NgFXTzkdNTVeRDYysSKkpEMQBUQA2rzL45w4TMG0UCQ';
head={headers:{'Authorization':'Bearer '+this.token
}};*/
  constructor(private http:HttpClient) { }
  getAll(){
   
    return this.http.get(`${environment.apiUrl}/posts`);
  }
  //get item by id 
  getitem(id){
   
    return this.http.get(`${environment.apiUrl}/posts/${id}`);
  }

  //delete method
  delete(id){

    return this.http.delete(`${environment.apiUrl}/posts/${id}`);
  }
  //add post method
  add(data){
return this.http.post(`${environment.apiUrl}/posts`,data);

  }
  //update post 
  update(data,id){
    return this.http.put(`${environment.apiUrl}/posts/${id}`,data);
  }
}
