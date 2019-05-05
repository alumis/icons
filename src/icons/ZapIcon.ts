import { Octicon, IAlumisIconAttributes } from "../Octicon";

export class ZapIcon extends Octicon {

    constructor(attrs: IAlumisIconAttributes) {
        super(attrs, `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16"><path fill-rule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z"/></svg>`);
    }
}