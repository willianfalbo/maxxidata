export function checkConfig(value: any): any {
  if (!value) {
    const errorMessage =
      "Make sure you have set all variables in your '.env' file";
    // Logger.error(errorMessage);
    throw new Error(errorMessage);
  }
  return value;
}
