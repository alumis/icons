const fs = require('fs');
const path = require("path");
const svgPath = "node_modules/octicons/build/svg";

let indexTs = "export * from \"./src/Octicon\";\n";

fs.readdir(svgPath, (err, files) => {
    files.forEach(file => {

        const className = file.substr(0, file.length - ".svg".length).split("-").map(s => s.charAt(0).toUpperCase() + s.substr(1)).join("") + "Icon";
        const svg = fs.readFileSync(path.resolve(svgPath, file)).toString("utf-8");

        fs.writeFileSync("src/icons/" + className + ".ts", `import { Octicon, IAlumisIconAttributes } from "../Octicon";

export class ${className} extends Octicon {

    constructor(attrs: IAlumisIconAttributes) {
        super(attrs, \`${svg}\`);
    }
}`);
        indexTs += "\nexport * from \"./src/icons/" + className + "\";";
    });

    fs.writeFileSync("index.ts", indexTs);
});