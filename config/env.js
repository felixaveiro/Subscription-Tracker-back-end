import { config } from 'dotenv';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the .env file based on NODE_ENV
const envFile = `.env.${process.env.NODE_ENV || 'development'}.local`;
const result = config({ path: join(__dirname, '..', envFile) });

// Check if dotenv loaded successfully
if (result.error) {
    console.error(`Failed to load ${envFile}:`, result.error.message);
}

// Export environment variables with fallbacks
export const PORT = process.env.PORT || 5500;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/subscription-tracker';