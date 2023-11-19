import { attach, combine, createStore, restore, sample, createEvent } from "effector";
import { commonApi } from "shared/api/model/product-find";
import { PageContext } from "nextjs-effector";
import { createGate } from "effector-react";
import { atom } from "shared/factory";

export const homeModel = atom(() => {
    const HomePageGate = createGate<PageContext>();


    const getItemsFx = attach({ effect: commonApi.getItems })
    const $items = restore(getItemsFx, null);

    const loadMore = createEvent();

    sample({
        clock: HomePageGate.open,
        target: [getItemsFx]
    })

    const $limit = createStore(5)
        .on(loadMore, (state) => state + 5)
        .reset(HomePageGate.open)

    const $pageContext = createStore<PageContext | null>(null)

    sample({
        clock: HomePageGate.open,
        target: $pageContext
    })

    const $params = combine({ context: $pageContext, limit: $limit })

    sample({
        clock: HomePageGate.open,
        source: $params,
        fn: ({ limit, context }) => ({ ...context?.query, limit }),
        target: getItemsFx
    })

    return {
        HomePageGate,
        $items
    }
})