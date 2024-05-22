import { Carousal1, Carousal2, Carousal3 } from "@unmaze/assets";

export type SliderDataType = {
  id: number;
  heading: string;
  description: string;
  image: any;
};

export const SliderData: SliderDataType[] = [
  {
    id: 1,
    heading: "Manage Your Finances",
    description:
      "Forget everything you know about the chaotic world of finance. It can be easy.",
    image: Carousal1,
  },
  {
    id: 2,
    heading: "Control your savings.",
    description: "Track your expenditure and save more for better investments.",
    image: Carousal3,
  },
  {
    id: 3,
    heading: "Insightful Analytics.",
    description:
      "Gain valuable insights into your Investments detailed analytics and guidance.",
    image: Carousal2,
  },
];
