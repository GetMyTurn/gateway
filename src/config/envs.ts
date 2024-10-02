import * as joi from 'joi'
import 'dotenv/config'

interface EnvVariables{
    PORT: number
}

const schema = joi.object({
    PORT: joi.number()
}).unknown(true)

const { error, value } = schema.validate(process.env);

if ( error ) throw new Error( `Config validation error: ${error.message}` )

const envVars: EnvVariables = value

export const envs = {
    port: envVars.PORT
}