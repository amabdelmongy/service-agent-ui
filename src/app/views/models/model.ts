export interface ServiceAgentInput {
    name: string;
    submitted: string;
    apiEndpoint: string;
    apiEndpointAction: string;
    body: string;
    headers: [];
}

export interface ServiceAgentResult {
    id: string;
    responseBody: string;
    responseHeaders: string;
    status: string;
}
export interface ServiceAgent {
    id: string;
    name: string;
    submitted: string;
    execution: string;
    status: string;
    isFavourite: boolean;
}

export interface ServiceAgentDetails {
    id: string;
    name: string;
    submitted: string;
    execution: string;
    status: string;
    apiEndpoint: string;
    apiEndpointAction: string;
    body: string;
    headers: [];
    lastUpdatedDate: string;
    responseBody: string;
    responseHeaders: string;
    failedDetails: string;
}

export interface HeaderItem {
    key: string;
    value: string;
}

export interface FavouriteDto {
    id: string;
    isFavourite: boolean;
}
