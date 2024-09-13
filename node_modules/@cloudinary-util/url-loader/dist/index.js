import {
  constructCloudinaryUrl,
  effects,
  position,
  primary,
  text,
  transformationPlugins
} from "./chunk-L3YIXMGG.js";

// src/lib/upload-widget.ts
function getUploadWidgetOptions({ uploadSignature, ...options }, config) {
  const signed = typeof uploadSignature === "function";
  const { cloudName, apiKey } = config?.cloud || {};
  if (!cloudName) {
    throw new Error("A Cloudinary Cloud name is required, please make sure your environment variable is set and configured in your environment.");
  }
  if (signed && !apiKey) {
    throw new Error("A Cloudinary API Key is required for signed requests, please make sure your environment variable is set and configured in your environment.");
  }
  if (!signed && !options.uploadPreset) {
    throw new Error("A Cloudinary Upload Preset is required for unsigned uploads. Please specify an uploadPreset or configure signed uploads.");
  }
  const uploadOptions = {
    cloudName,
    apiKey,
    ...options
  };
  if (signed) {
    uploadOptions.uploadSignature = uploadSignature;
  }
  return uploadOptions;
}
var UPLOAD_WIDGET_EVENTS = {
  "abort": "onAbort",
  "batch-cancelled": "onBatchCancelled",
  "close": "onClose",
  "display-changed": "onDisplayChanged",
  "publicid": "onPublicId",
  "queues-end": "onQueuesEnd",
  "queues-start": "onQueuesStart",
  "retry": "onRetry",
  "show-completed": "onShowCompleted",
  "source-changed": "onSourceChanged",
  "success": "onSuccess",
  "tags": "onTags",
  "upload-added": "onUploadAdded"
};
function generateUploadWidgetResultCallback(options) {
  return function resultCallback(error, uploadResult) {
    if (error) {
      if (typeof options.onError === "function") {
        options.onError(error, uploadResult);
      }
    }
    if (typeof options.onResult === "function") {
      options.onResult(uploadResult);
    }
    const widgetEvent = typeof uploadResult?.event === "string" && UPLOAD_WIDGET_EVENTS[uploadResult.event];
    if (typeof widgetEvent === "string" && typeof options[widgetEvent] === "function") {
      const callback = options[widgetEvent];
      callback(uploadResult);
    }
  };
}

// src/lib/upload.ts
function generateSignatureCallback({ signatureEndpoint, fetch: fetcher }) {
  return function generateSignature(callback, paramsToSign) {
    if (typeof signatureEndpoint === "undefined") {
      throw Error("Failed to generate signature: signatureEndpoint property undefined.");
    }
    if (typeof fetcher === "undefined") {
      throw Error("Failed to generate signature: fetch property undefined.");
    }
    fetcher(signatureEndpoint, {
      method: "POST",
      body: JSON.stringify({
        paramsToSign
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((result) => {
      callback(result.signature);
    }).catch((error) => {
      callback(null, error);
    });
  };
}

// src/lib/video-player.ts
import { parseUrl } from "@cloudinary-util/util";
function getVideoPlayerOptions(options, config) {
  const {
    autoplay,
    controls = true,
    language,
    languages,
    logo = true,
    loop = false,
    muted = false,
    poster,
    src,
    transformation,
    quality = "auto",
    ...otherCldVidPlayerOptions
  } = options;
  const { cloudName } = config?.cloud || {};
  const { secureDistribution, privateCdn } = config?.url || {};
  if (!cloudName) {
    throw new Error(
      "A Cloudinary Cloud name is required, please make sure your environment variable is set and configured in your environment."
    );
  }
  let publicId = src || "";
  if (publicId.startsWith("http")) {
    try {
      const parts = parseUrl(src);
      if (typeof parts?.publicId === "string") {
        publicId = parts?.publicId;
      }
    } catch (e) {
    }
  }
  if (!publicId) {
    throw new Error(
      "Video Player requires a src, please make sure to configure your src as a public ID or Cloudinary URL."
    );
  }
  const playerTransformations = Array.isArray(transformation) ? transformation : [transformation];
  playerTransformations.unshift({
    quality
  });
  let logoOptions = {};
  if (typeof logo === "boolean") {
    logoOptions.showLogo = logo;
  } else if (typeof logo === "object") {
    logoOptions = {
      ...logoOptions,
      showLogo: true,
      logoImageUrl: logo.imageUrl,
      logoOnclickUrl: logo.onClickUrl
    };
  }
  let autoplayValue = false;
  let autoplayModeValue = void 0;
  if (typeof autoplay === "boolean" || autoplay === "true" || autoplay === "false") {
    autoplayValue = autoplay;
  }
  if (typeof autoplay === "string" && autoplay !== "true" && autoplay !== "false") {
    autoplayModeValue = autoplay;
  }
  const playerOptions = {
    cloud_name: cloudName,
    privateCdn,
    secureDistribution,
    autoplayMode: autoplayModeValue,
    autoplay: autoplayValue,
    controls,
    language,
    languages,
    loop,
    muted,
    publicId,
    transformation: playerTransformations,
    ...logoOptions,
    ...otherCldVidPlayerOptions
  };
  if (playerOptions.width && playerOptions.height && !playerOptions.aspectRatio) {
    playerOptions.aspectRatio = `${playerOptions.width}:${playerOptions.height}`;
  }
  if (typeof poster === "string") {
    playerOptions.posterOptions = {
      publicId: poster
    };
  } else if (typeof poster === "object") {
    if (typeof poster.src !== "string") {
      playerOptions.posterOptions = {
        publicId: constructCloudinaryUrl({
          options: {
            ...poster,
            src: publicId,
            assetType: "video",
            format: "auto:image"
          },
          config
        })
      };
    } else {
      playerOptions.posterOptions = {
        publicId: constructCloudinaryUrl({
          options: poster,
          config
        })
      };
    }
  }
  return playerOptions;
}
export {
  UPLOAD_WIDGET_EVENTS,
  constructCloudinaryUrl,
  effects,
  generateSignatureCallback,
  generateUploadWidgetResultCallback,
  getUploadWidgetOptions,
  getVideoPlayerOptions,
  position,
  primary,
  text,
  transformationPlugins
};
