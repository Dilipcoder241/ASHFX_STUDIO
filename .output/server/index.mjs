globalThis.__nitro_main__ = import.meta.url;
import { n as defineLazyEventHandler, r as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/index-J4moaYlt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54cc2-nXRf+SM7iR+xa32oX7CsKW3tJ2s\"",
		"mtime": "2026-10-03T04:02:29.242Z",
		"size": 347330,
		"path": "../public/assets/index-J4moaYlt.js"
	},
	"/assets/bg-Ux3vx3Pv.jpg": {
		"type": "image/jpeg",
		"etag": "\"7052c-py4+92NkZMgd6zImy2OujyMdWxo\"",
		"mtime": "2026-10-03T04:02:29.244Z",
		"size": 460076,
		"path": "../public/assets/bg-Ux3vx3Pv.jpg"
	},
	"/assets/routes-FeLXhIEK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ad06-QxAaz51V6zVgCvaFuyLtVXodk3w\"",
		"mtime": "2026-10-03T04:02:29.242Z",
		"size": 175366,
		"path": "../public/assets/routes-FeLXhIEK.js"
	},
	"/assets/styles-BLHwcETd.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"142a2-ExnpYDK8U5HIxGkpC40Y9urZzWs\"",
		"mtime": "2026-10-03T04:02:29.249Z",
		"size": 82594,
		"path": "../public/assets/styles-BLHwcETd.css"
	},
	"/assets/work-cafe-DUM0ZD3m.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a5a1-R0s5481zTtN64wM4GbwTsIapZ2k\"",
		"mtime": "2026-10-03T04:02:29.250Z",
		"size": 107937,
		"path": "../public/assets/work-cafe-DUM0ZD3m.jpg"
	},
	"/assets/work-edit-h1sN2NwJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"10e88-6m79Ks1xdYXAzowO13r6U4Oq57o\"",
		"mtime": "2026-10-03T04:02:29.252Z",
		"size": 69256,
		"path": "../public/assets/work-edit-h1sN2NwJ.jpg"
	},
	"/assets/sahil-DWMxofBR.png": {
		"type": "image/png",
		"etag": "\"70cb8-9RKLHW/3kf9tbEclo59JLIy6clU\"",
		"mtime": "2026-10-03T04:02:29.248Z",
		"size": 462008,
		"path": "../public/assets/sahil-DWMxofBR.png"
	},
	"/assets/pr-4_61j2dz.png": {
		"type": "image/png",
		"etag": "\"831ba-wwp+2yQmjXkDTDYt0pGGHXxPbH0\"",
		"mtime": "2026-10-03T04:02:29.246Z",
		"size": 537018,
		"path": "../public/assets/pr-4_61j2dz.png"
	},
	"/assets/rishabh-B1JSYLUk.png": {
		"type": "image/png",
		"etag": "\"c4c95-2I/U6yYXBGTNct7hWSz67WjKesI\"",
		"mtime": "2026-10-03T04:02:29.247Z",
		"size": 806037,
		"path": "../public/assets/rishabh-B1JSYLUk.png"
	},
	"/assets/minal-wtLqY8yt.png": {
		"type": "image/png",
		"etag": "\"f124c-QCreBhcCvKW8uPuQvMfOsuhwd2A\"",
		"mtime": "2026-10-03T04:02:29.245Z",
		"size": 987724,
		"path": "../public/assets/minal-wtLqY8yt.png"
	},
	"/assets/shrijan-bn-F01g2.png": {
		"type": "image/png",
		"etag": "\"81fe3-cSZAqGVatFBxym5vlhzECen3xgU\"",
		"mtime": "2026-10-03T04:02:29.249Z",
		"size": 532451,
		"path": "../public/assets/shrijan-bn-F01g2.png"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-09-07T15:50:04.519Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-09-07T15:50:04.430Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_7E2OtW = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_7E2OtW
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
