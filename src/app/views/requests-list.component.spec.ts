import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { RequestsList } from './requests-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptorMock } from './services/http-request-interceptor.mock';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppConfigService } from './services/app-config.service';
import { mockServiceAgentResult } from './models/mock.card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

describe('requests-list component', () => {
  let requestsListComponent: RequestsList;
  let mockToastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        RequestsList
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        DropdownModule,
        InputTextareaModule,
        InputSwitchModule,
        CalendarModule,
        TableModule
      ],
      providers: [
        AppConfigService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpRequestInterceptorMock,
          multi: true
        },
        {
          provide: ToastrService,
          useValue: jasmine.createSpyObj('ToastrService', ['info', 'error'])
        }
      ]
    }).compileComponents();

    mockToastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(RequestsList);
    requestsListComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create requests list component' , waitForAsync(() => {
    expect(requestsListComponent).toBeTruthy();
  }));

  it('should contain title', waitForAsync(() => {
    expect(requestsListComponent.title).toBe('All Service Agents');
  }));

  it('should contain items and call api when load', waitForAsync(() => {
    expect(requestsListComponent.serviceAgents).toEqual(mockServiceAgentResult);
    expect(mockToastrService.error).not.toHaveBeenCalled();
  }));
});