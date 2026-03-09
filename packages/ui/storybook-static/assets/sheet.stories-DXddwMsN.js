import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as p}from"./index-ClcD9ViR.js";import{R as B,T as I,P as V,C,a as L,b as w,D as _,O as D}from"./index-B4aLL1KX.js";import{c as P}from"./index-D1SQP9Z-.js";import{c as s}from"./utils-BQHNewu7.js";import{X as E}from"./x-Cu5dQwqG.js";import{B as i}from"./button-vk_5zNi2.js";import{I as u}from"./input-FmITjYkG.js";import{L as g}from"./label-Bis6IScY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D2Zpbh75.js";import"./index-CE1WDHOu.js";import"./index-Bew1Yeam.js";import"./index-CWz5EflU.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-B0ATiKj9.js";import"./index-C2DhGJOp.js";import"./index-kkVLZR_L.js";import"./index-vEPGRr1b.js";import"./index-B2NcgzwI.js";import"./createLucideIcon-C6mSaUsV.js";import"./index-g81hgHuP.js";import"./index-DusXwgyS.js";const f=B,F=I,H=V,x=p.forwardRef(({className:t,...a},d)=>e.jsx(D,{className:s("pd-fixed pd-inset-0 pd-z-50 pd-bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...a,ref:d}));x.displayName=D.displayName;const R=P("pd-fixed pd-z-50 pd-gap-4 pd-bg-background pd-p-6 pd-shadow-lg pd-transition pd-ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"pd-top-0 pd-left-0 pd-right-0 pd-border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"pd-bottom-0 pd-left-0 pd-right-0 pd-border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"pd-top-0 pd-left-0 pd-h-full pd-w-3/4 pd-border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:pd-max-w-sm",right:"pd-top-0 pd-right-0 pd-h-full pd-w-3/4 pd-border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:pd-max-w-sm"}},defaultVariants:{side:"right"}}),n=p.forwardRef(({side:t="right",className:a,children:d,...T},k)=>e.jsxs(H,{children:[e.jsx(x,{}),e.jsxs(C,{ref:k,className:s(R({side:t}),a),...T,children:[d,e.jsxs(L,{className:"pd-absolute pd-right-4 pd-top-4 pd-rounded-sm pd-opacity-70 pd-ring-offset-background pd-transition-opacity hover:pd-opacity-100 focus:pd-outline-none focus:pd-ring-2 focus:pd-ring-ring focus:pd-ring-offset-2 disabled:pd-pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(E,{className:"pd-h-4 pd-w-4"}),e.jsx("span",{className:"pd-sr-only",children:"Close"})]})]})]}));n.displayName=C.displayName;const l=({className:t,...a})=>e.jsx("div",{className:s("pd-flex pd-flex-col pd-space-y-2 pd-text-center sm:pd-text-left",t),...a});l.displayName="SheetHeader";const c=({className:t,...a})=>e.jsx("div",{className:s("pd-flex pd-flex-col-reverse sm:pd-flex-row sm:pd-justify-end sm:pd-space-x-2",t),...a});c.displayName="SheetFooter";const m=p.forwardRef(({className:t,...a},d)=>e.jsx(w,{ref:d,className:s("pd-text-lg pd-font-semibold pd-text-foreground",t),...a}));m.displayName=w.displayName;const h=p.forwardRef(({className:t,...a},d)=>e.jsx(_,{ref:d,className:s("pd-text-sm pd-text-muted-foreground",t),...a}));h.displayName=_.displayName;x.__docgenInfo={description:"",methods:[]};n.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}},composes:["VariantProps"]};l.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};c.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};m.__docgenInfo={description:"",methods:[]};h.__docgenInfo={description:"",methods:[]};const ne={title:"UI/Sheet",component:f,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs(f,{children:[e.jsx(F,{asChild:!0,children:e.jsx(i,{variant:"outline",children:"Open Sheet"})}),e.jsxs(n,{children:[e.jsxs(l,{children:[e.jsx(m,{children:"Edit profile"}),e.jsx(h,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"pd-grid pd-gap-4 pd-py-4",children:[e.jsxs("div",{className:"pd-grid pd-grid-cols-4 pd-items-center pd-gap-4",children:[e.jsx(g,{htmlFor:"name",className:"pd-text-right",children:"Name"}),e.jsx(u,{id:"name",defaultValue:"Pedro Duarte",className:"pd-col-span-3"})]}),e.jsxs("div",{className:"pd-grid pd-grid-cols-4 pd-items-center pd-gap-4",children:[e.jsx(g,{htmlFor:"username",className:"pd-text-right",children:"Username"}),e.jsx(u,{id:"username",defaultValue:"@peduarte",className:"pd-col-span-3"})]})]}),e.jsx(c,{children:e.jsx(i,{type:"submit",children:"Save changes"})})]})]})},o={render:()=>e.jsx("div",{className:"pd-grid pd-grid-cols-2 pd-gap-2",children:["top","bottom","left","right"].map(t=>e.jsxs(f,{children:[e.jsx(F,{asChild:!0,children:e.jsx(i,{variant:"outline",className:"pd-capitalize",children:t})}),e.jsxs(n,{side:t,children:[e.jsxs(l,{children:[e.jsx(m,{children:"Edit profile"}),e.jsx(h,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsx("div",{className:"pd-grid pd-gap-4 pd-py-4",children:e.jsxs("div",{className:"pd-grid pd-grid-cols-4 pd-items-center pd-gap-4",children:[e.jsx(g,{htmlFor:"name",className:"pd-text-right",children:"Name"}),e.jsx(u,{id:"name",defaultValue:"Pedro Duarte",className:"pd-col-span-3"})]})}),e.jsx(c,{children:e.jsx(i,{type:"submit",children:"Save changes"})})]})]},t))})};var S,N,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="pd-grid pd-gap-4 pd-py-4">
          <div className="pd-grid pd-grid-cols-4 pd-items-center pd-gap-4">
            <Label htmlFor="name" className="pd-text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="pd-col-span-3" />
          </div>
          <div className="pd-grid pd-grid-cols-4 pd-items-center pd-gap-4">
            <Label htmlFor="username" className="pd-text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="pd-col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...(j=(N=r.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var y,v,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="pd-grid pd-grid-cols-2 pd-gap-2">
      {["top", "bottom", "left", "right"].map(side => <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="pd-capitalize">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side as "top" | "bottom" | "left" | "right"}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="pd-grid pd-gap-4 pd-py-4">
              <div className="pd-grid pd-grid-cols-4 pd-items-center pd-gap-4">
                <Label htmlFor="name" className="pd-text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="Pedro Duarte" className="pd-col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>)}
    </div>
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const le=["Default","SideBySide"];export{r as Default,o as SideBySide,le as __namedExportsOrder,ne as default};
