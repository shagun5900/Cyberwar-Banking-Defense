import { Asset } from "../types/Asset";

export const assets: Asset[] = [

    {
        id: 1,
        name: "Core Banking System",
        criticality: 95,
        exposure: 30,
        securityLevel: 85,
        status: "ACTIVE",
        valueIfCompromised: 50000000
    },

    {
        id: 2,
        name: "ATM Network",
        criticality: 80,
        exposure: 60,
        securityLevel: 70,
        status: "ACTIVE",
        valueIfCompromised: 20000000
    },

    {
        id: 3,
        name: "Mobile Banking",
        criticality: 90,
        exposure: 85,
        securityLevel: 65,
        status: "ACTIVE",
        valueIfCompromised: 40000000
    },

    {
        id: 4,
        name: "SWIFT Gateway",
        criticality: 98,
        exposure: 40,
        securityLevel: 90,
        status: "ACTIVE",
        valueIfCompromised: 100000000
    }

];