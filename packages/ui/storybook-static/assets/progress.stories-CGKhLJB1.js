import{j as l}from"./jsx-runtime-BYYWji4R.js";import{r as m}from"./index-ClcD9ViR.js";import{c as L}from"./index-wvtB5nFr.js";import{P as $}from"./index-DusXwgyS.js";import{c as O}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CE1WDHOu.js";import"./index-g81hgHuP.js";import"./index-Bew1Yeam.js";var c="Progress",v=100,[T]=L(c),[G,U]=T(c),R=m.forwardRef((e,r)=>{const{__scopeProgress:n,value:s=null,max:a,getValueLabel:M=X,...V}=e;(a||a===0)&&!g(a)&&console.error(F(`${a}`,"Progress"));const o=g(a)?a:v;s!==null&&!x(s,o)&&console.error(k(`${s}`,"Progress"));const t=x(s,o)?s:null,A=d(t)?M(t,o):void 0;return l.jsx(G,{scope:n,value:t,max:o,children:l.jsx($.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":d(t)?t:void 0,"aria-valuetext":A,role:"progressbar","data-state":C(t,o),"data-value":t??void 0,"data-max":o,...V,ref:r})})});R.displayName=c;var j="ProgressIndicator",S=m.forwardRef((e,r)=>{const{__scopeProgress:n,...s}=e,a=U(j,n);return l.jsx($.div,{"data-state":C(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...s,ref:r})});S.displayName=j;function X(e,r){return`${Math.round(e/r*100)}%`}function C(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function d(e){return typeof e=="number"}function g(e){return d(e)&&!isNaN(e)&&e>0}function x(e,r){return d(e)&&!isNaN(e)&&e<=r&&e>=0}function F(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`}function k(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var D=R,q=S;const f=m.forwardRef(({className:e,value:r,...n},s)=>l.jsx(D,{ref:s,className:O("pd-relative pd-h-4 pd-w-full pd-overflow-hidden pd-rounded-full pd-bg-secondary",e),...n,children:l.jsx(q,{className:"pd-h-full pd-w-full pd-flex-1 pd-bg-primary pd-transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));f.displayName=D.displayName;f.__docgenInfo={description:"",methods:[]};const ee={title:"UI/Progress",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}}}},i={args:{value:33,className:"w-[300px]"}},p={args:{value:100,className:"w-[300px]"}},u={args:{value:0,className:"w-[300px]"}};var N,P,y;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 33,
    className: "w-[300px]"
  }
}`,...(y=(P=i.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var b,w,h;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 100,
    className: "w-[300px]"
  }
}`,...(h=(w=p.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var E,I,_;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 0,
    className: "w-[300px]"
  }
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const re=["Default","Complete","Empty"];export{p as Complete,i as Default,u as Empty,re as __namedExportsOrder,ee as default};
