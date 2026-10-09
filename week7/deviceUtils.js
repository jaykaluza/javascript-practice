//week7/deviceUtils.js
export function getOldDevices(devices, minAge) {
    const currentYear = new Date().getFullYear();
    return devices.filter( (d) => currentYear - d.year >= minAge);
}

export function totalPrice(devices) {
    return devices.reduce((sum, d) => sum + d.price,0);
}

export function findByUser(devices,name) {
    return devices.find((d) => d.user.toLowerCase() === name?.toLowerCase())?.name ?? `No device found for ${name}.`;
}