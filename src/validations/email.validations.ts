import * as z from "zod";

export const emailForm = z.object({
	email: z.string().email(),
});
