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

// src/schema.ts
var schema_exports = {};
__export(schema_exports, {
  assetOptionsSchema: () => assetOptionsSchema,
  constructUrlPropsSchema: () => constructUrlPropsSchema,
  imageOptionsSchema: () => imageOptionsSchema,
  videoOptionsSchema: () => videoOptionsSchema
});
module.exports = __toCommonJS(schema_exports);

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

// src/plugins/cropping.ts
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

// src/plugins/fill-background.ts
var import_zod9 = require("zod");
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

// src/plugins/flags.ts
var { flagsEnum: flagsEnum2 } = parameters_exports;
var flagsProps = {
  flags: flags.schema.optional()
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assetOptionsSchema,
  constructUrlPropsSchema,
  imageOptionsSchema,
  videoOptionsSchema
});
