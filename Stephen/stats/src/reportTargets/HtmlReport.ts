import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <h5>${report}</h5>
      </div>
    `;

    fs.writeFileSync("report.html", html);
  }
}
