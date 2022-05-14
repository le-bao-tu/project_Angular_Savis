import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
const urlGet = "http://localhost:8080/api/list_Project?status=true";
const urlCreate = "http://localhost:8080/api/insert/list_Project";
const urlUpdate = "http://localhost:8080/api/update/list_Prpject?status=true";
const urlFind = "http://localhost:8080/api/list_Project";
const urlDelete = "http://localhost:8080/api/delete_Listpro";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }

  getAll():Observable<Project[]> {
    return this.http.get<Project[]>(urlGet);
  }

  create(data:Project):Observable<Project>{
    return this.http.post<Project>(urlCreate,data)
  }
  findId(id:any):Observable<Project>{
    return this.http.get<Project>(`${urlFind}/${id}`)
  }
  update(id:any,data:Project):Observable<Project>{
    return this.http.put<Project>(`${urlUpdate}/${id}`,data);
  }
  delete(id:any):Observable<Project>{
    return this.http.delete<Project>(urlDelete+"/"+id);
    // return this.http.delete<Category>(`${urlApi}/${id}`);
  }
}
