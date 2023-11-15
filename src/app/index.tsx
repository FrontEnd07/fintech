import { AppGate } from "shared/config";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useGate } from "effector-react";
import { BaseLayout } from "widgets/layouts"
import { withEffector } from "nextjs-effector";
import NextNProgress from "nextjs-progressbar";
import { navigationModel } from "shared/navigation";
const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    useGate(navigationModel.RouterGate, { router })

    useGate(AppGate);

    return <>
        <NextNProgress color="#7f3cba" height={3} options={{ showSpinner: false }} />
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
    </>
}

export default withEffector(App)
