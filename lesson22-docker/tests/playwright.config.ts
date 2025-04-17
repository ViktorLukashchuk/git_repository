import { defineConfig } from "@playwright/test";
import { ReportPortal } from "@reportportal/agent-playwright";

export default defineConfig({
  reporter: [
    [
      "@playwright/test-reporter",
      {
        outputFile: "./report/report.html",
      },
    ],
    [
      "@reportportal/agent-playwright",
      {
        token: "your-reportportal-token",
        endpoint: "http://localhost:8080/api/v1",
        project: "your-project-name",
        launch: "playwright-launch",
        description: "Playwright tests report",
        attributes: ["platform: docker"],
        tags: ["e2e", "playwright"],
      },
    ],
  ],
  use: {
    baseURL: "http://app:3000",
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});
