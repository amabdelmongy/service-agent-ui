import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptorMock } from './services/http-request-interceptor.mock';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppConfigService } from './services/app-config.service';
import { mockServiceAgentDetails } from './models/mock.card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DetailComponent } from './detail.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('details component', () => {
  let detailComponent: DetailComponent;
  let mockToastrService: jasmine.SpyObj<ToastrService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailComponent
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
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 })
          }
        }
      ]
    }).compileComponents();

    mockToastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(DetailComponent);
    detailComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', waitForAsync(() => {
    expect(detailComponent).toBeTruthy();
  }));

  it('should contain title', waitForAsync(() => {
    expect(detailComponent.title).toBe('Service Agent details');
  }));

  it('should contain service agent', waitForAsync(() => {
    expect(detailComponent.serviceAgent).toEqual(mockServiceAgentDetails);
    expect(mockToastrService.error).not.toHaveBeenCalled();
  }));
});