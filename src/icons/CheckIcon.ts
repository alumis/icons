import { Octicon, IAlumisIconAttributes } from "../Octicon";

export class CheckIcon extends Octicon {

    constructor(attrs: IAlumisIconAttributes) {
        super(attrs, `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>`);
    }
}