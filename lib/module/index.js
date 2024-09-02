"use strict";

import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'native-module-lib' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const NativeModuleLib = NativeModules.NativeModuleLib ? NativeModules.NativeModuleLib : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function multiply(a, b) {
  return NativeModuleLib.multiply(a, b);
}
//# sourceMappingURL=index.js.map