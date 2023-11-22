import { attach, combine, createStore, restore, sample, createEvent } from "effector";
import { commonApi } from "shared/api/model/product-find";
import { filtersModel } from "features/search-bar/model";
import { navigationModel } from "shared/navigation";
import type { PageContext } from "nextjs-effector";
import { createGate } from "effector-react";
import { atom } from "shared/factory";

export const homeModel = atom(() => {
    const pageStarted = createEvent<PageContext>();

    const HomePageGate = createGate();

    const getItemsFx = attach({ effect: commonApi.getItems })
    const $items = restore(getItemsFx, null);

    sample({
        clock: HomePageGate.open,
        target: getItemsFx
    })

    const $pageContext = createStore<PageContext | null>(null);

    sample({
        clock: pageStarted,
        target: $pageContext,
    })

    const $params = combine({ context: $pageContext });

    sample({
        clock: pageStarted,
        source: $params,
        fn: ({ context }) => ({ ...context?.query }),
        target: getItemsFx,
    })

    return {
        HomePageGate,
        pageStarted,
        $items
    }
})