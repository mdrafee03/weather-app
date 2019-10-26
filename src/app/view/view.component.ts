import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  latitude: number;
  longitude: number;
  timestamp: any;
  temperature: any;
  location: string;
  city: string;
  country: string;


  constructor(
    private service: ViewService
  ) { }

  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(res => {
        this.latitude = res.coords.latitude;
        this.longitude = res.coords.longitude;
        this.timestamp = res.timestamp;
        this.getDetails();
        this.gettemperature();
      },
        (err) => {
          if (err.PERMISSION_DENIED === 1) {
            console.log('Permission denied');
            this.getDetails();
          }
        });
    }
  }
  getDetails() {
    this.service.getApi().subscribe(res => {
      this.service.getLocation(res.ip).subscribe(res2 => {
        this.latitude = res2.latitude;
        this.longitude = res2.longitude;
        this.timestamp = res2.time_zone.current_time; 
        this.gettemperature();
        this.location = res2.district;
        this.city = res2.city;
        this.country = res2.country_name;
        console.log(this.location);
      })
    }

    );
  }
  gettemperature() {
    this.service.getTemperature(this.latitude, this.longitude).subscribe(console.log);
  }

}
