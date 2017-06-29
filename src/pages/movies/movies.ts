import {ApiProvider} from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the MoviesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  movies: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,   public apiProvider: ApiProvider) {
    this.movies = this.apiProvider.getMovies();
  }

  openDetails(film) {
    this.navCtrl.push('MoviesDetailsPage', {film: film});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

}
