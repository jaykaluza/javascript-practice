import { z } from "zod";

//1. The schema: the rules a device must follow
const DeviceSchema = z.object({
    name: z.string(),
    user: z.string(),
    status: z.enum(["active", "spare", "broken"]),
    ram: z.number().positive(),
});

type Device = z.infer<typeof DeviceSchema>; //inferring type of DeviceSchema

function describe(device: Device): string {
    return `${device.name} (${device.user}) - ${device.status}, ${device.ram}GB RAM`;
}

const incoming: unknown[] = [
    { name: "LAPTOP-01", user: "Jay", status: "active", ram: 16 },
    { name: "LAPTOP-02", user: "Maria", status: "lost", ram: 8 },
    { name: "DESKTOP-03", user: "Sam", status: "spare", ram: -4 }
];

for (const [index, item] of incoming.entries()) {
    const result = DeviceSchema.safeParse(item);

    if (result.success) {
        console.log("OK:", describe(result.data));
    } else {
        const field = result.error.issues[0]?.path.join(".");
        console.log(`Rejected item ${index + 1}: problem with ${field}`);
    }
}