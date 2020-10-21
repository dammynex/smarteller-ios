import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.Smartteller',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    id: 'smartteller.iqgenius.ng'
  }
} as NativeScriptConfig;