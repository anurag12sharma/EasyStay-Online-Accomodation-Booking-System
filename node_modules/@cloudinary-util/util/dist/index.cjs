"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  convertColorHexToRgb: () => convertColorHexToRgb,
  encodeBase64: () => encodeBase64,
  getFormat: () => getFormat,
  getPublicId: () => getPublicId,
  getTransformations: () => getTransformations,
  objectHasKey: () => objectHasKey,
  parseUrl: () => parseUrl,
  pollForProcessingImage: () => pollForProcessingImage,
  sortByKey: () => sortByKey,
  testColorIsHex: () => testColorIsHex
});
module.exports = __toCommonJS(src_exports);

// src/lib/cloudinary.ts
var REGEX_VERSION = /\/v\d+\//;
var REGEX_FORMAT = /\.(ai|avif|gif|png|webp|bmp|bw|djvu|dng|ps|ept|eps|eps3|fbx|flif|gif|glb|gltf|heif|heic|ico|indd|jpg|jpe|jpeg|jp2|wdp|jxr|hdp|obj|pdf|ply|png|psd|arw|cr2|svg|tga|tif|tiff|u3ma|usdz|webp|3g2|3gp|avi|flv|m3u8|ts|m2ts|mts|mov|mkv|mp4|mpeg|mpd|mxf|ogv|webm|wmv)$/i;
var REGEX_URL = /https?:\/\/(?<host>[^/]+)\/(?<cloudName>[^/]+)?\/?(?<assetType>image|images|video|videos|raw|files)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)?\/?(?<signature>s--([a-zA-Z0-9_-]{8}|[a-zA-Z0-9_-]{32})--)?\/?(?<transformations>(?:[^_/]+_[^,/]+,?\/?)*\/)*(?<version>v\d+|\w{1,2})\/(?<publicId>[^\s]+)$/;
var ASSET_TYPES_SEO = ["images", "videos", "files"];
var CLOUDINARY_DEFAULT_HOST = "res.cloudinary.com";
function parseUrl(src) {
  if (typeof src !== "string") {
    throw new Error(`Failed to parse URL - Invalid src: Is not a string`);
  }
  const hasVersion = REGEX_VERSION.test(src);
  if (!hasVersion) {
    throw new Error(
      `Failed to parse URL - Invalid src: Does not include version (Ex: /v1234/)`
    );
  }
  const [baseUrlWithExtension, queryString] = src.split("?");
  const format = getFormat(baseUrlWithExtension);
  let baseUrl = baseUrlWithExtension;
  if (format) {
    baseUrl = baseUrlWithExtension.replace(new RegExp(`${format}$`), "");
  }
  const results = baseUrl.match(REGEX_URL);
  const transformations = results?.groups?.transformations?.split("/").filter((t) => !!t);
  const parts = {
    ...results?.groups,
    format,
    seoSuffix: void 0,
    transformations: transformations || [],
    queryParams: {},
    version: results?.groups?.version ? parseInt(results.groups.version.replace("v", "")) : void 0
  };
  if (parts.host === CLOUDINARY_DEFAULT_HOST && !parts.cloudName) {
    throw new Error(
      "Failed to parse URL - Invalid src: Cloudinary URL delivered from res.cloudinary.com must include Cloud Name (ex: res.cloudinary.com/<Cloud Name>/image/...)"
    );
  }
  if (queryString) {
    parts.queryParams = queryString.split("&").reduce((prev, curr) => {
      const [key, value] = curr.split("=");
      prev[key] = value;
      return prev;
    }, {});
  }
  if (parts.assetType && ASSET_TYPES_SEO.includes(parts.assetType)) {
    const publicIdParts = parts.publicId?.split("/") || [];
    parts.seoSuffix = publicIdParts.pop();
    parts.publicId = publicIdParts.join("/");
  }
  if (parts.publicId) {
    parts.publicId = decodeURIComponent(parts.publicId);
  }
  return parts;
}
function getPublicId(src) {
  const { publicId } = parseUrl(src) || {};
  return publicId;
}
function getTransformations(src) {
  const { transformations = [] } = parseUrl(src) || {};
  return transformations.map((t) => t.split(","));
}
function getFormat(src) {
  const matches = src.match(REGEX_FORMAT);
  if (matches === null) return;
  return matches[0];
}
async function pollForProcessingImage(options) {
  try {
    const response = await fetch(options.src);
    if (response.status === 423) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return await pollForProcessingImage(options);
    }
    return response.ok;
  } catch {
    return false;
  }
}

// src/lib/colors.ts
function testColorIsHex(value) {
  if (typeof value !== "string") return false;
  return !!value.startsWith("#");
}
function convertColorHexToRgb(value) {
  return `rgb:${value.replace("#", "")}`;
}

// src/lib/util.ts
function encodeBase64(value) {
  if (typeof btoa === "function") {
    return btoa(value);
  }
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value).toString("base64");
  }
}
function objectHasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function sortByKey(array = [], key, type = "asc") {
  function compare(a, b) {
    let keyA = a[key];
    let keyB = b[key];
    if (typeof keyA === "string") {
      keyA = keyA.toLowerCase();
    }
    if (typeof keyB === "string") {
      keyB = keyB.toLowerCase();
    }
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
    return 0;
  }
  let newArray = [...array];
  if (typeof key !== "string") return newArray;
  newArray = newArray.sort(compare);
  if (type === "desc") {
    return newArray.reverse();
  }
  return newArray;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convertColorHexToRgb,
  encodeBase64,
  getFormat,
  getPublicId,
  getTransformations,
  objectHasKey,
  parseUrl,
  pollForProcessingImage,
  sortByKey,
  testColorIsHex
});
