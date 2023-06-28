import { readFileSync } from "fs";
/*
 * ASCII Moon from phoon
 * https://acme.com/software/phoon/
 */
import moon from "./moon.txt";

export function moonFromImport() {
    return moon;
}
export function moonFromFS() {
    return readFileSync("./src/moon.txt", { encoding: "utf-8" });
}