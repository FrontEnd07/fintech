import { attach, createEvent, createStore, restore, sample } from "effector";
import { navigationModel } from "shared/navigation";
import type { ParsedUrlQuery } from "querystring";
import { atom } from "shared/factory/atom"
import { ProductCategory, commonApi } from "shared/api";

export const filtersModel = atom(() => {
    const optionSelected = createEvent<ParsedUrlQuery>();

    const $params = createStore('');

    const getCategoryFx = attach({ effect: commonApi.getCategory });

    const $category = restore(getCategoryFx, mapParams: state)

    const options = $category.map((state) => ({ value: state?.id?.toString(), label: state?.name }))

    sample({
        clock: optionSelected,
        target: navigationModel.pushQueryFx
    })

    const $pending = getCategoryFx.pending;

    return {
        optionSelected,
        getCategoryFx,
        $category,
        $pending,
        options,
        $params,
    }
})