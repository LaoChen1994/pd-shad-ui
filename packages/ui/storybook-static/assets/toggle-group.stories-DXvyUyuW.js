import{j as e}from"./jsx-runtime-BYYWji4R.js";import{R as p,r as G}from"./index-ClcD9ViR.js";import{c as O}from"./index-CWz5EflU.js";import{P as j}from"./index-D2Zpbh75.js";import{I as q,c as w,R as H}from"./index-0MWSfDpf.js";import{a as J,t as K,B as Q}from"./toggle-C-1DAjzk.js";import{u as A}from"./index-B0ATiKj9.js";import{u as W}from"./index-CZKF78Oq.js";import{c as S}from"./utils-BQHNewu7.js";import{c as k}from"./createLucideIcon-C6mSaUsV.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CE1WDHOu.js";import"./index-Bew1Yeam.js";import"./index-DBcOBWTZ.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-kkVLZR_L.js";import"./index-D1SQP9Z-.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],Y=k("Italic",X);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],ee=k("Underline",Z);var u="ToggleGroup",[V]=O(u,[w]),E=w(),I=p.forwardRef((o,r)=>{const{type:a,...t}=o;if(a==="single"){const l=t;return e.jsx(oe,{...l,ref:r})}if(a==="multiple"){const l=t;return e.jsx(re,{...l,ref:r})}throw new Error(`Missing prop \`type\` expected on \`${u}\``)});I.displayName=u;var[M,D]=V(u),oe=p.forwardRef((o,r)=>{const{value:a,defaultValue:t,onValueChange:l=()=>{},...n}=o,[s,i]=A({prop:a,defaultProp:t??"",onChange:l,caller:u});return e.jsx(M,{scope:o.__scopeToggleGroup,type:"single",value:p.useMemo(()=>s?[s]:[],[s]),onItemActivate:i,onItemDeactivate:p.useCallback(()=>i(""),[i]),children:e.jsx(F,{...n,ref:r})})}),re=p.forwardRef((o,r)=>{const{value:a,defaultValue:t,onValueChange:l=()=>{},...n}=o,[s,i]=A({prop:a,defaultProp:t??[],onChange:l,caller:u}),c=p.useCallback(d=>i((m=[])=>[...m,d]),[i]),h=p.useCallback(d=>i((m=[])=>m.filter(z=>z!==d)),[i]);return e.jsx(M,{scope:o.__scopeToggleGroup,type:"multiple",value:s,onItemActivate:c,onItemDeactivate:h,children:e.jsx(F,{...n,ref:r})})});I.displayName=u;var[te,le]=V(u),F=p.forwardRef((o,r)=>{const{__scopeToggleGroup:a,disabled:t=!1,rovingFocus:l=!0,orientation:n,dir:s,loop:i=!0,...c}=o,h=E(a),d=W(s),m={role:"group",dir:d,...c};return e.jsx(te,{scope:a,rovingFocus:l,disabled:t,children:l?e.jsx(H,{asChild:!0,...h,orientation:n,dir:d,loop:i,children:e.jsx(j.div,{...m,ref:r})}):e.jsx(j.div,{...m,ref:r})})}),T="ToggleGroupItem",B=p.forwardRef((o,r)=>{const a=D(T,o.__scopeToggleGroup),t=le(T,o.__scopeToggleGroup),l=E(o.__scopeToggleGroup),n=a.value.includes(o.value),s=t.disabled||o.disabled,i={...o,pressed:n,disabled:s},c=p.useRef(null);return t.rovingFocus?e.jsx(q,{asChild:!0,...l,focusable:!s,active:n,ref:c,children:e.jsx(y,{...i,ref:r})}):e.jsx(y,{...i,ref:r})});B.displayName=T;var y=p.forwardRef((o,r)=>{const{__scopeToggleGroup:a,value:t,...l}=o,n=D(T,a),s={role:"radio","aria-checked":o.pressed,"aria-pressed":void 0},i=n.type==="single"?s:void 0;return e.jsx(J,{...i,...l,ref:r,onPressedChange:c=>{c?n.onItemActivate(t):n.onItemDeactivate(t)}})}),$=I,L=B;const U=G.createContext({size:"default",variant:"default"}),v=G.forwardRef(({className:o,variant:r,size:a,children:t,...l},n)=>e.jsx($,{ref:n,className:S("pd-flex pd-items-center pd-justify-center pd-gap-1",o),...l,children:e.jsx(U.Provider,{value:{variant:r,size:a},children:t})}));v.displayName=$.displayName;const g=G.forwardRef(({className:o,children:r,variant:a,size:t,...l},n)=>{const s=G.useContext(U);return e.jsx(L,{ref:n,className:S(K({variant:s.variant||a,size:s.size||t}),o),...l,children:r})});g.displayName=L.displayName;v.__docgenInfo={description:"",methods:[]};g.__docgenInfo={description:"",methods:[]};const ye={title:"Components/ToggleGroup",component:v},f={args:{type:"multiple"},render:o=>e.jsxs(v,{...o,children:[e.jsx(g,{value:"bold","aria-label":"Toggle bold",children:e.jsx(Q,{className:"pd-h-4 pd-w-4"})}),e.jsx(g,{value:"italic","aria-label":"Toggle italic",children:e.jsx(Y,{className:"pd-h-4 pd-w-4"})}),e.jsx(g,{value:"underline","aria-label":"Toggle underline",children:e.jsx(ee,{className:"pd-h-4 pd-w-4"})})]})},x={args:{type:"single",variant:"outline"},render:o=>e.jsxs(v,{...o,children:[e.jsx(g,{value:"left","aria-label":"Align left",children:"Left"}),e.jsx(g,{value:"center","aria-label":"Align center",children:"Center"}),e.jsx(g,{value:"right","aria-label":"Align right",children:"Right"})]})};var b,_,C;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "multiple"
  },
  render: args => <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="pd-h-4 pd-w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="pd-h-4 pd-w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="pd-h-4 pd-w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(C=(_=f.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var P,N,R;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: "single",
    variant: "outline"
  },
  render: args => <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Align left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(R=(N=x.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const be=["Default","Single"];export{f as Default,x as Single,be as __namedExportsOrder,ye as default};
