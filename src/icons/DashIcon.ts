import { Octicon, IAlumisIconAttributes } from "../Octicon";

export class DashIcon extends Octicon {

    constructor(attrs: IAlumisIconAttributes) {
        super(attrs, `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16"><path fill-rule="evenodd" d="M0 7v2h8V7H0z"/></svg>`);
    }
}