import { registerRootComponent } from "expo";

import { App } from "@unmaze/mobile";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

// async function enableAPIMocking() {
//   if (!__DEV__) {
//     return;
//   }

//   await import("../../../packages/api/src/mocks/msw.polyfills");
//   const { server } = await import("../../../packages/api/src/mocks/server");
//   server.listen();
// }

// enableAPIMocking().then(() => {
//   registerRootComponent(App);
// });
