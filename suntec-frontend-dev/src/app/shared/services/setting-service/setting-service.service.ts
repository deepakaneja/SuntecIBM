import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcsDetail } from '../../model/acs-setting-model/acs-detail.model';
import { EmailNotificationDetail } from '../../model/email-notification-model/email-notification-detail.model';
import { RangeDetail } from '../../model/range-setting-model/range-detail.model';
import { SmtpDetail } from '../../model/smtp-setting-model/smtp-detail.model';
let API_URL = "http://localhost:8084";
@Injectable({
  providedIn: 'root'
})
export class SettingServiceService {
  
 
  constructor(private http: HttpClient) { }

  getRangeData() : Observable<any> {
    return this.http.get(`${API_URL}/staff-api/setting/rangeData`);
  }

  updateCardRange(post:RangeDetail):Observable<Object> {  
    console.log("received post data :: " + post)
    return this.http.post(API_URL+'/staff-api/setting/addUpdate',post);
}

ResetCardRange() : Observable<any> {
  return this.http.get(`${API_URL}/staff-api/setting/resetRange`);
}

getACSData() : Observable<any> {
  return this.http.get(`${API_URL}/staff-api/setting/acsData`);
}

updateACSData(post:AcsDetail):Observable<Object> {  
  console.log("received post data :: " + post)
  return this.http.post(API_URL+'/staff-api/setting/addUpdateAcs',post);
}

ResetACSData() : Observable<any> {
return this.http.get(`${API_URL}/staff-api/setting/resetAcs`);
}

getSmtpData() : Observable<any> {
  return this.http.get(`${API_URL}/staff-api/setting/smtpData`);
}

updateSmtpData(post:SmtpDetail):Observable<Object> {  
  console.log("received post data :: " + post)
  return this.http.post(API_URL+'/staff-api/setting/addUpdateSmtp',post);
}

ResetSmtpData() : Observable<any> {
return this.http.get(`${API_URL}/staff-api/setting/resetSmtp`);
}


getEmailNotificationData() : Observable<any> {
  return this.http.get(`${API_URL}/staff-api/setting/emailNotificationData`);
}

updateEmailNotificationData(post:EmailNotificationDetail):Observable<Object> {  
  console.log("received post data :: " + post)
  return this.http.post(API_URL+'/staff-api/setting/addUpdateEmailNotification',post);
}

ResetEmailNotificationData() : Observable<any> {
return this.http.get(`${API_URL}/staff-api/setting/resetEmailNotification`);
}
}
