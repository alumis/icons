import { Octicon, IAlumisIconAttributes } from "../Octicon";

export class CreditCardIcon extends Octicon {

    constructor(attrs: IAlumisIconAttributes) {
        super(attrs, `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 9H2V8h10v1zm4-6v9c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h14c.55 0 1 .45 1 1zm-1 3H1v6h14V6zm0-3H1v1h14V3zm-9 7H2v1h4v-1z"/></svg>`);
    }
}