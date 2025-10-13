import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, getRequestURL, getResponseHeader, appendResponseHeader, removeResponseHeader, createError, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/h3/dist/index.mjs';
import destr from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/node-mock-http/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47C_58_47Users_47matte_47OneDrive_47Desktop_47mi_45dashboardamm_47Modernize_45nuxtjs_45free_47package_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47utils_47cache_45driver_46js from 'file:///C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import unstorage_47drivers_47fs_45lite from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/unstorage/drivers/fs-lite.mjs';
import { digest } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/ohash/dist/index.mjs';
import { klona } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/scule/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/pathe/dist/index.mjs';

const serverAssets = [{"baseName":"server","dir":"C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', file_58_47_47_47C_58_47Users_47matte_47OneDrive_47Desktop_47mi_45dashboardamm_47Modernize_45nuxtjs_45free_47package_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47utils_47cache_45driver_46js({"driver":"file:///C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js","base":"C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/.nuxt/cache/nitro/prerender"}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:/Users/matte/OneDrive/Desktop/mi-dashboardamm/Modernize-nuxtjs-free/package/.nuxt/cache"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "cb136e80-4c48-48c0-8a4a-e66f503150ed",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "apiBaseUrl": "https://www.mercatoitinerante.it/wp-json/mi_plugin/v1"
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = url.pathname + url.search + url.hash;
  errorObject.message ||= "Server Error";
  errorObject.data ||= error.data;
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const plugins = [
  
];

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"409-KwIcH/5w1T2wnYaiQL8p30h+zEs\"",
    "mtime": "2025-10-11T13:39:53.713Z",
    "size": 1033,
    "path": "../../.output/public/200.html"
  },
  "/404.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"409-KwIcH/5w1T2wnYaiQL8p30h+zEs\"",
    "mtime": "2025-10-11T13:39:53.713Z",
    "size": 1033,
    "path": "../../.output/public/404.html"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"26e-Ux1yg+9rPsHUuxtNCWioVmLu5F8\"",
    "mtime": "2025-10-03T10:02:45.559Z",
    "size": 622,
    "path": "../../.output/public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f1c-eggeyTpgqLTjVTxxqc8U4SAdN+o\"",
    "mtime": "2025-10-11T13:39:53.761Z",
    "size": 28444,
    "path": "../../.output/public/index.html"
  },
  "/_payload.json": {
    "type": "application/json",
    "etag": "\"45-d9Xku7X6WIdSxfHs5cUnCiOf/2Q\"",
    "mtime": "2025-10-11T13:39:53.856Z",
    "size": 69,
    "path": "../../.output/public/_payload.json"
  },
  "/_redirects": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"5d-nD2kZVbTJtGaMSBSyuC19tffZmA\"",
    "mtime": "2025-10-11T12:31:11.591Z",
    "size": 93,
    "path": "../../.output/public/_redirects"
  },
  "/admin-dashboard/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f4b-5MMAmUFAFt6vG8p+rthwIdAmvic\"",
    "mtime": "2025-10-11T13:39:53.892Z",
    "size": 28491,
    "path": "../../.output/public/admin-dashboard/index.html"
  },
  "/admin-dashboard/_payload.json": {
    "type": "application/json",
    "etag": "\"45-PxtVfW5Hu58qOMB3xlNT0lM3pPw\"",
    "mtime": "2025-10-11T13:39:53.911Z",
    "size": 69,
    "path": "../../.output/public/admin-dashboard/_payload.json"
  },
  "/impatto-ambientale/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f54-xWV2q+cXOIQjc5W6EOVL4aNBzqs\"",
    "mtime": "2025-10-11T13:39:53.896Z",
    "size": 28500,
    "path": "../../.output/public/impatto-ambientale/index.html"
  },
  "/impatto-ambientale/_payload.json": {
    "type": "application/json",
    "etag": "\"45-PxtVfW5Hu58qOMB3xlNT0lM3pPw\"",
    "mtime": "2025-10-11T13:39:53.913Z",
    "size": 69,
    "path": "../../.output/public/impatto-ambientale/_payload.json"
  },
  "/consegne-rider/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f48-wy9boLphR/iR/OvOKQbokPUZ6tY\"",
    "mtime": "2025-10-11T13:39:53.892Z",
    "size": 28488,
    "path": "../../.output/public/consegne-rider/index.html"
  },
  "/consegne-rider/_payload.json": {
    "type": "application/json",
    "etag": "\"45-cPw3BM7E4WERIcTPl462ilGfcdo\"",
    "mtime": "2025-10-11T13:39:53.911Z",
    "size": 69,
    "path": "../../.output/public/consegne-rider/_payload.json"
  },
  "/consegne-cap/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f42-UIM8lgTrlLVXcGtnwa0i2H41J9k\"",
    "mtime": "2025-10-11T13:39:53.892Z",
    "size": 28482,
    "path": "../../.output/public/consegne-cap/index.html"
  },
  "/consegne-cap/_payload.json": {
    "type": "application/json",
    "etag": "\"45-cPw3BM7E4WERIcTPl462ilGfcdo\"",
    "mtime": "2025-10-11T13:39:53.912Z",
    "size": 69,
    "path": "../../.output/public/consegne-cap/_payload.json"
  },
  "/ordini-b2b/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f3c-ZhgQRHVtgj3C8xwt2MJhiRI56G4\"",
    "mtime": "2025-10-11T13:39:53.892Z",
    "size": 28476,
    "path": "../../.output/public/ordini-b2b/index.html"
  },
  "/ordini-b2b/_payload.json": {
    "type": "application/json",
    "etag": "\"45-cPw3BM7E4WERIcTPl462ilGfcdo\"",
    "mtime": "2025-10-11T13:39:53.911Z",
    "size": 69,
    "path": "../../.output/public/ordini-b2b/_payload.json"
  },
  "/ordini-mensili/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f48-gKzBSTFKFlHd8xuKGACZYhKEPuU\"",
    "mtime": "2025-10-11T13:39:53.896Z",
    "size": 28488,
    "path": "../../.output/public/ordini-mensili/index.html"
  },
  "/ordini-mensili/_payload.json": {
    "type": "application/json",
    "etag": "\"45-PxtVfW5Hu58qOMB3xlNT0lM3pPw\"",
    "mtime": "2025-10-11T13:39:53.913Z",
    "size": 69,
    "path": "../../.output/public/ordini-mensili/_payload.json"
  },
  "/tipologie-pagamento/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f57-Ht7JDS25B3baEIL+rr66ay15esw\"",
    "mtime": "2025-10-11T13:39:53.900Z",
    "size": 28503,
    "path": "../../.output/public/tipologie-pagamento/index.html"
  },
  "/tipologie-pagamento/_payload.json": {
    "type": "application/json",
    "etag": "\"45-PxtVfW5Hu58qOMB3xlNT0lM3pPw\"",
    "mtime": "2025-10-11T13:39:53.914Z",
    "size": 69,
    "path": "../../.output/public/tipologie-pagamento/_payload.json"
  },
  "/_nuxt/admin-dashboard.CHqdukED.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-rIaQthGB78CWxnL/sB/QBpemrJw\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 45,
    "path": "../../.output/public/_nuxt/admin-dashboard.CHqdukED.css"
  },
  "/_nuxt/B2BOrders.CrkV6dR5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42-J7i3aS+eYR2PBQu4nsnqJl2nWow\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 66,
    "path": "../../.output/public/_nuxt/B2BOrders.CrkV6dR5.css"
  },
  "/_nuxt/B5V0nTRg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"260e-AM0DZQNReT5tmnDRTxtM8/5dVbI\"",
    "mtime": "2025-10-11T13:39:33.685Z",
    "size": 9742,
    "path": "../../.output/public/_nuxt/B5V0nTRg.js"
  },
  "/_nuxt/BDJ6fHeO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"31ae-EZnYCkb3DAy8JPLyfofZtcmsx6I\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 12718,
    "path": "../../.output/public/_nuxt/BDJ6fHeO.js"
  },
  "/_nuxt/BGu8UrrT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"85f-D/WMyu+3nZO+gaq9jgvskNBMhxo\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 2143,
    "path": "../../.output/public/_nuxt/BGu8UrrT.js"
  },
  "/_nuxt/BiA4C3xV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"225-xLpjcfxYT7v4oFJZyC60Q9l+iV4\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 549,
    "path": "../../.output/public/_nuxt/BiA4C3xV.js"
  },
  "/_nuxt/Bnw7hBTH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"225-t9dLR2kdsDCuCCaIJcVRJRuAJU0\"",
    "mtime": "2025-10-11T13:39:33.688Z",
    "size": 549,
    "path": "../../.output/public/_nuxt/Bnw7hBTH.js"
  },
  "/_nuxt/BRxAjNlp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4707de-7daytcpxLj4AGe7yWms8so+UEy8\"",
    "mtime": "2025-10-11T13:39:33.702Z",
    "size": 4655070,
    "path": "../../.output/public/_nuxt/BRxAjNlp.js"
  },
  "/_nuxt/Butyv6yc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26f-xl1qEUW2n4eLOJpSoZfW/+YM+Wg\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 623,
    "path": "../../.output/public/_nuxt/Butyv6yc.js"
  },
  "/_nuxt/Bv4xq_pS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"225-d/JlqHW4eX7WvjUwTeRsbWcbpC4\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 549,
    "path": "../../.output/public/_nuxt/Bv4xq_pS.js"
  },
  "/_nuxt/BvWPxRnA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"21d-0Mm9enVBubpXH99/d1fv6/NxhE8\"",
    "mtime": "2025-10-11T13:39:33.686Z",
    "size": 541,
    "path": "../../.output/public/_nuxt/BvWPxRnA.js"
  },
  "/_nuxt/C6kjPya-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12d4-/HSBAgPXUgkL4zbjS+CXsyg5XRU\"",
    "mtime": "2025-10-11T13:39:33.701Z",
    "size": 4820,
    "path": "../../.output/public/_nuxt/C6kjPya-.js"
  },
  "/_nuxt/Cop9mmL_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"232-br2Od/5S2wELmOYDKBcUFALfaik\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 562,
    "path": "../../.output/public/_nuxt/Cop9mmL_.js"
  },
  "/_nuxt/Cs10qPfK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"180b-MJcqI+oincQ0Mtebiykjx0br9/A\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 6155,
    "path": "../../.output/public/_nuxt/Cs10qPfK.js"
  },
  "/_nuxt/CuHSfwy9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"181f-5/LQ/geevvk3+o916zvVecYwi68\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 6175,
    "path": "../../.output/public/_nuxt/CuHSfwy9.js"
  },
  "/_nuxt/Cux5u0DZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6ab-B3udVncvKs+y/F5rmvuGIMCdZeM\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 1707,
    "path": "../../.output/public/_nuxt/Cux5u0DZ.js"
  },
  "/_nuxt/default.BIpoWkbh.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42-yUyuwwM+NzAxp84T0+w+xiyj3+A\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 66,
    "path": "../../.output/public/_nuxt/default.BIpoWkbh.css"
  },
  "/_nuxt/DevWVRXc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b8e-EThOjfVNucQoV2olO8FxkfAhQw8\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 7054,
    "path": "../../.output/public/_nuxt/DevWVRXc.js"
  },
  "/_nuxt/DkxB6cjy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2736-82fg8Z0DfOP6fPjkIVg1gwWED3I\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 10038,
    "path": "../../.output/public/_nuxt/DkxB6cjy.js"
  },
  "/_nuxt/DUm2Gd2f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e1-WBSPSVKdJXfuYf5e1tYU3KewoiU\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 225,
    "path": "../../.output/public/_nuxt/DUm2Gd2f.js"
  },
  "/_nuxt/DvkE4VYB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22d-/RItZjuiU0bkkpvDA+hojcbLjtg\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 557,
    "path": "../../.output/public/_nuxt/DvkE4VYB.js"
  },
  "/_nuxt/entry.DkBW2Yb2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b8157-wFyA7KbbWCRgLv6mI6GRCewPLk0\"",
    "mtime": "2025-10-11T13:39:33.687Z",
    "size": 754007,
    "path": "../../.output/public/_nuxt/entry.DkBW2Yb2.css"
  },
  "/_nuxt/EnvironmentalImpact.oP6ZDr26.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42-T14MXhDBagqiiYIab5X2i+97Vys\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 66,
    "path": "../../.output/public/_nuxt/EnvironmentalImpact.oP6ZDr26.css"
  },
  "/_nuxt/index.BlWy_wQE.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-H8FB4hrWkGNOLtlD0d7qDiuN9ls\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 45,
    "path": "../../.output/public/_nuxt/index.BlWy_wQE.css"
  },
  "/_nuxt/materialdesignicons-webfont.B7mPwVP_.ttf": {
    "type": "font/ttf",
    "etag": "\"13f40c-T1Gk3HWmjT5XMhxEjv3eojyKnbA\"",
    "mtime": "2025-10-11T13:39:33.690Z",
    "size": 1307660,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.B7mPwVP_.ttf"
  },
  "/_nuxt/materialdesignicons-webfont.CSr8KVlo.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"13f4e8-ApygSKV9BTQg/POr5dCUzjU5OZw\"",
    "mtime": "2025-10-11T13:39:33.682Z",
    "size": 1307880,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.CSr8KVlo.eot"
  },
  "/_nuxt/materialdesignicons-webfont.Dp5v-WZN.woff2": {
    "type": "font/woff2",
    "etag": "\"62710-TiD2zPQxmd6lyFsjoODwuoH/7iY\"",
    "mtime": "2025-10-11T13:39:33.683Z",
    "size": 403216,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.Dp5v-WZN.woff2"
  },
  "/_nuxt/materialdesignicons-webfont.PXm3-2wK.woff": {
    "type": "font/woff",
    "etag": "\"8f8d0-zD3UavWtb7zNpwtFPVWUs57NasQ\"",
    "mtime": "2025-10-11T13:39:33.685Z",
    "size": 587984,
    "path": "../../.output/public/_nuxt/materialdesignicons-webfont.PXm3-2wK.woff"
  },
  "/_nuxt/MonthlyOrders.BlF-LPuM.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"21-+WtuQPPpdb0szCyO1WB4itUc04w\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 33,
    "path": "../../.output/public/_nuxt/MonthlyOrders.BlF-LPuM.css"
  },
  "/_nuxt/PaymentTypes.2ibV3-hk.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42-58HMzKVQ7VDUBft1ZBR82feayCY\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 66,
    "path": "../../.output/public/_nuxt/PaymentTypes.2ibV3-hk.css"
  },
  "/_nuxt/PostalCodeDeliveries.C3EYdq9w.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42-KE6PhBrMJrw5fcK32gEObCF44lg\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 66,
    "path": "../../.output/public/_nuxt/PostalCodeDeliveries.C3EYdq9w.css"
  },
  "/_nuxt/QmG2c6jB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9af-IfKzc3j4JHcWuHlsdJYb91EnlMs\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 2479,
    "path": "../../.output/public/_nuxt/QmG2c6jB.js"
  },
  "/_nuxt/RiderDeliveries.DEPs9Sn2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42-BpW8gLVhPWdyXuLtWZidDMRLkqE\"",
    "mtime": "2025-10-11T13:39:33.684Z",
    "size": 66,
    "path": "../../.output/public/_nuxt/RiderDeliveries.DEPs9Sn2.css"
  },
  "/_nuxt/TWVxGrhq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16ed-hfO/CTDewJP7wzsnA76H8eGjqmY\"",
    "mtime": "2025-10-11T13:39:33.700Z",
    "size": 5869,
    "path": "../../.output/public/_nuxt/TWVxGrhq.js"
  },
  "/auth/Register/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f45-SI55uCAPd1VRSVn9lE2nxuAvUeE\"",
    "mtime": "2025-10-11T13:39:53.911Z",
    "size": 28485,
    "path": "../../.output/public/auth/Register/index.html"
  },
  "/auth/Register/_payload.json": {
    "type": "application/json",
    "etag": "\"45-cPw3BM7E4WERIcTPl462ilGfcdo\"",
    "mtime": "2025-10-11T13:39:53.921Z",
    "size": 69,
    "path": "../../.output/public/auth/Register/_payload.json"
  },
  "/auth/Login/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6f3c-Cf0n9oSLiWRprIsXAWC+1ziC11A\"",
    "mtime": "2025-10-11T13:39:53.914Z",
    "size": 28476,
    "path": "../../.output/public/auth/Login/index.html"
  },
  "/auth/Login/_payload.json": {
    "type": "application/json",
    "etag": "\"45-w/zrn31CJRyUkwQVPrB2NYCOarc\"",
    "mtime": "2025-10-11T13:39:53.923Z",
    "size": 69,
    "path": "../../.output/public/auth/Login/_payload.json"
  },
  "/images/background/errorimg.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e72-bTT08T2QvAo6pKTEDF5bCus7r6A\"",
    "mtime": "2025-10-03T10:02:45.559Z",
    "size": 11890,
    "path": "../../.output/public/images/background/errorimg.svg"
  },
  "/images/background/rocket.png": {
    "type": "image/png",
    "etag": "\"3c84-AgmtZj5FiuKzhfxY7YNdxAcvX5w\"",
    "mtime": "2025-10-03T10:02:45.559Z",
    "size": 15492,
    "path": "../../.output/public/images/background/rocket.png"
  },
  "/images/blog/blog-img1.jpg": {
    "type": "image/jpeg",
    "etag": "\"5aac-BwbgGo+acBB6qDCNqe5bvbWEK5M\"",
    "mtime": "2025-10-03T10:02:45.559Z",
    "size": 23212,
    "path": "../../.output/public/images/blog/blog-img1.jpg"
  },
  "/images/blog/blog-img4.jpg": {
    "type": "image/jpeg",
    "etag": "\"77cb-dO4SYgL2XTXcLa+dUzeK+DbqzEE\"",
    "mtime": "2025-10-03T10:02:45.559Z",
    "size": 30667,
    "path": "../../.output/public/images/blog/blog-img4.jpg"
  },
  "/images/logos/logo-adminmart.svg": {
    "type": "image/svg+xml",
    "etag": "\"1506-sKy7rIbXYPQssQJfLNrCDy+N1vo\"",
    "mtime": "2025-10-03T10:02:45.566Z",
    "size": 5382,
    "path": "../../.output/public/images/logos/logo-adminmart.svg"
  },
  "/images/logos/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"19e1-6ezBXkOCsCPnA11+NwIkQpPvR5U\"",
    "mtime": "2025-10-03T10:02:45.567Z",
    "size": 6625,
    "path": "../../.output/public/images/logos/logo.svg"
  },
  "/images/logos/logolight.svg": {
    "type": "image/svg+xml",
    "etag": "\"19b6-o1C9Igp4McDR0fqD6L/NLpIWgjw\"",
    "mtime": "2025-10-03T10:02:45.568Z",
    "size": 6582,
    "path": "../../.output/public/images/logos/logolight.svg"
  },
  "/images/products/s11.jpg": {
    "type": "image/jpeg",
    "etag": "\"388c8-TifUi86aufy7spk20nJYoNGr6c0\"",
    "mtime": "2025-10-03T10:02:45.568Z",
    "size": 231624,
    "path": "../../.output/public/images/products/s11.jpg"
  },
  "/images/products/s4.jpg": {
    "type": "image/jpeg",
    "etag": "\"148e6-xG9PQVRtS9qhT0bivYQ9/IEMlfQ\"",
    "mtime": "2025-10-03T10:02:45.568Z",
    "size": 84198,
    "path": "../../.output/public/images/products/s4.jpg"
  },
  "/images/products/s5.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e57c-og9Cui0zudpoDzEzIdFMJCkg9CY\"",
    "mtime": "2025-10-03T10:02:45.568Z",
    "size": 124284,
    "path": "../../.output/public/images/products/s5.jpg"
  },
  "/images/products/s7.jpg": {
    "type": "image/jpeg",
    "etag": "\"13191-plLCyLTl7UwhKUcQra/8nmxaj5A\"",
    "mtime": "2025-10-03T10:02:45.568Z",
    "size": 78225,
    "path": "../../.output/public/images/products/s7.jpg"
  },
  "/images/technology/angular-cat-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"2c1-QB0iS3bbAgOBK0/7HlA6mrKGK4Y\"",
    "mtime": "2025-10-03T10:02:45.568Z",
    "size": 705,
    "path": "../../.output/public/images/technology/angular-cat-icon.svg"
  },
  "/images/technology/bt-cat-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"6fa-OC88wuHetPr83DiYaNGvATPYkuE\"",
    "mtime": "2025-10-03T10:02:45.568Z",
    "size": 1786,
    "path": "../../.output/public/images/technology/bt-cat-icon.svg"
  },
  "/images/technology/next-cat-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"b27-mHyPkhP8UfoXaW2e5/TzIgHCJck\"",
    "mtime": "2025-10-03T10:02:45.576Z",
    "size": 2855,
    "path": "../../.output/public/images/technology/next-cat-icon.svg"
  },
  "/images/technology/nuxt-cat-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"266-OMu59WN5fp5+Eed6R1A2OTgrCks\"",
    "mtime": "2025-10-03T10:02:45.576Z",
    "size": 614,
    "path": "../../.output/public/images/technology/nuxt-cat-icon.svg"
  },
  "/images/technology/react-cat-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"1296-Qd7/h7l+1PN6wZEcNqNZQsNLBIs\"",
    "mtime": "2025-10-03T10:02:45.577Z",
    "size": 4758,
    "path": "../../.output/public/images/technology/react-cat-icon.svg"
  },
  "/images/technology/tailwind-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"378-GycvKTDACMVCbUzMq8o02mQgf44\"",
    "mtime": "2025-10-03T10:02:45.577Z",
    "size": 888,
    "path": "../../.output/public/images/technology/tailwind-icon.svg"
  },
  "/images/technology/vue-cat-icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"1bb-YMVX23Ypg8Dz26DPOncBUSVvkig\"",
    "mtime": "2025-10-03T10:02:45.578Z",
    "size": 443,
    "path": "../../.output/public/images/technology/vue-cat-icon.svg"
  },
  "/images/users/avatar-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"78ea-7LRAJhaoFG6lmZL4jp5DrvfdGYE\"",
    "mtime": "2025-10-03T10:02:45.578Z",
    "size": 30954,
    "path": "../../.output/public/images/users/avatar-1.jpg"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-wLWtxOptbXnTcHECzLGSmlDGRtE\"",
    "mtime": "2025-10-11T13:39:53.946Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/32132ebb-dcc0-448c-a3a5-79a93b43cf6c.json": {
    "type": "application/json",
    "etag": "\"12f-0obfoWlCilhtrwqFOhO8Z8NHJKM\"",
    "mtime": "2025-10-11T13:39:53.946Z",
    "size": 303,
    "path": "../../.output/public/_nuxt/builds/meta/32132ebb-dcc0-448c-a3a5-79a93b43cf6c.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _F9sNE5 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_brljwp = () => import('../routes/api/products.get.mjs');
const _lazy_UnNPxN = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _F9sNE5, lazy: false, middleware: true, method: undefined },
  { route: '/api/products', handler: _lazy_brljwp, lazy: true, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_UnNPxN, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

export { useRuntimeConfig as a, useStorage as b, defineRenderHandler as d, getRouteRules as g, trapUnhandledNodeErrors as t, useNitroApp as u };
//# sourceMappingURL=nitro.mjs.map
