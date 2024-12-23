export const extractCodeFromUrl = (url: string): string | null => {
    const urlParams = new URLSearchParams(new URL(url).search);
    const code = urlParams.get('code');
    return code;
  };
  