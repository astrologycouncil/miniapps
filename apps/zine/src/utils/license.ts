const ICON_URLS: Record<string, string> = {
  cc: "https://mirrors.creativecommons.org/presskit/icons/cc.svg",
  by: "https://mirrors.creativecommons.org/presskit/icons/by.svg",
  sa: "https://mirrors.creativecommons.org/presskit/icons/sa.svg",
  nc: "https://mirrors.creativecommons.org/presskit/icons/nc.svg",
  nd: "https://mirrors.creativecommons.org/presskit/icons/nd.svg",
  zero: "https://mirrors.creativecommons.org/presskit/icons/zero.svg",
};

export const LICENSE = {
  BY: {
    name: "CC BY 4.0",
    url: "https://creativecommons.org/licenses/by/4.0/",
    iconUrls: ["cc", "by"].map((icon) => ICON_URLS[icon]),
  },
  BY_SA: {
    name: "CC BY-SA 4.0",
    url: "https://creativecommons.org/licenses/by-sa/4.0/",
    iconUrls: ["cc", "by", "sa"].map((icon) => ICON_URLS[icon]),
  },
  BY_NC: {
    name: "CC BY-NC 4.0",
    url: "https://creativecommons.org/licenses/by-nc/4.0/",
    iconUrls: ["cc", "by", "nc"].map((icon) => ICON_URLS[icon]),
  },
  BY_NC_SA: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    iconUrls: ["cc", "by", "nc", "sa"].map((icon) => ICON_URLS[icon]),
  },
  BY_ND: {
    name: "CC BY-ND 4.0",
    url: "https://creativecommons.org/licenses/by-nd/4.0/",
    iconUrls: ["cc", "by", "nd"].map((icon) => ICON_URLS[icon]),
  },
  BY_NC_ND: {
    name: "CC BY-NC-ND 4.0",
    url: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
    iconUrls: ["cc", "by", "nc", "nd"].map((icon) => ICON_URLS[icon]),
  },
  ZERO: {
    name: "CC0",
    url: "https://creativecommons.org/publicdomain/zero/1.0/",
    iconUrls: ["cc", "zero"].map((icon) => ICON_URLS[icon]),
  },
} as const;

export type License = (typeof LICENSE)[keyof typeof LICENSE];
