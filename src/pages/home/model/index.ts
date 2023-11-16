import { attach, restore, sample } from "effector";
import { createGate } from "effector-react";
import { commonApi } from "shared/api/model/product-find";
import { atom } from "shared/factory";

export const homeModel = atom(() => {
    const HomePageGate = createGate();

    const getItemsFx = attach({ effect: commonApi.getItems })
    const $items = restore(getItemsFx, null);

    sample({
        clock: HomePageGate.open,
        target: [getItemsFx]
    })

    return {
        HomePageGate,
        $items
    }
})