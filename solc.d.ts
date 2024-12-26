declare module "solc" {
  export function compile(input: string): string;
  export function compile(
    input: string,
    options: { import: (path: string) => { contents: string } }
  ): string;

  export function setupMethods(compiler: any): void;
  export const version: string;
}
