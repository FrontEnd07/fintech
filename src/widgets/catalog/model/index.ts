import { restore, attach, sample, createStore } from "effector";
import { commonApi } from "shared/api/model/product-find";
import type { PageContext } from "nextjs-effector";
import { createGate } from "effector-react";
import { atom } from 'shared/factory';

export const catalogModel = atom(() => {
    const HomePageGate = createGate();

    const getCatalogFx = attach({ effect: commonApi.getCatalog })
    const $catalog = restore(getCatalogFx, null)

    sample({
        clock: HomePageGate.open,
        target: [getCatalogFx]
    })

    return {
        HomePageGate,
        $catalog,
    }
})