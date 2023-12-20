import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
 
export class DashboardService {
  url='http://localhost:3000/table';
  constructor(private http:HttpClient) { }

  getTable(page:any,pageSize:any,nameSearch:any){
    return this.http.get(this.url);
  }
}
