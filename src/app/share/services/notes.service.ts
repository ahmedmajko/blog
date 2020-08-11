import { Injectable } from '@angular/core';
import{environment}from '../../../environments/environment';
import{HttpClient}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }
  getAll(){
   
    return this.http.get(`${environment.apiUrl}/notes`);
  }
  //get item by id 
  getitem(id){
   
    return this.http.get(`${environment.apiUrl}/notes/${id}`);
  }

  //delete method
  delete(id){

    return this.http.delete(`${environment.apiUrl}/notes/${id}`);
  }
  //add post method
  add(data){
return this.http.post(`${environment.apiUrl}/notes`,data);

  }
  //update post 
  update(data,id){
    return this.http.put(`${environment.apiUrl}/notes/${id}`,data);
  }
}
