export const getBasePath = (): string => {
  if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  return process.env.NODE_ENV === "production" ? "/travel_website" : "";
};

export const basePath = getBasePath();
