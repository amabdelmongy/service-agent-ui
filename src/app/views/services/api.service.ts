import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FavouriteDto, ServiceAgent, ServiceAgentDetails, ServiceAgentInput } from '../models/model';
import { AppConfigService } from './app-config.service';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl: string;
  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService) {
    this.apiBaseUrl = appConfigService.apiBaseUrl;
  }

  getServiceAgentDetails(showFavourite: boolean): Observable<ServiceAgent[]> {
    let url = `${this.apiBaseUrl}service-agent-details`;
    if (showFavourite) {
      url += `?showFavourite=${showFavourite}`;
    }
    return this.http.get<ServiceAgent[]>(url, httpOptions);
  }

  getServiceAgentDetailsById(id): Observable<ServiceAgentDetails> {
    return this.http.get<ServiceAgentDetails>(`${this.apiBaseUrl}service-agent-details/${id}`, httpOptions);
  }

  scheduleServiceAgent(serviceAgentInput: ServiceAgentInput): Observable<any> {
    const body = JSON.stringify(serviceAgentInput);
    return this.http.post(`${this.apiBaseUrl}service-agent/schedule-service-agent/`, body, httpOptions);
  }

  updateIsFavirote(favouriteDto: FavouriteDto): Observable<any> {
    const body = JSON.stringify(favouriteDto);
    return this.http.put(`${this.apiBaseUrl}service-agent-details/update-is-favourite/`, body, httpOptions);
  }
}
