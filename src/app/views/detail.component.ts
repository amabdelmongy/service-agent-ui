import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './services/api.service';
import { ServiceAgentDetails } from './models/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {
  title = 'Service Agent details';
  serviceAgent: ServiceAgentDetails;
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        if (id) {
          this.getServiceAgentDetailsById(id);
        }
      }
    );
  }

  getServiceAgentDetailsById(id) {
    this.apiService.getServiceAgentDetailsById(id)
      .subscribe(
        item => {
          console.log(item);
          this.serviceAgent = item;
        },
        (error) => {
          console.log(error);
          this.toastr.error('Error in Save data', error.message);
        }
      );
  }
}
