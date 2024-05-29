import { defineConfig, definePlugin } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./schemas/schema";
import { visionTool } from "@sanity/vision";

const PROSJEKT_ID = "8wpntadz";

const sharedConfig = definePlugin({
  name: "shareConfig",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemas,
  },
});

export default defineConfig([
  {
    name: "prod",
    title: "Prod (v2023)",
    projectId: PROSJEKT_ID,
    dataset: "prod-v2023",
    plugins: [sharedConfig()],
    basePath: "/prod",
  },
  {
    name: "tidligereprod",
    title: "Prod (pre 2023-11)",
    projectId: PROSJEKT_ID,
    dataset: "questions",
    plugins: [sharedConfig()],
    basePath: "/tidligereprod",
  },
  {
    name: "test",
    title: "Test",
    projectId: PROSJEKT_ID,
    dataset: "test",
    plugins: [sharedConfig()],
    basePath: "/test",
  },
]);
