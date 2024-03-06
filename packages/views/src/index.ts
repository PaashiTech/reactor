/**
 * The View layer for Unmaze applications, which provides universal UI elements to
 * the platform-specific UI layer
 * {@link https://learn.microsoft.com/en-us/dotnet/architecture/maui/mvvm | MVVM Architecture }
 *
 * @package views
 */

// Unmaze Components
export * from "./components";

// Stores
export { useTestStore } from "./stores/testStore";
export { useUserStore } from "./stores/userStore";
export { mmkvStorage } from "./helpers/mmkvStorage";

// Models
export { UserState, UserActions } from "./stores/models/user";

// Tamagui
export * from "tamagui";
export { tamaguiConfig } from "@unmaze/config";
export { ToastViewport } from "@tamagui/toast";
