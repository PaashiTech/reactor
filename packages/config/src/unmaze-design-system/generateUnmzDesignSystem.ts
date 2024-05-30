import Handlebars from "handlebars";

import { baseColor, semanticColor } from "./unmazeTokens";
import * as fs from "fs";
import * as path from "path";

const generate = () => {
  console.log("Generating Unmaze design system files...");
  console.log("Reading template");
  // Note: Script to run this runs with packages/config as the PWD
  const template = fs.readFileSync(
    path.resolve(__dirname, "unmzDesignSystemTemplate.txt")
  );
  const compiledTemplate = Handlebars.compile(template.toString());
  fs.writeFileSync(
    path.resolve(__dirname + "/unmzDesignSystem.ts"),
    compiledTemplate({
      baseColors: Object.entries(baseColor),
      semanticColorsLight: Object.entries(semanticColor[0]),
      semanticColorsDark: Object.entries(semanticColor[1]),
    })
  );
  console.log("Generation complete!");
};

generate();
