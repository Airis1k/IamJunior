import { config } from "dotenv";
config();

const { ATLAS_URI, SERVER_PORT, TOKEN_SECRET, TOKEN_EXPIRATION } = process.env;

const requiredEnvVariables = {
   ATLAS_URI,
   SERVER_PORT,
   TOKEN_SECRET,
   TOKEN_EXPIRATION,
};

const missingEnvVariables = [];
Object.entries(requiredEnvVariables).forEach(([key, value]) => {
   if (!value) {
      missingEnvVariables.push(key);
   }
});

if (missingEnvVariables.length > 0) {
   const missingVariableNames = missingEnvVariables.join("\t\n");
   throw new Error(
      `Variables are not provided in .env file: \n${missingVariableNames}\n`
   );
}

const configEnvVariables = {
   ATLAS_URI,
   SERVER_PORT,
   TOKEN_SECRET,
   TOKEN_EXPIRATION,
};

export { configEnvVariables };
