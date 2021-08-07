import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './services/api.service';
import { ServiceAgent } from './models/model';

@Component({
  templateUrl: 'requests-list.component.html'
})
export class RequestsList {
  title = 'All Service Agents'
  serviceAgents: ServiceAgent[];
  isShowFaviourts?: boolean;
  constructor(
    private itemsService: ApiService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getServiceAgents(this.isShowFaviourts);
  }

  getServiceAgents(isShowFaviourts): void {
    this.itemsService.getServiceAgentDetails(isShowFaviourts)
      .subscribe(
        _serviceAgents => {
          this.serviceAgents = _serviceAgents;
        },
        (error) => {
          console.log(error);
          this.toastr.error('Error in Save data', error.message);
        }
      );
  }
  addFaviourt(serviceAgent: ServiceAgent) {
    serviceAgent.isFavourite = !serviceAgent.isFavourite;

    let favouriteDto =
    {
      id: serviceAgent.id,
      isFavourite: serviceAgent.isFavourite
    };
    this.itemsService.updateIsFavirote(favouriteDto)
      .subscribe(
        _serviceAgents => {
        },
        (error) => {
          console.log(error);
          this.toastr.error('Error in update favourite', error.message);
        }
      );
  }
  showFaviourts() {
    this.isShowFaviourts = !this.isShowFaviourts;
    this.getServiceAgents(this.isShowFaviourts);
  }
}
