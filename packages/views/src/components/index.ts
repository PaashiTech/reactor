/**
 * Unmaze universal component library
 *
 * Simpler, stateless components that are used in
 * both mobile and web app views.
 *
 * @module views/components
 */

// Test
export { TestComponent } from "./TestComponent";

/**
 * Core components
 */
// Button
export { UnmzGradientButton } from "./_core/UnmzGradientButton";
export { TertiaryButton } from "./_core/TertiaryButton/TertiaryButton";

// Linear gradient
export { UnmzLinearGradient } from "./_core/UnmzLinearGradient";

// Bottom-aligned modal
export { BottomModal } from "./_core/BottomModal";

// FormTextInput
export { FormTextInput } from "./_core/FormTextInput";

// Calender Picker
export { CalendarPicker } from "./_core/CalendarPicker";

// Popup Modal
export { PopupModal } from "./_core/PopupModal";

/**
 * Composite components
 */
// Profile Details
export { ProfileDetails, ProfileDetailsProps } from "./ProfileDetails";

// Inputs
export { OTPInput } from "./OTPInput";
export { MobileNumberInput } from "./MobileNumberInput";

// CountdownTimer
export { CountdownTimer } from "./CountdownTimer";

// Custom Toast
export { UnmzToast } from "./_core/UnmzToast/UnmzToast";
export { UnmzToastProvider } from "./_core/UnmzToast/UnmzToastProvider";
