import { attach, createEvent, createStore, restore, sample } from "effector";
import { navigationModel } from "shared/navigation";
import type { ParsedUrlQuery } from "querystring";
import { atom } from "shared/factory/atom"
import { commonApi } from "shared/api";
import { homeModel } from "pages/home";

export const filtersModel = atom(() => {
    const optionSelected = createEvent<ParsedUrlQuery>();

    const $params = createStore('');

    const getCategoryFx = attach({ effect: commonApi.getCategory });

    const $category = restore(getCategoryFx, null);

    sample({
        clock: optionSelected,
        target: navigationModel.pushQueryFx
    })

    sample({
        clock: homeModel.HomePageGate.open,
        target: [getCategoryFx]
    })

    const $pending = getCategoryFx.pending;

    return {
        optionSelected,
        $category,
        $pending,
        $params,
    }
})