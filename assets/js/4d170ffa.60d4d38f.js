"use strict";(self.webpackChunkmainstreamtoken_com=self.webpackChunkmainstreamtoken_com||[]).push([[7882],{9343:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"license/parameters","title":"MTL License Parameters","description":"The Mainstream Token License (MTL) protocol uses a parameter-based system to define the terms of a license. These parameters are encoded into a unique MTL string, which is then used to verify access to the licensed digital asset.","source":"@site/docs/license/parameters.md","sourceDirName":"license","slug":"/license/parameters","permalink":"/mainstreamtoken.com/docs/license/parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/mainstreamorganization/mainstreamtoken/tree/main/docs/license/parameters.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2}}');var r=i(4848),l=i(8453);const c={sidebar_position:2},d="MTL License Parameters",t={},a=[{value:"Core Parameters",id:"core-parameters",level:2},{value:"License Types",id:"license-types",level:3},{value:"Token Amount",id:"token-amount",level:3},{value:"Fee",id:"fee",level:3},{value:"Fee Collection Wallet",id:"fee-collection-wallet",level:3},{value:"Revenue Splits",id:"revenue-splits",level:3},{value:"Optional Parameters",id:"optional-parameters",level:2},{value:"Duration",id:"duration",level:3},{value:"Revenue Cap",id:"revenue-cap",level:3},{value:"Revenue Min",id:"revenue-min",level:3},{value:"Revenue Exact",id:"revenue-exact",level:3},{value:"Revenue Max",id:"revenue-max",level:3},{value:"Region",id:"region",level:3},{value:"Usage",id:"usage",level:3},{value:"Addendum",id:"addendum",level:3},{value:"Parameter Encoding",id:"parameter-encoding",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mtl-license-parameters",children:"MTL License Parameters"})}),"\n",(0,r.jsx)(n.p,{children:"The Mainstream Token License (MTL) protocol uses a parameter-based system to define the terms of a license. These parameters are encoded into a unique MTL string, which is then used to verify access to the licensed digital asset."}),"\n",(0,r.jsx)(n.h2,{id:"core-parameters",children:"Core Parameters"}),"\n",(0,r.jsx)(n.h3,{id:"license-types",children:"License Types"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"A (All):"}),' Includes all types below. Can be specified as either "MTLv1-A" or simply "MTLv1".']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"P (Personal Use):"})," License for individual, non-commercial use only."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"C (Commercial Use):"})," License for business and commercial applications."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"N (Non-Profit Use):"})," License for non-profit organization use."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"D (Derivative Work):"})," License allows creation of derivative works."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Note: When specifying all usage types, you can use either "MTLv1-A" or simply "MTLv1" - both are equivalent and denote full usage rights.'}),"\n",(0,r.jsx)(n.h3,{id:"token-amount",children:"Token Amount"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specifies the number of Mainstream Tokens (MT) required to access the licensed content."}),"\n",(0,r.jsxs)(n.li,{children:["A value of ",(0,r.jsx)(n.code,{children:"0"})," indicates a donation-based license."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"fee",children:"Fee"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specifies the percentage fee for revenue sharing."}),"\n",(0,r.jsxs)(n.li,{children:["A value of ",(0,r.jsx)(n.code,{children:"0"})," indicates no fee (donation)."]}),"\n",(0,r.jsxs)(n.li,{children:["Maximum value is ",(0,r.jsx)(n.code,{children:"100"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"fee-collection-wallet",children:"Fee Collection Wallet"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The wallet address or payment method that will receive the fees or donations."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"revenue-splits",children:"Revenue Splits"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Defines how the revenue will be split between different wallets."}),"\n",(0,r.jsx)(n.li,{children:"If the total is less than 100%, the remaining percentage will be allocated to the fee collection wallet."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,r.jsx)(n.h3,{id:"duration",children:"Duration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specifies how long the license will be valid for."}),"\n",(0,r.jsx)(n.li,{children:"Can be defined in seconds, minutes, hours, days, weeks, months, or years."}),"\n",(0,r.jsx)(n.li,{children:"If not specified, the license is perpetual."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"revenue-cap",children:"Revenue Cap"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Maximum revenue allowed under this license."}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"1000000"})," for a $1M cap."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"revenue-min",children:"Revenue Min"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Minimum revenue required to maintain this license."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"revenue-exact",children:"Revenue Exact"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exact revenue amount required for this license."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"revenue-max",children:"Revenue Max"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Maximum revenue threshold that must not be exceeded."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"region",children:"Region"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Geographic regions where the license is valid."}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"US"}),", ",(0,r.jsx)(n.code,{children:"EU"}),", or ",(0,r.jsx)(n.code,{children:"!CN"})," to exclude China."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Specific usage types allowed."}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"W"})," for web, ",(0,r.jsx)(n.code,{children:"M"})," for mobile, ",(0,r.jsx)(n.code,{children:"!G"})," to exclude games."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"addendum",children:"Addendum"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Additional license terms or references."}),"\n",(0,r.jsxs)(n.li,{children:["Example: ",(0,r.jsx)(n.code,{children:"LICENSE:MIT"})," for MIT license."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"parameter-encoding",children:"Parameter Encoding"}),"\n",(0,r.jsx)(n.p,{children:"The parameters are encoded into a string with the following format:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"MTLv0.1-<LicenseTypes>/<TokenAmount>-<Fee>:<Split1>:<Split2>;+<Duration><RevenueCap><RevenueMin>=<RevenueExact>!><RevenueMax>[<Region>]{<Usage>}~<Addendum>\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"MTLv0.1-"}),": Protocol version identifier."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<LicenseTypes>"}),": Combination of license type codes (e.g., ",(0,r.jsx)(n.code,{children:"P"}),", ",(0,r.jsx)(n.code,{children:"PC"}),", ",(0,r.jsx)(n.code,{children:"PCD"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<TokenAmount>"}),": Number of tokens required."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<Fee>"}),": Percentage fee for revenue sharing."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<Split1>, <Split2>"}),": Revenue split percentages."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<Duration>"}),": License duration (e.g., ",(0,r.jsx)(n.code,{children:"30D"})," for 30 days)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<RevenueCap>"}),": Maximum revenue allowed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<RevenueMin>"}),": Minimum revenue required."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<RevenueExact>"}),": Exact revenue amount required."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<RevenueMax>"}),": Maximum revenue threshold."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[<Region>]"}),": Geographic regions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"(<State>)"}),": Geographic states."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"{<Usage>}"}),": Usage types."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"~<Addendum>"}),": Additional terms."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This section provides a detailed overview of the parameters used in the MTL protocol. For more information on how these parameters are used in practice, please refer to the sections on verification and payment."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var s=i(6540);const r={},l=s.createContext(r);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);