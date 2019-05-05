import { Component, IAttributes, applyAttributes } from "@alumis/observables-dom";

import * as cssClasses from "./_icon.scss";

export abstract class Octicon extends Component<SVGElement> {

    constructor(attrs: IAlumisIconAttributes, svg: string) {

        super();

        Octicon._div.innerHTML = svg;
        this.node = <SVGElement>Octicon._div.firstElementChild;

        let size: IconSize;

        if (attrs) {

            size = attrs.size;
            delete attrs.size;
        }

        size = size || IconSize.Small;
        
        let height = parseInt(this.node.getAttribute("height"));

        if (size !== height) {

            this.node.setAttribute("height", String(size));
            this.node.setAttribute("width", String(size * parseInt(this.node.getAttribute("width")) / height));
        }

        this.node.classList.add((<any>cssClasses).icon);

        applyAttributes(this.node, attrs);
    }

    private static _div = document.createElement("div");
}

export enum IconSize {

    Small = 16,
    Medium = 32,
    Large = 64
}

export interface IAlumisIconAttributes extends IAttributes {

    size?: IconSize;
}