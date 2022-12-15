// Open links in the other tab
export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};
export const openExternalTab =
  (url: string): (() => void) =>
  () =>
    openInNewTab(url);
////
