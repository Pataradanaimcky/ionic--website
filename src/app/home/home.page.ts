import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../../model/score-models';
import { ScoreserviceService } from '../scoreservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public score$?: Observable<Score>;
  public score2$?: Observable<Score[]>;
  public studentID: string = '';
  public max: string='';
  public min: string='';
  constructor(private scoreProvider: ScoreserviceService, public navCtrl:NavController) {
    
  }

  showScore() {
    this.score$=this.scoreProvider.getScore(this.studentID);
    
  }
  showScoreRange() {
    this.score2$=this.scoreProvider.getScoreRange(this.max,this.min)
  }
}
