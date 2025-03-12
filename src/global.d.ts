// This forces TypeScript to recognize the module and its types.
// and the author does not provides a @types/svoast
declare module 'svoast' {
	export * from 'svoast/package/index.d.ts';
}
