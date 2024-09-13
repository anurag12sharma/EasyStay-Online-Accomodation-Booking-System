import { C as ConfigOptions, a as ConstructUrlProps } from './schema-_7VfaAhu.cjs';
export { A as AnalyticsOptions, d as AssetOptions, b as CloudinaryAnalyticsOptions, e as CloudinaryConfigurationOptions, I as ImageOptions, P as PluginOptions, f as PluginResults, g as PluginSettings, V as VideoOptions, c as constructCloudinaryUrl, t as transformationPlugins } from './schema-_7VfaAhu.cjs';
import { CloudinaryUploadWidgetOptions, CloudinaryUploadWidgetResults, CloudinaryUploadWidgetError, CloudinaryVideoPlayerOptions, CloudinaryVideoPlayerOptionsLogo } from '@cloudinary-util/types';
import { testColorIsHex, convertColorHexToRgb } from '@cloudinary-util/util';
import { z } from 'zod';
import '@cloudinary/url-gen/sdkAnalytics/interfaces/IAnalyticsOptions';

/**
 * getUploadWidgetOptions
 */
interface GetUploadWidgetOptions extends CloudinaryUploadWidgetOptions {
    uploadSignature?: CloudinaryUploadWidgetOptions["uploadSignature"];
}
declare function getUploadWidgetOptions({ uploadSignature, ...options }: GetUploadWidgetOptions, config: ConfigOptions): CloudinaryUploadWidgetOptions;
/**
 * generateUploadWidgetResultCallback
 */
type CloudinaryUploadWidgetResultCallback = (results: CloudinaryUploadWidgetResults) => void;
type CloudinaryUploadWidgetErrorCallback = (error: CloudinaryUploadWidgetError, results: CloudinaryUploadWidgetResults) => void;
interface GenerateUploadWidgetResultCallback {
    onOpen?: CloudinaryUploadWidgetResultCallback;
    /**
     * @deprecated use onSuccess instead
     */
    onUpload?: CloudinaryUploadWidgetResultCallback;
    onAbort?: CloudinaryUploadWidgetResultCallback;
    onBatchCancelled?: CloudinaryUploadWidgetResultCallback;
    onClose?: CloudinaryUploadWidgetResultCallback;
    onDisplayChanged?: CloudinaryUploadWidgetResultCallback;
    onPublicId?: CloudinaryUploadWidgetResultCallback;
    onQueuesEnd?: CloudinaryUploadWidgetResultCallback;
    onQueuesStart?: CloudinaryUploadWidgetResultCallback;
    onRetry?: CloudinaryUploadWidgetResultCallback;
    onShowCompleted?: CloudinaryUploadWidgetResultCallback;
    onSourceChanged?: CloudinaryUploadWidgetResultCallback;
    onSuccess?: CloudinaryUploadWidgetResultCallback;
    onTags?: CloudinaryUploadWidgetResultCallback;
    onUploadAdded?: CloudinaryUploadWidgetResultCallback;
    onError: CloudinaryUploadWidgetErrorCallback;
    onResult: CloudinaryUploadWidgetResultCallback;
}
declare const UPLOAD_WIDGET_EVENTS: {
    [key: string]: string;
};
declare function generateUploadWidgetResultCallback(options: GenerateUploadWidgetResultCallback): (error: CloudinaryUploadWidgetError, uploadResult: CloudinaryUploadWidgetResults) => void;

/**
 * generateSignature
 * @description Makes a request to an endpoint to sign Cloudinary parameters as part of widget creation
 */
interface GenerateSignatureCallback {
    fetch: Function;
    signatureEndpoint: string;
}
declare function generateSignatureCallback({ signatureEndpoint, fetch: fetcher }: GenerateSignatureCallback): CloudinaryUploadWidgetOptions["uploadSignature"];

/**
 * getVideoPlayerOptions
 */
type GetVideoPlayerOptions = Omit<CloudinaryVideoPlayerOptions, "cloud_name" | "autoplayMode" | "publicId" | "secure" | "showLogo" | "logoImageUrl" | "logoOnclickUrl"> & {
    logo?: boolean | GetVideoPlayerOptionsLogo;
    poster?: string | ConstructUrlProps["options"];
    src: string;
    quality?: string | number;
};
interface GetVideoPlayerOptionsLogo {
    imageUrl?: CloudinaryVideoPlayerOptionsLogo["logoImageUrl"];
    logo?: boolean;
    onClickUrl?: CloudinaryVideoPlayerOptionsLogo["logoOnclickUrl"];
}
declare function getVideoPlayerOptions(options: GetVideoPlayerOptions, config: ConfigOptions): CloudinaryVideoPlayerOptions;

declare const qualifierConvertersSchema: z.ZodObject<{
    convert: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
    test: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    convert: (args_0: any, ...args_1: unknown[]) => any;
    test: (args_0: any, ...args_1: unknown[]) => boolean;
}, {
    convert: (args_0: any, ...args_1: unknown[]) => any;
    test: (args_0: any, ...args_1: unknown[]) => boolean;
}>;
type QualiferConverters = z.infer<typeof qualifierConvertersSchema>;
declare const qualifierSchema: z.ZodObject<{
    location: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodNumber>;
    prefix: z.ZodOptional<z.ZodString>;
    qualifier: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    converters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        convert: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodAny>;
        test: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        convert: (args_0: any, ...args_1: unknown[]) => any;
        test: (args_0: any, ...args_1: unknown[]) => boolean;
    }, {
        convert: (args_0: any, ...args_1: unknown[]) => any;
        test: (args_0: any, ...args_1: unknown[]) => boolean;
    }>, "many">>;
    schema: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    location?: string | undefined;
    order?: number | undefined;
    prefix?: string | undefined;
    qualifier?: string | boolean | undefined;
    converters?: {
        convert: (args_0: any, ...args_1: unknown[]) => any;
        test: (args_0: any, ...args_1: unknown[]) => boolean;
    }[] | undefined;
    schema?: any;
}, {
    location?: string | undefined;
    order?: number | undefined;
    prefix?: string | undefined;
    qualifier?: string | boolean | undefined;
    converters?: {
        convert: (args_0: any, ...args_1: unknown[]) => any;
        test: (args_0: any, ...args_1: unknown[]) => boolean;
    }[] | undefined;
    schema?: any;
}>;
type Qualifier = z.infer<typeof qualifierSchema>;

declare const primary: Record<string, Qualifier>;
declare const position: Record<string, Qualifier>;
declare const text: Record<string, Qualifier>;
declare const effects: {
    readonly angle: {
        qualifier: string;
        schema: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    };
    readonly art: {
        readonly prefix: "e";
        readonly qualifier: "art";
        readonly schema: z.ZodString;
    };
    readonly autoBrightness: {
        readonly prefix: "e";
        readonly qualifier: "auto_brightness";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly autoColor: {
        readonly prefix: "e";
        readonly qualifier: "auto_color";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly autoContrast: {
        readonly prefix: "e";
        readonly qualifier: "auto_contrast";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly assistColorblind: {
        readonly prefix: "e";
        readonly qualifier: "assist_colorblind";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly background: {
        readonly qualifier: "b";
        readonly schema: z.ZodString;
    };
    readonly blackwhite: {
        readonly prefix: "e";
        readonly qualifier: "blackwhite";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly blur: {
        readonly prefix: "e";
        readonly qualifier: "blur";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly blurFaces: {
        readonly prefix: "e";
        readonly qualifier: "blur_faces";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly blurRegion: {
        readonly prefix: "e";
        readonly qualifier: "blur_region";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly border: {
        readonly qualifier: "bo";
        readonly schema: z.ZodString;
    };
    readonly brightness: {
        readonly prefix: "e";
        readonly qualifier: "brightness";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly brightnessHSB: {
        readonly prefix: "e";
        readonly qualifier: "brightness_hsb";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly cartoonify: {
        readonly prefix: "e";
        readonly qualifier: "cartoonify";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly color: {
        readonly qualifier: "co";
        readonly schema: z.ZodString;
        readonly converters: {
            test: typeof testColorIsHex;
            convert: typeof convertColorHexToRgb;
        }[];
    };
    readonly colorize: {
        readonly prefix: "e";
        readonly qualifier: "colorize";
        readonly schema: z.ZodString;
    };
    readonly contrast: {
        readonly prefix: "e";
        readonly qualifier: "contrast";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly displace: {
        readonly prefix: "e";
        readonly qualifier: "distort";
        readonly schema: z.ZodString;
    };
    readonly distort: {
        readonly prefix: "e";
        readonly qualifier: "distort";
        readonly schema: z.ZodString;
    };
    readonly fillLight: {
        readonly prefix: "e";
        readonly qualifier: "fill_light";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly gamma: {
        readonly prefix: "e";
        readonly qualifier: "gamma";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly gradientFade: {
        readonly prefix: "e";
        readonly qualifier: "gradient_fade";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly grayscale: {
        readonly prefix: "e";
        readonly qualifier: "grayscale";
        readonly schema: z.ZodBoolean;
    };
    readonly hue: {
        readonly prefix: "e";
        readonly qualifier: "hue";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly improve: {
        readonly prefix: "e";
        readonly qualifier: "improve";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly loop: {
        readonly prefix: "e";
        readonly qualifier: "loop";
        readonly schema: z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>;
    };
    readonly multiply: {
        readonly prefix: "e";
        readonly qualifier: "multiply";
        readonly schema: z.ZodBoolean;
    };
    readonly negate: {
        readonly prefix: "e";
        readonly qualifier: "negate";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly noise: {
        readonly prefix: "e";
        readonly qualifier: "noise";
        readonly schema: z.ZodBoolean;
    };
    readonly oilPaint: {
        readonly prefix: "e";
        readonly qualifier: "oil_paint";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly opacity: {
        readonly qualifier: "o";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    };
    readonly outline: {
        readonly prefix: "e";
        readonly qualifier: "outline";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly pixelate: {
        readonly prefix: "e";
        readonly qualifier: "pixelate";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly pixelateFaces: {
        readonly prefix: "e";
        readonly qualifier: "pixelate_faces";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly pixelateRegion: {
        readonly prefix: "e";
        readonly qualifier: "pixelate_region";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly radius: {
        readonly qualifier: "r";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    };
    readonly redeye: {
        readonly prefix: "e";
        readonly qualifier: "redeye";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly replaceColor: {
        readonly prefix: "e";
        readonly qualifier: "replace_color";
        readonly schema: z.ZodString;
    };
    readonly saturation: {
        readonly prefix: "e";
        readonly qualifier: "saturation";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly screen: {
        readonly prefix: "e";
        readonly qualifier: "screen";
        readonly schema: z.ZodBoolean;
    };
    readonly sepia: {
        readonly prefix: "e";
        readonly qualifier: "sepia";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly shadow: {
        readonly prefix: "e";
        readonly qualifier: "shadow";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly sharpen: {
        readonly prefix: "e";
        readonly qualifier: "sharpen";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly shear: {
        readonly prefix: "e";
        readonly qualifier: "shear";
        readonly schema: z.ZodString;
    };
    readonly simulateColorblind: {
        readonly prefix: "e";
        readonly qualifier: "simulate_colorblind";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly tint: {
        readonly prefix: "e";
        readonly qualifier: "tint";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly trim: {
        readonly prefix: "e";
        readonly qualifier: "trim";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly unsharpMask: {
        readonly prefix: "e";
        readonly qualifier: "unsharp_mask";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly vectorize: {
        readonly prefix: "e";
        readonly qualifier: "vectorize";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly vibrance: {
        readonly prefix: "e";
        readonly qualifier: "vibrance";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
    readonly vignette: {
        readonly prefix: "e";
        readonly qualifier: "vignette";
        readonly schema: z.ZodUnion<[z.ZodString, z.ZodBoolean]>;
    };
};

export { type CloudinaryUploadWidgetErrorCallback, type CloudinaryUploadWidgetResultCallback, ConfigOptions, ConstructUrlProps, type GenerateSignatureCallback, type GenerateUploadWidgetResultCallback, type GetUploadWidgetOptions, type GetVideoPlayerOptions, type GetVideoPlayerOptionsLogo, type QualiferConverters, type Qualifier, UPLOAD_WIDGET_EVENTS, effects, generateSignatureCallback, generateUploadWidgetResultCallback, getUploadWidgetOptions, getVideoPlayerOptions, position, primary, text };
