export function toEnum<T extends Record<string, string>>(
  enumObj: T,
  value: string,
  field: string,
): T[keyof T] {
  const valid = Object.values(enumObj) as string[];
  if (!valid.includes(value)) {
    throw new Error(
      `Invalid ${field} "${value}". Expected one of: ${valid.join(', ')}`,
    );
  }
  return value as T[keyof T];
}
