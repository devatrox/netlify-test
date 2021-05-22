import { join } from "path";
import { readFileSync } from "fs";

export default readFileSync(join(__dirname, "schema.graphql")).toString();
