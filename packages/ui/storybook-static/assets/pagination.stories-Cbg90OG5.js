import{j as n}from"./jsx-runtime-BYYWji4R.js";import{r as h}from"./index-ClcD9ViR.js";import{c as o}from"./utils-BQHNewu7.js";import{b as j}from"./button-vk_5zNi2.js";import{C as u}from"./chevron-left-BwMl_3Jd.js";import{E as N}from"./ellipsis-Ceru_sh2.js";import{C as I}from"./chevron-right-Ci2o95fb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-g81hgHuP.js";import"./index-Bew1Yeam.js";import"./index-D1SQP9Z-.js";import"./createLucideIcon-C6mSaUsV.js";const d=({className:i,...a})=>n.jsx("nav",{role:"navigation","aria-label":"pagination",className:o("pd-mx-auto pd-flex pd-w-full pd-justify-center",i),...a});d.displayName="Pagination";const p=h.forwardRef(({className:i,...a},s)=>n.jsx("ul",{ref:s,className:o("pd-flex pd-flex-row pd-items-center pd-gap-1",i),...a}));p.displayName="PaginationContent";const e=h.forwardRef(({className:i,...a},s)=>n.jsx("li",{ref:s,className:o("",i),...a}));e.displayName="PaginationItem";const t=({className:i,isActive:a,size:s="icon",...x})=>n.jsx("a",{"aria-current":a?"page":void 0,className:o(j({variant:a?"outline":"ghost",size:s}),i),...x});t.displayName="PaginationLink";const l=({className:i,...a})=>n.jsxs(t,{"aria-label":"pd-Go pd-to pd-previous pd-page",size:"default",className:o("pd-gap-1 pd-pl-2.5",i),...a,children:[n.jsx(u,{className:"pd-h-4 pd-w-4"}),n.jsx("span",{children:"Previous"})]});l.displayName="PaginationPrevious";const m=({className:i,...a})=>n.jsxs(t,{"aria-label":"pd-Go pd-to pd-next pd-page",size:"default",className:o("pd-gap-1 pd-pr-2.5",i),...a,children:[n.jsx("span",{children:"Next"}),n.jsx(I,{className:"pd-h-4 pd-w-4"})]});m.displayName="PaginationNext";const c=({className:i,...a})=>n.jsxs("span",{"aria-hidden":!0,className:o("pd-flex pd-h-9 pd-w-9 pd-items-center pd-justify-center",i),...a,children:[n.jsx(N,{className:"pd-h-4 pd-w-4"}),n.jsx("span",{className:"pd-sr-only",children:"More pages"})]});c.displayName="PaginationEllipsis";d.__docgenInfo={description:"",methods:[],displayName:"Pagination"};p.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};c.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};m.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};l.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};const A={title:"Components/Pagination",component:d},r={render:()=>n.jsx(d,{children:n.jsxs(p,{children:[n.jsx(e,{children:n.jsx(l,{href:"#"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"1"})}),n.jsx(e,{children:n.jsx(t,{href:"#",isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{href:"#",children:"3"})}),n.jsx(e,{children:n.jsx(c,{})}),n.jsx(e,{children:n.jsx(m,{href:"#"})})]})})};var g,P,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(f=(P=r.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,A as default};
