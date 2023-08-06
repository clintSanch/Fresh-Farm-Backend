const dotenv = require('dotenv');
const path = require('path');
const { cwd } = require('process');
const fs = require('fs');
const devEnv = require('./.env');
const testEnv = require('./.env.testing');
const stageEnv = require('./.env.stage');
const prodEnv = require('./.env.production');

type EnvironmentTypes = "development" | "testing" | "staging" | "production";

class Environment {

    private dotEnvArray = [devEnv, testEnv, stageEnv, prodEnv];

    constructor() {
        this.init();
    }

    init() {
        for (let i = 0; i < this.dotEnvArray.length; i++) {

            if (!fs.existsSync(this.dotEnvArray[i])) {
                throw new Error("Please add a .env file to the root directory with a CONTEXT value")
            }
            else {
                dotenv.config({ path: path.resolve(process.cwd(), this.dotEnvArray[i]) });
            }
        }

    }

    getEnvironmentVariable(variable: string | any) {
        return process.env[variable];
    }

    getEnvironment(): EnvironmentTypes | null {
        return (this.getEnvironmentVariable('CONTEXT') as EnvironmentTypes)
    }

    isDevelopment() {
        return this.getEnvironment() === "development";
    }

    isTesting() {
        return this.getEnvironment() === "testing";
    }

    isStaging() {
        return this.getEnvironment() === "staging";
    }

    isProduction() {
        return this.getEnvironment() === "production";
    }
}

const environment = new Environment();
module.exports = environment;