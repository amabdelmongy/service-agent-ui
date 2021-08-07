
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { RequestsList } from './requests-list.component';
import { ViewsRoutingModule } from './views-routing.module';
import { ApiService } from './services/api.service';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { DetailComponent } from './detail.component';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ViewsRoutingModule,
    ReactiveFormsModule,
    NgProgressModule,
    NgProgressHttpModule,
    DropdownModule,
    InputTextareaModule,
    InputSwitchModule,
    CalendarModule,
    TableModule
  ],
  declarations: [
    FormComponent,
    RequestsList,
    DetailComponent
  ],
  providers: [
    ApiService,
    FormBuilder
  ]
})
export class ViewsModule { }
