// import router from "next/client";

// Open links in the other tab
import {router} from "next/client";
import {useRouter} from "next/navigation";

export const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
export const openExternalTab = (url: string): (() => void) => () => openInNewTab(url)
////


// Open links in the same tab
export const openInSameTab = (url: string): void => {
    // const router = useRouter();
    router.push(url);
}
export const openInternalTab = (url: string): (() => void) => () => openInSameTab(url)
////

