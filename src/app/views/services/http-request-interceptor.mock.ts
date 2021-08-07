import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mockServiceAgentDetails, mockServiceAgentResult } from '../models/mock.card';

@Injectable()
export class HttpRequestInterceptorMock implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if (request.url) {
            console.log('Intercepted httpCall' + request.url);
            if (request.url.indexOf('schedule-service-agent') > -1) {
                return of(new HttpResponse({ status: 200, body: 'saved' }));
            } else if (request.url.indexOf('service-agent-details/123') > -1) {
                return of(new HttpResponse({ status: 200, body: mockServiceAgentDetails }));
            } else if (request.url.indexOf(`service-agent-details`) > -1) {
                return of(new HttpResponse({ status: 200, body: mockServiceAgentResult }));
            }
        }
        return next.handle(request);
    }
}