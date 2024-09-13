/**
 * parseUrl
 * @description
 */
interface ParseUrl {
    assetType?: string;
    cloudName?: string;
    deliveryType?: string;
    format?: string;
    host?: string;
    publicId?: string;
    signature?: string;
    seoSuffix?: string;
    transformations?: Array<string>;
    queryParams?: object;
    version?: number;
}
declare function parseUrl(src: string): ParseUrl | undefined;
/**
 * getPublicId
 * @description Retrieves the public id of a Cloudinary image url. If no url is recognized it returns the parameter it self.
 * If it's recognized that is a url and it's not possible to get the public id, it warns the user.
 * @param {string} src: The Cloudinary url or public id.
 */
declare function getPublicId(src: string): string | undefined;
/**
 * getTransformations
 * @description Retrieves the transformations added to a Cloudinary image url. If no transformation is recognized it returns an empty array.
 * @param {string} src: The Cloudinary url
 */
declare function getTransformations(src: string): string[][];
/**
 * getFormat
 * @description Retrieves the format of a given string
 * @param {string} src: The Cloudinary url or any string trying to match the format
 */
declare function getFormat(src: string): string | undefined;
interface PollForProcessingImageOptions {
    /**
     * The image src to check, should be a Cloudinary URL.
     */
    src: string;
}
/**
 * Poll for an image that hasn't finished processing.
 * Will call itself recurisvely until an image is found, or it fails to fetch.
 */
declare function pollForProcessingImage(options: PollForProcessingImageOptions): Promise<boolean>;

/**
 * testColorIsHex
 */
declare function testColorIsHex(value: unknown): boolean;
/**
 * convertColorHexToRgb
 */
declare function convertColorHexToRgb(value: string): string;

/**
 * encodeBase64
 * @description Universally returns a base64 encoded string
 * @param {any} value: The value to encode as a string
 */
declare function encodeBase64(value: any): string | undefined;
/**
 * objectHasKey
 * @description Helper function to check if a key exists on an object
 * @param {object} obj: The object to check
 * @param {string} key: The key to check against the object
 */
declare function objectHasKey<T>(obj: T, key: PropertyKey): key is keyof T;
/**
 * sortByKey
 * @description Sort the given array by the key of an object
 */
declare function sortByKey(array: Array<object> | undefined, key: string, type?: string): object[];

export { type ParseUrl, type PollForProcessingImageOptions, convertColorHexToRgb, encodeBase64, getFormat, getPublicId, getTransformations, objectHasKey, parseUrl, pollForProcessingImage, sortByKey, testColorIsHex };
