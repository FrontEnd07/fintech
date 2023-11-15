import { commonApi } from "shared/api/model/product-find";
import { attach, restore, sample } from "effector";
import { createGate } from 'effector-react';
import { atom } from "shared/factory";

export const catalogModel = atom(() => {
    const CatalogGate = createGate();

    const getCatalogFx = attach({ effect: commonApi.getCatalog });
    const $catalog = restore(getCatalogFx, null);

    sample({
        source: CatalogGate.open,
        target: [getCatalogFx],
    });

    return {
        $catalog,
    }
})