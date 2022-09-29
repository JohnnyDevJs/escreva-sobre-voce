"use strict";
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 1314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "phosphor-react"
var external_phosphor_react_ = __webpack_require__(9628);
;// CONCATENATED MODULE: ./components/Header.tsx






const Header = ()=>{
    const { data: session , status  } = (0,react_.useSession)();
    const loading = status === "loading";
    const router = (0,router_.useRouter)();
    const isActive = (pathname)=>router.pathname === pathname;
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "w-100 h-16 bg-[#e0e8ee] flex items-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-[1344px] mx-auto flex justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-7",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "bg-green-700 hover:bg-green-500 transition duration-300 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_phosphor_react_.ChatCentered, {
                                    size: 20,
                                    weight: "bold"
                                }),
                                "Posts"
                            ]
                        }),
                        session ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "bg-green-500 border border-green-500 hover:border-green-700 hover:bg-green-700 transition duration-300 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_phosphor_react_.CopySimple, {
                                            size: 20,
                                            weight: "bold"
                                        }),
                                        "Drafts"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "bg-transparent border border-green-700 hover:bg-green-700 hover:border-green-700 hover:text-white transition duration-300 text-green-700 font-medium py-2 px-4 rounded-lg flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(external_phosphor_react_.PlusCircle, {
                                            size: 20,
                                            weight: "bold"
                                        }),
                                        "New post"
                                    ]
                                })
                            ]
                        }) : null
                    ]
                }),
                session ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: ()=>(0,react_.signOut)(),
                                className: "bg-green-500 hover:bg-green-700 border border-green-500 hover:border-green-700 transition duration-300 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_phosphor_react_.Lock, {
                                        size: 20,
                                        weight: "bold"
                                    }),
                                    "Logout"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-11 h-11 rounded-full bg-violet-300 relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "object-cover rounded-full absolute overflow-hidden w-full h-full",
                                    layout: "fill",
                                    src: session.user.image,
                                    alt: session.user.name
                                })
                            })
                        ]
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    passHref: true,
                    href: "/signin",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "bg-green-500 hover:bg-green-700 border border-green-500 hover:border-green-700 transition duration-300 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_phosphor_react_.Lock, {
                                size: 20,
                                weight: "bold"
                            }),
                            "Sign In"
                        ]
                    })
                })
            ]
        })
    });
};


;// CONCATENATED MODULE: ./components/Layout.tsx


const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout",
                children: children
            })
        ]
    });
};



/***/ })

};
;