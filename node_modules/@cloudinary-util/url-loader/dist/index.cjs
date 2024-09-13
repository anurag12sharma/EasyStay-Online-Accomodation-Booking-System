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
  UPLOAD_WIDGET_EVENTS: () => UPLOAD_WIDGET_EVENTS,
  constructCloudinaryUrl: () => constructCloudinaryUrl,
  effects: () => effects,
  generateSignatureCallback: () => generateSignatureCallback,
  generateUploadWidgetResultCallback: () => generateUploadWidgetResultCallback,
  getUploadWidgetOptions: () => getUploadWidgetOptions,
  getVideoPlayerOptions: () => getVideoPlayerOptions,
  position: () => position,
  primary: () => primary,
  text: () => text,
  transformationPlugins: () => transformationPlugins
});
module.exports = __toCommonJS(src_exports);

// src/lib/cloudinary.ts
var import_util6 = require("@cloudinary-util/util");
var import_url_gen = require("@cloudinary/url-gen");
var import_zod30 = require("zod");

// src/plugins/abr.ts
var import_zod = require("zod");
var abrProps = {
  streamingProfile: import_zod.z.string().describe(
    JSON.stringify({
      text: "The streaming profile to apply when delivering a video using adaptive bitrate streaming.",
      url: "https://cloudinary.com/documentation/transformation_reference#sp_streaming_profile"
    })
  ).optional()
};
var abrPlugin = {
  props: abrProps,
  assetTypes: ["video", "videos"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { streamingProfile } = options;
    if (typeof streamingProfile === "string") {
      cldAsset.addTransformation(`sp_${streamingProfile}`);
    }
    return {};
  }
};

// src/plugins/cropping.ts
var import_zod3 = require("zod");

// src/constants/parameters.ts
var parameters_exports = {};
__export(parameters_exports, {
  angle: () => angle,
  aspectRatio: () => aspectRatio,
  aspectRatioModesEnum: () => aspectRatioModesEnum,
  crop: () => crop,
  cropModesEnum: () => cropModesEnum,
  extractMode: () => extractMode,
  extractModesEnum: () => extractModesEnum,
  flags: () => flags,
  flagsEnum: () => flagsEnum,
  format: () => format,
  gravity: () => gravity,
  height: () => height,
  multiple: () => multiple,
  prompt: () => prompt,
  width: () => width,
  x: () => x,
  y: () => y,
  zoom: () => zoom
});
var import_zod2 = require("zod");
var cropModesEnum = import_zod2.z.enum([
  "auto",
  "crop",
  "fill",
  "fill_pad",
  "fit",
  "imagga_crop",
  "imagga_scale",
  "lfill",
  "limit",
  "lpad",
  "mfit",
  "mpad",
  "pad",
  "scale",
  "thumb"
]);
var extractModesEnum = import_zod2.z.enum([
  "content",
  "mask"
]);
var flagsEnum = import_zod2.z.enum([
  "animated",
  "any_format",
  "apng",
  "attachment",
  "awebp",
  "clip",
  "clip_evenodd",
  "cutter",
  "force_icc",
  "force_strip",
  "getinfo",
  "group4",
  "hlsv3",
  "ignore_aspect_ratio",
  "ignore_mask_channels",
  "immutable_cache",
  "keep_attribution",
  "keep_dar",
  "keep_iptc",
  "layer_apply",
  "lossy",
  "mono",
  "no_overflow",
  "no_stream",
  "png8_fl_png24_fl_png32",
  "preserve_transparency",
  "progressive",
  "rasterize",
  "region_relative",
  "relative",
  "replace_image",
  "sanitize",
  "splice",
  "streaming_attachment",
  "strip_profile",
  "text_disallow_overflow",
  "text_no_trim",
  "tiff8_lzw",
  "tiled",
  "truncate_ts",
  "waveform"
]);
var angle = {
  qualifier: "a",
  schema: import_zod2.z.union([import_zod2.z.string(), import_zod2.z.number()]).describe(
    JSON.stringify({
      text: "Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.",
      url: "https://cloudinary.com/documentation/transformation_reference#a_angle"
    })
  )
};
var aspectRatioModesEnum = import_zod2.z.enum([
  "vflip",
  "hflip",
  "ignore",
  "auto_right",
  "auto_left"
]);
var aspectRatioSchema = import_zod2.z.union([
  import_zod2.z.number(),
  aspectRatioModesEnum,
  import_zod2.z.intersection(import_zod2.z.string(), import_zod2.z.object({}))
  // Quirk to allow enum + string
]);
var aspectRatio = {
  qualifier: "ar",
  schema: aspectRatioSchema.describe(
    JSON.stringify({
      text: "Crops or resizes the asset to a new aspect ratio.",
      url: "https://cloudinary.com/documentation/transformation_reference#ar_aspect_ratio"
    })
  )
};
var cropSchema = cropModesEnum;
var crop = {
  qualifier: "c",
  schema: cropSchema.describe(
    JSON.stringify({
      text: "Mode to use when cropping an asset.",
      url: "https://cloudinary.com/documentation/transformation_reference#c_crop_resize"
    })
  )
};
var extractModeSchema = extractModesEnum;
var extractMode = {
  schema: extractModeSchema.default("content").describe(
    JSON.stringify({
      text: "Whether to keep the content of the extracted area, or to replace it with a mask.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_extract"
    })
  )
};
var flags = {
  qualifier: "fl",
  schema: import_zod2.z.union([flagsEnum, import_zod2.z.array(flagsEnum)]).describe(
    JSON.stringify({
      text: "Alters the regular behavior of another transformation or the overall delivery behavior.",
      url: "https://cloudinary.com/documentation/transformation_reference#fl_flag"
    })
  )
};
var format = {
  qualifier: "f",
  // @TODO: enum
  schema: import_zod2.z.string().describe(
    JSON.stringify({
      text: "Converts (if necessary) and delivers an asset in the specified format regardless of the file extension used in the delivery URL.",
      url: "https://cloudinary.com/documentation/transformation_reference#f_format"
    })
  )
};
var gravitySchema = import_zod2.z.union([
  import_zod2.z.enum([
    "auto",
    "auto_content_aware",
    "center",
    "custom",
    "east",
    "face",
    "face_center",
    "multi_face",
    "north",
    "north_east",
    "north_west",
    "south",
    "south_east",
    "south_west",
    "west"
  ]),
  // Quirk to allow enum + string
  import_zod2.z.intersection(import_zod2.z.string(), import_zod2.z.object({}))
]);
var gravity = {
  qualifier: "g",
  schema: gravitySchema.describe(
    JSON.stringify({
      text: "Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.",
      url: "https://cloudinary.com/documentation/transformation_reference#g_gravity"
    })
  )
};
var heightSchema = import_zod2.z.union([import_zod2.z.number(), import_zod2.z.string()]);
var height = {
  qualifier: "h",
  schema: heightSchema.describe(
    JSON.stringify({
      text: "A qualifier that determines the height of a transformed asset or an overlay.",
      url: "https://cloudinary.com/documentation/transformation_reference#h_height"
    })
  )
};
var multipleSchema = import_zod2.z.boolean();
var multiple = {
  schema: multipleSchema.describe(
    JSON.stringify({
      text: "Should generative AI features detect multiple instances."
    })
  )
};
var prompt = {
  schema: import_zod2.z.string().describe(
    JSON.stringify({
      text: "Natural language descriptions used for generative AI capabilities."
    })
  )
};
var widthSchema = import_zod2.z.union([import_zod2.z.number(), import_zod2.z.string()]);
var width = {
  qualifier: "w",
  schema: widthSchema.describe(
    JSON.stringify({
      text: "A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.",
      url: "https://cloudinary.com/documentation/transformation_reference#w_width"
    })
  )
};
var x = {
  qualifier: "x",
  schema: import_zod2.z.union([import_zod2.z.string(), import_zod2.z.number()]).describe(
    JSON.stringify({
      text: "Adjusts the starting location or offset of the x axis.",
      url: "https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"
    })
  )
};
var y = {
  qualifier: "y",
  schema: import_zod2.z.union([import_zod2.z.string(), import_zod2.z.number()]).describe(
    JSON.stringify({
      text: "Adjusts the starting location or offset of the y axis.",
      url: "https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"
    })
  )
};
var zoomSchema = import_zod2.z.string();
var zoom = {
  schema: zoomSchema.describe(
    JSON.stringify({
      text: "Controls how close to crop to the detected coordinates when using face-detection, custom-coordinate, or object-specific gravity.",
      url: "https://cloudinary.com/documentation/transformation_reference#z_zoom"
    })
  )
};

// src/lib/transformations.ts
function constructTransformation({
  prefix,
  qualifier,
  value,
  converters
}) {
  let transformation = "";
  if (prefix) {
    transformation = `${prefix}_`;
  }
  let transformationValue = value;
  converters?.forEach(({ test, convert }) => {
    if (!test(transformationValue)) return;
    transformationValue = convert(transformationValue);
  });
  if (transformationValue === true || transformationValue === "true") {
    return `${transformation}${qualifier}`;
  }
  if (typeof transformationValue === "string" || typeof transformationValue === "number") {
    if (prefix) {
      return `${transformation}${qualifier}:${transformationValue}`;
    } else {
      return `${qualifier}_${transformationValue}`;
    }
  }
}
function promptArrayToString(promptArray) {
  return `(${promptArray.join(";")})`;
}
function normalizeNumberParameter(param) {
  if (typeof param !== "string") return param;
  return parseInt(param);
}

// src/plugins/cropping.ts
var cropsAspectRatio = ["auto", "crop", "fill", "lfill", "fill_pad", "thumb"];
var cropsGravityAuto = ["auto", "crop", "fill", "lfill", "fill_pad", "thumb"];
var cropsWithZoom = ["crop", "thumb"];
var DEFAULT_CROP = "limit";
var cropOptionsSchema = import_zod3.z.object({
  aspectRatio: aspectRatio.schema.optional(),
  type: crop.schema,
  gravity: gravity.schema.optional(),
  height: height.schema.optional(),
  width: width.schema.optional(),
  x: x.schema.optional(),
  y: y.schema.optional(),
  zoom: zoom.schema.optional(),
  source: import_zod3.z.boolean().optional()
});
var croppingProps = {
  aspectRatio: aspectRatio.schema.optional(),
  crop: import_zod3.z.union([
    crop.schema,
    cropOptionsSchema,
    import_zod3.z.array(cropOptionsSchema)
  ]).default(DEFAULT_CROP).optional(),
  gravity: gravity.schema.optional(),
  zoom: zoom.schema.optional()
};
var croppingPlugin = {
  props: croppingProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    let crops = [];
    if (typeof options.crop === "string" || typeof options.crop === "undefined") {
      crops.push({
        aspectRatio: options.aspectRatio,
        height: options.height,
        gravity: options.gravity,
        type: options.crop || DEFAULT_CROP,
        width: options.width,
        zoom: options.zoom
      });
    } else if (typeof options.crop === "object" && !Array.isArray(options.crop)) {
      crops.push(options.crop);
    } else if (Array.isArray(options.crop)) {
      crops = options.crop;
    }
    if (crops.length === 1 && crops[0].source === true) {
      crops.push({
        aspectRatio: options.aspectRatio,
        width: options.width,
        height: options.height,
        gravity: options.gravity,
        type: DEFAULT_CROP,
        zoom: options.zoom
      });
    }
    const finalTransformations = [];
    const sourceTransformations = [];
    for (const crop2 of crops) {
      const cropDimensions = {
        width: crop2.width,
        height: crop2.height
      };
      if (typeof cropDimensions.width === "undefined" && typeof crop2.aspectRatio === "undefined") {
        cropDimensions.width = options.width;
        if (typeof cropDimensions.height === "undefined") {
          cropDimensions.height = options.height;
        }
      }
      const transformations = collectTransformations({
        aspectRatio: crop2.aspectRatio,
        gravity: crop2.gravity,
        type: crop2.type || DEFAULT_CROP,
        x: crop2.x,
        y: crop2.y,
        zoom: crop2.zoom,
        ...cropDimensions
      });
      if (transformations.length > 0) {
        if (crop2.source === true) {
          sourceTransformations.push(transformations);
        } else {
          finalTransformations.push(transformations);
        }
      }
    }
    sourceTransformations.forEach((transformation) => {
      if (transformation.length > 0) {
        cldAsset.addTransformation(transformation.join(","));
      }
    });
    const results = {
      options: {}
    };
    if (results.options && finalTransformations.length > 0) {
      results.options.resize = finalTransformations.map((transformation) => transformation.join(",")).join("/");
    }
    return results;
  }
};
function collectTransformations(collectOptions) {
  const { aspectRatio: aspectRatio2, type: crop2, x: x2, y: y2, zoom: zoom2 } = collectOptions;
  let gravity2 = collectOptions.gravity;
  const height2 = normalizeNumberParameter(collectOptions.height);
  const width2 = normalizeNumberParameter(collectOptions.width);
  const transformations = [];
  const hasDefinedDimensions = height2 || width2;
  const hasValidAspectRatio = aspectRatio2 && cropsAspectRatio.includes(crop2);
  const hasXCoordinate = typeof x2 === "number" || typeof x2 === "string";
  const hasYCoordinate = typeof y2 === "number" || typeof y2 === "string";
  const hasDefinedCoordinates = hasXCoordinate || hasYCoordinate;
  if (crop2 && (hasDefinedDimensions || hasValidAspectRatio || hasDefinedCoordinates)) {
    transformations.push(`c_${crop2}`);
  }
  if (hasValidAspectRatio) {
    transformations.push(`ar_${aspectRatio2}`);
  }
  if (width2) {
    transformations.push(`w_${width2}`);
  }
  if (!["limit"].includes(crop2) && typeof height2 === "number") {
    transformations.push(`h_${height2}`);
  }
  if (hasXCoordinate) {
    transformations.push(`x_${x2}`);
  }
  if (hasYCoordinate) {
    transformations.push(`y_${y2}`);
  }
  if (!gravity2 && cropsGravityAuto.includes(crop2) && !hasDefinedCoordinates) {
    gravity2 = "auto";
  }
  if (gravity2) {
    if (gravity2 === "auto" && !cropsGravityAuto.includes(crop2)) {
      console.warn(
        `Auto gravity can only be used with crop modes: ${cropsGravityAuto.join(
          ", "
        )}. Not applying gravity.`
      );
    } else {
      transformations.push(`g_${gravity2}`);
    }
  }
  if (zoom2) {
    if (zoom2 === "auto" && !cropsWithZoom.includes(crop2)) {
      console.warn(
        `Zoom can only be used with crop modes: ${cropsWithZoom.join(
          ", "
        )}. Not applying zoom.`
      );
    } else {
      transformations.push(`z_${zoom2}`);
    }
  }
  return transformations;
}

// src/plugins/default-image.ts
var import_zod4 = require("zod");
var import_util = require("@cloudinary-util/util");
var defaultImageProps = {
  defaultImage: import_zod4.z.string().describe(
    JSON.stringify({
      text: "Configures the default image to use in case the given public ID is not available. Must include file extension.",
      url: "https://cloudinary.com/documentation/transformation_reference#d_default_image"
    })
  ).optional()
};
var defaultImagePlugin = {
  props: defaultImageProps,
  assetTypes: ["image", "images"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { defaultImage } = options;
    if (typeof defaultImage === "string") {
      if (!(0, import_util.getFormat)(defaultImage)) {
        console.warn(
          `The defaultImage prop may be missing a format and must include it along with the public ID. (Ex: myimage.jpg)`
        );
      }
      const defaultImageId = defaultImage.replace(/\//g, ":");
      cldAsset.addTransformation(`d_${defaultImageId}`);
    }
    return {};
  }
};

// src/plugins/effects.ts
var import_zod6 = require("zod");

// src/constants/qualifiers.ts
var import_util2 = require("@cloudinary-util/util");
var import_zod5 = require("zod");
var convertersColors = [
  {
    test: import_util2.testColorIsHex,
    convert: import_util2.convertColorHexToRgb
  }
];
var primary = {
  aspectRatio,
  crop,
  gravity,
  height,
  width
};
var position = {
  angle,
  gravity,
  x,
  y
};
var text = {
  alignment: {
    qualifier: false,
    order: 6
  },
  antialias: {
    qualifier: "antialias"
  },
  border: {
    qualifier: "bo",
    location: "primary"
  },
  color: {
    qualifier: "co",
    location: "primary",
    converters: convertersColors
  },
  fontFamily: {
    qualifier: false,
    order: 1
  },
  fontSize: {
    qualifier: false,
    order: 2
  },
  fontStyle: {
    qualifier: false,
    order: 4
  },
  fontWeight: {
    qualifier: false,
    order: 3
  },
  hinting: {
    qualifier: "hinting"
  },
  letterSpacing: {
    qualifier: "letter_spacing"
  },
  lineSpacing: {
    qualifier: "line_spacing"
  },
  stroke: {
    qualifier: "self",
    order: 7
  },
  textDecoration: {
    qualifier: false,
    order: 5
  }
};
var effects = {
  angle,
  art: {
    prefix: "e",
    qualifier: "art",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "Applies the selected artistic filter.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_art"
      })
    )
  },
  autoBrightness: {
    prefix: "e",
    qualifier: "auto_brightness",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Automatically adjusts the image brightness and blends the result with the original image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_auto_brightness"
      })
    )
  },
  autoColor: {
    prefix: "e",
    qualifier: "auto_color",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Automatically adjusts the image color balance and blends the result with the original image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_auto_color"
      })
    )
  },
  autoContrast: {
    prefix: "e",
    qualifier: "auto_contrast",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Automatically adjusts the image contrast and blends the result with the original image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_auto_contrast"
      })
    )
  },
  assistColorblind: {
    prefix: "e",
    qualifier: "assist_colorblind",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies stripes or color adjustment to help people with common color blind conditions to differentiate between colors that are similar for them.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_assist_colorblind"
      })
    )
  },
  background: {
    qualifier: "b",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "Applies a background to empty or transparent areas.",
        url: "https://cloudinary.com/documentation/transformation_reference#b_background"
      })
    )
  },
  blackwhite: {
    prefix: "e",
    qualifier: "blackwhite",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Converts an image to black and white.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_blackwhite"
      })
    )
  },
  blur: {
    prefix: "e",
    qualifier: "blur",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies a blurring filter to an asset.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_blur"
      })
    )
  },
  blurFaces: {
    prefix: "e",
    qualifier: "blur_faces",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Blurs all detected faces in an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_blur_faces"
      })
    )
  },
  blurRegion: {
    prefix: "e",
    qualifier: "blur_region",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies a blurring filter to the region of an image specified by x, y, width and height, or an area of text. If no region is specified, the whole image is blurred.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_blur_region"
      })
    )
  },
  border: {
    qualifier: "bo",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "Adds a solid border around an image or video.",
        url: "https://cloudinary.com/documentation/transformation_reference#bo_border"
      })
    )
  },
  brightness: {
    prefix: "e",
    qualifier: "brightness",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adjusts the image or video brightness.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_brightness"
      })
    )
  },
  brightnessHSB: {
    prefix: "e",
    qualifier: "brightness_hsb",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adjusts image brightness modulation in HSB to prevent artifacts in some images.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_brightness_hsb"
      })
    )
  },
  cartoonify: {
    prefix: "e",
    qualifier: "cartoonify",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies a cartoon effect to an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_cartoonify"
      })
    )
  },
  color: {
    qualifier: "co",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "A qualifier that specifies the color to use with the corresponding transformation.",
        url: "https://cloudinary.com/documentation/transformation_reference#co_color"
      })
    ),
    converters: convertersColors
  },
  colorize: {
    prefix: "e",
    qualifier: "colorize",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "Colorizes an image. By default, gray is used for colorization. You can specify a different color using the color qualifier.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_colorize"
      })
    )
  },
  contrast: {
    prefix: "e",
    qualifier: "contrast",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adjusts an image or video contrast.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_contrast"
      })
    )
  },
  displace: {
    prefix: "e",
    qualifier: "distort",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "Displaces the pixels in an image according to the color channels of the pixels in another specified image (a gradient map specified with the overlay parameter).",
        url: "https://cloudinary.com/documentation/transformation_reference#e_displace"
      })
    )
  },
  distort: {
    prefix: "e",
    qualifier: "distort",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "Distorts an image to a new shape by either adjusting its corners or by warping it into an arc.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_distort"
      })
    )
  },
  fillLight: {
    prefix: "e",
    qualifier: "fill_light",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adjusts the fill light and optionally blends the result with the original image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_fill_light"
      })
    )
  },
  gamma: {
    prefix: "e",
    qualifier: "gamma",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adjusts the image or video gamma level.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_gamma"
      })
    )
  },
  gradientFade: {
    prefix: "e",
    qualifier: "gradient_fade",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies a gradient fade effect from the edge of an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_gradient_fade"
      })
    )
  },
  grayscale: {
    prefix: "e",
    qualifier: "grayscale",
    schema: import_zod5.z.boolean().describe(
      JSON.stringify({
        text: "Converts an image to grayscale (multiple shades of gray).",
        url: "https://cloudinary.com/documentation/transformation_reference#e_grayscale"
      })
    )
  },
  hue: {
    prefix: "e",
    qualifier: "hue",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adjusts an image's hue.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_hue"
      })
    )
  },
  improve: {
    prefix: "e",
    qualifier: "improve",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adjusts an image's colors, contrast and brightness to improve its appearance.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_improve"
      })
    )
  },
  loop: {
    prefix: "e",
    qualifier: "loop",
    schema: import_zod5.z.union([import_zod5.z.boolean(), import_zod5.z.number(), import_zod5.z.string()]).describe(
      JSON.stringify({
        text: "Loops a video or animated image the specified number of times.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_loop"
      })
    )
  },
  multiply: {
    prefix: "e",
    qualifier: "multiply",
    schema: import_zod5.z.boolean().describe(
      JSON.stringify({
        text: "A qualifier that blends image layers using the multiply blend mode",
        url: "https://cloudinary.com/documentation/transformation_reference#e_multiply"
      })
    )
  },
  negate: {
    prefix: "e",
    qualifier: "negate",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "https://cloudinary.com/documentation/transformation_reference#e_negate",
        url: "https://cloudinary.com/documentation/transformation_reference#e_negate"
      })
    )
  },
  noise: {
    prefix: "e",
    qualifier: "noise",
    schema: import_zod5.z.boolean().describe(
      JSON.stringify({
        text: "https://cloudinary.com/documentation/transformation_reference#e_noise",
        url: "https://cloudinary.com/documentation/transformation_reference#e_noise"
      })
    )
  },
  oilPaint: {
    prefix: "e",
    qualifier: "oil_paint",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "https://cloudinary.com/documentation/transformation_reference#e_oil_paint",
        url: "https://cloudinary.com/documentation/transformation_reference#e_oil_paint"
      })
    )
  },
  opacity: {
    qualifier: "o",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.number()]).describe(
      JSON.stringify({
        text: "Adjusts the opacity of an asset and makes it semi-transparent.",
        url: "https://cloudinary.com/documentation/transformation_reference#o_opacity"
      })
    )
  },
  outline: {
    prefix: "e",
    qualifier: "outline",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adds an outline effect to an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_outline"
      })
    )
  },
  pixelate: {
    prefix: "e",
    qualifier: "pixelate",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies a pixelation effect.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_pixelate"
      })
    )
  },
  pixelateFaces: {
    prefix: "e",
    qualifier: "pixelate_faces",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Pixelates all detected faces in an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_pixelate_faces"
      })
    )
  },
  pixelateRegion: {
    prefix: "e",
    qualifier: "pixelate_region",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Pixelates the region of an image specified by x, y, width and height, or an area of text.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_pixelate_region"
      })
    )
  },
  radius: {
    qualifier: "r",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.number()]).describe(
      JSON.stringify({
        text: "Rounds the corners of an image or video.",
        url: "https://cloudinary.com/documentation/transformation_reference#r_round_corners"
      })
    )
  },
  redeye: {
    prefix: "e",
    qualifier: "redeye",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Automatically removes red eyes in an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_redeye"
      })
    )
  },
  replaceColor: {
    prefix: "e",
    qualifier: "replace_color",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "Maps an input color and those similar to the input color to corresponding shades of a specified output color.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_replace_color"
      })
    )
  },
  saturation: {
    prefix: "e",
    qualifier: "saturation",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adjusts an image or video saturation level.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_saturation"
      })
    )
  },
  screen: {
    prefix: "e",
    qualifier: "screen",
    schema: import_zod5.z.boolean().describe(
      JSON.stringify({
        text: "A qualifier that blends image layers using the screen blend mode.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_screen"
      })
    )
  },
  sepia: {
    prefix: "e",
    qualifier: "sepia",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Changes the color scheme of an image to sepia.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_sepia"
      })
    )
  },
  shadow: {
    prefix: "e",
    qualifier: "shadow",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Adds a gray shadow to the bottom right of an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_shadow"
      })
    )
  },
  sharpen: {
    prefix: "e",
    qualifier: "sharpen",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies a sharpening filter.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_sharpen"
      })
    )
  },
  shear: {
    prefix: "e",
    qualifier: "shear",
    schema: import_zod5.z.string().describe(
      JSON.stringify({
        text: "Skews an image according to the two specified values in degrees.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_shear"
      })
    )
  },
  simulateColorblind: {
    prefix: "e",
    qualifier: "simulate_colorblind",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Simulates the way an image would appear to someone with the specified color blind condition.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_simulate_colorblind"
      })
    )
  },
  tint: {
    prefix: "e",
    qualifier: "tint",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Blends an image with one or more tint colors at a specified intensity.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_tint"
      })
    )
  },
  trim: {
    prefix: "e",
    qualifier: "trim",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Detects and removes image edges whose color is similar to the corner pixels.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_trim"
      })
    )
  },
  unsharpMask: {
    prefix: "e",
    qualifier: "unsharp_mask",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies an unsharp mask filter to an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_unsharp_mask"
      })
    )
  },
  vectorize: {
    prefix: "e",
    qualifier: "vectorize",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Vectorizes an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_vectorize"
      })
    )
  },
  vibrance: {
    prefix: "e",
    qualifier: "vibrance",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies a vibrance filter to an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_vibrance"
      })
    )
  },
  vignette: {
    prefix: "e",
    qualifier: "vignette",
    schema: import_zod5.z.union([import_zod5.z.string(), import_zod5.z.boolean()]).describe(
      JSON.stringify({
        text: "Applies a vignette effect to an image.",
        url: "https://cloudinary.com/documentation/transformation_reference#e_vignette"
      })
    )
  }
};

// src/plugins/effects.ts
var effectProps = {
  angle: effects.angle.schema.optional(),
  art: effects.art.schema.optional(),
  autoBrightness: effects.autoBrightness.schema.optional(),
  autoColor: effects.autoColor.schema.optional(),
  autoContrast: effects.autoContrast.schema.optional(),
  assistColorblind: effects.assistColorblind.schema.optional(),
  background: effects.background.schema.optional(),
  blackwhite: effects.blackwhite.schema.optional(),
  blur: effects.blur.schema.optional(),
  blurFaces: effects.blurFaces.schema.optional(),
  blurRegion: effects.blurRegion.schema.optional(),
  border: effects.border.schema.optional(),
  brightness: effects.brightness.schema.optional(),
  brightnessHSB: effects.brightnessHSB.schema.optional(),
  cartoonify: effects.cartoonify.schema.optional(),
  color: effects.color.schema.optional(),
  colorize: effects.colorize.schema.optional(),
  contrast: effects.contrast.schema.optional(),
  distort: effects.distort.schema.optional(),
  fillLight: effects.fillLight.schema.optional(),
  gamma: effects.gamma.schema.optional(),
  gradientFade: effects.gradientFade.schema.optional(),
  grayscale: effects.grayscale.schema.optional(),
  improve: effects.improve.schema.optional(),
  loop: effects.loop.schema.optional(),
  multiply: effects.multiply.schema.optional(),
  negate: effects.negate.schema.optional(),
  oilPaint: effects.oilPaint.schema.optional(),
  opacity: effects.opacity.schema.optional(),
  outline: effects.outline.schema.optional(),
  pixelate: effects.pixelate.schema.optional(),
  pixelateFaces: effects.pixelateFaces.schema.optional(),
  pixelateRegion: effects.pixelateRegion.schema.optional(),
  radius: effects.radius.schema.optional(),
  redeye: effects.redeye.schema.optional(),
  replaceColor: effects.replaceColor.schema.optional(),
  saturation: effects.saturation.schema.optional(),
  screen: effects.screen.schema.optional(),
  sepia: effects.sepia.schema.optional(),
  shadow: effects.shadow.schema.optional(),
  sharpen: effects.sharpen.schema.optional(),
  shear: effects.shear.schema.optional(),
  simulateColorblind: effects.simulateColorblind.schema.optional(),
  tint: effects.tint.schema.optional(),
  trim: effects.trim.schema.optional(),
  unsharpMask: effects.unsharpMask.schema.optional(),
  vectorize: effects.vectorize.schema.optional(),
  vibrance: effects.vibrance.schema.optional(),
  vignette: effects.vignette.schema.optional()
};
var effectsProps = {
  effects: import_zod6.z.array(import_zod6.z.object(effectProps)).describe(
    JSON.stringify({
      text: "Array of objects specifying transformations to be applied to asset."
    })
  ).optional(),
  ...effectProps
};
var effectsPlugin = {
  props: effectsProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const transformationStrings = constructTransformationString({
      effects,
      options
    });
    transformationStrings.filter((t) => !!t).forEach((transformation) => cldAsset.effect(transformation));
    if (Array.isArray(options?.effects)) {
      options?.effects.forEach((effectsSet) => {
        const transformationString = constructTransformationString({
          effects,
          options: effectsSet
        }).filter((t) => !!t).join(",");
        cldAsset.effect(transformationString);
      });
    }
    function constructTransformationString({
      effects: effects2,
      options: options2
    }) {
      return Object.keys(effects2).map(
        (key) => {
          const { prefix, qualifier, converters } = effects2[key];
          return constructTransformation({
            qualifier,
            prefix,
            value: options2?.[key],
            converters
          });
        }
      );
    }
    return {};
  }
};

// src/plugins/enhance.ts
var import_zod7 = require("zod");
var enhanceProps = {
  enhance: import_zod7.z.boolean().describe(
    JSON.stringify({
      text: "Uses AI to analyze an image and make adjustments to enhance the appeal of the image.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_enhance"
    })
  ).optional()
};
var enhancePlugin = {
  props: enhanceProps,
  assetTypes: ["image", "images"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { enhance = false } = options;
    if (enhance) {
      cldAsset.effect("e_enhance");
    }
    return {};
  }
};

// src/plugins/extract.ts
var import_zod8 = require("zod");
var extractProps = {
  extract: import_zod8.z.union([
    prompt.schema.optional(),
    import_zod8.z.array(prompt.schema).optional(),
    import_zod8.z.object({
      invert: import_zod8.z.boolean().default(false).optional(),
      mode: extractMode.schema.optional(),
      multiple: multiple.schema.default(false).optional(),
      prompt: import_zod8.z.union([prompt.schema, import_zod8.z.array(prompt.schema)]).optional()
    })
  ]).describe(
    JSON.stringify({
      text: "Extracts an area or multiple areas of an image, described in natural language.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_extract"
    })
  ).optional()
};
var extractPlugin = {
  props: extractProps,
  assetTypes: ["image", "images"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { extract } = options;
    if (!extract || typeof extract === "undefined") return {};
    const properties = [];
    if (typeof extract === "string") {
      properties.push(`prompt_${extract}`);
    } else if (Array.isArray(extract)) {
      properties.push(`prompt_${formatPrompts(extract)}`);
    } else if (typeof extract === "object" && !Array.isArray(extract)) {
      const prompt2 = formatPrompts(extract.prompt);
      if (prompt2) {
        properties.push(`prompt_${prompt2}`);
      }
      if (extract.invert === true) {
        properties.push("invert_true");
      }
      if (typeof extract.mode === "string") {
        properties.push(`mode_${extract.mode}`);
      }
      if (extract.multiple === true) {
        properties.push("multiple_true");
      }
    }
    if (properties.length > 0) {
      const transformation = `e_extract:${properties.join(";")}`;
      cldAsset.addTransformation(transformation);
    }
    return {};
  }
};
function formatPrompts(prompt2) {
  if (typeof prompt2 === "string") return prompt2;
  if (Array.isArray(prompt2)) {
    return `(${prompt2.filter((prompt3) => typeof prompt3 === "string").join(";")})`;
  }
  return void 0;
}

// src/plugins/fill-background.ts
var import_zod9 = require("zod");
var defaultCrop = "pad";
var fillBackgroundProps = {
  fillBackground: import_zod9.z.union([
    import_zod9.z.boolean(),
    import_zod9.z.object({
      crop: crop.schema.optional(),
      gravity: gravity.schema.optional(),
      prompt: import_zod9.z.string().optional()
    })
  ]).describe(
    JSON.stringify({
      text: "Uses Generative Fill to extended padded image with AI",
      url: "https://cloudinary.com/documentation/transformation_reference#b_gen_fill"
    })
  ).optional()
};
var fillBackgroundPlugin = {
  props: fillBackgroundProps,
  assetTypes: ["image", "images"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { fillBackground } = options;
    if (typeof fillBackground === "undefined") return {};
    const width2 = normalizeNumberParameter(options.width);
    const height2 = normalizeNumberParameter(options.height);
    const hasDefinedDimensions = typeof height2 === "number" && typeof width2 === "number";
    let aspectRatio2 = options.aspectRatio;
    if (!aspectRatio2 && hasDefinedDimensions) {
      aspectRatio2 = `${width2}:${height2}`;
    }
    if (!aspectRatio2) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `Could not determine aspect ratio based on available options to use fillBackground. Please specify width and height or an aspect ratio.`
        );
      }
      return {};
    }
    if (fillBackground === true) {
      const properties = [
        "b_gen_fill",
        `ar_${aspectRatio2}`,
        `c_${defaultCrop}`
      ];
      cldAsset.addTransformation(properties.join(","));
    } else if (typeof fillBackground === "object") {
      const { crop: crop2 = defaultCrop, gravity: gravity2, prompt: prompt2 } = fillBackground;
      const properties = [`ar_${aspectRatio2}`, `c_${crop2}`];
      if (typeof prompt2 === "string") {
        properties.unshift(`b_gen_fill:${prompt2}`);
      } else {
        properties.unshift(`b_gen_fill`);
      }
      if (typeof gravity2 === "string") {
        properties.push(`g_${gravity2}`);
      }
      cldAsset.addTransformation(properties.join(","));
    }
    return {};
  }
};

// src/plugins/flags.ts
var { flagsEnum: flagsEnum2 } = parameters_exports;
var flagsProps = {
  flags: flags.schema.optional()
};
var flagsPlugin = {
  props: flagsProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { flags: flags2 = [] } = options;
    if (Array.isArray(flags2) && flags2.length > 0) {
      flags2.forEach((flag) => {
        const { success } = flagsEnum2.safeParse(flag);
        if (!success) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`Invalid flag ${flag}, not applying.`);
          }
          return;
        }
        cldAsset.addFlag(flag);
      });
    } else if (typeof flags2 === "object") {
      Object.entries(flags2).forEach(([qualifier, value]) => {
        const { success } = flagsEnum2.safeParse(qualifier);
        if (!success) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`Invalid flag ${qualifier}, not applying.`);
          }
          return;
        }
        cldAsset.addTransformation(`fl_${qualifier}:${value}`);
      });
    }
    return {};
  }
};

// src/plugins/named-transformations.ts
var import_zod10 = require("zod");
var NamedTransformationSchema = import_zod10.z.string();
var namedTransformationsProps = {
  namedTransformations: import_zod10.z.union([NamedTransformationSchema, import_zod10.z.array(NamedTransformationSchema)]).describe(
    JSON.stringify({
      text: "Named transformations to apply to asset.",
      url: "https://cloudinary.com/documentation/image_transformations#named_transformations"
    })
  ).optional(),
  /**
   * @deprecated use {@link `namedTransformations`} instead
   */
  transformations: import_zod10.z.union([NamedTransformationSchema, import_zod10.z.array(NamedTransformationSchema)]).describe(
    JSON.stringify({
      text: "Deprecated: use namedTransformations instead",
      url: "https://cloudinary.com/documentation/image_transformations#named_transformations"
    })
  ).optional()
};
var namedTransformationsPlugin = {
  props: namedTransformationsProps,
  strict: true,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: ({ cldAsset, options }) => {
    const { transformations, namedTransformations } = options;
    if (transformations && process.env.NODE_ENVIRONMENT === "development") {
      console.warn(
        "The transformations prop is deprecated. Please use namedTransformations instead."
      );
    }
    let _namedTransformations = namedTransformations || transformations || [];
    if (!Array.isArray(_namedTransformations)) {
      _namedTransformations = [_namedTransformations];
    }
    _namedTransformations.forEach((transformation) => {
      cldAsset.addTransformation(`t_${transformation}`);
    });
    return {};
  }
};

// src/plugins/overlays.ts
var import_util3 = require("@cloudinary-util/util");
var import_zod11 = require("zod");
var overlayTextSchema = import_zod11.z.object({
  alignment: import_zod11.z.string().optional(),
  antialias: import_zod11.z.string().optional(),
  border: import_zod11.z.string().optional(),
  color: import_zod11.z.string().optional(),
  fontFamily: import_zod11.z.string().optional(),
  fontSize: import_zod11.z.number().optional(),
  fontStyle: import_zod11.z.union([import_zod11.z.string(), import_zod11.z.number()]).optional(),
  fontWeight: import_zod11.z.string().optional(),
  hinting: import_zod11.z.union([import_zod11.z.string(), import_zod11.z.number()]).optional(),
  letterSpacing: import_zod11.z.union([import_zod11.z.string(), import_zod11.z.number()]).optional(),
  lineSpacing: import_zod11.z.union([import_zod11.z.string(), import_zod11.z.number()]).optional(),
  stroke: import_zod11.z.string().optional(),
  text: import_zod11.z.string()
  // Required if using object format
});
var overlayPositionSchema = import_zod11.z.object({
  angle: angle.schema.optional(),
  gravity: gravity.schema.optional(),
  x: x.schema.optional(),
  y: y.schema.optional()
});
var overlaySchema = import_zod11.z.object({
  appliedEffects: import_zod11.z.array(import_zod11.z.object({})).optional(),
  appliedFlags: flags.schema.optional(),
  effects: import_zod11.z.array(import_zod11.z.object({})).optional(),
  crop: crop.schema.optional(),
  flags: flags.schema.optional(),
  height: height.schema.optional(),
  position: overlayPositionSchema.optional(),
  publicId: import_zod11.z.string().optional(),
  text: import_zod11.z.union([import_zod11.z.string(), overlayTextSchema]).optional(),
  url: import_zod11.z.string().optional(),
  width: width.schema.optional()
});
var DEFAULT_TEXT_OPTIONS = {
  color: "black",
  fontFamily: "Arial",
  fontSize: 200,
  fontWeight: "bold"
};
var overlaysProps = {
  overlay: overlaySchema.describe(
    JSON.stringify({
      text: "Image or text layer that is applied on top of the base image.",
      url: "https://cloudinary.com/documentation/transformation_reference#l_layer"
    })
  ).optional(),
  overlays: import_zod11.z.array(overlaySchema).describe(
    JSON.stringify({
      text: "Image or text layers that are applied on top of the base image.",
      url: "https://cloudinary.com/documentation/transformation_reference#l_layer"
    })
  ).optional(),
  text: import_zod11.z.string().describe(
    JSON.stringify({
      text: "Text to be overlaid on asset.",
      url: "https://cloudinary.com/documentation/image_transformations#transformation_url_structure"
    })
  ).optional()
};
var overlaysPlugin = {
  props: overlaysProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: ({ cldAsset, options }) => {
    const { text: text2, overlays = [] } = options;
    const type = "overlay";
    const typeQualifier = "l";
    if (Array.isArray(overlays)) {
      overlays.forEach(applyOverlay);
    }
    if (typeof text2 === "string") {
      applyOverlay({
        text: Object.assign({}, DEFAULT_TEXT_OPTIONS, {
          text: text2
        })
      });
    } else if (typeof text2 === "object") {
      applyOverlay({
        text: Object.assign({}, DEFAULT_TEXT_OPTIONS, text2)
      });
    }
    function applyOverlay({
      publicId,
      url,
      position: position2,
      text: text3,
      effects: layerEffects = [],
      appliedEffects = [],
      flags: layerFlags = [],
      appliedFlags = [],
      ...options2
    }) {
      const hasPublicId = typeof publicId === "string";
      const hasUrl = typeof url === "string";
      const hasText = typeof text3 === "object" || typeof text3 === "string";
      const hasPosition = typeof position2 === "object";
      if (!hasPublicId && !hasUrl && !hasText) {
        console.warn(`An ${type} is missing Public ID, URL, or Text`);
        return;
      }
      let layerTransformation;
      if (hasText) {
        layerTransformation = `${typeQualifier}_text`;
      } else if (hasPublicId) {
        layerTransformation = `${typeQualifier}_${publicId.replace(
          /\//g,
          ":"
        )}`;
      } else if (hasUrl) {
        layerTransformation = `${typeQualifier}_fetch:${(0, import_util3.encodeBase64)(url)}`;
      }
      const primary2 = [];
      const applied = [];
      Object.keys(options2).forEach((key) => {
        if (!(0, import_util3.objectHasKey)(primary, key)) return;
        const { qualifier, converters } = primary[key];
        const transformation = constructTransformation({
          qualifier,
          value: options2[key],
          converters
        });
        if (transformation) {
          primary2.push(transformation);
        }
      });
      layerEffects.forEach((effect) => {
        Object.keys(effect).forEach((key) => {
          const effectQualifier = primary[key] || effects[key] || position[key];
          if (!effectQualifier) return;
          const { qualifier, prefix, converters } = effectQualifier;
          const transformation = constructTransformation({
            qualifier,
            prefix,
            value: effect[key],
            converters
          });
          if (transformation) {
            primary2.push(transformation);
          }
        });
      });
      appliedEffects.forEach((effect) => {
        Object.keys(effect).forEach((key) => {
          const effectQualifier = primary[key] || effects[key] || position[key];
          if (!effectQualifier) return;
          const { qualifier, prefix, converters } = effectQualifier;
          const transformation = constructTransformation({
            qualifier,
            prefix,
            value: effect[key],
            converters
          });
          if (transformation) {
            applied.push(transformation);
          }
        });
      });
      const activeLayerFlags = Array.isArray(layerFlags) ? layerFlags : [layerFlags];
      activeLayerFlags.forEach((flag) => {
        const { success } = flagsEnum.safeParse(flag);
        if (!success) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`Invalid flag ${flag}, not applying.`);
          }
          return;
        }
        primary2.push(`fl_${flag}`);
      });
      const activeAppliedFlags = Array.isArray(appliedFlags) ? appliedFlags : [appliedFlags];
      activeAppliedFlags.forEach((flag) => {
        const { success } = flagsEnum.safeParse(flag);
        if (!success) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`Invalid flag ${flag}, not applying.`);
          }
          return;
        }
        applied.push(`fl_${flag}`);
      });
      if (hasText) {
        if (typeof text3 === "string") {
          text3 = {
            ...DEFAULT_TEXT_OPTIONS,
            text: text3
          };
        }
        const textTransformations = [];
        if (typeof text3 === "object") {
          const textOptions = Object.keys(text3).filter((key) => (0, import_util3.objectHasKey)(text, key)).map((key) => {
            const value = text3 && (0, import_util3.objectHasKey)(text3, key) && text3[key];
            return {
              ...text[key],
              key,
              value,
              order: text[key].order || 99
            };
          });
          const sortedTextOptions = (0, import_util3.sortByKey)(textOptions, "order");
          for (const textOption of sortedTextOptions) {
            const { key, value, qualifier, location, converters } = textOption;
            let textValue = value;
            converters?.forEach(({ test, convert }) => {
              if (!test(value)) return;
              textValue = convert(value);
            });
            if (location === "primary") {
              primary2.push(`${qualifier}_${textValue}`);
            } else if (qualifier === "self") {
              textTransformations.push(key);
            } else if (qualifier) {
              textTransformations.push(`${qualifier}_${textValue}`);
            } else {
              textTransformations.push(textValue);
            }
          }
        }
        const specialCharacters = {
          ".": "%2E",
          ",": "%2C",
          "/": "%2F"
        };
        let layerText = text3?.text || "";
        if (typeof layerText === "string") {
          Object.keys(specialCharacters)?.forEach((character) => {
            layerText = layerText?.replace(
              character,
              specialCharacters[character]
            );
          });
        }
        layerTransformation = `${layerTransformation}:${textTransformations.join(
          "_"
        )}:${layerText}`;
      }
      if (hasPosition) {
        Object.keys(position2).forEach((key) => {
          if (!(0, import_util3.objectHasKey)(position, key) || !(0, import_util3.objectHasKey)(position2, key))
            return;
          const { qualifier, converters } = position[key];
          const transformation = constructTransformation({
            qualifier,
            value: position2[key],
            converters
          });
          if (transformation) {
            applied.push(transformation);
          }
        });
      }
      if (primary2.length > 0) {
        layerTransformation = `${layerTransformation},${primary2.join(",")}`;
      }
      layerTransformation = `${layerTransformation}/fl_layer_apply,fl_no_overflow`;
      if (applied.length > 0) {
        layerTransformation = `${layerTransformation},${applied.join(",")}`;
      }
      cldAsset.addTransformation(layerTransformation);
    }
    return {};
  }
};

// src/plugins/preserve-transformations.ts
var import_util4 = require("@cloudinary-util/util");
var import_zod12 = require("zod");
var preserveTransformationsProps = {
  preserveTransformations: import_zod12.z.boolean().describe(
    JSON.stringify({
      text: "Preserves transformations from a Cloudinary URL when using using a Cloudinary URL as the asset source (src)."
    })
  ).optional()
};
var preserveTransformationsPlugin = {
  props: preserveTransformationsProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: ({ cldAsset, options }) => {
    const { preserveTransformations = false } = options;
    if (preserveTransformations) {
      try {
        const transformations = (0, import_util4.getTransformations)(options.src).map((t) => t.join(","));
        transformations.flat().forEach((transformation) => {
          cldAsset.addTransformation(transformation);
        });
      } catch (e) {
        console.warn(`Failed to preserve transformations: ${e.message}`);
      }
    }
    return {};
  }
};

// src/plugins/raw-transformations.ts
var import_zod13 = require("zod");
var RawTransformationSchema = import_zod13.z.string();
var rawTransformationsProps = {
  rawTransformations: import_zod13.z.union([RawTransformationSchema, import_zod13.z.array(RawTransformationSchema)]).describe(
    JSON.stringify({
      text: "Array of transformation parameters using the Cloudinary URL API to apply to an asset.",
      url: "https://cloudinary.com/documentation/transformation_reference"
    })
  ).optional()
};
var rawTransformationsPlugin = {
  props: rawTransformationsProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: ({ cldAsset, options }) => {
    let { rawTransformations = [] } = options;
    if (!Array.isArray(rawTransformations)) {
      rawTransformations = [rawTransformations];
    }
    rawTransformations.forEach((transformation) => {
      cldAsset.addTransformation(transformation);
    });
    return {};
  }
};

// src/plugins/recolor.ts
var import_zod14 = require("zod");
var imageOptionsRecolorPromptSchema = import_zod14.z.union([
  import_zod14.z.string(),
  import_zod14.z.array(import_zod14.z.string())
]);
var imageOptionsRecolorSchema = import_zod14.z.object({
  prompt: imageOptionsRecolorPromptSchema.optional(),
  to: import_zod14.z.string().optional(),
  multiple: import_zod14.z.boolean().optional()
});
var recolorProps = {
  recolor: import_zod14.z.union([imageOptionsRecolorPromptSchema, imageOptionsRecolorSchema]).describe(
    JSON.stringify({
      text: "Uses generative AI to recolor parts of your image, maintaining the relative shading.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_gen_recolor"
    })
  ).optional()
};
var recolorPlugin = {
  props: recolorProps,
  assetTypes: ["image", "images"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { recolor } = options;
    const recolorOptions = {
      prompt: void 0,
      "to-color": void 0,
      multiple: void 0
    };
    if (Array.isArray(recolor)) {
      if (Array.isArray(recolor[0])) {
        recolorOptions.prompt = promptArrayToString(recolor[0]);
      } else {
        recolorOptions.prompt = recolor[0];
      }
      if (typeof recolor[1] === "string") {
        recolorOptions["to-color"] = recolor[1];
      }
    } else if (typeof recolor === "object") {
      if (typeof recolor.prompt === "string") {
        recolorOptions.prompt = recolor.prompt;
      } else if (Array.isArray(recolor.prompt)) {
        recolorOptions.prompt = promptArrayToString(recolor.prompt);
      }
      if (typeof recolor.to === "string") {
        recolorOptions["to-color"] = recolor.to;
      }
      if (recolor.multiple === true) {
        recolorOptions.multiple = `true`;
      }
    }
    const transformation = Object.entries(recolorOptions).filter(([, value]) => !!value).map(([key, value]) => `${key}_${value}`).join(";");
    if (transformation) {
      cldAsset.addTransformation(`e_gen_recolor:${transformation}`);
    }
    return {};
  }
};

// src/plugins/remove-background.ts
var import_zod15 = require("zod");
var removeBackgroundProps = {
  removeBackground: import_zod15.z.boolean().describe(
    JSON.stringify({
      text: "Removes the background of an image using the Cloudinary AI Background Removal Add-On (Required).",
      url: "https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon"
    })
  ).optional()
};
var removeBackgroundPlugin = {
  props: removeBackgroundProps,
  assetTypes: ["image", "images"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { removeBackground = false } = options;
    if (removeBackground) {
      cldAsset.effect("e_background_removal");
    }
    return {};
  }
};

// src/plugins/remove.ts
var import_zod16 = require("zod");
var imageOptionsRemovePromptSchema = import_zod16.z.union([
  import_zod16.z.string(),
  import_zod16.z.array(import_zod16.z.string())
]);
var imageOptionsRemoveSchema = import_zod16.z.object({
  prompt: imageOptionsRemovePromptSchema.optional(),
  region: import_zod16.z.union([import_zod16.z.array(import_zod16.z.number()), import_zod16.z.array(import_zod16.z.array(import_zod16.z.number()))]).optional(),
  multiple: import_zod16.z.boolean().optional(),
  removeShadow: import_zod16.z.boolean().optional()
});
var removeProps = {
  remove: import_zod16.z.union([imageOptionsRemovePromptSchema, imageOptionsRemoveSchema]).describe(
    JSON.stringify({
      text: "Applies zooming and/or panning to an image, resulting in a video or animated image.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_zoompan"
    })
  ).optional()
};
var removePlugin = {
  props: removeProps,
  assetTypes: ["image", "images"],
  plugin: ({ cldAsset, options }) => {
    const { remove } = options;
    const removeOptions = {
      prompt: void 0,
      region: void 0,
      multiple: void 0,
      "remove-shadow": void 0
    };
    if (typeof remove === "string") {
      removeOptions.prompt = remove;
    } else if (Array.isArray(remove)) {
      removeOptions.prompt = promptArrayToString(remove);
    } else if (typeof remove === "object") {
      const hasPrompt = typeof remove.prompt === "string" || Array.isArray(remove.prompt);
      const hasRegion = Array.isArray(remove.region);
      if (hasPrompt && hasRegion) {
        throw new Error(
          "Invalid remove options: you can not have both a prompt and a region. More info: https://cloudinary.com/documentation/transformation_reference#e_gen_remove"
        );
      }
      if (typeof remove.prompt === "string") {
        removeOptions.prompt = remove.prompt;
      } else if (Array.isArray(remove.prompt)) {
        removeOptions.prompt = promptArrayToString(remove.prompt);
      }
      if (Array.isArray(remove.region)) {
        removeOptions.region = regionArrayToString(remove.region);
      }
      if (remove.multiple === true) {
        removeOptions.multiple = `true`;
      }
      if (remove.removeShadow === true) {
        removeOptions["remove-shadow"] = `true`;
      }
    }
    const transformation = Object.entries(removeOptions).filter(([, value]) => !!value).map(([key, value]) => `${key}_${value}`).join(";");
    if (transformation) {
      cldAsset.addTransformation(`e_gen_remove:${transformation}`);
    }
    return {};
  }
};
function regionArrayToString(regionArray) {
  const indexes = {
    0: "x",
    1: "y",
    2: "w",
    3: "h"
  };
  const regionString = regionArray.map((region, index) => {
    if (Array.isArray(region)) {
      return regionArrayToString(region);
    }
    const key = indexes[index];
    return `${key}_${region}`;
  }).join(";");
  return `(${regionString})`;
}

// src/plugins/replace-background.ts
var import_zod17 = require("zod");
var replaceBackgroundProps = {
  replaceBackground: import_zod17.z.union([
    import_zod17.z.boolean(),
    import_zod17.z.string(),
    import_zod17.z.object({
      seed: import_zod17.z.number().optional(),
      prompt: import_zod17.z.string().optional()
    })
  ]).describe(
    JSON.stringify({
      text: "Replaces the background of an image with an AI-generated background.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_gen_background_replace"
    })
  ).optional()
};
var replaceBackgroundPlugin = {
  props: replaceBackgroundProps,
  assetTypes: ["image", "images"],
  plugin: (settings) => {
    const { cldAsset, options } = settings;
    const { replaceBackground } = options;
    if (!replaceBackground || typeof replaceBackground === "undefined") return {};
    const properties = [];
    if (typeof replaceBackground === "object") {
      if (typeof replaceBackground.prompt !== "undefined") {
        properties.push(`prompt_${replaceBackground.prompt}`);
      }
      if (typeof replaceBackground.seed === "number") {
        properties.push(`seed_${replaceBackground.seed}`);
      }
    } else if (typeof replaceBackground === "string") {
      properties.push(`prompt_${replaceBackground}`);
    }
    let transformation = "e_gen_background_replace";
    if (properties.length > 0) {
      transformation = `${transformation}:${properties.join(";")}`;
    }
    cldAsset.addTransformation(transformation);
    return {};
  }
};

// src/plugins/replace.ts
var import_zod18 = require("zod");
var replaceProps = {
  replace: import_zod18.z.union([
    import_zod18.z.array(import_zod18.z.string()),
    import_zod18.z.array(import_zod18.z.boolean()),
    import_zod18.z.object({
      to: import_zod18.z.string(),
      from: import_zod18.z.string(),
      preserveGeometry: import_zod18.z.boolean().optional()
    })
  ]).describe(
    JSON.stringify({
      text: "Uses generative AI to replace parts of your image with something else.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_gen_replace"
    })
  ).optional()
};
var replacePlugin = {
  props: replaceProps,
  assetTypes: ["image", "images"],
  plugin: ({ cldAsset, options }) => {
    const { replace = null } = options;
    if (replace) {
      let from, to, preserveGeometry = false;
      if (Array.isArray(replace)) {
        from = replace[0];
        to = replace[1];
        preserveGeometry = replace[2] || false;
      } else {
        from = replace.from;
        to = replace.to;
        preserveGeometry = replace.preserveGeometry || false;
      }
      const properties = [`e_gen_replace:from_${from}`, `to_${to}`];
      if (preserveGeometry) {
        properties.push(`preserve-geometry_${preserveGeometry}`);
      }
      cldAsset.effect(properties.join(";"));
    }
    return {};
  }
};

// src/plugins/restore.ts
var import_zod19 = require("zod");
var restoreProps = {
  restore: import_zod19.z.boolean().describe(
    JSON.stringify({
      text: "Uses generative AI to restore details in poor quality images or images that may have become degraded through repeated processing and compression.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_gen_restore"
    })
  ).optional()
};
var restorePlugin = {
  props: restoreProps,
  assetTypes: ["image", "images"],
  plugin: ({ cldAsset, options }) => {
    const { restore = false } = options;
    if (restore) {
      cldAsset.effect("e_gen_restore");
    }
    return {};
  }
};

// src/plugins/sanitize.ts
var import_zod20 = require("zod");
var sanitizeProps = {
  sanitize: import_zod20.z.boolean().describe(
    JSON.stringify({
      text: "Runs a sanitizer on SVG images.",
      url: "https://cloudinary.com/documentation/transformation_reference#fl_sanitize"
    })
  ).optional()
};
var sanitizePlugin = {
  props: sanitizeProps,
  assetTypes: ["image", "images"],
  plugin: ({ cldAsset, options }) => {
    const { sanitize = true } = options;
    const shouldApplySanitizer = sanitize && (options.format === "svg" || cldAsset.publicID.endsWith(".svg"));
    if (shouldApplySanitizer) {
      cldAsset.effect("fl_sanitize");
    }
    return {};
  }
};

// src/plugins/seo.ts
var import_zod21 = require("zod");
var seoProps = {
  seoSuffix: import_zod21.z.string().describe(
    JSON.stringify({
      text: "Configures the URL to include an SEO-friendly suffix in the URL",
      url: "https://cloudinary.com/documentation/advanced_url_delivery_options#seo_friendly_media_asset_urls"
    })
  ).optional()
};
var seoPlugin = {
  props: seoProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: ({ cldAsset, options }) => {
    const { seoSuffix } = options;
    if (typeof seoSuffix === "string") {
      if (options.deliveryType === "fetch") {
        console.warn(
          "SEO suffix is not supported with a delivery type of fetch"
        );
      } else {
        cldAsset.setSuffix(seoSuffix);
      }
    }
    return {};
  }
};

// src/plugins/underlays.ts
var import_util5 = require("@cloudinary-util/util");
var import_zod22 = require("zod");
var underlayPositionSchema = import_zod22.z.object({
  angle: angle.schema.optional(),
  gravity: gravity.schema.optional(),
  x: x.schema.optional(),
  y: y.schema.optional()
});
var underlaySchema = import_zod22.z.object({
  appliedEffects: import_zod22.z.array(import_zod22.z.object({})).optional(),
  appliedFlags: flags.schema.optional(),
  effects: import_zod22.z.array(import_zod22.z.object({})).optional(),
  crop: crop.schema.optional(),
  flags: flags.schema.optional(),
  height: height.schema.optional(),
  position: underlayPositionSchema.optional(),
  publicId: import_zod22.z.string().optional(),
  type: import_zod22.z.string().optional(),
  url: import_zod22.z.string().optional(),
  width: width.schema.optional()
});
var underlaysProps = {
  underlay: import_zod22.z.string().describe(
    JSON.stringify({
      text: "Public ID of image that is applied under the base image.",
      url: "https://cloudinary.com/documentation/transformation_reference#l_layer"
    })
  ).optional(),
  underlays: import_zod22.z.array(underlaySchema).describe(
    JSON.stringify({
      text: "Image layers that are applied under the base image.",
      url: "https://cloudinary.com/documentation/transformation_reference#l_layer"
    })
  ).optional()
};
var underlaysPlugin = {
  props: underlaysProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: ({ cldAsset, options }) => {
    const { underlay, underlays = [] } = options;
    const typeQualifier = "u";
    if (Array.isArray(underlays)) {
      underlays.forEach(applyUnderlay);
    }
    if (typeof underlay === "string") {
      const underlayOptions = {
        publicId: underlay,
        crop: "fill",
        width: "1.0",
        height: "1.0",
        flags: ["relative"]
      };
      applyUnderlay(underlayOptions);
    }
    function applyUnderlay({
      publicId,
      type,
      position: position2,
      effects: layerEffects = [],
      flags: layerFlags = [],
      appliedFlags = [],
      ...options2
    }) {
      const hasPublicId = typeof publicId === "string";
      const hasPosition = typeof position2 === "object";
      if (!hasPublicId) {
        console.warn(`An ${type} is missing a Public ID`);
        return;
      }
      let layerTransformation = `${typeQualifier}_${publicId.replace(
        /\//g,
        ":"
      )}`;
      const primary2 = [];
      const applied = [];
      Object.keys(options2).forEach((key) => {
        if (!(0, import_util5.objectHasKey)(primary, key)) return;
        const { qualifier } = primary[key];
        primary2.push(`${qualifier}_${options2[key]}`);
      });
      layerEffects.forEach((effect) => {
        Object.keys(effect).forEach((key) => {
          if (!(0, import_util5.objectHasKey)(primary, key)) return;
          const { qualifier } = primary[key];
          primary2.push(`${qualifier}_${effect[key]}`);
        });
      });
      if (hasPosition) {
        Object.keys(position2).forEach(
          (key) => {
            if (!(0, import_util5.objectHasKey)(position, key)) return;
            const { qualifier } = position[key];
            applied.push(`${qualifier}_${position2[key]}`);
          }
        );
      }
      const activeLayerFlags = Array.isArray(layerFlags) ? layerFlags : [layerFlags];
      activeLayerFlags.forEach((flag) => {
        const { success } = flagsEnum.safeParse(flag);
        if (!success) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`Invalid flag ${flag}, not applying.`);
          }
          return;
        }
        primary2.push(`fl_${flag}`);
      });
      const activeAppliedFlags = Array.isArray(appliedFlags) ? appliedFlags : [appliedFlags];
      activeAppliedFlags.forEach((flag) => {
        const { success } = flagsEnum.safeParse(flag);
        if (!success) {
          if (process.env.NODE_ENV === "development") {
            console.warn(`Invalid flag ${flag}, not applying.`);
          }
          return;
        }
        applied.push(`fl_${flag}`);
      });
      layerTransformation = `${layerTransformation},${primary2.join(",")}`;
      layerTransformation = `${layerTransformation}/fl_layer_apply,fl_no_overflow`;
      if (applied.length > 0) {
        layerTransformation = `${layerTransformation},${applied.join(",")}`;
      }
      cldAsset.addTransformation(layerTransformation);
    }
    return {};
  }
};

// src/plugins/zoompan.ts
var import_zod23 = require("zod");
var zoompanProps = {
  zoompan: import_zod23.z.union([
    import_zod23.z.string(),
    import_zod23.z.boolean(),
    import_zod23.z.object({
      loop: effects.loop.schema.optional(),
      options: import_zod23.z.string()
    })
  ]).describe(
    JSON.stringify({
      text: "Applies zooming and/or panning to an image, resulting in a video or animated image.",
      url: "https://cloudinary.com/documentation/transformation_reference#e_zoompan"
    })
  ).optional()
};
var zoompanPlugin = {
  props: zoompanProps,
  assetTypes: ["image", "images"],
  plugin: ({ cldAsset, options }) => {
    const { zoompan = false } = options;
    const overrides = {
      format: void 0
    };
    if (zoompan === true) {
      cldAsset.effect("e_zoompan");
    } else if (typeof zoompan === "string") {
      if (zoompan === "loop") {
        cldAsset.effect("e_zoompan");
        cldAsset.effect("e_loop");
      } else {
        cldAsset.effect(`e_zoompan:${zoompan}`);
      }
    } else if (typeof zoompan === "object") {
      let zoompanEffect = "e_zoompan";
      if (typeof zoompan.options === "string") {
        zoompanEffect = `${zoompanEffect}:${zoompan.options}`;
      }
      cldAsset.effect(zoompanEffect);
      let loopEffect;
      if (zoompan.loop === true) {
        loopEffect = "e_loop";
      } else if (typeof zoompan.loop === "string" || typeof zoompan.loop === "number") {
        loopEffect = `e_loop:${zoompan.loop}`;
      }
      if (loopEffect) {
        cldAsset.effect(loopEffect);
      }
    }
    if (zoompan !== false) {
      overrides.format = "auto:animated";
    }
    return {
      options: overrides
    };
  }
};

// src/types/analytics.ts
var import_zod24 = require("zod");
var analyticsOptionsSchema = import_zod24.z.any();

// src/types/config.ts
var import_zod25 = require("zod");
var configOptionsSchema = import_zod25.z.any();

// src/types/image.ts
var import_zod28 = require("zod");

// src/types/asset.ts
var import_zod27 = require("zod");

// src/plugins/version.ts
var import_zod26 = require("zod");
var versionProps = {
  version: import_zod26.z.union([import_zod26.z.number(), import_zod26.z.string()]).describe(
    JSON.stringify({
      text: "Custom version number to apply to asset URL.",
      url: "https://cloudinary.com/documentation/advanced_url_delivery_options#asset_versions"
    })
  ).optional()
};
var versionPlugin = {
  props: versionProps,
  assetTypes: ["image", "images", "video", "videos"],
  plugin: ({ cldAsset, options }) => {
    const { version } = options;
    if (typeof version === "string" || typeof version === "number") {
      cldAsset.setVersion(`${version}`.replace("v", ""));
    }
    return {};
  }
};

// src/types/asset.ts
var assetOptionsSchema = import_zod27.z.object({
  assetType: import_zod27.z.string().default("image").describe(
    JSON.stringify({
      text: "The type of asset to deliver.",
      url: "https://cloudinary.com/documentation/image_transformations#transformation_url_structure"
    })
  ).optional(),
  deliveryType: import_zod27.z.string().default("upload").describe(
    JSON.stringify({
      text: "Delivery method of the asset.",
      url: "https://cloudinary.com/documentation/image_transformations#delivery_types"
    })
  ).optional(),
  dpr: import_zod27.z.union([import_zod27.z.string(), import_zod27.z.number()]).describe(
    JSON.stringify({
      text: "Delivery method of the asset.",
      url: "https://cloudinary.com/documentation/image_transformations#delivery_types"
    })
  ).optional(),
  format: import_zod27.z.string().default("auto").describe(
    JSON.stringify({
      text: "Converts (if necessary) and delivers an asset in the specified format.",
      url: "https://cloudinary.com/documentation/transformation_reference#f_format"
    })
  ).optional(),
  height: import_zod27.z.union([import_zod27.z.string(), import_zod27.z.number()]).describe(
    JSON.stringify({
      text: "Height of the given asset."
    })
  ).optional(),
  quality: import_zod27.z.union([import_zod27.z.string(), import_zod27.z.number(), import_zod27.z.string()]).default("auto").describe(
    JSON.stringify({
      text: "Quality of the delivered asset",
      url: "https://cloudinary.com/documentation/transformation_reference#q_quality"
    })
  ).optional(),
  src: import_zod27.z.string().describe(
    JSON.stringify({
      text: "Cloudinary Public ID or versioned Cloudinary URL (/v1234/)"
    })
  ),
  strictTransformations: import_zod27.z.boolean().describe(
    JSON.stringify({
      text: "Gives you the ability to have more control over what transformations are permitted to be used from your Cloudinary account.",
      url: "https://cloudinary.com/documentation/control_access_to_media#strict_transformations"
    })
  ).optional(),
  width: import_zod27.z.union([import_zod27.z.string(), import_zod27.z.number()]).describe(
    JSON.stringify({
      text: "Width of the given asset."
    })
  ).optional(),
  // Spreading plugins instead of extend or merge to avoid excessive schema warning
  // https://github.com/microsoft/TypeScript/issues/34933#issuecomment-1772787785
  ...croppingProps,
  ...effectsProps,
  ...flagsProps,
  ...namedTransformationsProps,
  ...overlaysProps,
  ...preserveTransformationsProps,
  ...rawTransformationsProps,
  ...removeBackgroundProps,
  ...sanitizeProps,
  ...seoProps,
  ...underlaysProps,
  ...versionProps
});

// src/types/image.ts
var imageOptionsSchema = assetOptionsSchema.merge(
  import_zod28.z.object({
    // Spreading plugins instead of extend or merge to avoid excessive schema warning
    // https://github.com/microsoft/TypeScript/issues/34933#issuecomment-1772787785
    ...defaultImageProps,
    ...enhanceProps,
    ...extractProps,
    ...fillBackgroundProps,
    ...recolorProps,
    ...removeProps,
    ...replaceProps,
    ...replaceBackgroundProps,
    ...restoreProps,
    ...zoompanProps
  })
);

// src/types/video.ts
var import_zod29 = require("zod");
var videoOptionsSchema = assetOptionsSchema.merge(
  import_zod29.z.object({
    // Spreading plugins instead of extend or merge to avoid excessive schema warning
    // https://github.com/microsoft/TypeScript/issues/34933#issuecomment-1772787785
    ...abrProps
  })
);

// src/lib/cloudinary.ts
var transformationPlugins = [
  // Some features *must* be the first transformation applied
  // thus their plugins *must* come first in the chain
  enhancePlugin,
  extractPlugin,
  recolorPlugin,
  removeBackgroundPlugin,
  removePlugin,
  replacePlugin,
  replaceBackgroundPlugin,
  restorePlugin,
  // Cropping needs to be before any other general transformations
  // as it provides the option of 2-step resizing where someone
  // can resize the "base" canvas as well as the final resize
  // mechanism commonly used for responsive resizing
  croppingPlugin,
  // Raw transformations should always come before
  // other arguments to avoid conflicting with
  // added options via the component
  preserveTransformationsPlugin,
  rawTransformationsPlugin,
  abrPlugin,
  defaultImagePlugin,
  effectsPlugin,
  fillBackgroundPlugin,
  flagsPlugin,
  overlaysPlugin,
  sanitizePlugin,
  namedTransformationsPlugin,
  seoPlugin,
  underlaysPlugin,
  versionPlugin,
  zoompanPlugin
];
var constructUrlOptionsSchema = import_zod30.z.union([imageOptionsSchema, videoOptionsSchema]).describe(
  JSON.stringify({
    text: "Asset options (Image or Video) that define delivery URL including public ID and transformations.",
    path: "/url-loader/assetoptions"
  })
);
var constructUrlPropsSchema = import_zod30.z.object({
  analytics: import_zod30.z.union([analyticsOptionsSchema, import_zod30.z.boolean()]).describe(
    JSON.stringify({
      text: "Tech, dependency, and feature identifiers for tracking SDK usage related to Cloudinary.",
      path: "/url-loader/analyticsoptions"
    })
  ).optional(),
  config: configOptionsSchema.describe(
    JSON.stringify({
      text: "Configuration parameters for environment and Cloudinary account.",
      url: "https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters",
      path: "/url-loader/analyticsoptions"
    })
  ).optional(),
  options: constructUrlOptionsSchema
});
function constructCloudinaryUrl({
  options,
  config = {},
  analytics
}) {
  if (analytics === false) {
    if (typeof config?.url === "undefined") {
      config.url = {};
    }
    config.url.analytics = false;
  }
  const cld = new import_url_gen.Cloudinary(config);
  if (typeof options?.src !== "string") {
    throw Error(
      `Failed to construct Cloudinary URL: Missing source (src) in options.`
    );
  }
  if (!options?.assetType) {
    options.assetType = "image";
  }
  const propsCheck = [];
  transformationPlugins.forEach(({ props }) => {
    const pluginProps = Object.keys(props);
    pluginProps.forEach((prop) => {
      if (propsCheck.includes(prop)) {
        throw new Error(`Option ${prop} already exists!`);
      }
      propsCheck.push(prop);
    });
  });
  const parsedOptions = {};
  let publicId;
  if (typeof options.src === "string" && /^https?:\/\//.test(options.src)) {
    try {
      const parts = (0, import_util6.parseUrl)(options.src);
      publicId = parts?.publicId;
      parsedOptions.seoSuffix = parts?.seoSuffix;
      parsedOptions.version = parts?.version;
    } catch (e) {
    }
  }
  if (!publicId) {
    publicId = options.src;
  }
  Object.keys(parsedOptions).forEach(
    (key) => {
      if ((0, import_util6.objectHasKey)(options, key)) return;
      options[key] = parsedOptions[key];
    }
  );
  options.version ?? (options.version = 1);
  let cldAsset = void 0;
  if (["image", "images"].includes(options.assetType)) {
    cldAsset = cld.image(publicId);
  } else if (["video", "videos"].includes(options.assetType)) {
    cldAsset = cld.video(publicId);
  }
  if (typeof cldAsset === "undefined") {
    throw new Error("Invalid asset type.");
  }
  const pluginEffects = {};
  transformationPlugins.forEach(
    ({ plugin, assetTypes, props, strict }) => {
      const supportedAssetType = options?.assetType !== void 0 && assetTypes.includes(options.assetType);
      const pluginProps = Object.keys(props);
      const optionsKeys = Object.keys(options);
      const attemptedUse = pluginProps.map((prop) => optionsKeys.includes(prop)).filter((isUsed) => !!isUsed).length > 0;
      if (!supportedAssetType) {
        if (attemptedUse) {
          console.warn(
            `One of the following props [${pluginProps.join(
              ", "
            )}] was used with an unsupported asset type [${options?.assetType}]`
          );
        }
        return;
      }
      if (options.strictTransformations && !strict) {
        if (attemptedUse) {
          console.warn(
            `One of the following props [${pluginProps.join(
              ", "
            )}] was used that is not supported with Strict Transformations.`
          );
        }
        return;
      }
      const results = plugin({
        cldAsset,
        options
      });
      const { options: pluginOptions } = results || { options: void 0 };
      Object.assign(pluginEffects, pluginOptions);
    }
  );
  if (typeof pluginEffects.resize === "string") {
    cldAsset.addTransformation(pluginEffects.resize);
  }
  cldAsset.setDeliveryType(options?.deliveryType || "upload");
  if (!options.strictTransformations) {
    if (options?.dpr) {
      let dpr = options.dpr;
      if (typeof dpr === "number") {
        dpr = dpr.toFixed(1);
      }
      cldAsset.addTransformation(`dpr_${dpr}`);
    }
    const defaultFormat = options?.format === "default";
    const rawContainsFormat = searchAssetRawTransformations("f_", cldAsset, {
      matchType: "startsWith"
    });
    const rawContainsFormatAndExplicit = rawContainsFormat && typeof options?.format !== "undefined";
    if (pluginEffects?.format || !defaultFormat && (!rawContainsFormat || rawContainsFormatAndExplicit)) {
      cldAsset.format(options?.format || pluginEffects?.format || "auto");
    }
    const defaultQuality = options?.quality === "default";
    const rawContainsQuality = searchAssetRawTransformations("q_", cldAsset, {
      matchType: "startsWith"
    });
    const rawContainsQualityAndExplicit = rawContainsQuality && typeof options?.quality !== "undefined";
    if (!defaultQuality && (!rawContainsQuality || rawContainsQualityAndExplicit)) {
      cldAsset.quality(options?.quality || "auto");
    }
  }
  return cldAsset.toURL({
    trackedAnalytics: analytics
  });
}
function searchAssetRawTransformations(query, asset, options) {
  if (typeof asset.transformation === "undefined") return;
  const { matchType = "includes" } = options || {};
  const transformations = asset.transformation.actions.flatMap(
    (transformation) => {
      return transformation.toString().split("/").flatMap((seg) => seg.split(","));
    }
  );
  const matches = transformations.filter((transformation) => {
    if (matchType === "startsWith") {
      return transformation.startsWith(query);
    } else {
      return transformation.includes(query);
    }
  });
  return matches.length > 0;
}

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
var import_util7 = require("@cloudinary-util/util");
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
      const parts = (0, import_util7.parseUrl)(src);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
