import z from 'zod';

const envVariables = z.object({
  DEV: z.boolean(),
  PROD: z.boolean(),

  VITE_PUBLIC_META_TITLE: z.string(),
  VITE_PUBLIC_META_DESCRIPTION: z.string(),
});

const ENV_VARIABLES = envVariables.parse(import.meta.env);

export const config = {
  META_TITLE: ENV_VARIABLES.VITE_PUBLIC_META_TITLE,
  META_DESCRIPTION: ENV_VARIABLES.VITE_PUBLIC_META_DESCRIPTION,

  DEV: ENV_VARIABLES.DEV,
  PROD: ENV_VARIABLES.PROD,
};
