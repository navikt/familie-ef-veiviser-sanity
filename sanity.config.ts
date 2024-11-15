import { AuthConfig, defineConfig, definePlugin } from "sanity";
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

const auth: AuthConfig = {
  redirectOnSingle: true,
  providers: () => [
    {
      name: "saml",
      title: "NAV SSO",
      url: "https://api.sanity.io/v2021-10-01/auth/saml/login/f3270b37",
      logo: "/static/navlogo.svg",
    },
  ],
};

export default defineConfig([
  {
    name: "prod",
    title: "Prod (v2023)",
    projectId: PROSJEKT_ID,
    dataset: "prod-v2023",
    plugins: [sharedConfig()],
    basePath: "/prod",
    auth: auth,
  },
]);
