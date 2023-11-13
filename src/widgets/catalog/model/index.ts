import { atom } from "shared/factory";
import type { PageContext } from "nextjs-effector"
import { commonApi } from "shared/api/model/product-find";
import {
    attach,
    combine,
    createEvent,
    createStore,
    restore,
    sample
} from "effector";

export const catalogModel = atom(() => {
    const pageStarted = createEvent<PageContext>();

    const getCatalogFx = attach({ effect: commonApi.getCatalog })

    const $catalog = restore(getCatalogFx, null)

    const loadMore = createEvent();

    const $limit = createStore(30)
        .on(loadMore, (state) => state + 60)
        .reset(pageStarted);

    return {
        $catalog,
        pageStarted,
        $limit
    }
})