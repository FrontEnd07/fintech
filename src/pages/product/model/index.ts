import { createEvent } from "effector";
import { PageContext } from "nextjs-effector";
import { atom } from "shared/factory";

export const productModel = atom(() => {
    const pageStarter = createEvent<PageContext>();

    return {
        pageStarter
    }
})