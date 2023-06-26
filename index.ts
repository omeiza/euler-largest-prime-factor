/**
 * The prime factors of 13195 are 5, 7, 13, 29
 * What is the largest prime factor of the number 600851475143
 *
 * Reference: https://projecteuler.net/problem=3
 */

export default function largestPrimeFactor(n: number): number {
	const isPrime = (input: number): boolean => {
		for (let i = 2; i < input; i++) {
			if (input % i === 0) return false;
		}

		return input > 1;
	}

	const primeFactors = [];
	for (let divisor = 2; divisor <= n; divisor++) {
		if (n % divisor === 0) {
			n = n / divisor;

			// Before pushing divisor to stash, confirm that it's a prime number
			if (isPrime(divisor)) primeFactors.push(divisor);
		}
	}

	return Math.max(...primeFactors);
}