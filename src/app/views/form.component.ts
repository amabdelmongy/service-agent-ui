import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceAgentResult } from './models/model';
import { OnInit } from '@angular/core';

@Component({
  templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {
  title = 'Request Service Agent';
  result: ServiceAgentResult;
  ServiceAgentform: FormGroup;
  apiActions: string[] =
    [
      'Get',
      'Post',
      'Put',
      'Deconste'
    ];

  ngOnInit(): void {
    this.ServiceAgentform = this.formBuilder.group({
      name: ['', [Validators.required]],
      apiEndpoint: ['', [Validators.required]],
      apiEndpointAction: ['Get', [Validators.required]],
      body: ['', []],
      headers: [[], []],
      submittedDate: ['', []],
      isExecution: [false, []],
      headerAddedKey: ['', []],
      headerAddedValue: ['', []],
    });
  }
  constructor(
    private apiService: ApiService,
    public formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
  }

  submit() {
    this.apiService.scheduleServiceAgent(this.ServiceAgentform.getRawValue())
      .subscribe(data => {
        this.result = data;
        this.toastr.success('Data saved');
      },
        (error) => {
          this.toastr.error('Error in Save data', error.message);
        });
  }

  rest() {
    if (this.ServiceAgentform) {
      this.ServiceAgentform.reset();
    }
  }

  isDateHidden() {
    return !this.ServiceAgentform.get('isExecution').value;
  }

  addHeader() {
    if (this.isAddedHeaderValid()) {
      const key = this.ServiceAgentform.get('headerAddedKey');
      const value = this.ServiceAgentform.get('headerAddedValue');
      this.ServiceAgentform.
        get('headers').
        value.
        push({
          Key: key.value,
          Value: value.value
        });
      key.setValue('');
      value.setValue('');
    }
  }

  isAddedHeaderValid() {
    const key = this.ServiceAgentform.get('headerAddedKey').value;
    const value = this.ServiceAgentform.get('headerAddedValue').value;
    return (key &&
      key.trim() !== '' &&
      value &&
      value.trim() !== '');
  }
}
