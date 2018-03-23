import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ResponseContentType} from "@angular/http";

@Injectable()
export class HttpServe{
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');

  }

  getStatic(paramObj) {
    const url = 'https://maps.googleapis.com/maps/api/staticmap';
    let params = new HttpParams();

    if (paramObj.center) {
      params = params.append('center', paramObj.center.lat + ',' + paramObj.center.lng);
    }
    if (paramObj.zoom) {
      params = params.append('zoom', paramObj.zoom);
    }

    params = params.append('size', '640x640');
    params = params.append('scale', 'scale=2');

    if (paramObj.mapType) {
      params = params.append('maptype', paramObj.mapType);
    }
    if (paramObj.language) {
      params = params.append('language', paramObj.language);
    }
    if (paramObj.region) {
      params = params.append('region', paramObj.region);
    }
    if (paramObj.markers) {
      paramObj.markers.forEach(function (marker) {
        params = params.append('marker', marker);
      });
    }

    const options = {
      'headers': this.headers,
      'params': params,
      responseType: 'blob'  as 'json'
    };
    params = params.append('responseType', 'blob');
    const request = this.http.get(url, options);
    return request;
  }
  post(url) {

  }
}
