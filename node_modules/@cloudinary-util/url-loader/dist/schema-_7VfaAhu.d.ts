import { CloudinaryAssetConfiguration } from '@cloudinary-util/types';
import { z } from 'zod';
import { IAnalyticsOptions } from '@cloudinary/url-gen/sdkAnalytics/interfaces/IAnalyticsOptions';

interface CloudinaryConfigurationOptions extends CloudinaryAssetConfiguration {
}
declare const configOptionsSchema: z.ZodType<CloudinaryConfigurationOptions>;
type ConfigOptions = z.TypeOf<typeof configOptionsSchema>;

interface CloudinaryAnalyticsOptions extends IAnalyticsOptions {
}
declare const analyticsOptionsSchema: z.ZodType<CloudinaryAnalyticsOptions>;
type AnalyticsOptions = z.TypeOf<typeof analyticsOptionsSchema> | false;

declare const assetOptionsSchema: z.ZodObject<{
    version: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    underlay: z.ZodOptional<z.ZodString>;
    underlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>, "many">>;
    seoSuffix: z.ZodOptional<z.ZodString>;
    sanitize: z.ZodOptional<z.ZodBoolean>;
    removeBackground: z.ZodOptional<z.ZodBoolean>;
    rawTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    preserveTransformations: z.ZodOptional<z.ZodBoolean>;
    overlay: z.ZodOptional<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
            alignment: z.ZodOptional<z.ZodString>;
            antialias: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodString>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            fontWeight: z.ZodOptional<z.ZodString>;
            hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            stroke: z.ZodOptional<z.ZodString>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }>]>>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>>;
    overlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
            alignment: z.ZodOptional<z.ZodString>;
            antialias: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodString>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            fontWeight: z.ZodOptional<z.ZodString>;
            hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            stroke: z.ZodOptional<z.ZodString>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }>]>>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>, "many">>;
    text: z.ZodOptional<z.ZodString>;
    namedTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    transformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
    angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    art: z.ZodOptional<z.ZodString>;
    autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    background: z.ZodOptional<z.ZodString>;
    blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    border: z.ZodOptional<z.ZodString>;
    brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    color: z.ZodOptional<z.ZodString>;
    colorize: z.ZodOptional<z.ZodString>;
    contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    distort: z.ZodOptional<z.ZodString>;
    fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    grayscale: z.ZodOptional<z.ZodBoolean>;
    improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
    multiply: z.ZodOptional<z.ZodBoolean>;
    negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    replaceColor: z.ZodOptional<z.ZodString>;
    saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    screen: z.ZodOptional<z.ZodBoolean>;
    sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    shear: z.ZodOptional<z.ZodString>;
    simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        art: z.ZodOptional<z.ZodString>;
        autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        background: z.ZodOptional<z.ZodString>;
        blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        border: z.ZodOptional<z.ZodString>;
        brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        color: z.ZodOptional<z.ZodString>;
        colorize: z.ZodOptional<z.ZodString>;
        contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        distort: z.ZodOptional<z.ZodString>;
        fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        grayscale: z.ZodOptional<z.ZodBoolean>;
        improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
        multiply: z.ZodOptional<z.ZodBoolean>;
        negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        replaceColor: z.ZodOptional<z.ZodString>;
        saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        screen: z.ZodOptional<z.ZodBoolean>;
        sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shear: z.ZodOptional<z.ZodString>;
        simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    }, "strip", z.ZodTypeAny, {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }, {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }>, "many">>;
    aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
    crop: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>, z.ZodObject<{
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        zoom: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }>, z.ZodArray<z.ZodObject<{
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        zoom: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }>, "many">]>>>;
    gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
    zoom: z.ZodOptional<z.ZodString>;
    assetType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    deliveryType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    dpr: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    format: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    height: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    quality: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodString]>>>;
    src: z.ZodString;
    strictTransformations: z.ZodOptional<z.ZodBoolean>;
    width: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "strip", z.ZodTypeAny, {
    src: string;
    version?: string | number | undefined;
    underlay?: string | undefined;
    underlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    seoSuffix?: string | undefined;
    sanitize?: boolean | undefined;
    removeBackground?: boolean | undefined;
    rawTransformations?: string | string[] | undefined;
    preserveTransformations?: boolean | undefined;
    overlay?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    } | undefined;
    overlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    text?: string | undefined;
    namedTransformations?: string | string[] | undefined;
    transformations?: string | string[] | undefined;
    flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
    angle?: string | number | undefined;
    art?: string | undefined;
    autoBrightness?: string | boolean | undefined;
    autoColor?: string | boolean | undefined;
    autoContrast?: string | boolean | undefined;
    assistColorblind?: string | boolean | undefined;
    background?: string | undefined;
    blackwhite?: string | boolean | undefined;
    blur?: string | boolean | undefined;
    blurFaces?: string | boolean | undefined;
    blurRegion?: string | boolean | undefined;
    border?: string | undefined;
    brightness?: string | boolean | undefined;
    brightnessHSB?: string | boolean | undefined;
    cartoonify?: string | boolean | undefined;
    color?: string | undefined;
    colorize?: string | undefined;
    contrast?: string | boolean | undefined;
    distort?: string | undefined;
    fillLight?: string | boolean | undefined;
    gamma?: string | boolean | undefined;
    gradientFade?: string | boolean | undefined;
    grayscale?: boolean | undefined;
    improve?: string | boolean | undefined;
    loop?: string | number | boolean | undefined;
    multiply?: boolean | undefined;
    negate?: string | boolean | undefined;
    oilPaint?: string | boolean | undefined;
    opacity?: string | number | undefined;
    outline?: string | boolean | undefined;
    pixelate?: string | boolean | undefined;
    pixelateFaces?: string | boolean | undefined;
    pixelateRegion?: string | boolean | undefined;
    radius?: string | number | undefined;
    redeye?: string | boolean | undefined;
    replaceColor?: string | undefined;
    saturation?: string | boolean | undefined;
    screen?: boolean | undefined;
    sepia?: string | boolean | undefined;
    shadow?: string | boolean | undefined;
    sharpen?: string | boolean | undefined;
    shear?: string | undefined;
    simulateColorblind?: string | boolean | undefined;
    tint?: string | boolean | undefined;
    trim?: string | boolean | undefined;
    unsharpMask?: string | boolean | undefined;
    vectorize?: string | boolean | undefined;
    vibrance?: string | boolean | undefined;
    vignette?: string | boolean | undefined;
    effects?: {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }[] | undefined;
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
    crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    } | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }[] | undefined;
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
    zoom?: string | undefined;
    assetType?: string | undefined;
    deliveryType?: string | undefined;
    dpr?: string | number | undefined;
    format?: string | undefined;
    height?: string | number | undefined;
    quality?: string | number | undefined;
    strictTransformations?: boolean | undefined;
    width?: string | number | undefined;
}, {
    src: string;
    version?: string | number | undefined;
    underlay?: string | undefined;
    underlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    seoSuffix?: string | undefined;
    sanitize?: boolean | undefined;
    removeBackground?: boolean | undefined;
    rawTransformations?: string | string[] | undefined;
    preserveTransformations?: boolean | undefined;
    overlay?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    } | undefined;
    overlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    text?: string | undefined;
    namedTransformations?: string | string[] | undefined;
    transformations?: string | string[] | undefined;
    flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
    angle?: string | number | undefined;
    art?: string | undefined;
    autoBrightness?: string | boolean | undefined;
    autoColor?: string | boolean | undefined;
    autoContrast?: string | boolean | undefined;
    assistColorblind?: string | boolean | undefined;
    background?: string | undefined;
    blackwhite?: string | boolean | undefined;
    blur?: string | boolean | undefined;
    blurFaces?: string | boolean | undefined;
    blurRegion?: string | boolean | undefined;
    border?: string | undefined;
    brightness?: string | boolean | undefined;
    brightnessHSB?: string | boolean | undefined;
    cartoonify?: string | boolean | undefined;
    color?: string | undefined;
    colorize?: string | undefined;
    contrast?: string | boolean | undefined;
    distort?: string | undefined;
    fillLight?: string | boolean | undefined;
    gamma?: string | boolean | undefined;
    gradientFade?: string | boolean | undefined;
    grayscale?: boolean | undefined;
    improve?: string | boolean | undefined;
    loop?: string | number | boolean | undefined;
    multiply?: boolean | undefined;
    negate?: string | boolean | undefined;
    oilPaint?: string | boolean | undefined;
    opacity?: string | number | undefined;
    outline?: string | boolean | undefined;
    pixelate?: string | boolean | undefined;
    pixelateFaces?: string | boolean | undefined;
    pixelateRegion?: string | boolean | undefined;
    radius?: string | number | undefined;
    redeye?: string | boolean | undefined;
    replaceColor?: string | undefined;
    saturation?: string | boolean | undefined;
    screen?: boolean | undefined;
    sepia?: string | boolean | undefined;
    shadow?: string | boolean | undefined;
    sharpen?: string | boolean | undefined;
    shear?: string | undefined;
    simulateColorblind?: string | boolean | undefined;
    tint?: string | boolean | undefined;
    trim?: string | boolean | undefined;
    unsharpMask?: string | boolean | undefined;
    vectorize?: string | boolean | undefined;
    vibrance?: string | boolean | undefined;
    vignette?: string | boolean | undefined;
    effects?: {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }[] | undefined;
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
    crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    } | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }[] | undefined;
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
    zoom?: string | undefined;
    assetType?: string | undefined;
    deliveryType?: string | undefined;
    dpr?: string | number | undefined;
    format?: string | undefined;
    height?: string | number | undefined;
    quality?: string | number | undefined;
    strictTransformations?: boolean | undefined;
    width?: string | number | undefined;
}>;
type _AssetOptions = z.infer<typeof assetOptionsSchema>;
interface AssetOptions extends _AssetOptions {
}

declare const imageOptionsSchema: z.ZodObject<{
    crop: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>, z.ZodObject<{
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        zoom: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }>, z.ZodArray<z.ZodObject<{
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        zoom: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }>, "many">]>>>;
    sanitize: z.ZodOptional<z.ZodBoolean>;
    aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
    gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
    height: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    width: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    zoom: z.ZodOptional<z.ZodString>;
    assetType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    deliveryType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    dpr: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    format: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    quality: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodString]>>>;
    src: z.ZodString;
    strictTransformations: z.ZodOptional<z.ZodBoolean>;
    art: z.ZodOptional<z.ZodString>;
    blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    colorize: z.ZodOptional<z.ZodString>;
    contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    distort: z.ZodOptional<z.ZodString>;
    gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    grayscale: z.ZodOptional<z.ZodBoolean>;
    improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
    multiply: z.ZodOptional<z.ZodBoolean>;
    negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    screen: z.ZodOptional<z.ZodBoolean>;
    sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    shear: z.ZodOptional<z.ZodString>;
    tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    background: z.ZodOptional<z.ZodString>;
    blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    border: z.ZodOptional<z.ZodString>;
    brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    color: z.ZodOptional<z.ZodString>;
    fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    replaceColor: z.ZodOptional<z.ZodString>;
    simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        art: z.ZodOptional<z.ZodString>;
        autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        background: z.ZodOptional<z.ZodString>;
        blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        border: z.ZodOptional<z.ZodString>;
        brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        color: z.ZodOptional<z.ZodString>;
        colorize: z.ZodOptional<z.ZodString>;
        contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        distort: z.ZodOptional<z.ZodString>;
        fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        grayscale: z.ZodOptional<z.ZodBoolean>;
        improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
        multiply: z.ZodOptional<z.ZodBoolean>;
        negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        replaceColor: z.ZodOptional<z.ZodString>;
        saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        screen: z.ZodOptional<z.ZodBoolean>;
        sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shear: z.ZodOptional<z.ZodString>;
        simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    }, "strip", z.ZodTypeAny, {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }, {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }>, "many">>;
    flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
    text: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    underlay: z.ZodOptional<z.ZodString>;
    underlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>, "many">>;
    seoSuffix: z.ZodOptional<z.ZodString>;
    removeBackground: z.ZodOptional<z.ZodBoolean>;
    rawTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    preserveTransformations: z.ZodOptional<z.ZodBoolean>;
    overlay: z.ZodOptional<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
            alignment: z.ZodOptional<z.ZodString>;
            antialias: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodString>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            fontWeight: z.ZodOptional<z.ZodString>;
            hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            stroke: z.ZodOptional<z.ZodString>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }>]>>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>>;
    overlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
            alignment: z.ZodOptional<z.ZodString>;
            antialias: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodString>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            fontWeight: z.ZodOptional<z.ZodString>;
            hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            stroke: z.ZodOptional<z.ZodString>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }>]>>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>, "many">>;
    namedTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    transformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    zoompan: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean, z.ZodObject<{
        loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
        options: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        options: string;
        loop?: string | number | boolean | undefined;
    }, {
        options: string;
        loop?: string | number | boolean | undefined;
    }>]>>;
    restore: z.ZodOptional<z.ZodBoolean>;
    replaceBackground: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString, z.ZodObject<{
        seed: z.ZodOptional<z.ZodNumber>;
        prompt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        seed?: number | undefined;
        prompt?: string | undefined;
    }, {
        seed?: number | undefined;
        prompt?: string | undefined;
    }>]>>;
    replace: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodArray<z.ZodBoolean, "many">, z.ZodObject<{
        to: z.ZodString;
        from: z.ZodString;
        preserveGeometry: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        to: string;
        from: string;
        preserveGeometry?: boolean | undefined;
    }, {
        to: string;
        from: string;
        preserveGeometry?: boolean | undefined;
    }>]>>;
    remove: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
        prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        region: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodArray<z.ZodArray<z.ZodNumber, "many">, "many">]>>;
        multiple: z.ZodOptional<z.ZodBoolean>;
        removeShadow: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        prompt?: string | string[] | undefined;
        region?: number[] | number[][] | undefined;
        multiple?: boolean | undefined;
        removeShadow?: boolean | undefined;
    }, {
        prompt?: string | string[] | undefined;
        region?: number[] | number[][] | undefined;
        multiple?: boolean | undefined;
        removeShadow?: boolean | undefined;
    }>]>>;
    recolor: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
        prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        to: z.ZodOptional<z.ZodString>;
        multiple: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        prompt?: string | string[] | undefined;
        to?: string | undefined;
        multiple?: boolean | undefined;
    }, {
        prompt?: string | string[] | undefined;
        to?: string | undefined;
        multiple?: boolean | undefined;
    }>]>>;
    fillBackground: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        prompt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        prompt?: string | undefined;
    }, {
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        prompt?: string | undefined;
    }>]>>;
    extract: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodOptional<z.ZodArray<z.ZodString, "many">>, z.ZodObject<{
        invert: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        mode: z.ZodOptional<z.ZodDefault<z.ZodEnum<["content", "mask"]>>>;
        multiple: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    }, "strip", z.ZodTypeAny, {
        invert?: boolean | undefined;
        mode?: "content" | "mask" | undefined;
        multiple?: boolean | undefined;
        prompt?: string | string[] | undefined;
    }, {
        invert?: boolean | undefined;
        mode?: "content" | "mask" | undefined;
        multiple?: boolean | undefined;
        prompt?: string | string[] | undefined;
    }>]>>;
    enhance: z.ZodOptional<z.ZodBoolean>;
    defaultImage: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    src: string;
    crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    } | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }[] | undefined;
    sanitize?: boolean | undefined;
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    zoom?: string | undefined;
    assetType?: string | undefined;
    deliveryType?: string | undefined;
    dpr?: string | number | undefined;
    format?: string | undefined;
    quality?: string | number | undefined;
    strictTransformations?: boolean | undefined;
    art?: string | undefined;
    blackwhite?: string | boolean | undefined;
    blur?: string | boolean | undefined;
    brightness?: string | boolean | undefined;
    cartoonify?: string | boolean | undefined;
    colorize?: string | undefined;
    contrast?: string | boolean | undefined;
    distort?: string | undefined;
    gamma?: string | boolean | undefined;
    grayscale?: boolean | undefined;
    improve?: string | boolean | undefined;
    loop?: string | number | boolean | undefined;
    multiply?: boolean | undefined;
    negate?: string | boolean | undefined;
    outline?: string | boolean | undefined;
    pixelate?: string | boolean | undefined;
    redeye?: string | boolean | undefined;
    saturation?: string | boolean | undefined;
    screen?: boolean | undefined;
    sepia?: string | boolean | undefined;
    shadow?: string | boolean | undefined;
    sharpen?: string | boolean | undefined;
    shear?: string | undefined;
    tint?: string | boolean | undefined;
    trim?: string | boolean | undefined;
    vectorize?: string | boolean | undefined;
    vibrance?: string | boolean | undefined;
    vignette?: string | boolean | undefined;
    angle?: string | number | undefined;
    autoBrightness?: string | boolean | undefined;
    autoColor?: string | boolean | undefined;
    autoContrast?: string | boolean | undefined;
    assistColorblind?: string | boolean | undefined;
    background?: string | undefined;
    blurFaces?: string | boolean | undefined;
    blurRegion?: string | boolean | undefined;
    border?: string | undefined;
    brightnessHSB?: string | boolean | undefined;
    color?: string | undefined;
    fillLight?: string | boolean | undefined;
    gradientFade?: string | boolean | undefined;
    oilPaint?: string | boolean | undefined;
    opacity?: string | number | undefined;
    pixelateFaces?: string | boolean | undefined;
    pixelateRegion?: string | boolean | undefined;
    radius?: string | number | undefined;
    replaceColor?: string | undefined;
    simulateColorblind?: string | boolean | undefined;
    unsharpMask?: string | boolean | undefined;
    effects?: {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }[] | undefined;
    flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
    text?: string | undefined;
    version?: string | number | undefined;
    underlay?: string | undefined;
    underlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    seoSuffix?: string | undefined;
    removeBackground?: boolean | undefined;
    rawTransformations?: string | string[] | undefined;
    preserveTransformations?: boolean | undefined;
    overlay?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    } | undefined;
    overlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    namedTransformations?: string | string[] | undefined;
    transformations?: string | string[] | undefined;
    zoompan?: string | boolean | {
        options: string;
        loop?: string | number | boolean | undefined;
    } | undefined;
    restore?: boolean | undefined;
    replaceBackground?: string | boolean | {
        seed?: number | undefined;
        prompt?: string | undefined;
    } | undefined;
    replace?: string[] | boolean[] | {
        to: string;
        from: string;
        preserveGeometry?: boolean | undefined;
    } | undefined;
    remove?: string | string[] | {
        prompt?: string | string[] | undefined;
        region?: number[] | number[][] | undefined;
        multiple?: boolean | undefined;
        removeShadow?: boolean | undefined;
    } | undefined;
    recolor?: string | string[] | {
        prompt?: string | string[] | undefined;
        to?: string | undefined;
        multiple?: boolean | undefined;
    } | undefined;
    fillBackground?: boolean | {
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        prompt?: string | undefined;
    } | undefined;
    extract?: string | string[] | {
        invert?: boolean | undefined;
        mode?: "content" | "mask" | undefined;
        multiple?: boolean | undefined;
        prompt?: string | string[] | undefined;
    } | undefined;
    enhance?: boolean | undefined;
    defaultImage?: string | undefined;
}, {
    src: string;
    crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    } | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }[] | undefined;
    sanitize?: boolean | undefined;
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    zoom?: string | undefined;
    assetType?: string | undefined;
    deliveryType?: string | undefined;
    dpr?: string | number | undefined;
    format?: string | undefined;
    quality?: string | number | undefined;
    strictTransformations?: boolean | undefined;
    art?: string | undefined;
    blackwhite?: string | boolean | undefined;
    blur?: string | boolean | undefined;
    brightness?: string | boolean | undefined;
    cartoonify?: string | boolean | undefined;
    colorize?: string | undefined;
    contrast?: string | boolean | undefined;
    distort?: string | undefined;
    gamma?: string | boolean | undefined;
    grayscale?: boolean | undefined;
    improve?: string | boolean | undefined;
    loop?: string | number | boolean | undefined;
    multiply?: boolean | undefined;
    negate?: string | boolean | undefined;
    outline?: string | boolean | undefined;
    pixelate?: string | boolean | undefined;
    redeye?: string | boolean | undefined;
    saturation?: string | boolean | undefined;
    screen?: boolean | undefined;
    sepia?: string | boolean | undefined;
    shadow?: string | boolean | undefined;
    sharpen?: string | boolean | undefined;
    shear?: string | undefined;
    tint?: string | boolean | undefined;
    trim?: string | boolean | undefined;
    vectorize?: string | boolean | undefined;
    vibrance?: string | boolean | undefined;
    vignette?: string | boolean | undefined;
    angle?: string | number | undefined;
    autoBrightness?: string | boolean | undefined;
    autoColor?: string | boolean | undefined;
    autoContrast?: string | boolean | undefined;
    assistColorblind?: string | boolean | undefined;
    background?: string | undefined;
    blurFaces?: string | boolean | undefined;
    blurRegion?: string | boolean | undefined;
    border?: string | undefined;
    brightnessHSB?: string | boolean | undefined;
    color?: string | undefined;
    fillLight?: string | boolean | undefined;
    gradientFade?: string | boolean | undefined;
    oilPaint?: string | boolean | undefined;
    opacity?: string | number | undefined;
    pixelateFaces?: string | boolean | undefined;
    pixelateRegion?: string | boolean | undefined;
    radius?: string | number | undefined;
    replaceColor?: string | undefined;
    simulateColorblind?: string | boolean | undefined;
    unsharpMask?: string | boolean | undefined;
    effects?: {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }[] | undefined;
    flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
    text?: string | undefined;
    version?: string | number | undefined;
    underlay?: string | undefined;
    underlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    seoSuffix?: string | undefined;
    removeBackground?: boolean | undefined;
    rawTransformations?: string | string[] | undefined;
    preserveTransformations?: boolean | undefined;
    overlay?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    } | undefined;
    overlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    namedTransformations?: string | string[] | undefined;
    transformations?: string | string[] | undefined;
    zoompan?: string | boolean | {
        options: string;
        loop?: string | number | boolean | undefined;
    } | undefined;
    restore?: boolean | undefined;
    replaceBackground?: string | boolean | {
        seed?: number | undefined;
        prompt?: string | undefined;
    } | undefined;
    replace?: string[] | boolean[] | {
        to: string;
        from: string;
        preserveGeometry?: boolean | undefined;
    } | undefined;
    remove?: string | string[] | {
        prompt?: string | string[] | undefined;
        region?: number[] | number[][] | undefined;
        multiple?: boolean | undefined;
        removeShadow?: boolean | undefined;
    } | undefined;
    recolor?: string | string[] | {
        prompt?: string | string[] | undefined;
        to?: string | undefined;
        multiple?: boolean | undefined;
    } | undefined;
    fillBackground?: boolean | {
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        prompt?: string | undefined;
    } | undefined;
    extract?: string | string[] | {
        invert?: boolean | undefined;
        mode?: "content" | "mask" | undefined;
        multiple?: boolean | undefined;
        prompt?: string | string[] | undefined;
    } | undefined;
    enhance?: boolean | undefined;
    defaultImage?: string | undefined;
}>;
type _ImageOptions = z.infer<typeof imageOptionsSchema>;
interface ImageOptions extends _ImageOptions {
}

declare const videoOptionsSchema: z.ZodObject<{
    crop: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>, z.ZodObject<{
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        zoom: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }>, z.ZodArray<z.ZodObject<{
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        zoom: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }, {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }>, "many">]>>>;
    sanitize: z.ZodOptional<z.ZodBoolean>;
    aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
    gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
    height: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    width: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    zoom: z.ZodOptional<z.ZodString>;
    assetType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    deliveryType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    dpr: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    format: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    quality: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodString]>>>;
    src: z.ZodString;
    strictTransformations: z.ZodOptional<z.ZodBoolean>;
    art: z.ZodOptional<z.ZodString>;
    blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    colorize: z.ZodOptional<z.ZodString>;
    contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    distort: z.ZodOptional<z.ZodString>;
    gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    grayscale: z.ZodOptional<z.ZodBoolean>;
    improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
    multiply: z.ZodOptional<z.ZodBoolean>;
    negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    screen: z.ZodOptional<z.ZodBoolean>;
    sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    shear: z.ZodOptional<z.ZodString>;
    tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    background: z.ZodOptional<z.ZodString>;
    blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    border: z.ZodOptional<z.ZodString>;
    brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    color: z.ZodOptional<z.ZodString>;
    fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    replaceColor: z.ZodOptional<z.ZodString>;
    simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
        angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        art: z.ZodOptional<z.ZodString>;
        autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        background: z.ZodOptional<z.ZodString>;
        blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        border: z.ZodOptional<z.ZodString>;
        brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        color: z.ZodOptional<z.ZodString>;
        colorize: z.ZodOptional<z.ZodString>;
        contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        distort: z.ZodOptional<z.ZodString>;
        fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        grayscale: z.ZodOptional<z.ZodBoolean>;
        improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
        multiply: z.ZodOptional<z.ZodBoolean>;
        negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        replaceColor: z.ZodOptional<z.ZodString>;
        saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        screen: z.ZodOptional<z.ZodBoolean>;
        sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shear: z.ZodOptional<z.ZodString>;
        simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
    }, "strip", z.ZodTypeAny, {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }, {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }>, "many">>;
    flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
    text: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    underlay: z.ZodOptional<z.ZodString>;
    underlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>, "many">>;
    seoSuffix: z.ZodOptional<z.ZodString>;
    removeBackground: z.ZodOptional<z.ZodBoolean>;
    rawTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    preserveTransformations: z.ZodOptional<z.ZodBoolean>;
    overlay: z.ZodOptional<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
            alignment: z.ZodOptional<z.ZodString>;
            antialias: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodString>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            fontWeight: z.ZodOptional<z.ZodString>;
            hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            stroke: z.ZodOptional<z.ZodString>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }>]>>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>>;
    overlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
        appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
        crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        position: z.ZodOptional<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }, {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        }>>;
        publicId: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
            alignment: z.ZodOptional<z.ZodString>;
            antialias: z.ZodOptional<z.ZodString>;
            border: z.ZodOptional<z.ZodString>;
            color: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodString>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            fontWeight: z.ZodOptional<z.ZodString>;
            hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            stroke: z.ZodOptional<z.ZodString>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }, {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        }>]>>;
        url: z.ZodOptional<z.ZodString>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    }, "strip", z.ZodTypeAny, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }, {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }>, "many">>;
    namedTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    transformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    streamingProfile: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    src: string;
    crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    } | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }[] | undefined;
    sanitize?: boolean | undefined;
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    zoom?: string | undefined;
    assetType?: string | undefined;
    deliveryType?: string | undefined;
    dpr?: string | number | undefined;
    format?: string | undefined;
    quality?: string | number | undefined;
    strictTransformations?: boolean | undefined;
    art?: string | undefined;
    blackwhite?: string | boolean | undefined;
    blur?: string | boolean | undefined;
    brightness?: string | boolean | undefined;
    cartoonify?: string | boolean | undefined;
    colorize?: string | undefined;
    contrast?: string | boolean | undefined;
    distort?: string | undefined;
    gamma?: string | boolean | undefined;
    grayscale?: boolean | undefined;
    improve?: string | boolean | undefined;
    loop?: string | number | boolean | undefined;
    multiply?: boolean | undefined;
    negate?: string | boolean | undefined;
    outline?: string | boolean | undefined;
    pixelate?: string | boolean | undefined;
    redeye?: string | boolean | undefined;
    saturation?: string | boolean | undefined;
    screen?: boolean | undefined;
    sepia?: string | boolean | undefined;
    shadow?: string | boolean | undefined;
    sharpen?: string | boolean | undefined;
    shear?: string | undefined;
    tint?: string | boolean | undefined;
    trim?: string | boolean | undefined;
    vectorize?: string | boolean | undefined;
    vibrance?: string | boolean | undefined;
    vignette?: string | boolean | undefined;
    angle?: string | number | undefined;
    autoBrightness?: string | boolean | undefined;
    autoColor?: string | boolean | undefined;
    autoContrast?: string | boolean | undefined;
    assistColorblind?: string | boolean | undefined;
    background?: string | undefined;
    blurFaces?: string | boolean | undefined;
    blurRegion?: string | boolean | undefined;
    border?: string | undefined;
    brightnessHSB?: string | boolean | undefined;
    color?: string | undefined;
    fillLight?: string | boolean | undefined;
    gradientFade?: string | boolean | undefined;
    oilPaint?: string | boolean | undefined;
    opacity?: string | number | undefined;
    pixelateFaces?: string | boolean | undefined;
    pixelateRegion?: string | boolean | undefined;
    radius?: string | number | undefined;
    replaceColor?: string | undefined;
    simulateColorblind?: string | boolean | undefined;
    unsharpMask?: string | boolean | undefined;
    effects?: {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }[] | undefined;
    flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
    text?: string | undefined;
    version?: string | number | undefined;
    underlay?: string | undefined;
    underlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    seoSuffix?: string | undefined;
    removeBackground?: boolean | undefined;
    rawTransformations?: string | string[] | undefined;
    preserveTransformations?: boolean | undefined;
    overlay?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    } | undefined;
    overlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    namedTransformations?: string | string[] | undefined;
    transformations?: string | string[] | undefined;
    streamingProfile?: string | undefined;
}, {
    src: string;
    crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    } | {
        type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        x?: string | number | undefined;
        y?: string | number | undefined;
        zoom?: string | undefined;
        source?: boolean | undefined;
    }[] | undefined;
    sanitize?: boolean | undefined;
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    zoom?: string | undefined;
    assetType?: string | undefined;
    deliveryType?: string | undefined;
    dpr?: string | number | undefined;
    format?: string | undefined;
    quality?: string | number | undefined;
    strictTransformations?: boolean | undefined;
    art?: string | undefined;
    blackwhite?: string | boolean | undefined;
    blur?: string | boolean | undefined;
    brightness?: string | boolean | undefined;
    cartoonify?: string | boolean | undefined;
    colorize?: string | undefined;
    contrast?: string | boolean | undefined;
    distort?: string | undefined;
    gamma?: string | boolean | undefined;
    grayscale?: boolean | undefined;
    improve?: string | boolean | undefined;
    loop?: string | number | boolean | undefined;
    multiply?: boolean | undefined;
    negate?: string | boolean | undefined;
    outline?: string | boolean | undefined;
    pixelate?: string | boolean | undefined;
    redeye?: string | boolean | undefined;
    saturation?: string | boolean | undefined;
    screen?: boolean | undefined;
    sepia?: string | boolean | undefined;
    shadow?: string | boolean | undefined;
    sharpen?: string | boolean | undefined;
    shear?: string | undefined;
    tint?: string | boolean | undefined;
    trim?: string | boolean | undefined;
    vectorize?: string | boolean | undefined;
    vibrance?: string | boolean | undefined;
    vignette?: string | boolean | undefined;
    angle?: string | number | undefined;
    autoBrightness?: string | boolean | undefined;
    autoColor?: string | boolean | undefined;
    autoContrast?: string | boolean | undefined;
    assistColorblind?: string | boolean | undefined;
    background?: string | undefined;
    blurFaces?: string | boolean | undefined;
    blurRegion?: string | boolean | undefined;
    border?: string | undefined;
    brightnessHSB?: string | boolean | undefined;
    color?: string | undefined;
    fillLight?: string | boolean | undefined;
    gradientFade?: string | boolean | undefined;
    oilPaint?: string | boolean | undefined;
    opacity?: string | number | undefined;
    pixelateFaces?: string | boolean | undefined;
    pixelateRegion?: string | boolean | undefined;
    radius?: string | number | undefined;
    replaceColor?: string | undefined;
    simulateColorblind?: string | boolean | undefined;
    unsharpMask?: string | boolean | undefined;
    effects?: {
        angle?: string | number | undefined;
        art?: string | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightness?: string | boolean | undefined;
        brightnessHSB?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        color?: string | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        fillLight?: string | boolean | undefined;
        gamma?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        redeye?: string | boolean | undefined;
        replaceColor?: string | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
    }[] | undefined;
    flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
    text?: string | undefined;
    version?: string | number | undefined;
    underlay?: string | undefined;
    underlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        type?: string | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    seoSuffix?: string | undefined;
    removeBackground?: boolean | undefined;
    rawTransformations?: string | string[] | undefined;
    preserveTransformations?: boolean | undefined;
    overlay?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    } | undefined;
    overlays?: {
        appliedEffects?: {}[] | undefined;
        appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        effects?: {}[] | undefined;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        height?: string | number | undefined;
        position?: {
            angle?: string | number | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
        } | undefined;
        publicId?: string | undefined;
        text?: string | {
            text: string;
            alignment?: string | undefined;
            antialias?: string | undefined;
            border?: string | undefined;
            color?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: string | number | undefined;
            fontWeight?: string | undefined;
            hinting?: string | number | undefined;
            letterSpacing?: string | number | undefined;
            lineSpacing?: string | number | undefined;
            stroke?: string | undefined;
        } | undefined;
        url?: string | undefined;
        width?: string | number | undefined;
    }[] | undefined;
    namedTransformations?: string | string[] | undefined;
    transformations?: string | string[] | undefined;
    streamingProfile?: string | undefined;
}>;
type _VideoOptions = z.infer<typeof videoOptionsSchema>;
interface VideoOptions extends _VideoOptions {
}

type AllOptions = AssetOptions | ImageOptions | VideoOptions;
interface PluginSettings<Options extends AllOptions = AllOptions> {
    cldAsset: any;
    options: Options;
}
declare const pluginOptionsSchema: z.ZodObject<{
    aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
    crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
    gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
    height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    format: z.ZodOptional<z.ZodString>;
    resize: z.ZodOptional<z.ZodString>;
    x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    zoom: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
    crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
    height?: string | number | undefined;
    format?: string | undefined;
    resize?: string | undefined;
    x?: string | number | undefined;
    y?: string | number | undefined;
    width?: string | number | undefined;
    zoom?: string | undefined;
}, {
    aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
    crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
    gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
    height?: string | number | undefined;
    format?: string | undefined;
    resize?: string | undefined;
    x?: string | number | undefined;
    y?: string | number | undefined;
    width?: string | number | undefined;
    zoom?: string | undefined;
}>;
type PluginOptions = z.infer<typeof pluginOptionsSchema>;
interface PluginResults {
    options?: PluginOptions;
}

declare const transformationPlugins: ({
    props: {
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        crop: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>, z.ZodObject<{
            aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            zoom: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }>, z.ZodArray<z.ZodObject<{
            aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            zoom: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }>, "many">]>>>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        zoom: z.ZodOptional<z.ZodString>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: (settings: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => PluginResults;
} | {
    props: {
        angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        art: z.ZodOptional<z.ZodString>;
        autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        background: z.ZodOptional<z.ZodString>;
        blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        border: z.ZodOptional<z.ZodString>;
        brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        color: z.ZodOptional<z.ZodString>;
        colorize: z.ZodOptional<z.ZodString>;
        contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        distort: z.ZodOptional<z.ZodString>;
        fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        grayscale: z.ZodOptional<z.ZodBoolean>;
        improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
        multiply: z.ZodOptional<z.ZodBoolean>;
        negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        replaceColor: z.ZodOptional<z.ZodString>;
        saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        screen: z.ZodOptional<z.ZodBoolean>;
        sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shear: z.ZodOptional<z.ZodString>;
        simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            art: z.ZodOptional<z.ZodString>;
            autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            background: z.ZodOptional<z.ZodString>;
            blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            border: z.ZodOptional<z.ZodString>;
            brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            color: z.ZodOptional<z.ZodString>;
            colorize: z.ZodOptional<z.ZodString>;
            contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            distort: z.ZodOptional<z.ZodString>;
            fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            grayscale: z.ZodOptional<z.ZodBoolean>;
            improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
            multiply: z.ZodOptional<z.ZodBoolean>;
            negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            replaceColor: z.ZodOptional<z.ZodString>;
            saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            screen: z.ZodOptional<z.ZodBoolean>;
            sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            shear: z.ZodOptional<z.ZodString>;
            simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }, {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }>, "many">>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: (settings: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: (settings: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        namedTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        transformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    };
    strict: true;
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: ({ cldAsset, options }: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        overlay: z.ZodOptional<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                alignment: z.ZodOptional<z.ZodString>;
                antialias: z.ZodOptional<z.ZodString>;
                border: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                fontFamily: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodNumber>;
                fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                fontWeight: z.ZodOptional<z.ZodString>;
                hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                stroke: z.ZodOptional<z.ZodString>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }>]>>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>>;
        overlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                alignment: z.ZodOptional<z.ZodString>;
                antialias: z.ZodOptional<z.ZodString>;
                border: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                fontFamily: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodNumber>;
                fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                fontWeight: z.ZodOptional<z.ZodString>;
                hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                stroke: z.ZodOptional<z.ZodString>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }>]>>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>, "many">>;
        text: z.ZodOptional<z.ZodString>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: ({ cldAsset, options }: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        preserveTransformations: z.ZodOptional<z.ZodBoolean>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: ({ cldAsset, options }: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        rawTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: ({ cldAsset, options }: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        defaultImage: z.ZodOptional<z.ZodString>;
    };
    assetTypes: ("image" | "images")[];
    plugin: (settings: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        enhance: z.ZodOptional<z.ZodBoolean>;
    };
    assetTypes: ("image" | "images")[];
    plugin: (settings: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        extract: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodOptional<z.ZodArray<z.ZodString, "many">>, z.ZodObject<{
            invert: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            mode: z.ZodOptional<z.ZodDefault<z.ZodEnum<["content", "mask"]>>>;
            multiple: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        }, "strip", z.ZodTypeAny, {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        }, {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        }>]>>;
    };
    assetTypes: ("image" | "images")[];
    plugin: (settings: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        fillBackground: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            prompt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        }, {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        }>]>>;
    };
    assetTypes: ("image" | "images")[];
    plugin: (settings: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        recolor: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
            prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            to: z.ZodOptional<z.ZodString>;
            multiple: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        }, {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        }>]>>;
    };
    assetTypes: ("image" | "images")[];
    plugin: (settings: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        remove: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
            prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            region: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodArray<z.ZodArray<z.ZodNumber, "many">, "many">]>>;
            multiple: z.ZodOptional<z.ZodBoolean>;
            removeShadow: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        }, {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        }>]>>;
    };
    assetTypes: ("image" | "images")[];
    plugin: ({ cldAsset, options }: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        replaceBackground: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString, z.ZodObject<{
            seed: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            seed?: number | undefined;
            prompt?: string | undefined;
        }, {
            seed?: number | undefined;
            prompt?: string | undefined;
        }>]>>;
    };
    assetTypes: ("image" | "images")[];
    plugin: (settings: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        replace: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodArray<z.ZodBoolean, "many">, z.ZodObject<{
            to: z.ZodString;
            from: z.ZodString;
            preserveGeometry: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        }, {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        }>]>>;
    };
    assetTypes: ("image" | "images")[];
    plugin: ({ cldAsset, options }: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        restore: z.ZodOptional<z.ZodBoolean>;
    };
    assetTypes: ("image" | "images")[];
    plugin: ({ cldAsset, options }: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        zoompan: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean, z.ZodObject<{
            loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
            options: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            options: string;
            loop?: string | number | boolean | undefined;
        }, {
            options: string;
            loop?: string | number | boolean | undefined;
        }>]>>;
    };
    assetTypes: ("image" | "images")[];
    plugin: ({ cldAsset, options }: PluginSettings<ImageOptions>) => {
        options: {
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            format?: string | undefined;
            resize?: string | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            width?: string | number | undefined;
            zoom?: string | undefined;
        };
    };
} | {
    props: {
        removeBackground: z.ZodOptional<z.ZodBoolean>;
    };
    assetTypes: ("image" | "images")[];
    plugin: (settings: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        sanitize: z.ZodOptional<z.ZodBoolean>;
    };
    assetTypes: ("image" | "images")[];
    plugin: ({ cldAsset, options }: PluginSettings<ImageOptions>) => {};
} | {
    props: {
        seoSuffix: z.ZodOptional<z.ZodString>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: ({ cldAsset, options }: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        underlay: z.ZodOptional<z.ZodString>;
        underlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>, "many">>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: ({ cldAsset, options }: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        version: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    };
    assetTypes: ("image" | "images" | "video" | "videos")[];
    plugin: ({ cldAsset, options }: PluginSettings<AssetOptions | ImageOptions | VideoOptions>) => {};
} | {
    props: {
        streamingProfile: z.ZodOptional<z.ZodString>;
    };
    assetTypes: ("video" | "videos")[];
    plugin: (settings: PluginSettings<VideoOptions>) => {};
})[];
/**
 * constructCloudinaryUrl
 * @description Builds a full Cloudinary URL using transformation plugins specified by options
 */
declare const constructUrlPropsSchema: z.ZodObject<{
    analytics: z.ZodOptional<z.ZodUnion<[z.ZodType<CloudinaryAnalyticsOptions, z.ZodTypeDef, CloudinaryAnalyticsOptions>, z.ZodBoolean]>>;
    config: z.ZodOptional<z.ZodType<CloudinaryConfigurationOptions, z.ZodTypeDef, CloudinaryConfigurationOptions>>;
    options: z.ZodUnion<[z.ZodObject<{
        crop: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>, z.ZodObject<{
            aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            zoom: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }>, z.ZodArray<z.ZodObject<{
            aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            zoom: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }>, "many">]>>>;
        sanitize: z.ZodOptional<z.ZodBoolean>;
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        zoom: z.ZodOptional<z.ZodString>;
        assetType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        deliveryType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        dpr: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        format: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        quality: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodString]>>>;
        src: z.ZodString;
        strictTransformations: z.ZodOptional<z.ZodBoolean>;
        art: z.ZodOptional<z.ZodString>;
        blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        colorize: z.ZodOptional<z.ZodString>;
        contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        distort: z.ZodOptional<z.ZodString>;
        gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        grayscale: z.ZodOptional<z.ZodBoolean>;
        improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
        multiply: z.ZodOptional<z.ZodBoolean>;
        negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        screen: z.ZodOptional<z.ZodBoolean>;
        sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shear: z.ZodOptional<z.ZodString>;
        tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        background: z.ZodOptional<z.ZodString>;
        blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        border: z.ZodOptional<z.ZodString>;
        brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        color: z.ZodOptional<z.ZodString>;
        fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        replaceColor: z.ZodOptional<z.ZodString>;
        simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            art: z.ZodOptional<z.ZodString>;
            autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            background: z.ZodOptional<z.ZodString>;
            blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            border: z.ZodOptional<z.ZodString>;
            brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            color: z.ZodOptional<z.ZodString>;
            colorize: z.ZodOptional<z.ZodString>;
            contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            distort: z.ZodOptional<z.ZodString>;
            fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            grayscale: z.ZodOptional<z.ZodBoolean>;
            improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
            multiply: z.ZodOptional<z.ZodBoolean>;
            negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            replaceColor: z.ZodOptional<z.ZodString>;
            saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            screen: z.ZodOptional<z.ZodBoolean>;
            sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            shear: z.ZodOptional<z.ZodString>;
            simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }, {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }>, "many">>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        text: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        underlay: z.ZodOptional<z.ZodString>;
        underlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>, "many">>;
        seoSuffix: z.ZodOptional<z.ZodString>;
        removeBackground: z.ZodOptional<z.ZodBoolean>;
        rawTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        preserveTransformations: z.ZodOptional<z.ZodBoolean>;
        overlay: z.ZodOptional<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                alignment: z.ZodOptional<z.ZodString>;
                antialias: z.ZodOptional<z.ZodString>;
                border: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                fontFamily: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodNumber>;
                fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                fontWeight: z.ZodOptional<z.ZodString>;
                hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                stroke: z.ZodOptional<z.ZodString>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }>]>>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>>;
        overlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                alignment: z.ZodOptional<z.ZodString>;
                antialias: z.ZodOptional<z.ZodString>;
                border: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                fontFamily: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodNumber>;
                fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                fontWeight: z.ZodOptional<z.ZodString>;
                hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                stroke: z.ZodOptional<z.ZodString>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }>]>>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>, "many">>;
        namedTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        transformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        zoompan: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean, z.ZodObject<{
            loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
            options: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            options: string;
            loop?: string | number | boolean | undefined;
        }, {
            options: string;
            loop?: string | number | boolean | undefined;
        }>]>>;
        restore: z.ZodOptional<z.ZodBoolean>;
        replaceBackground: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodString, z.ZodObject<{
            seed: z.ZodOptional<z.ZodNumber>;
            prompt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            seed?: number | undefined;
            prompt?: string | undefined;
        }, {
            seed?: number | undefined;
            prompt?: string | undefined;
        }>]>>;
        replace: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodString, "many">, z.ZodArray<z.ZodBoolean, "many">, z.ZodObject<{
            to: z.ZodString;
            from: z.ZodString;
            preserveGeometry: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        }, {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        }>]>>;
        remove: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
            prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            region: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodArray<z.ZodArray<z.ZodNumber, "many">, "many">]>>;
            multiple: z.ZodOptional<z.ZodBoolean>;
            removeShadow: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        }, {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        }>]>>;
        recolor: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>, z.ZodObject<{
            prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
            to: z.ZodOptional<z.ZodString>;
            multiple: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        }, {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        }>]>>;
        fillBackground: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodObject<{
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            prompt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        }, {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        }>]>>;
        extract: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodOptional<z.ZodArray<z.ZodString, "many">>, z.ZodObject<{
            invert: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            mode: z.ZodOptional<z.ZodDefault<z.ZodEnum<["content", "mask"]>>>;
            multiple: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            prompt: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        }, "strip", z.ZodTypeAny, {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        }, {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        }>]>>;
        enhance: z.ZodOptional<z.ZodBoolean>;
        defaultImage: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        zoompan?: string | boolean | {
            options: string;
            loop?: string | number | boolean | undefined;
        } | undefined;
        restore?: boolean | undefined;
        replaceBackground?: string | boolean | {
            seed?: number | undefined;
            prompt?: string | undefined;
        } | undefined;
        replace?: string[] | boolean[] | {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        } | undefined;
        remove?: string | string[] | {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        } | undefined;
        recolor?: string | string[] | {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        } | undefined;
        fillBackground?: boolean | {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        } | undefined;
        extract?: string | string[] | {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        } | undefined;
        enhance?: boolean | undefined;
        defaultImage?: string | undefined;
    }, {
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        zoompan?: string | boolean | {
            options: string;
            loop?: string | number | boolean | undefined;
        } | undefined;
        restore?: boolean | undefined;
        replaceBackground?: string | boolean | {
            seed?: number | undefined;
            prompt?: string | undefined;
        } | undefined;
        replace?: string[] | boolean[] | {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        } | undefined;
        remove?: string | string[] | {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        } | undefined;
        recolor?: string | string[] | {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        } | undefined;
        fillBackground?: boolean | {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        } | undefined;
        extract?: string | string[] | {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        } | undefined;
        enhance?: boolean | undefined;
        defaultImage?: string | undefined;
    }>, z.ZodObject<{
        crop: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>, z.ZodObject<{
            aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            zoom: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }>, z.ZodArray<z.ZodObject<{
            aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            type: z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>;
            gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            zoom: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }, {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }>, "many">]>>>;
        sanitize: z.ZodOptional<z.ZodBoolean>;
        aspectRatio: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEnum<["vflip", "hflip", "ignore", "auto_right", "auto_left"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
        height: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        width: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        zoom: z.ZodOptional<z.ZodString>;
        assetType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        deliveryType: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        dpr: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        format: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        quality: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodString]>>>;
        src: z.ZodString;
        strictTransformations: z.ZodOptional<z.ZodBoolean>;
        art: z.ZodOptional<z.ZodString>;
        blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        colorize: z.ZodOptional<z.ZodString>;
        contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        distort: z.ZodOptional<z.ZodString>;
        gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        grayscale: z.ZodOptional<z.ZodBoolean>;
        improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
        multiply: z.ZodOptional<z.ZodBoolean>;
        negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        screen: z.ZodOptional<z.ZodBoolean>;
        sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        shear: z.ZodOptional<z.ZodString>;
        tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        background: z.ZodOptional<z.ZodString>;
        blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        border: z.ZodOptional<z.ZodString>;
        brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        color: z.ZodOptional<z.ZodString>;
        fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        replaceColor: z.ZodOptional<z.ZodString>;
        simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        effects: z.ZodOptional<z.ZodArray<z.ZodObject<{
            angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            art: z.ZodOptional<z.ZodString>;
            autoBrightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            autoColor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            autoContrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            assistColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            background: z.ZodOptional<z.ZodString>;
            blackwhite: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blur: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blurFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            blurRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            border: z.ZodOptional<z.ZodString>;
            brightness: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            brightnessHSB: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            cartoonify: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            color: z.ZodOptional<z.ZodString>;
            colorize: z.ZodOptional<z.ZodString>;
            contrast: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            distort: z.ZodOptional<z.ZodString>;
            fillLight: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            gamma: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            gradientFade: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            grayscale: z.ZodOptional<z.ZodBoolean>;
            improve: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            loop: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodNumber, z.ZodString]>>;
            multiply: z.ZodOptional<z.ZodBoolean>;
            negate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            oilPaint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            opacity: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            outline: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelateFaces: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            pixelateRegion: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            radius: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            redeye: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            replaceColor: z.ZodOptional<z.ZodString>;
            saturation: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            screen: z.ZodOptional<z.ZodBoolean>;
            sepia: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            shadow: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            sharpen: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            shear: z.ZodOptional<z.ZodString>;
            simulateColorblind: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            tint: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            trim: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            unsharpMask: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vectorize: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vibrance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
            vignette: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }, {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }>, "many">>;
        flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
        text: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        underlay: z.ZodOptional<z.ZodString>;
        underlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>, "many">>;
        seoSuffix: z.ZodOptional<z.ZodString>;
        removeBackground: z.ZodOptional<z.ZodBoolean>;
        rawTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        preserveTransformations: z.ZodOptional<z.ZodBoolean>;
        overlay: z.ZodOptional<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                alignment: z.ZodOptional<z.ZodString>;
                antialias: z.ZodOptional<z.ZodString>;
                border: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                fontFamily: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodNumber>;
                fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                fontWeight: z.ZodOptional<z.ZodString>;
                hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                stroke: z.ZodOptional<z.ZodString>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }>]>>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>>;
        overlays: z.ZodOptional<z.ZodArray<z.ZodObject<{
            appliedEffects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            appliedFlags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            effects: z.ZodOptional<z.ZodArray<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, "many">>;
            crop: z.ZodOptional<z.ZodEnum<["auto", "crop", "fill", "fill_pad", "fit", "imagga_crop", "imagga_scale", "lfill", "limit", "lpad", "mfit", "mpad", "pad", "scale", "thumb"]>>;
            flags: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, z.ZodArray<z.ZodEnum<["animated", "any_format", "apng", "attachment", "awebp", "clip", "clip_evenodd", "cutter", "force_icc", "force_strip", "getinfo", "group4", "hlsv3", "ignore_aspect_ratio", "ignore_mask_channels", "immutable_cache", "keep_attribution", "keep_dar", "keep_iptc", "layer_apply", "lossy", "mono", "no_overflow", "no_stream", "png8_fl_png24_fl_png32", "preserve_transparency", "progressive", "rasterize", "region_relative", "relative", "replace_image", "sanitize", "splice", "streaming_attachment", "strip_profile", "text_disallow_overflow", "text_no_trim", "tiff8_lzw", "tiled", "truncate_ts", "waveform"]>, "many">]>>;
            height: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            position: z.ZodOptional<z.ZodObject<{
                angle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                gravity: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["auto", "auto_content_aware", "center", "custom", "east", "face", "face_center", "multi_face", "north", "north_east", "north_west", "south", "south_east", "south_west", "west"]>, z.ZodIntersection<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>]>>;
                x: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                y: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
            }, "strip", z.ZodTypeAny, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }, {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            }>>;
            publicId: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodObject<{
                alignment: z.ZodOptional<z.ZodString>;
                antialias: z.ZodOptional<z.ZodString>;
                border: z.ZodOptional<z.ZodString>;
                color: z.ZodOptional<z.ZodString>;
                fontFamily: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodNumber>;
                fontStyle: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                fontWeight: z.ZodOptional<z.ZodString>;
                hinting: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                letterSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                lineSpacing: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                stroke: z.ZodOptional<z.ZodString>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }, {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            }>]>>;
            url: z.ZodOptional<z.ZodString>;
            width: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        }, "strip", z.ZodTypeAny, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }, {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }>, "many">>;
        namedTransformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        transformations: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        streamingProfile: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        streamingProfile?: string | undefined;
    }, {
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        streamingProfile?: string | undefined;
    }>]>;
}, "strip", z.ZodTypeAny, {
    options: ({
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        zoompan?: string | boolean | {
            options: string;
            loop?: string | number | boolean | undefined;
        } | undefined;
        restore?: boolean | undefined;
        replaceBackground?: string | boolean | {
            seed?: number | undefined;
            prompt?: string | undefined;
        } | undefined;
        replace?: string[] | boolean[] | {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        } | undefined;
        remove?: string | string[] | {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        } | undefined;
        recolor?: string | string[] | {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        } | undefined;
        fillBackground?: boolean | {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        } | undefined;
        extract?: string | string[] | {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        } | undefined;
        enhance?: boolean | undefined;
        defaultImage?: string | undefined;
    } | {
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        streamingProfile?: string | undefined;
    }) & ({
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        zoompan?: string | boolean | {
            options: string;
            loop?: string | number | boolean | undefined;
        } | undefined;
        restore?: boolean | undefined;
        replaceBackground?: string | boolean | {
            seed?: number | undefined;
            prompt?: string | undefined;
        } | undefined;
        replace?: string[] | boolean[] | {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        } | undefined;
        remove?: string | string[] | {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        } | undefined;
        recolor?: string | string[] | {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        } | undefined;
        fillBackground?: boolean | {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        } | undefined;
        extract?: string | string[] | {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        } | undefined;
        enhance?: boolean | undefined;
        defaultImage?: string | undefined;
    } | {
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        streamingProfile?: string | undefined;
    } | undefined);
    analytics?: boolean | CloudinaryAnalyticsOptions | undefined;
    config?: CloudinaryConfigurationOptions | undefined;
}, {
    options: ({
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        zoompan?: string | boolean | {
            options: string;
            loop?: string | number | boolean | undefined;
        } | undefined;
        restore?: boolean | undefined;
        replaceBackground?: string | boolean | {
            seed?: number | undefined;
            prompt?: string | undefined;
        } | undefined;
        replace?: string[] | boolean[] | {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        } | undefined;
        remove?: string | string[] | {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        } | undefined;
        recolor?: string | string[] | {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        } | undefined;
        fillBackground?: boolean | {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        } | undefined;
        extract?: string | string[] | {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        } | undefined;
        enhance?: boolean | undefined;
        defaultImage?: string | undefined;
    } | {
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        streamingProfile?: string | undefined;
    }) & ({
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        zoompan?: string | boolean | {
            options: string;
            loop?: string | number | boolean | undefined;
        } | undefined;
        restore?: boolean | undefined;
        replaceBackground?: string | boolean | {
            seed?: number | undefined;
            prompt?: string | undefined;
        } | undefined;
        replace?: string[] | boolean[] | {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        } | undefined;
        remove?: string | string[] | {
            prompt?: string | string[] | undefined;
            region?: number[] | number[][] | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        } | undefined;
        recolor?: string | string[] | {
            prompt?: string | string[] | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        } | undefined;
        fillBackground?: boolean | {
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            prompt?: string | undefined;
        } | undefined;
        extract?: string | string[] | {
            invert?: boolean | undefined;
            mode?: "content" | "mask" | undefined;
            multiple?: boolean | undefined;
            prompt?: string | string[] | undefined;
        } | undefined;
        enhance?: boolean | undefined;
        defaultImage?: string | undefined;
    } | {
        src: string;
        crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
            gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            x?: string | number | undefined;
            y?: string | number | undefined;
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[] | undefined;
        sanitize?: boolean | undefined;
        aspectRatio?: number | "vflip" | "hflip" | "ignore" | "auto_right" | "auto_left" | (string & {}) | undefined;
        gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        zoom?: string | undefined;
        assetType?: string | undefined;
        deliveryType?: string | undefined;
        dpr?: string | number | undefined;
        format?: string | undefined;
        quality?: string | number | undefined;
        strictTransformations?: boolean | undefined;
        art?: string | undefined;
        blackwhite?: string | boolean | undefined;
        blur?: string | boolean | undefined;
        brightness?: string | boolean | undefined;
        cartoonify?: string | boolean | undefined;
        colorize?: string | undefined;
        contrast?: string | boolean | undefined;
        distort?: string | undefined;
        gamma?: string | boolean | undefined;
        grayscale?: boolean | undefined;
        improve?: string | boolean | undefined;
        loop?: string | number | boolean | undefined;
        multiply?: boolean | undefined;
        negate?: string | boolean | undefined;
        outline?: string | boolean | undefined;
        pixelate?: string | boolean | undefined;
        redeye?: string | boolean | undefined;
        saturation?: string | boolean | undefined;
        screen?: boolean | undefined;
        sepia?: string | boolean | undefined;
        shadow?: string | boolean | undefined;
        sharpen?: string | boolean | undefined;
        shear?: string | undefined;
        tint?: string | boolean | undefined;
        trim?: string | boolean | undefined;
        vectorize?: string | boolean | undefined;
        vibrance?: string | boolean | undefined;
        vignette?: string | boolean | undefined;
        angle?: string | number | undefined;
        autoBrightness?: string | boolean | undefined;
        autoColor?: string | boolean | undefined;
        autoContrast?: string | boolean | undefined;
        assistColorblind?: string | boolean | undefined;
        background?: string | undefined;
        blurFaces?: string | boolean | undefined;
        blurRegion?: string | boolean | undefined;
        border?: string | undefined;
        brightnessHSB?: string | boolean | undefined;
        color?: string | undefined;
        fillLight?: string | boolean | undefined;
        gradientFade?: string | boolean | undefined;
        oilPaint?: string | boolean | undefined;
        opacity?: string | number | undefined;
        pixelateFaces?: string | boolean | undefined;
        pixelateRegion?: string | boolean | undefined;
        radius?: string | number | undefined;
        replaceColor?: string | undefined;
        simulateColorblind?: string | boolean | undefined;
        unsharpMask?: string | boolean | undefined;
        effects?: {
            angle?: string | number | undefined;
            art?: string | undefined;
            autoBrightness?: string | boolean | undefined;
            autoColor?: string | boolean | undefined;
            autoContrast?: string | boolean | undefined;
            assistColorblind?: string | boolean | undefined;
            background?: string | undefined;
            blackwhite?: string | boolean | undefined;
            blur?: string | boolean | undefined;
            blurFaces?: string | boolean | undefined;
            blurRegion?: string | boolean | undefined;
            border?: string | undefined;
            brightness?: string | boolean | undefined;
            brightnessHSB?: string | boolean | undefined;
            cartoonify?: string | boolean | undefined;
            color?: string | undefined;
            colorize?: string | undefined;
            contrast?: string | boolean | undefined;
            distort?: string | undefined;
            fillLight?: string | boolean | undefined;
            gamma?: string | boolean | undefined;
            gradientFade?: string | boolean | undefined;
            grayscale?: boolean | undefined;
            improve?: string | boolean | undefined;
            loop?: string | number | boolean | undefined;
            multiply?: boolean | undefined;
            negate?: string | boolean | undefined;
            oilPaint?: string | boolean | undefined;
            opacity?: string | number | undefined;
            outline?: string | boolean | undefined;
            pixelate?: string | boolean | undefined;
            pixelateFaces?: string | boolean | undefined;
            pixelateRegion?: string | boolean | undefined;
            radius?: string | number | undefined;
            redeye?: string | boolean | undefined;
            replaceColor?: string | undefined;
            saturation?: string | boolean | undefined;
            screen?: boolean | undefined;
            sepia?: string | boolean | undefined;
            shadow?: string | boolean | undefined;
            sharpen?: string | boolean | undefined;
            shear?: string | undefined;
            simulateColorblind?: string | boolean | undefined;
            tint?: string | boolean | undefined;
            trim?: string | boolean | undefined;
            unsharpMask?: string | boolean | undefined;
            vectorize?: string | boolean | undefined;
            vibrance?: string | boolean | undefined;
            vignette?: string | boolean | undefined;
        }[] | undefined;
        flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
        text?: string | undefined;
        version?: string | number | undefined;
        underlay?: string | undefined;
        underlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        seoSuffix?: string | undefined;
        removeBackground?: boolean | undefined;
        rawTransformations?: string | string[] | undefined;
        preserveTransformations?: boolean | undefined;
        overlay?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        } | undefined;
        overlays?: {
            appliedEffects?: {}[] | undefined;
            appliedFlags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            effects?: {}[] | undefined;
            crop?: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb" | undefined;
            flags?: "animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform" | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[] | undefined;
            height?: string | number | undefined;
            position?: {
                angle?: string | number | undefined;
                gravity?: "auto" | "custom" | "auto_content_aware" | "center" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west" | (string & {}) | undefined;
                x?: string | number | undefined;
                y?: string | number | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: string | {
                text: string;
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: string | number | undefined;
                fontWeight?: string | undefined;
                hinting?: string | number | undefined;
                letterSpacing?: string | number | undefined;
                lineSpacing?: string | number | undefined;
                stroke?: string | undefined;
            } | undefined;
            url?: string | undefined;
            width?: string | number | undefined;
        }[] | undefined;
        namedTransformations?: string | string[] | undefined;
        transformations?: string | string[] | undefined;
        streamingProfile?: string | undefined;
    } | undefined);
    analytics?: boolean | CloudinaryAnalyticsOptions | undefined;
    config?: CloudinaryConfigurationOptions | undefined;
}>;
type ConstructUrlProps = {
    /** {"text":"Tech, dependency, and feature identifiers for tracking SDK usage related to Cloudinary.","path":"/url-loader/analyticsoptions"} */
    analytics?: (any | boolean) | undefined;
    /** {"text":"Configuration parameters for environment and Cloudinary account.","url":"https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters","path":"/url-loader/analyticsoptions"} */
    config?: any | undefined;
    /** {"text":"Asset options (Image or Video) that define delivery URL including public ID and transformations.","path":"/url-loader/assetoptions"} */
    options: {
        /** {"text":"The type of asset to deliver.","url":"https://cloudinary.com/documentation/image_transformations#transformation_url_structure"} */
        assetType?: string | undefined;
        /** {"text":"Delivery method of the asset.","url":"https://cloudinary.com/documentation/image_transformations#delivery_types"} */
        deliveryType?: string | undefined;
        /** {"text":"Delivery method of the asset.","url":"https://cloudinary.com/documentation/image_transformations#delivery_types"} */
        dpr?: (string | number) | undefined;
        /** {"text":"Converts (if necessary) and delivers an asset in the specified format.","url":"https://cloudinary.com/documentation/transformation_reference#f_format"} */
        format?: string | undefined;
        /** {"text":"Height of the given asset."} */
        height?: (string | number) | undefined;
        /** {"text":"Quality of the delivered asset","url":"https://cloudinary.com/documentation/transformation_reference#q_quality"} */
        quality?: (string | number | string) | undefined;
        /** {"text":"Cloudinary Public ID or versioned Cloudinary URL (/v1234/)"} */
        src: string;
        /** {"text":"Gives you the ability to have more control over what transformations are permitted to be used from your Cloudinary account.","url":"https://cloudinary.com/documentation/control_access_to_media#strict_transformations"} */
        strictTransformations?: boolean | undefined;
        /** {"text":"Width of the given asset."} */
        width?: (string | number) | undefined;
        /** {"text":"Crops or resizes the asset to a new aspect ratio.","url":"https://cloudinary.com/documentation/transformation_reference#ar_aspect_ratio"} */
        aspectRatio?: (number | ("vflip" | "hflip" | "ignore" | "auto_right" | "auto_left") | (string & {})) | undefined;
        crop?: (("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | {
            /** {"text":"Crops or resizes the asset to a new aspect ratio.","url":"https://cloudinary.com/documentation/transformation_reference#ar_aspect_ratio"} */
            aspectRatio?: (number | ("vflip" | "hflip" | "ignore" | "auto_right" | "auto_left") | (string & {})) | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
            gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
            /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
            x?: (string | number) | undefined;
            /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
            y?: (string | number) | undefined;
            /** {"text":"Controls how close to crop to the detected coordinates when using face-detection, custom-coordinate, or object-specific gravity.","url":"https://cloudinary.com/documentation/transformation_reference#z_zoom"} */
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            /** {"text":"Crops or resizes the asset to a new aspect ratio.","url":"https://cloudinary.com/documentation/transformation_reference#ar_aspect_ratio"} */
            aspectRatio?: (number | ("vflip" | "hflip" | "ignore" | "auto_right" | "auto_left") | (string & {})) | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
            gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
            /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
            x?: (string | number) | undefined;
            /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
            y?: (string | number) | undefined;
            /** {"text":"Controls how close to crop to the detected coordinates when using face-detection, custom-coordinate, or object-specific gravity.","url":"https://cloudinary.com/documentation/transformation_reference#z_zoom"} */
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[]) | undefined;
        /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
        gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
        /** {"text":"Controls how close to crop to the detected coordinates when using face-detection, custom-coordinate, or object-specific gravity.","url":"https://cloudinary.com/documentation/transformation_reference#z_zoom"} */
        zoom?: string | undefined;
        /** {"text":"Array of objects specifying transformations to be applied to asset."} */
        effects?: {
            /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
            angle?: (string | number) | undefined;
            /** {"text":"Applies the selected artistic filter.","url":"https://cloudinary.com/documentation/transformation_reference#e_art"} */
            art?: string | undefined;
            /** {"text":"Automatically adjusts the image brightness and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_brightness"} */
            autoBrightness?: (string | boolean) | undefined;
            /** {"text":"Automatically adjusts the image color balance and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_color"} */
            autoColor?: (string | boolean) | undefined;
            /** {"text":"Automatically adjusts the image contrast and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_contrast"} */
            autoContrast?: (string | boolean) | undefined;
            /** {"text":"Applies stripes or color adjustment to help people with common color blind conditions to differentiate between colors that are similar for them.","url":"https://cloudinary.com/documentation/transformation_reference#e_assist_colorblind"} */
            assistColorblind?: (string | boolean) | undefined;
            /** {"text":"Applies a background to empty or transparent areas.","url":"https://cloudinary.com/documentation/transformation_reference#b_background"} */
            background?: string | undefined;
            /** {"text":"Converts an image to black and white.","url":"https://cloudinary.com/documentation/transformation_reference#e_blackwhite"} */
            blackwhite?: (string | boolean) | undefined;
            /** {"text":"Applies a blurring filter to an asset.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur"} */
            blur?: (string | boolean) | undefined;
            /** {"text":"Blurs all detected faces in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur_faces"} */
            blurFaces?: (string | boolean) | undefined;
            /** {"text":"Applies a blurring filter to the region of an image specified by x, y, width and height, or an area of text. If no region is specified, the whole image is blurred.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur_region"} */
            blurRegion?: (string | boolean) | undefined;
            /** {"text":"Adds a solid border around an image or video.","url":"https://cloudinary.com/documentation/transformation_reference#bo_border"} */
            border?: string | undefined;
            /** {"text":"Adjusts the image or video brightness.","url":"https://cloudinary.com/documentation/transformation_reference#e_brightness"} */
            brightness?: (string | boolean) | undefined;
            /** {"text":"Adjusts image brightness modulation in HSB to prevent artifacts in some images.","url":"https://cloudinary.com/documentation/transformation_reference#e_brightness_hsb"} */
            brightnessHSB?: (string | boolean) | undefined;
            /** {"text":"Applies a cartoon effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_cartoonify"} */
            cartoonify?: (string | boolean) | undefined;
            /** {"text":"A qualifier that specifies the color to use with the corresponding transformation.","url":"https://cloudinary.com/documentation/transformation_reference#co_color"} */
            color?: string | undefined;
            /** {"text":"Colorizes an image. By default, gray is used for colorization. You can specify a different color using the color qualifier.","url":"https://cloudinary.com/documentation/transformation_reference#e_colorize"} */
            colorize?: string | undefined;
            /** {"text":"Adjusts an image or video contrast.","url":"https://cloudinary.com/documentation/transformation_reference#e_contrast"} */
            contrast?: (string | boolean) | undefined;
            /** {"text":"Distorts an image to a new shape by either adjusting its corners or by warping it into an arc.","url":"https://cloudinary.com/documentation/transformation_reference#e_distort"} */
            distort?: string | undefined;
            /** {"text":"Adjusts the fill light and optionally blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_fill_light"} */
            fillLight?: (string | boolean) | undefined;
            /** {"text":"Adjusts the image or video gamma level.","url":"https://cloudinary.com/documentation/transformation_reference#e_gamma"} */
            gamma?: (string | boolean) | undefined;
            /** {"text":"Applies a gradient fade effect from the edge of an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_gradient_fade"} */
            gradientFade?: (string | boolean) | undefined;
            /** {"text":"Converts an image to grayscale (multiple shades of gray).","url":"https://cloudinary.com/documentation/transformation_reference#e_grayscale"} */
            grayscale?: boolean | undefined;
            /** {"text":"Adjusts an image's colors, contrast and brightness to improve its appearance.","url":"https://cloudinary.com/documentation/transformation_reference#e_improve"} */
            improve?: (string | boolean) | undefined;
            /** {"text":"Loops a video or animated image the specified number of times.","url":"https://cloudinary.com/documentation/transformation_reference#e_loop"} */
            loop?: (boolean | number | string) | undefined;
            /** {"text":"A qualifier that blends image layers using the multiply blend mode","url":"https://cloudinary.com/documentation/transformation_reference#e_multiply"} */
            multiply?: boolean | undefined;
            /** {"text":"https://cloudinary.com/documentation/transformation_reference#e_negate","url":"https://cloudinary.com/documentation/transformation_reference#e_negate"} */
            negate?: (string | boolean) | undefined;
            /** {"text":"https://cloudinary.com/documentation/transformation_reference#e_oil_paint","url":"https://cloudinary.com/documentation/transformation_reference#e_oil_paint"} */
            oilPaint?: (string | boolean) | undefined;
            /** {"text":"Adjusts the opacity of an asset and makes it semi-transparent.","url":"https://cloudinary.com/documentation/transformation_reference#o_opacity"} */
            opacity?: (string | number) | undefined;
            /** {"text":"Adds an outline effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_outline"} */
            outline?: (string | boolean) | undefined;
            /** {"text":"Applies a pixelation effect.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate"} */
            pixelate?: (string | boolean) | undefined;
            /** {"text":"Pixelates all detected faces in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate_faces"} */
            pixelateFaces?: (string | boolean) | undefined;
            /** {"text":"Pixelates the region of an image specified by x, y, width and height, or an area of text.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate_region"} */
            pixelateRegion?: (string | boolean) | undefined;
            /** {"text":"Rounds the corners of an image or video.","url":"https://cloudinary.com/documentation/transformation_reference#r_round_corners"} */
            radius?: (string | number) | undefined;
            /** {"text":"Automatically removes red eyes in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_redeye"} */
            redeye?: (string | boolean) | undefined;
            /** {"text":"Maps an input color and those similar to the input color to corresponding shades of a specified output color.","url":"https://cloudinary.com/documentation/transformation_reference#e_replace_color"} */
            replaceColor?: string | undefined;
            /** {"text":"Adjusts an image or video saturation level.","url":"https://cloudinary.com/documentation/transformation_reference#e_saturation"} */
            saturation?: (string | boolean) | undefined;
            /** {"text":"A qualifier that blends image layers using the screen blend mode.","url":"https://cloudinary.com/documentation/transformation_reference#e_screen"} */
            screen?: boolean | undefined;
            /** {"text":"Changes the color scheme of an image to sepia.","url":"https://cloudinary.com/documentation/transformation_reference#e_sepia"} */
            sepia?: (string | boolean) | undefined;
            /** {"text":"Adds a gray shadow to the bottom right of an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_shadow"} */
            shadow?: (string | boolean) | undefined;
            /** {"text":"Applies a sharpening filter.","url":"https://cloudinary.com/documentation/transformation_reference#e_sharpen"} */
            sharpen?: (string | boolean) | undefined;
            /** {"text":"Skews an image according to the two specified values in degrees.","url":"https://cloudinary.com/documentation/transformation_reference#e_shear"} */
            shear?: string | undefined;
            /** {"text":"Simulates the way an image would appear to someone with the specified color blind condition.","url":"https://cloudinary.com/documentation/transformation_reference#e_simulate_colorblind"} */
            simulateColorblind?: (string | boolean) | undefined;
            /** {"text":"Blends an image with one or more tint colors at a specified intensity.","url":"https://cloudinary.com/documentation/transformation_reference#e_tint"} */
            tint?: (string | boolean) | undefined;
            /** {"text":"Detects and removes image edges whose color is similar to the corner pixels.","url":"https://cloudinary.com/documentation/transformation_reference#e_trim"} */
            trim?: (string | boolean) | undefined;
            /** {"text":"Applies an unsharp mask filter to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_unsharp_mask"} */
            unsharpMask?: (string | boolean) | undefined;
            /** {"text":"Vectorizes an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vectorize"} */
            vectorize?: (string | boolean) | undefined;
            /** {"text":"Applies a vibrance filter to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vibrance"} */
            vibrance?: (string | boolean) | undefined;
            /** {"text":"Applies a vignette effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vignette"} */
            vignette?: (string | boolean) | undefined;
        }[] | undefined;
        /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
        angle?: (string | number) | undefined;
        /** {"text":"Applies the selected artistic filter.","url":"https://cloudinary.com/documentation/transformation_reference#e_art"} */
        art?: string | undefined;
        /** {"text":"Automatically adjusts the image brightness and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_brightness"} */
        autoBrightness?: (string | boolean) | undefined;
        /** {"text":"Automatically adjusts the image color balance and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_color"} */
        autoColor?: (string | boolean) | undefined;
        /** {"text":"Automatically adjusts the image contrast and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_contrast"} */
        autoContrast?: (string | boolean) | undefined;
        /** {"text":"Applies stripes or color adjustment to help people with common color blind conditions to differentiate between colors that are similar for them.","url":"https://cloudinary.com/documentation/transformation_reference#e_assist_colorblind"} */
        assistColorblind?: (string | boolean) | undefined;
        /** {"text":"Applies a background to empty or transparent areas.","url":"https://cloudinary.com/documentation/transformation_reference#b_background"} */
        background?: string | undefined;
        /** {"text":"Converts an image to black and white.","url":"https://cloudinary.com/documentation/transformation_reference#e_blackwhite"} */
        blackwhite?: (string | boolean) | undefined;
        /** {"text":"Applies a blurring filter to an asset.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur"} */
        blur?: (string | boolean) | undefined;
        /** {"text":"Blurs all detected faces in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur_faces"} */
        blurFaces?: (string | boolean) | undefined;
        /** {"text":"Applies a blurring filter to the region of an image specified by x, y, width and height, or an area of text. If no region is specified, the whole image is blurred.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur_region"} */
        blurRegion?: (string | boolean) | undefined;
        /** {"text":"Adds a solid border around an image or video.","url":"https://cloudinary.com/documentation/transformation_reference#bo_border"} */
        border?: string | undefined;
        /** {"text":"Adjusts the image or video brightness.","url":"https://cloudinary.com/documentation/transformation_reference#e_brightness"} */
        brightness?: (string | boolean) | undefined;
        /** {"text":"Adjusts image brightness modulation in HSB to prevent artifacts in some images.","url":"https://cloudinary.com/documentation/transformation_reference#e_brightness_hsb"} */
        brightnessHSB?: (string | boolean) | undefined;
        /** {"text":"Applies a cartoon effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_cartoonify"} */
        cartoonify?: (string | boolean) | undefined;
        /** {"text":"A qualifier that specifies the color to use with the corresponding transformation.","url":"https://cloudinary.com/documentation/transformation_reference#co_color"} */
        color?: string | undefined;
        /** {"text":"Colorizes an image. By default, gray is used for colorization. You can specify a different color using the color qualifier.","url":"https://cloudinary.com/documentation/transformation_reference#e_colorize"} */
        colorize?: string | undefined;
        /** {"text":"Adjusts an image or video contrast.","url":"https://cloudinary.com/documentation/transformation_reference#e_contrast"} */
        contrast?: (string | boolean) | undefined;
        /** {"text":"Distorts an image to a new shape by either adjusting its corners or by warping it into an arc.","url":"https://cloudinary.com/documentation/transformation_reference#e_distort"} */
        distort?: string | undefined;
        /** {"text":"Adjusts the fill light and optionally blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_fill_light"} */
        fillLight?: (string | boolean) | undefined;
        /** {"text":"Adjusts the image or video gamma level.","url":"https://cloudinary.com/documentation/transformation_reference#e_gamma"} */
        gamma?: (string | boolean) | undefined;
        /** {"text":"Applies a gradient fade effect from the edge of an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_gradient_fade"} */
        gradientFade?: (string | boolean) | undefined;
        /** {"text":"Converts an image to grayscale (multiple shades of gray).","url":"https://cloudinary.com/documentation/transformation_reference#e_grayscale"} */
        grayscale?: boolean | undefined;
        /** {"text":"Adjusts an image's colors, contrast and brightness to improve its appearance.","url":"https://cloudinary.com/documentation/transformation_reference#e_improve"} */
        improve?: (string | boolean) | undefined;
        /** {"text":"Loops a video or animated image the specified number of times.","url":"https://cloudinary.com/documentation/transformation_reference#e_loop"} */
        loop?: (boolean | number | string) | undefined;
        /** {"text":"A qualifier that blends image layers using the multiply blend mode","url":"https://cloudinary.com/documentation/transformation_reference#e_multiply"} */
        multiply?: boolean | undefined;
        /** {"text":"https://cloudinary.com/documentation/transformation_reference#e_negate","url":"https://cloudinary.com/documentation/transformation_reference#e_negate"} */
        negate?: (string | boolean) | undefined;
        /** {"text":"https://cloudinary.com/documentation/transformation_reference#e_oil_paint","url":"https://cloudinary.com/documentation/transformation_reference#e_oil_paint"} */
        oilPaint?: (string | boolean) | undefined;
        /** {"text":"Adjusts the opacity of an asset and makes it semi-transparent.","url":"https://cloudinary.com/documentation/transformation_reference#o_opacity"} */
        opacity?: (string | number) | undefined;
        /** {"text":"Adds an outline effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_outline"} */
        outline?: (string | boolean) | undefined;
        /** {"text":"Applies a pixelation effect.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate"} */
        pixelate?: (string | boolean) | undefined;
        /** {"text":"Pixelates all detected faces in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate_faces"} */
        pixelateFaces?: (string | boolean) | undefined;
        /** {"text":"Pixelates the region of an image specified by x, y, width and height, or an area of text.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate_region"} */
        pixelateRegion?: (string | boolean) | undefined;
        /** {"text":"Rounds the corners of an image or video.","url":"https://cloudinary.com/documentation/transformation_reference#r_round_corners"} */
        radius?: (string | number) | undefined;
        /** {"text":"Automatically removes red eyes in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_redeye"} */
        redeye?: (string | boolean) | undefined;
        /** {"text":"Maps an input color and those similar to the input color to corresponding shades of a specified output color.","url":"https://cloudinary.com/documentation/transformation_reference#e_replace_color"} */
        replaceColor?: string | undefined;
        /** {"text":"Adjusts an image or video saturation level.","url":"https://cloudinary.com/documentation/transformation_reference#e_saturation"} */
        saturation?: (string | boolean) | undefined;
        /** {"text":"A qualifier that blends image layers using the screen blend mode.","url":"https://cloudinary.com/documentation/transformation_reference#e_screen"} */
        screen?: boolean | undefined;
        /** {"text":"Changes the color scheme of an image to sepia.","url":"https://cloudinary.com/documentation/transformation_reference#e_sepia"} */
        sepia?: (string | boolean) | undefined;
        /** {"text":"Adds a gray shadow to the bottom right of an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_shadow"} */
        shadow?: (string | boolean) | undefined;
        /** {"text":"Applies a sharpening filter.","url":"https://cloudinary.com/documentation/transformation_reference#e_sharpen"} */
        sharpen?: (string | boolean) | undefined;
        /** {"text":"Skews an image according to the two specified values in degrees.","url":"https://cloudinary.com/documentation/transformation_reference#e_shear"} */
        shear?: string | undefined;
        /** {"text":"Simulates the way an image would appear to someone with the specified color blind condition.","url":"https://cloudinary.com/documentation/transformation_reference#e_simulate_colorblind"} */
        simulateColorblind?: (string | boolean) | undefined;
        /** {"text":"Blends an image with one or more tint colors at a specified intensity.","url":"https://cloudinary.com/documentation/transformation_reference#e_tint"} */
        tint?: (string | boolean) | undefined;
        /** {"text":"Detects and removes image edges whose color is similar to the corner pixels.","url":"https://cloudinary.com/documentation/transformation_reference#e_trim"} */
        trim?: (string | boolean) | undefined;
        /** {"text":"Applies an unsharp mask filter to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_unsharp_mask"} */
        unsharpMask?: (string | boolean) | undefined;
        /** {"text":"Vectorizes an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vectorize"} */
        vectorize?: (string | boolean) | undefined;
        /** {"text":"Applies a vibrance filter to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vibrance"} */
        vibrance?: (string | boolean) | undefined;
        /** {"text":"Applies a vignette effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vignette"} */
        vignette?: (string | boolean) | undefined;
        /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
        flags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
        /** {"text":"Named transformations to apply to asset.","url":"https://cloudinary.com/documentation/image_transformations#named_transformations"} */
        namedTransformations?: (string | string[]) | undefined;
        /** {"text":"Deprecated: use namedTransformations instead","url":"https://cloudinary.com/documentation/image_transformations#named_transformations"} */
        transformations?: (string | string[]) | undefined;
        /** {"text":"Image or text layer that is applied on top of the base image.","url":"https://cloudinary.com/documentation/transformation_reference#l_layer"} */
        overlay?: {
            appliedEffects?: {}[] | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            appliedFlags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            effects?: {}[] | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            crop?: ("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            flags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            position?: {
                /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
                angle?: (string | number) | undefined;
                /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
                gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
                /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                x?: (string | number) | undefined;
                /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                y?: (string | number) | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: (string | {
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: (string | number) | undefined;
                fontWeight?: string | undefined;
                hinting?: (string | number) | undefined;
                letterSpacing?: (string | number) | undefined;
                lineSpacing?: (string | number) | undefined;
                stroke?: string | undefined;
                text: string;
            }) | undefined;
            url?: string | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
        } | undefined;
        /** {"text":"Image or text layers that are applied on top of the base image.","url":"https://cloudinary.com/documentation/transformation_reference#l_layer"} */
        overlays?: {
            appliedEffects?: {}[] | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            appliedFlags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            effects?: {}[] | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            crop?: ("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            flags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            position?: {
                /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
                angle?: (string | number) | undefined;
                /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
                gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
                /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                x?: (string | number) | undefined;
                /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                y?: (string | number) | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: (string | {
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: (string | number) | undefined;
                fontWeight?: string | undefined;
                hinting?: (string | number) | undefined;
                letterSpacing?: (string | number) | undefined;
                lineSpacing?: (string | number) | undefined;
                stroke?: string | undefined;
                text: string;
            }) | undefined;
            url?: string | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
        }[] | undefined;
        /** {"text":"Text to be overlaid on asset.","url":"https://cloudinary.com/documentation/image_transformations#transformation_url_structure"} */
        text?: string | undefined;
        /** {"text":"Preserves transformations from a Cloudinary URL when using using a Cloudinary URL as the asset source (src)."} */
        preserveTransformations?: boolean | undefined;
        /** {"text":"Array of transformation parameters using the Cloudinary URL API to apply to an asset.","url":"https://cloudinary.com/documentation/transformation_reference"} */
        rawTransformations?: (string | string[]) | undefined;
        /** {"text":"Removes the background of an image using the Cloudinary AI Background Removal Add-On (Required).","url":"https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon"} */
        removeBackground?: boolean | undefined;
        /** {"text":"Runs a sanitizer on SVG images.","url":"https://cloudinary.com/documentation/transformation_reference#fl_sanitize"} */
        sanitize?: boolean | undefined;
        /** {"text":"Configures the URL to include an SEO-friendly suffix in the URL","url":"https://cloudinary.com/documentation/advanced_url_delivery_options#seo_friendly_media_asset_urls"} */
        seoSuffix?: string | undefined;
        /** {"text":"Public ID of image that is applied under the base image.","url":"https://cloudinary.com/documentation/transformation_reference#l_layer"} */
        underlay?: string | undefined;
        /** {"text":"Image layers that are applied under the base image.","url":"https://cloudinary.com/documentation/transformation_reference#l_layer"} */
        underlays?: {
            appliedEffects?: {}[] | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            appliedFlags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            effects?: {}[] | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            crop?: ("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            flags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            position?: {
                /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
                angle?: (string | number) | undefined;
                /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
                gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
                /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                x?: (string | number) | undefined;
                /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                y?: (string | number) | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
        }[] | undefined;
        /** {"text":"Custom version number to apply to asset URL.","url":"https://cloudinary.com/documentation/advanced_url_delivery_options#asset_versions"} */
        version?: (number | string) | undefined;
        /** {"text":"Configures the default image to use in case the given public ID is not available. Must include file extension.","url":"https://cloudinary.com/documentation/transformation_reference#d_default_image"} */
        defaultImage?: string | undefined;
        /** {"text":"Uses AI to analyze an image and make adjustments to enhance the appeal of the image.","url":"https://cloudinary.com/documentation/transformation_reference#e_enhance"} */
        enhance?: boolean | undefined;
        /** {"text":"Extracts an area or multiple areas of an image, described in natural language.","url":"https://cloudinary.com/documentation/transformation_reference#e_extract"} */
        extract?: ((string | undefined) | (string[] | undefined) | {
            invert?: boolean | undefined;
            /** {"text":"Whether to keep the content of the extracted area, or to replace it with a mask.","url":"https://cloudinary.com/documentation/transformation_reference#e_extract"} */
            mode?: ("content" | "mask") | undefined;
            /** {"text":"Should generative AI features detect multiple instances."} */
            multiple?: boolean | undefined;
            prompt?: (string | string[]) | undefined;
        }) | undefined;
        /** {"text":"Uses Generative Fill to extended padded image with AI","url":"https://cloudinary.com/documentation/transformation_reference#b_gen_fill"} */
        fillBackground?: (boolean | {
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            crop?: ("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | undefined;
            /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
            gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
            prompt?: string | undefined;
        }) | undefined;
        /** {"text":"Uses generative AI to recolor parts of your image, maintaining the relative shading.","url":"https://cloudinary.com/documentation/transformation_reference#e_gen_recolor"} */
        recolor?: ((string | string[]) | {
            prompt?: (string | string[]) | undefined;
            to?: string | undefined;
            multiple?: boolean | undefined;
        }) | undefined;
        /** {"text":"Applies zooming and/or panning to an image, resulting in a video or animated image.","url":"https://cloudinary.com/documentation/transformation_reference#e_zoompan"} */
        remove?: ((string | string[]) | {
            prompt?: (string | string[]) | undefined;
            region?: (number[] | number[][]) | undefined;
            multiple?: boolean | undefined;
            removeShadow?: boolean | undefined;
        }) | undefined;
        /** {"text":"Uses generative AI to replace parts of your image with something else.","url":"https://cloudinary.com/documentation/transformation_reference#e_gen_replace"} */
        replace?: (string[] | boolean[] | {
            to: string;
            from: string;
            preserveGeometry?: boolean | undefined;
        }) | undefined;
        /** {"text":"Replaces the background of an image with an AI-generated background.","url":"https://cloudinary.com/documentation/transformation_reference#e_gen_background_replace"} */
        replaceBackground?: (boolean | string | {
            seed?: number | undefined;
            prompt?: string | undefined;
        }) | undefined;
        /** {"text":"Uses generative AI to restore details in poor quality images or images that may have become degraded through repeated processing and compression.","url":"https://cloudinary.com/documentation/transformation_reference#e_gen_restore"} */
        restore?: boolean | undefined;
        /** {"text":"Applies zooming and/or panning to an image, resulting in a video or animated image.","url":"https://cloudinary.com/documentation/transformation_reference#e_zoompan"} */
        zoompan?: (string | boolean | {
            /** {"text":"Loops a video or animated image the specified number of times.","url":"https://cloudinary.com/documentation/transformation_reference#e_loop"} */
            loop?: (boolean | number | string) | undefined;
            options: string;
        }) | undefined;
    } | {
        /** {"text":"The type of asset to deliver.","url":"https://cloudinary.com/documentation/image_transformations#transformation_url_structure"} */
        assetType?: string | undefined;
        /** {"text":"Delivery method of the asset.","url":"https://cloudinary.com/documentation/image_transformations#delivery_types"} */
        deliveryType?: string | undefined;
        /** {"text":"Delivery method of the asset.","url":"https://cloudinary.com/documentation/image_transformations#delivery_types"} */
        dpr?: (string | number) | undefined;
        /** {"text":"Converts (if necessary) and delivers an asset in the specified format.","url":"https://cloudinary.com/documentation/transformation_reference#f_format"} */
        format?: string | undefined;
        /** {"text":"Height of the given asset."} */
        height?: (string | number) | undefined;
        /** {"text":"Quality of the delivered asset","url":"https://cloudinary.com/documentation/transformation_reference#q_quality"} */
        quality?: (string | number | string) | undefined;
        /** {"text":"Cloudinary Public ID or versioned Cloudinary URL (/v1234/)"} */
        src: string;
        /** {"text":"Gives you the ability to have more control over what transformations are permitted to be used from your Cloudinary account.","url":"https://cloudinary.com/documentation/control_access_to_media#strict_transformations"} */
        strictTransformations?: boolean | undefined;
        /** {"text":"Width of the given asset."} */
        width?: (string | number) | undefined;
        /** {"text":"Crops or resizes the asset to a new aspect ratio.","url":"https://cloudinary.com/documentation/transformation_reference#ar_aspect_ratio"} */
        aspectRatio?: (number | ("vflip" | "hflip" | "ignore" | "auto_right" | "auto_left") | (string & {})) | undefined;
        crop?: (("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | {
            /** {"text":"Crops or resizes the asset to a new aspect ratio.","url":"https://cloudinary.com/documentation/transformation_reference#ar_aspect_ratio"} */
            aspectRatio?: (number | ("vflip" | "hflip" | "ignore" | "auto_right" | "auto_left") | (string & {})) | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
            gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
            /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
            x?: (string | number) | undefined;
            /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
            y?: (string | number) | undefined;
            /** {"text":"Controls how close to crop to the detected coordinates when using face-detection, custom-coordinate, or object-specific gravity.","url":"https://cloudinary.com/documentation/transformation_reference#z_zoom"} */
            zoom?: string | undefined;
            source?: boolean | undefined;
        } | {
            /** {"text":"Crops or resizes the asset to a new aspect ratio.","url":"https://cloudinary.com/documentation/transformation_reference#ar_aspect_ratio"} */
            aspectRatio?: (number | ("vflip" | "hflip" | "ignore" | "auto_right" | "auto_left") | (string & {})) | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            type: "auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb";
            /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
            gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
            /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
            x?: (string | number) | undefined;
            /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
            y?: (string | number) | undefined;
            /** {"text":"Controls how close to crop to the detected coordinates when using face-detection, custom-coordinate, or object-specific gravity.","url":"https://cloudinary.com/documentation/transformation_reference#z_zoom"} */
            zoom?: string | undefined;
            source?: boolean | undefined;
        }[]) | undefined;
        /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
        gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
        /** {"text":"Controls how close to crop to the detected coordinates when using face-detection, custom-coordinate, or object-specific gravity.","url":"https://cloudinary.com/documentation/transformation_reference#z_zoom"} */
        zoom?: string | undefined;
        /** {"text":"Array of objects specifying transformations to be applied to asset."} */
        effects?: {
            /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
            angle?: (string | number) | undefined;
            /** {"text":"Applies the selected artistic filter.","url":"https://cloudinary.com/documentation/transformation_reference#e_art"} */
            art?: string | undefined;
            /** {"text":"Automatically adjusts the image brightness and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_brightness"} */
            autoBrightness?: (string | boolean) | undefined;
            /** {"text":"Automatically adjusts the image color balance and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_color"} */
            autoColor?: (string | boolean) | undefined;
            /** {"text":"Automatically adjusts the image contrast and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_contrast"} */
            autoContrast?: (string | boolean) | undefined;
            /** {"text":"Applies stripes or color adjustment to help people with common color blind conditions to differentiate between colors that are similar for them.","url":"https://cloudinary.com/documentation/transformation_reference#e_assist_colorblind"} */
            assistColorblind?: (string | boolean) | undefined;
            /** {"text":"Applies a background to empty or transparent areas.","url":"https://cloudinary.com/documentation/transformation_reference#b_background"} */
            background?: string | undefined;
            /** {"text":"Converts an image to black and white.","url":"https://cloudinary.com/documentation/transformation_reference#e_blackwhite"} */
            blackwhite?: (string | boolean) | undefined;
            /** {"text":"Applies a blurring filter to an asset.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur"} */
            blur?: (string | boolean) | undefined;
            /** {"text":"Blurs all detected faces in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur_faces"} */
            blurFaces?: (string | boolean) | undefined;
            /** {"text":"Applies a blurring filter to the region of an image specified by x, y, width and height, or an area of text. If no region is specified, the whole image is blurred.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur_region"} */
            blurRegion?: (string | boolean) | undefined;
            /** {"text":"Adds a solid border around an image or video.","url":"https://cloudinary.com/documentation/transformation_reference#bo_border"} */
            border?: string | undefined;
            /** {"text":"Adjusts the image or video brightness.","url":"https://cloudinary.com/documentation/transformation_reference#e_brightness"} */
            brightness?: (string | boolean) | undefined;
            /** {"text":"Adjusts image brightness modulation in HSB to prevent artifacts in some images.","url":"https://cloudinary.com/documentation/transformation_reference#e_brightness_hsb"} */
            brightnessHSB?: (string | boolean) | undefined;
            /** {"text":"Applies a cartoon effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_cartoonify"} */
            cartoonify?: (string | boolean) | undefined;
            /** {"text":"A qualifier that specifies the color to use with the corresponding transformation.","url":"https://cloudinary.com/documentation/transformation_reference#co_color"} */
            color?: string | undefined;
            /** {"text":"Colorizes an image. By default, gray is used for colorization. You can specify a different color using the color qualifier.","url":"https://cloudinary.com/documentation/transformation_reference#e_colorize"} */
            colorize?: string | undefined;
            /** {"text":"Adjusts an image or video contrast.","url":"https://cloudinary.com/documentation/transformation_reference#e_contrast"} */
            contrast?: (string | boolean) | undefined;
            /** {"text":"Distorts an image to a new shape by either adjusting its corners or by warping it into an arc.","url":"https://cloudinary.com/documentation/transformation_reference#e_distort"} */
            distort?: string | undefined;
            /** {"text":"Adjusts the fill light and optionally blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_fill_light"} */
            fillLight?: (string | boolean) | undefined;
            /** {"text":"Adjusts the image or video gamma level.","url":"https://cloudinary.com/documentation/transformation_reference#e_gamma"} */
            gamma?: (string | boolean) | undefined;
            /** {"text":"Applies a gradient fade effect from the edge of an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_gradient_fade"} */
            gradientFade?: (string | boolean) | undefined;
            /** {"text":"Converts an image to grayscale (multiple shades of gray).","url":"https://cloudinary.com/documentation/transformation_reference#e_grayscale"} */
            grayscale?: boolean | undefined;
            /** {"text":"Adjusts an image's colors, contrast and brightness to improve its appearance.","url":"https://cloudinary.com/documentation/transformation_reference#e_improve"} */
            improve?: (string | boolean) | undefined;
            /** {"text":"Loops a video or animated image the specified number of times.","url":"https://cloudinary.com/documentation/transformation_reference#e_loop"} */
            loop?: (boolean | number | string) | undefined;
            /** {"text":"A qualifier that blends image layers using the multiply blend mode","url":"https://cloudinary.com/documentation/transformation_reference#e_multiply"} */
            multiply?: boolean | undefined;
            /** {"text":"https://cloudinary.com/documentation/transformation_reference#e_negate","url":"https://cloudinary.com/documentation/transformation_reference#e_negate"} */
            negate?: (string | boolean) | undefined;
            /** {"text":"https://cloudinary.com/documentation/transformation_reference#e_oil_paint","url":"https://cloudinary.com/documentation/transformation_reference#e_oil_paint"} */
            oilPaint?: (string | boolean) | undefined;
            /** {"text":"Adjusts the opacity of an asset and makes it semi-transparent.","url":"https://cloudinary.com/documentation/transformation_reference#o_opacity"} */
            opacity?: (string | number) | undefined;
            /** {"text":"Adds an outline effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_outline"} */
            outline?: (string | boolean) | undefined;
            /** {"text":"Applies a pixelation effect.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate"} */
            pixelate?: (string | boolean) | undefined;
            /** {"text":"Pixelates all detected faces in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate_faces"} */
            pixelateFaces?: (string | boolean) | undefined;
            /** {"text":"Pixelates the region of an image specified by x, y, width and height, or an area of text.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate_region"} */
            pixelateRegion?: (string | boolean) | undefined;
            /** {"text":"Rounds the corners of an image or video.","url":"https://cloudinary.com/documentation/transformation_reference#r_round_corners"} */
            radius?: (string | number) | undefined;
            /** {"text":"Automatically removes red eyes in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_redeye"} */
            redeye?: (string | boolean) | undefined;
            /** {"text":"Maps an input color and those similar to the input color to corresponding shades of a specified output color.","url":"https://cloudinary.com/documentation/transformation_reference#e_replace_color"} */
            replaceColor?: string | undefined;
            /** {"text":"Adjusts an image or video saturation level.","url":"https://cloudinary.com/documentation/transformation_reference#e_saturation"} */
            saturation?: (string | boolean) | undefined;
            /** {"text":"A qualifier that blends image layers using the screen blend mode.","url":"https://cloudinary.com/documentation/transformation_reference#e_screen"} */
            screen?: boolean | undefined;
            /** {"text":"Changes the color scheme of an image to sepia.","url":"https://cloudinary.com/documentation/transformation_reference#e_sepia"} */
            sepia?: (string | boolean) | undefined;
            /** {"text":"Adds a gray shadow to the bottom right of an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_shadow"} */
            shadow?: (string | boolean) | undefined;
            /** {"text":"Applies a sharpening filter.","url":"https://cloudinary.com/documentation/transformation_reference#e_sharpen"} */
            sharpen?: (string | boolean) | undefined;
            /** {"text":"Skews an image according to the two specified values in degrees.","url":"https://cloudinary.com/documentation/transformation_reference#e_shear"} */
            shear?: string | undefined;
            /** {"text":"Simulates the way an image would appear to someone with the specified color blind condition.","url":"https://cloudinary.com/documentation/transformation_reference#e_simulate_colorblind"} */
            simulateColorblind?: (string | boolean) | undefined;
            /** {"text":"Blends an image with one or more tint colors at a specified intensity.","url":"https://cloudinary.com/documentation/transformation_reference#e_tint"} */
            tint?: (string | boolean) | undefined;
            /** {"text":"Detects and removes image edges whose color is similar to the corner pixels.","url":"https://cloudinary.com/documentation/transformation_reference#e_trim"} */
            trim?: (string | boolean) | undefined;
            /** {"text":"Applies an unsharp mask filter to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_unsharp_mask"} */
            unsharpMask?: (string | boolean) | undefined;
            /** {"text":"Vectorizes an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vectorize"} */
            vectorize?: (string | boolean) | undefined;
            /** {"text":"Applies a vibrance filter to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vibrance"} */
            vibrance?: (string | boolean) | undefined;
            /** {"text":"Applies a vignette effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vignette"} */
            vignette?: (string | boolean) | undefined;
        }[] | undefined;
        /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
        angle?: (string | number) | undefined;
        /** {"text":"Applies the selected artistic filter.","url":"https://cloudinary.com/documentation/transformation_reference#e_art"} */
        art?: string | undefined;
        /** {"text":"Automatically adjusts the image brightness and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_brightness"} */
        autoBrightness?: (string | boolean) | undefined;
        /** {"text":"Automatically adjusts the image color balance and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_color"} */
        autoColor?: (string | boolean) | undefined;
        /** {"text":"Automatically adjusts the image contrast and blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_auto_contrast"} */
        autoContrast?: (string | boolean) | undefined;
        /** {"text":"Applies stripes or color adjustment to help people with common color blind conditions to differentiate between colors that are similar for them.","url":"https://cloudinary.com/documentation/transformation_reference#e_assist_colorblind"} */
        assistColorblind?: (string | boolean) | undefined;
        /** {"text":"Applies a background to empty or transparent areas.","url":"https://cloudinary.com/documentation/transformation_reference#b_background"} */
        background?: string | undefined;
        /** {"text":"Converts an image to black and white.","url":"https://cloudinary.com/documentation/transformation_reference#e_blackwhite"} */
        blackwhite?: (string | boolean) | undefined;
        /** {"text":"Applies a blurring filter to an asset.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur"} */
        blur?: (string | boolean) | undefined;
        /** {"text":"Blurs all detected faces in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur_faces"} */
        blurFaces?: (string | boolean) | undefined;
        /** {"text":"Applies a blurring filter to the region of an image specified by x, y, width and height, or an area of text. If no region is specified, the whole image is blurred.","url":"https://cloudinary.com/documentation/transformation_reference#e_blur_region"} */
        blurRegion?: (string | boolean) | undefined;
        /** {"text":"Adds a solid border around an image or video.","url":"https://cloudinary.com/documentation/transformation_reference#bo_border"} */
        border?: string | undefined;
        /** {"text":"Adjusts the image or video brightness.","url":"https://cloudinary.com/documentation/transformation_reference#e_brightness"} */
        brightness?: (string | boolean) | undefined;
        /** {"text":"Adjusts image brightness modulation in HSB to prevent artifacts in some images.","url":"https://cloudinary.com/documentation/transformation_reference#e_brightness_hsb"} */
        brightnessHSB?: (string | boolean) | undefined;
        /** {"text":"Applies a cartoon effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_cartoonify"} */
        cartoonify?: (string | boolean) | undefined;
        /** {"text":"A qualifier that specifies the color to use with the corresponding transformation.","url":"https://cloudinary.com/documentation/transformation_reference#co_color"} */
        color?: string | undefined;
        /** {"text":"Colorizes an image. By default, gray is used for colorization. You can specify a different color using the color qualifier.","url":"https://cloudinary.com/documentation/transformation_reference#e_colorize"} */
        colorize?: string | undefined;
        /** {"text":"Adjusts an image or video contrast.","url":"https://cloudinary.com/documentation/transformation_reference#e_contrast"} */
        contrast?: (string | boolean) | undefined;
        /** {"text":"Distorts an image to a new shape by either adjusting its corners or by warping it into an arc.","url":"https://cloudinary.com/documentation/transformation_reference#e_distort"} */
        distort?: string | undefined;
        /** {"text":"Adjusts the fill light and optionally blends the result with the original image.","url":"https://cloudinary.com/documentation/transformation_reference#e_fill_light"} */
        fillLight?: (string | boolean) | undefined;
        /** {"text":"Adjusts the image or video gamma level.","url":"https://cloudinary.com/documentation/transformation_reference#e_gamma"} */
        gamma?: (string | boolean) | undefined;
        /** {"text":"Applies a gradient fade effect from the edge of an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_gradient_fade"} */
        gradientFade?: (string | boolean) | undefined;
        /** {"text":"Converts an image to grayscale (multiple shades of gray).","url":"https://cloudinary.com/documentation/transformation_reference#e_grayscale"} */
        grayscale?: boolean | undefined;
        /** {"text":"Adjusts an image's colors, contrast and brightness to improve its appearance.","url":"https://cloudinary.com/documentation/transformation_reference#e_improve"} */
        improve?: (string | boolean) | undefined;
        /** {"text":"Loops a video or animated image the specified number of times.","url":"https://cloudinary.com/documentation/transformation_reference#e_loop"} */
        loop?: (boolean | number | string) | undefined;
        /** {"text":"A qualifier that blends image layers using the multiply blend mode","url":"https://cloudinary.com/documentation/transformation_reference#e_multiply"} */
        multiply?: boolean | undefined;
        /** {"text":"https://cloudinary.com/documentation/transformation_reference#e_negate","url":"https://cloudinary.com/documentation/transformation_reference#e_negate"} */
        negate?: (string | boolean) | undefined;
        /** {"text":"https://cloudinary.com/documentation/transformation_reference#e_oil_paint","url":"https://cloudinary.com/documentation/transformation_reference#e_oil_paint"} */
        oilPaint?: (string | boolean) | undefined;
        /** {"text":"Adjusts the opacity of an asset and makes it semi-transparent.","url":"https://cloudinary.com/documentation/transformation_reference#o_opacity"} */
        opacity?: (string | number) | undefined;
        /** {"text":"Adds an outline effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_outline"} */
        outline?: (string | boolean) | undefined;
        /** {"text":"Applies a pixelation effect.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate"} */
        pixelate?: (string | boolean) | undefined;
        /** {"text":"Pixelates all detected faces in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate_faces"} */
        pixelateFaces?: (string | boolean) | undefined;
        /** {"text":"Pixelates the region of an image specified by x, y, width and height, or an area of text.","url":"https://cloudinary.com/documentation/transformation_reference#e_pixelate_region"} */
        pixelateRegion?: (string | boolean) | undefined;
        /** {"text":"Rounds the corners of an image or video.","url":"https://cloudinary.com/documentation/transformation_reference#r_round_corners"} */
        radius?: (string | number) | undefined;
        /** {"text":"Automatically removes red eyes in an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_redeye"} */
        redeye?: (string | boolean) | undefined;
        /** {"text":"Maps an input color and those similar to the input color to corresponding shades of a specified output color.","url":"https://cloudinary.com/documentation/transformation_reference#e_replace_color"} */
        replaceColor?: string | undefined;
        /** {"text":"Adjusts an image or video saturation level.","url":"https://cloudinary.com/documentation/transformation_reference#e_saturation"} */
        saturation?: (string | boolean) | undefined;
        /** {"text":"A qualifier that blends image layers using the screen blend mode.","url":"https://cloudinary.com/documentation/transformation_reference#e_screen"} */
        screen?: boolean | undefined;
        /** {"text":"Changes the color scheme of an image to sepia.","url":"https://cloudinary.com/documentation/transformation_reference#e_sepia"} */
        sepia?: (string | boolean) | undefined;
        /** {"text":"Adds a gray shadow to the bottom right of an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_shadow"} */
        shadow?: (string | boolean) | undefined;
        /** {"text":"Applies a sharpening filter.","url":"https://cloudinary.com/documentation/transformation_reference#e_sharpen"} */
        sharpen?: (string | boolean) | undefined;
        /** {"text":"Skews an image according to the two specified values in degrees.","url":"https://cloudinary.com/documentation/transformation_reference#e_shear"} */
        shear?: string | undefined;
        /** {"text":"Simulates the way an image would appear to someone with the specified color blind condition.","url":"https://cloudinary.com/documentation/transformation_reference#e_simulate_colorblind"} */
        simulateColorblind?: (string | boolean) | undefined;
        /** {"text":"Blends an image with one or more tint colors at a specified intensity.","url":"https://cloudinary.com/documentation/transformation_reference#e_tint"} */
        tint?: (string | boolean) | undefined;
        /** {"text":"Detects and removes image edges whose color is similar to the corner pixels.","url":"https://cloudinary.com/documentation/transformation_reference#e_trim"} */
        trim?: (string | boolean) | undefined;
        /** {"text":"Applies an unsharp mask filter to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_unsharp_mask"} */
        unsharpMask?: (string | boolean) | undefined;
        /** {"text":"Vectorizes an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vectorize"} */
        vectorize?: (string | boolean) | undefined;
        /** {"text":"Applies a vibrance filter to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vibrance"} */
        vibrance?: (string | boolean) | undefined;
        /** {"text":"Applies a vignette effect to an image.","url":"https://cloudinary.com/documentation/transformation_reference#e_vignette"} */
        vignette?: (string | boolean) | undefined;
        /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
        flags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
        /** {"text":"Named transformations to apply to asset.","url":"https://cloudinary.com/documentation/image_transformations#named_transformations"} */
        namedTransformations?: (string | string[]) | undefined;
        /** {"text":"Deprecated: use namedTransformations instead","url":"https://cloudinary.com/documentation/image_transformations#named_transformations"} */
        transformations?: (string | string[]) | undefined;
        /** {"text":"Image or text layer that is applied on top of the base image.","url":"https://cloudinary.com/documentation/transformation_reference#l_layer"} */
        overlay?: {
            appliedEffects?: {}[] | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            appliedFlags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            effects?: {}[] | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            crop?: ("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            flags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            position?: {
                /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
                angle?: (string | number) | undefined;
                /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
                gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
                /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                x?: (string | number) | undefined;
                /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                y?: (string | number) | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: (string | {
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: (string | number) | undefined;
                fontWeight?: string | undefined;
                hinting?: (string | number) | undefined;
                letterSpacing?: (string | number) | undefined;
                lineSpacing?: (string | number) | undefined;
                stroke?: string | undefined;
                text: string;
            }) | undefined;
            url?: string | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
        } | undefined;
        /** {"text":"Image or text layers that are applied on top of the base image.","url":"https://cloudinary.com/documentation/transformation_reference#l_layer"} */
        overlays?: {
            appliedEffects?: {}[] | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            appliedFlags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            effects?: {}[] | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            crop?: ("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            flags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            position?: {
                /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
                angle?: (string | number) | undefined;
                /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
                gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
                /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                x?: (string | number) | undefined;
                /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                y?: (string | number) | undefined;
            } | undefined;
            publicId?: string | undefined;
            text?: (string | {
                alignment?: string | undefined;
                antialias?: string | undefined;
                border?: string | undefined;
                color?: string | undefined;
                fontFamily?: string | undefined;
                fontSize?: number | undefined;
                fontStyle?: (string | number) | undefined;
                fontWeight?: string | undefined;
                hinting?: (string | number) | undefined;
                letterSpacing?: (string | number) | undefined;
                lineSpacing?: (string | number) | undefined;
                stroke?: string | undefined;
                text: string;
            }) | undefined;
            url?: string | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
        }[] | undefined;
        /** {"text":"Text to be overlaid on asset.","url":"https://cloudinary.com/documentation/image_transformations#transformation_url_structure"} */
        text?: string | undefined;
        /** {"text":"Preserves transformations from a Cloudinary URL when using using a Cloudinary URL as the asset source (src)."} */
        preserveTransformations?: boolean | undefined;
        /** {"text":"Array of transformation parameters using the Cloudinary URL API to apply to an asset.","url":"https://cloudinary.com/documentation/transformation_reference"} */
        rawTransformations?: (string | string[]) | undefined;
        /** {"text":"Removes the background of an image using the Cloudinary AI Background Removal Add-On (Required).","url":"https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon"} */
        removeBackground?: boolean | undefined;
        /** {"text":"Runs a sanitizer on SVG images.","url":"https://cloudinary.com/documentation/transformation_reference#fl_sanitize"} */
        sanitize?: boolean | undefined;
        /** {"text":"Configures the URL to include an SEO-friendly suffix in the URL","url":"https://cloudinary.com/documentation/advanced_url_delivery_options#seo_friendly_media_asset_urls"} */
        seoSuffix?: string | undefined;
        /** {"text":"Public ID of image that is applied under the base image.","url":"https://cloudinary.com/documentation/transformation_reference#l_layer"} */
        underlay?: string | undefined;
        /** {"text":"Image layers that are applied under the base image.","url":"https://cloudinary.com/documentation/transformation_reference#l_layer"} */
        underlays?: {
            appliedEffects?: {}[] | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            appliedFlags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            effects?: {}[] | undefined;
            /** {"text":"Mode to use when cropping an asset.","url":"https://cloudinary.com/documentation/transformation_reference#c_crop_resize"} */
            crop?: ("auto" | "crop" | "fill" | "fill_pad" | "fit" | "imagga_crop" | "imagga_scale" | "lfill" | "limit" | "lpad" | "mfit" | "mpad" | "pad" | "scale" | "thumb") | undefined;
            /** {"text":"Alters the regular behavior of another transformation or the overall delivery behavior.","url":"https://cloudinary.com/documentation/transformation_reference#fl_flag"} */
            flags?: (("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform") | ("animated" | "any_format" | "apng" | "attachment" | "awebp" | "clip" | "clip_evenodd" | "cutter" | "force_icc" | "force_strip" | "getinfo" | "group4" | "hlsv3" | "ignore_aspect_ratio" | "ignore_mask_channels" | "immutable_cache" | "keep_attribution" | "keep_dar" | "keep_iptc" | "layer_apply" | "lossy" | "mono" | "no_overflow" | "no_stream" | "png8_fl_png24_fl_png32" | "preserve_transparency" | "progressive" | "rasterize" | "region_relative" | "relative" | "replace_image" | "sanitize" | "splice" | "streaming_attachment" | "strip_profile" | "text_disallow_overflow" | "text_no_trim" | "tiff8_lzw" | "tiled" | "truncate_ts" | "waveform")[]) | undefined;
            /** {"text":"A qualifier that determines the height of a transformed asset or an overlay.","url":"https://cloudinary.com/documentation/transformation_reference#h_height"} */
            height?: (number | string) | undefined;
            position?: {
                /** {"text":"Rotates or flips an asset by the specified number of degrees or automatically according to its orientation or available metadata.","url":"https://cloudinary.com/documentation/transformation_reference#a_angle"} */
                angle?: (string | number) | undefined;
                /** {"text":"Determines which part of an asset to focus on. Note: Default of auto is applied for supported crop modes only.","url":"https://cloudinary.com/documentation/transformation_reference#g_gravity"} */
                gravity?: (("auto" | "auto_content_aware" | "center" | "custom" | "east" | "face" | "face_center" | "multi_face" | "north" | "north_east" | "north_west" | "south" | "south_east" | "south_west" | "west") | (string & {})) | undefined;
                /** {"text":"Adjusts the starting location or offset of the x axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                x?: (string | number) | undefined;
                /** {"text":"Adjusts the starting location or offset of the y axis.","url":"https://cloudinary.com/documentation/transformation_reference#x_y_coordinates"} */
                y?: (string | number) | undefined;
            } | undefined;
            publicId?: string | undefined;
            type?: string | undefined;
            url?: string | undefined;
            /** {"text":"A qualifier that sets the desired width of an asset using a specified value, or automatically based on the available width.","url":"https://cloudinary.com/documentation/transformation_reference#w_width"} */
            width?: (number | string) | undefined;
        }[] | undefined;
        /** {"text":"Custom version number to apply to asset URL.","url":"https://cloudinary.com/documentation/advanced_url_delivery_options#asset_versions"} */
        version?: (number | string) | undefined;
        /** {"text":"The streaming profile to apply when delivering a video using adaptive bitrate streaming.","url":"https://cloudinary.com/documentation/transformation_reference#sp_streaming_profile"} */
        streamingProfile?: string | undefined;
    };
};
declare function constructCloudinaryUrl({ options, config, analytics, }: ConstructUrlProps): string;

export { type AnalyticsOptions as A, type ConfigOptions as C, type ImageOptions as I, type PluginOptions as P, type VideoOptions as V, type ConstructUrlProps as a, type CloudinaryAnalyticsOptions as b, constructCloudinaryUrl as c, type AssetOptions as d, type CloudinaryConfigurationOptions as e, type PluginResults as f, type PluginSettings as g, constructUrlPropsSchema as h, assetOptionsSchema as i, imageOptionsSchema as j, transformationPlugins as t, videoOptionsSchema as v };
