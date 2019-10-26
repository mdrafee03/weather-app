import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(
    private http: HttpClient
  ) { }

  getApi(): Observable<any> {
    return this.http.get<any>('https://api.ipify.org?format=json');
  }
  getLocation(ip): Observable<any> {
    return this.http.get<any>(`https://api.ipgeolocation.io/ipgeo?apiKey=0cfa7735d80f479793242eec3e89cbc2&ip=${ip}`);
  }
  getTemperature(lat, lon): Observable<any> {
    return this.http.get<any>(`api.openweathermap.org/data/2.5/weather?lat=35&lon=139https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b6907d289e10d714a6e88b30761fae22`)
  }
}
