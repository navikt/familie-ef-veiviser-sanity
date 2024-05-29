import { defineConfig } from "sanity";
import { structureTool } from 'sanity/structure'
import schemas from './schemas/schema'


export default defineConfig({
  title: "veiviser",
  projectId: "8wpntadz",
  dataset: "prod-v2023",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

// {
//   "root": true,
//   "project": {
//     "name": "veiviser"
//   },
//   "api": {
//     "projectId": "8wpntadz",
//     "dataset": "prod-v2023"
//   },
//   "__experimental_spaces": [
//     {
//       "name": "prod",
//       "title": "Prod (v2023)",
//       "default": true,
//       "api": {
//         "projectId": "8wpntadz",
//         "dataset": "prod-v2023"
//       }
//     },{
//       "name": "prod",
//       "title": "Prod (pre 2023-11)",
//       "default": true,
//       "api": {
//         "projectId": "8wpntadz",
//         "dataset": "questions"
//       }
//     },
//     {
//       "name": "test",
//       "title": "Test",
//       "api": {
//         "projectId": "8wpntadz",
//         "dataset": "test"
//       }
//     }
//   ],
//   "plugins": [
//     "@sanity/base",
//     "@sanity/components",
//     "@sanity/default-layout",
//     "@sanity/default-login",
//     "@sanity/desk-tool",
//     "markdown",
//     "@sanity/vision"
//   ],
//   "parts": [
//     {
//       "name": "part:@sanity/base/schema",
//       "path": "./schemas/schema.js"
//     },
//     {
//       "implements": "part:@sanity/base/brand-logo",
//       "path": "./logo/logo.js"
//     },
//         {
//       "implements": "part:@sanity/base/theme/variables/override-style",
//       "path": "./styles/variables.css"
//     }
//   ]
// }
