import{j as r}from"./jsx-runtime-BYYWji4R.js";import{r as o}from"./index-ClcD9ViR.js";import{S as y}from"./index-g81hgHuP.js";import{c as n}from"./utils-BQHNewu7.js";import{C as L}from"./chevron-right-Ci2o95fb.js";import{E as _}from"./ellipsis-Ceru_sh2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bew1Yeam.js";import"./createLucideIcon-C6mSaUsV.js";const t=o.forwardRef(({...e},a)=>r.jsx("nav",{ref:a,"aria-label":"breadcrumb",...e}));t.displayName="Breadcrumb";const u=o.forwardRef(({className:e,...a},d)=>r.jsx("ol",{ref:d,className:n("pd-flex pd-flex-wrap pd-items-center pd-gap-1.5 pd-break-words pd-text-sm pd-text-muted-foreground sm:pd-gap-2.5",e),...a}));u.displayName="BreadcrumbList";const s=o.forwardRef(({className:e,...a},d)=>r.jsx("li",{ref:d,className:n("pd-inline-flex pd-items-center pd-gap-1.5",e),...a}));s.displayName="BreadcrumbItem";const m=o.forwardRef(({asChild:e,className:a,...d},I)=>{const N=e?y:"a";return r.jsx(N,{ref:I,className:n("pd-transition-colors hover:pd-text-foreground",a),...d})});m.displayName="BreadcrumbLink";const l=o.forwardRef(({className:e,...a},d)=>r.jsx("span",{ref:d,role:"link","aria-disabled":"true","aria-current":"page",className:n("pd-font-normal pd-text-foreground",e),...a}));l.displayName="BreadcrumbPage";const c=({children:e,className:a,...d})=>r.jsx("li",{role:"presentation","aria-hidden":"true",className:n("[&>svg]:size-3.5",a),...d,children:e??r.jsx(L,{})});c.displayName="BreadcrumbSeparator";const b=({className:e,...a})=>r.jsxs("span",{role:"presentation","aria-hidden":"true",className:n("pd-flex pd-h-9 pd-w-9 pd-items-center pd-justify-center",e),...a,children:[r.jsx(_,{className:"pd-h-4 pd-w-4"}),r.jsx("span",{className:"pd-sr-only",children:"More"})]});b.displayName="BreadcrumbEllipsis";t.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};b.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const H={title:"Components/Breadcrumb",component:t},i={render:()=>r.jsx(t,{children:r.jsxs(u,{children:[r.jsx(s,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(c,{}),r.jsx(s,{children:r.jsx(m,{href:"/docs",children:"Docs"})}),r.jsx(c,{}),r.jsx(s,{children:r.jsx(l,{children:"Breadcrumb"})})]})})},p={render:()=>r.jsx(t,{children:r.jsxs(u,{children:[r.jsx(s,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(c,{}),r.jsx(s,{children:r.jsx(b,{})}),r.jsx(c,{}),r.jsx(s,{children:r.jsx(m,{href:"/docs",children:"Docs"})}),r.jsx(c,{}),r.jsx(s,{children:r.jsx(l,{children:"Breadcrumb"})})]})})};var B,x,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,j,g;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(g=(j=p.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};const q=["Default","WithEllipsis"];export{i as Default,p as WithEllipsis,q as __namedExportsOrder,H as default};
