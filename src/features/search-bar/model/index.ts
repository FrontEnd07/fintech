import { atom } from "shared/factory/atom"
import type { ParsedUrlQuery } from "querystring";
import { createEvent, createStore, sample } from "effector";
import { navigationModel } from "shared/navigation";

export const filtersModel = atom(() => {
    const optionSelect = createEvent<ParsedUrlQuery>();

    const $params = createStore('');

    sample({
        clock: optionSelect,
        target: navigationModel.pushQueryFx
    })

    return {
        optionSelect,
        $params
    }
})