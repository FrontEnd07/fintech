import { attach, restore, sample, createEvent } from "effector";
import { navigationModel } from "shared/navigation";
import type { PageContext } from "nextjs-effector";
import { createGate } from "effector-react";
import { commonApi } from "shared/api";
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

    sample({
        clock: navigationModel.pushQueryFx,
        target: getItemsFx
    })

    return {
        HomePageGate,
        pageStarted,
        $items
    }
})