import { z } from "zod/v4";

export const fileSpecifierSchema = z.object({
	from: z.literal("file"),
	name: z.union([z.string(), z.array(z.string())]).optional(),
	path: z.string().optional(),
});

export const libSpecifierSchema = z.object({
	from: z.literal("lib"),
	name: z.union([z.string(), z.array(z.string())]).optional(),
});

export const packageSpecifierSchema = z.object({
	from: z.literal("package"),
	name: z.union([z.string(), z.array(z.string())]).optional(),
	package: z.string(),
});

export const typeOrValueSpecifierSchema = z.union([
	fileSpecifierSchema,
	libSpecifierSchema,
	packageSpecifierSchema,
]);

export type TypeOrValueSpecifier = z.infer<typeof typeOrValueSpecifierSchema>;
