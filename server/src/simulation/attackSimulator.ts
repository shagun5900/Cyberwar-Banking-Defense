import { Asset } from "../types/Asset";

export function simulateAttack(asset: Asset) {

    const randomAttackTypes = [
        "Ransomware",
        "DDoS",
        "Data Breach"
    ];

    const randomAttack =
        randomAttackTypes[
            Math.floor(Math.random() * randomAttackTypes.length)
        ];

    const attackStrength =
        Math.floor(Math.random() * 100);

    const defenseStrength =
        asset.securityLevel;

    const success =
        attackStrength > defenseStrength;

    let damage = 0;

    if (success) {

        damage =
            Math.floor(
                asset.valueIfCompromised *
                (attackStrength / 100)
            );

    }

    return {
        target: asset.name,
        attackType: randomAttack,
        attackStrength,
        defenseStrength,
        success,
        damage
    };
}