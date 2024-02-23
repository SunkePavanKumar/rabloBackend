import { z } from "zod";

const productSchemaZod = z.object({
  name: z.string(),
  price: z.number(),
  featured: z.boolean().default(false),
  rating: z.number(),
  company: z.string(),
});

export default productSchemaZod;
