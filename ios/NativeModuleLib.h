
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNNativeModuleLibSpec.h"

@interface NativeModuleLib : NSObject <NativeNativeModuleLibSpec>
#else
#import <React/RCTBridgeModule.h>

@interface NativeModuleLib : NSObject <RCTBridgeModule>
#endif

@end
