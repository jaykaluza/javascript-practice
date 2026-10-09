import { z } from "zod"; //named export, unlike chalk
import { devices } from "./devices.js"; //same

const DeviceSchema = z.object ({
    name: z.string(),
    user: z.string(),
    price: z.number(),
    year: z.number(),
});

devices.forEach((d) => {
    DeviceSchema.parse(d);
    console.log(`✓ ${d.name} is valid`)
});

DeviceSchema.parse({ name: "Fax", price: "cheap"});