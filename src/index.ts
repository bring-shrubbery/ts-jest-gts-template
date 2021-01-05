export function add(...args: number[]): number {
  return args.reduce((acc, val) => acc + val);
}
