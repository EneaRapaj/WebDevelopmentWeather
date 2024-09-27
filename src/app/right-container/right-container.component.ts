import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {

  constructor(public weatherService: WeatherService){};

  //fa icons per tumbs up/down dhe smile/frown
  faThumbsUp:any = faThumbsUp;
  faThumbsDown:any = faThumbsDown;
  faFaceSmile:any = faFaceSmile;
  faFaceFrown:any = faFaceFrown;

  
  
  //funksion për të kontrolluar vlerat e skedave ose gjendjet e skedave

  //funksion për klikim të  tab Today
  onTodayClick(){
    this.weatherService.today = true;
    this.weatherService.week = false;
  }

  //funksion për klikim të tab week
  onWeekClick(){
    this.weatherService.week = true;
    this.weatherService.today = false;
  }

  //funksionet për të kontrolluar  metric values

  //funksionet për të kontrolluar vlerat  metric celsius
  onCelsiusClick(){
    this.weatherService.celsius = true;
    this.weatherService.fahrenheit = false;
  }

  //funksionet për të kontrolluar metric Fahrenheit
  onFahrenheitClick(){
    this.weatherService.fahrenheit = true;
    this.weatherService.celsius = false;
  }

}
