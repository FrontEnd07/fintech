import { atom } from "shared/factory/atom"
import type { ParsedUrlQuery } from "querystring";
import { createEvent, createStore, sample } from "effector";
import { navigationModel } from "shared/navigation";
import { paramsToString } from "shared/lib";

export const filtersModel = atom(() => {
    const optionSelected = createEvent<ParsedUrlQuery>();

    const $params = createStore('');

    const $filters = createStore<Array<string | undefined>>([]);

    sample({
        clock: optionSelected,
        target: navigationModel.pushQueryFx
    })

    sample({
        clock: navigationModel.$query,
        source: $filters,
        fn: (params) => paramsToString(params as string[]),
        target: $params
    })

    return {
        optionSelected,
        $params
    }
})