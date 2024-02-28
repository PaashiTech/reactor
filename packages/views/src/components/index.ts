/**
 * Unmaze universal component library
 *
 * Simpler, stateless components that are used in
 * both mobile and web app views.
 *
 * @module views/components
 */

// Test
export { TestComponent } from "./core/misc/TestComponent";

/**
 * Core components
 */
// Buttons
export { UnmzGradientButton } from "./core/buttons/UnmzGradientButton";
export { TertiaryButton } from "./core/buttons/TertiaryButton";
export { IconButton } from "./core/buttons/IconButton";
export { SecondaryButton } from "./core/buttons/SecondaryButton";

// Modals
export { BottomModal } from "./core/modals/BottomModal";
export { PopupModal } from "./core/modals/PopupModal";

// Inputs
export { FormTextInput } from "./core/inputs/FormTextInput";
export { MobileNumberInput } from "./core/inputs/MobileNumberInput";
export { CalendarPicker } from "./core/inputs/CalendarPicker";
export { OTPInput } from "./core/inputs/OTPInput";
export { OTPTextView } from "./core/inputs/OTPTextView";
export { DatePicker } from "./core/inputs/DatePicker";
export { DropdownList } from "./core/inputs/DropdownList";

// Miscellaneous
export { UnmzToast } from "./core/misc/UnmzToast";
export { UnmzToastProvider } from "./core/misc/UnmzToastProvider";
export { OTPCountdownTimer } from "./core/misc/OTPCountdownTimer";
export { UnmzLinearGradient } from "./core/misc/UnmzLinearGradient";

/**
 * Shared components
 */

/**
 * Section-specific components
 */
// Profile
export {
  ProfileDetails,
  ProfileDetailsProps,
} from "./app/profile/ProfileDetails";
