import { ServiceAgent, ServiceAgentDetails } from "./model";

export const mockServiceAgentResult: ServiceAgent[] =
[
    {
        id: '30569309025904',
        name: '05/24',
        submitted: "01/01/2021",
        execution: '01/01/2021',
        status: 'Completed',
        isFavourite: true
    },
    {
        id: '30569309025904',
        name: '05/24',
        submitted: "01/01/2021",
        execution: '01/01/2021',
        status: 'Scheduled',
        isFavourite: true
    }
];

export const mockServiceAgentDetails: ServiceAgentDetails ={
    id: '30569309025904',
    name: '05/24',
    submitted: "01/01/2021",
    execution: '01/01/2021',
    status: 'Completed',
    apiEndpoint: 'apiEndpoint',
    apiEndpointAction: 'apiEndpointAction',
    body: 'body',
    headers: [],
    lastUpdatedDate: '',
    responseBody: 'responseBody',
    responseHeaders: '',
    failedDetails: '',
}