export const getBasePath = (): string => {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  return process.env.NODE_ENV === "production" ? "/travel_website" : "";
};

export const basePath = getBasePath();

export const asset = (path: string): string => {
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

