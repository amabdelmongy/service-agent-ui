import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { FormComponent } from './form.Component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpRequestInterceptorMock} from './services/http-request-interceptor.mock';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppConfigService } from './services/app-config.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

describe('Form Component', () => {
  let formComponent: FormComponent;
  let mockToastrService: jasmine.SpyObj<ToastrService>;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        DropdownModule,
        InputTextareaModule,
        InputSwitchModule,
        CalendarModule,
        TableModule
      ],
      providers: [
        FormBuilder,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpRequestInterceptorMock,
          multi: true
        },
        {
          provide: ToastrService,
          useValue: jasmine.createSpyObj('ToastrService', ['success', 'error'])
        },
        AppConfigService
       ]
    }).compileComponents();

    mockToastrService = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    formComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create form component', waitForAsync(() => {
    expect(formComponent).toBeTruthy();
  }));

  it('should contain title', waitForAsync(() => {
    expect(formComponent.title).toBe('Request Service Agent');
  }));

  it('should invalid form when in intial state', () => {
    expect(formComponent.ServiceAgentform.valid).toBeFalsy();
  });

  it('should valid form when all required inputs are not empty', () => {
    expect(formComponent.ServiceAgentform.valid).toBeFalsy();
    formComponent.ServiceAgentform.controls['name'].setValue('Test name');
    formComponent.ServiceAgentform.controls['apiEndpoint'].setValue('https://github.com/');
    formComponent.ServiceAgentform.controls['apiEndpointAction'].setValue('Get');
    expect(formComponent.ServiceAgentform.valid).toBeTruthy();
  });

  it('should name field required', () => {
    const name = formComponent.ServiceAgentform.controls['name'];
    const errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should apiEndpoint field required', () => {
    const apiEndpoint = formComponent.ServiceAgentform.controls['apiEndpoint'];
    const errors = apiEndpoint.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should apiEndpointAction field required', () => {
    const apiEndpointAction = formComponent.ServiceAgentform.controls['apiEndpointAction'];
    apiEndpointAction.setValue('');
    const errors = apiEndpointAction.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submitting a form return success', () => {
    formComponent.ServiceAgentform.controls['name'].setValue('Test name');
    formComponent.ServiceAgentform.controls['apiEndpoint'].setValue('https://github.com/');
    formComponent.ServiceAgentform.controls['apiEndpointAction'].setValue('Get');
    formComponent.submit();
    expect(mockToastrService.error).not.toHaveBeenCalled();
  });

  it('should sumbit buutone disable when name is empty', waitForAsync(() => {
    const submitBtn = fixture.debugElement.nativeElement.querySelector('#submitBtn');
    expect(submitBtn.disabled).toBeTruthy();
  }));
});
