import React from "react";
import renderer from "react-test-renderer";

import { View as RNView, Text as RNText } from "react-native";

import { tamaguiConfig } from "@unmaze/config";
import { TamaguiProvider, View as TView, Text as TText } from "tamagui";

import { TestComponent } from "@unmaze/views";

describe("smoke tests", () => {
  it("2 + 2 should be 4", () => {
    expect(2 + 2).toBe(4);
  });

  it("renders an RN View with dummy RN Text", () => {
    const tree = renderer
      .create(
        <RNView>
          <RNText>Hello world!</RNText>
        </RNView>
      )
      .toJSON();
    expect(tree.children).not.toBeNull();
    expect(tree.children.length).toBe(1);
  });

  it("renders a Tamagui View with dummy Tamagui Text", () => {
    const tree = renderer
      .create(
        <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
          <TView>
            <TText>Hello world!</TText>
          </TView>
        </TamaguiProvider>
      )
      .toJSON();
    expect(tree.children).not.toBeNull();
  });

  it("renders the test component", () => {
    const tree = renderer
      .create(
        <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
          <TestComponent message="test" />
        </TamaguiProvider>
      )
      .toJSON();
    expect(tree.children.length).not.toBeNull();
  });
});
