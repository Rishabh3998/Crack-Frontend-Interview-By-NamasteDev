// CORS, Preflight Request, OPTIONS

// CORS stands for cross-origin resource sharing
// CORS is a mechanism which use the additional HTTP headers to tell the browser whether
// a specific web app can share resource with another web app. But the major point is that both
// the web app should have different origin. If they have same origin resource sharing is like a
// cake walk but if don't have the same origin they need to use the CORS mechanism.

// Before CORS browser never allowed to share resources between different origins.

// Origin:
// 1. Domain: rishabhKumar.com
// 2. Domain: ritikKumar.com

// These 2 domains cannot share resources due to different domains.
// Resource sharing was even blocked with the subdomains.
// Not allowed on different ports as well.
// Not allowed on different protocols as well. HTTP cannot share with HTTPS.

// Now a days it is allowed by using CORS. It is a web standard now.

// How this sharing works ?
// So if origin A is requesting something from origin B, then
// A general CORS preflight mechanism is followed which send a Preflight OPTIONS request to check the
// permissions if CORS permissions are allowed and receiver gives the permission for sharing only then
// sharing resources will be possible. If we receive the permission then requester will send the
// actual GET request to fetch the data.

// Most common headers used for this are:
// Accept-control-allow-origin: *(Public(anyone can access))/"rishabhKumar.com" => This header is set by server

// Does all the request which is made form A to B follows this preflight mechanism ?

// No, There are two type of access control mechanisms
// 1. Simple request
// 2. Preflight request

// Browser can tag the request automatically, if they are simple or needs a preflight request. If the request is
// simple then a call will be made directly to get the resources, if not, then a preflight request will be
// made to get the permission headers.

// Whenever we get this CORS error where error says that Accept-control-allow-origin is not set then we need
// to set this header from the server to get the data on the FE.
