import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Score } from '../model/score-models';


@Injectable({
  providedIn: 'root'
})
export class ScoreserviceService {
  private scoreURL="http://34c9-34-125-243-106.ngrok.io/";
  constructor(public http: HttpClient) { 

  }
  getScore(id:string) {
    return this.http.get<Score>(this.scoreURL+"getscore?id="+id, {headers: { 'ngrok-skip-browser-warning': 'any value is fine'},
  })
  }
  getScoreRange(max:string,min:string) {
    return this.http.get<Score[]>(this.scoreURL+"filter?max="+max+"&min="+min ,{headers: { 'ngrok-skip-browser-warning': 'any value is fine'},
  })
  }
}

