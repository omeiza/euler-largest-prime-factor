import {describe, expect, test} from "@jest/globals";
import largestPrimeFactor from "./index";

describe("Largest prime factor", () => {
	test("Get largest prime factor of 600851475143", () => {
		expect(largestPrimeFactor(600851475143)).toEqual(6857);
	});
});