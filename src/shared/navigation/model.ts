import { attach, createStore, sample } from "effector";
import type { ParsedUrlQuery } from "querystring";
import type { NextRouter } from "next/router";
import { createGate } from "effector-react";
import { atom } from "shared/factory";

export const navigationModel = atom(() => {
    const RouterGate = createGate<{ router: NextRouter }>();

    const $router = createStore<NextRouter | null>(null, {
        serialize: "ignore",
    })
        .on(RouterGate.open, (_, { router }) => router)
        .reset(RouterGate.close);

    const $query = createStore<ParsedUrlQuery | undefined | null>(null);

    sample({
        clock: $router,
        fn: (router) => router?.query,
        target: $query,
    })

    const pushFx = attach({
        source: $router,
        effect: (router, url: string) => router?.push(url)
    })

    const pushQueryFx = attach({
        source: $router,
        effect: (router, query: ParsedUrlQuery | null) => {
            router?.push({ query: { ...router.query, ...query } });
        },
    })

    return {
        pushQueryFx,
        RouterGate,
        $router,
        pushFx,
        $query,
    }
})