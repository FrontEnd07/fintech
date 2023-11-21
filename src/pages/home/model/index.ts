import { attach, combine, createStore, restore, sample, createEvent } from "effector";
import { commonApi } from "shared/api/model/product-find";
import { PageContext } from "nextjs-effector";
import { createGate } from "effector-react";
import { atom } from "shared/factory";
import { navigationModel } from "shared/navigation";
import { filtersModel } from "features/search-bar/model";

export const homeModel = atom(() => {
    const pageStarted = createEvent<PageContext>();

    const getItemsFx = attach({ effect: commonApi.getItems })
    const $items = restore(getItemsFx, null);

    const $pageContext = createStore<PageContext | null>(null)

    sample({
        clock: pageStarted,
        target: $pageContext
    })

    const $params = combine({ context: $pageContext, limit: 5 })

    sample({
        clock: pageStarted,
        source: $params,
        fn: ({ limit, context }) => ({ ...context?.query, limit }),
        target: getItemsFx,
    })

    return {
        pageStarted,
        $items
    }
})