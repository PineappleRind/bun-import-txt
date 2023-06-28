import { test, expect } from "bun:test";
import { moonFromFS, moonFromImport } from "../src/main";

test("FS moon should equal imported moon", () => {
    expect(moonFromImport()).toBe(moonFromFS());
})