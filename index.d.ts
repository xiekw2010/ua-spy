export type Rule = [string, RegExp];
export type Result = {
  name: string;
  version: string;
}

export declare const detectOS: (patches: Rule[]) => (userAgent: string) => Result | null;
export declare const detectApp: (patches: Rule[]) => (userAgent: string) => Result | null;
export declare const detectBrowser: (patches: Rule[]) => (userAgent: string) => Result | null;
export declare const detectDevice: (patches: Rule[]) => (userAgent: string) => Result | null;
export declare const detectSDK: (patches: Rule[]) => (userAgent: string) => Result | null;
export declare const detectAll: (patches?: {
  osPatches?: Rule[];
  appPatches?: Rule[];
  browserPatches?: Rule[];
  devicePatches?: Rule[];
  sdkPatches?: Rule[];
}) => (userAgent?: string) => {
  os: Result | null;
  app: Result | null;
  browser: Result | null;
  device: Result | null;
  sdk: Result | null;
};
