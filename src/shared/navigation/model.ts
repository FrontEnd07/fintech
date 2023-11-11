import { attach, createStore } from "effector";
import { NextRouter } from "next/router";
import { atom } from "shared/factory/atom";
import { createGate } from "effector-react";
import type { ParsedUrlQuery } from "querystring";

export const navigationModel = atom(() => {
    const RouterGate = createGate<{ router: NextRouter }>();

    const $router = createStore<NextRouter | null>(null, {
        serialize: "ignore",
    })
        .on(RouterGate.open, (_, { router }) => router)
        .reset(RouterGate.close);

    const $query = createStore<ParsedUrlQuery | undefined | null>;

    const pushQueryFx = attach({
        source: $router,
        effect: (router, query: ParsedUrlQuery | null) => {
            router?.push({ query: { ...router.query, ...query } });
        },
    })

    return {
        RouterGate,
        pushQueryFx,
    }
})