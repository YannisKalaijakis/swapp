import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviesDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-movies-details',
  templateUrl: 'movies-details.html',
})
export class MoviesDetailsPage {
  movie: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = this.navParams.get('film');
  }
  
  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesDetailsPage');
  }

}
