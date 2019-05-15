import { Injectable } from '@angular/core';
import { API_URL } from '../../_share/API_URL.const';
import { ApiService } from '../api.service'
import { Observable } from 'rxjs';
import { Student } from '../../models/student.model';

// import { }

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private api : ApiService) { }



  public store(param) : Observable<Student>{
    return this.api.post(API_URL.STUDENT.POST, param);
  }

  public getAll() : Observable<Student[]>{
    let param = [];
    return this.api.get(API_URL.STUDENT.GET_ALL, param);
  }

  public put(id,param) : Observable<Student>{
    return this.api.put(API_URL.STUDENT.PUT+'/'+id, param)
  }


  public delete(id,param) : Observable<boolean>{
    return this.api.delete(API_URL.STUDENT.DELETE+'/'+id)
  }



}
