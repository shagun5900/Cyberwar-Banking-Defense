export interface Asset {
    id: number;
    name: string;
    criticality: number;
    exposure: number;
    securityLevel: number;
    status: string;
    valueIfCompromised: number;
}