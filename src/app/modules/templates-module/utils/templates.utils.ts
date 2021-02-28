export function assertNoNull(value: any, valueName: string): void {
  if (!value) {
    throw new Error(`[[AssertionError]]: ${valueName} is null.`);
  }
}
