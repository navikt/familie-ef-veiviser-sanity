import { defineCliConfig } from "sanity/cli";

export const PROSJEKT_ID = "8wpntadz";

export default defineCliConfig({
  api: {
    projectId: PROSJEKT_ID,
    dataset: "prod-v2023",
  },
  deployment: {
    appId: "b831d74426099cfa1e54c421",
  },
});
