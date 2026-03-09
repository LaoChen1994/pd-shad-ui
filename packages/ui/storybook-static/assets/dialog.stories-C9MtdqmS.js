import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as i}from"./index-ClcD9ViR.js";import{R as w,T as C,P as I,C as D,a as F,b as j,D as y,O as v}from"./index-B4aLL1KX.js";import{c as o}from"./utils-BQHNewu7.js";import{X as T}from"./x-Cu5dQwqG.js";import{B as g}from"./button-vk_5zNi2.js";import{I as u}from"./input-FmITjYkG.js";import{L as f}from"./label-Bis6IScY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D2Zpbh75.js";import"./index-CE1WDHOu.js";import"./index-Bew1Yeam.js";import"./index-CWz5EflU.js";import"./index-CaubhJIw.js";import"./index-CafsI6Qv.js";import"./index-B0ATiKj9.js";import"./index-C2DhGJOp.js";import"./index-kkVLZR_L.js";import"./index-vEPGRr1b.js";import"./index-B2NcgzwI.js";import"./createLucideIcon-C6mSaUsV.js";import"./index-g81hgHuP.js";import"./index-D1SQP9Z-.js";import"./index-DusXwgyS.js";const b=w,k=C,E=I,r=i.forwardRef(({className:a,...t},d)=>e.jsx(v,{ref:d,className:o("pd-fixed pd-inset-0 pd-z-50 pd-bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t}));r.displayName=v.displayName;const p=i.forwardRef(({className:a,children:t,...d},_)=>e.jsxs(E,{children:[e.jsx(r,{}),e.jsxs(D,{ref:_,className:o("pd-fixed pd-left-[50%] pd-top-[50%] pd-z-50 pd-grid pd-w-full pd-max-w-lg pd-translate-x-[-50%] pd-translate-y-[-50%] pd-gap-4 pd-border pd-bg-background pd-p-6 pd-shadow-lg pd-duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-[50%] data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-[50%] data-[state=open]:slide-in-from-top-[48%] sm:pd-rounded-lg",a),...d,children:[t,e.jsxs(F,{className:"pd-absolute pd-right-4 pd-top-4 pd-rounded-sm pd-opacity-70 pd-ring-offset-background pd-transition-opacity hover:pd-opacity-100 focus:pd-outline-none focus:pd-ring-2 focus:pd-ring-ring focus:pd-ring-offset-2 disabled:pd-pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx(T,{className:"pd-h-4 pd-w-4"}),e.jsx("span",{className:"pd-sr-only",children:"Close"})]})]})]}));p.displayName=D.displayName;const l=({className:a,...t})=>e.jsx("div",{className:o("pd-flex pd-flex-col pd-space-y-1.5 pd-text-center sm:pd-text-left",a),...t});l.displayName="DialogHeader";const n=({className:a,...t})=>e.jsx("div",{className:o("pd-flex pd-flex-col-reverse sm:pd-flex-row sm:pd-justify-end sm:pd-space-x-2",a),...t});n.displayName="DialogFooter";const m=i.forwardRef(({className:a,...t},d)=>e.jsx(j,{ref:d,className:o("pd-text-lg pd-font-semibold pd-leading-none pd-tracking-tight",a),...t}));m.displayName=j.displayName;const c=i.forwardRef(({className:a,...t},d)=>e.jsx(y,{ref:d,className:o("pd-text-sm pd-text-muted-foreground",a),...t}));c.displayName=y.displayName;r.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};l.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};n.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};m.__docgenInfo={description:"",methods:[]};c.__docgenInfo={description:"",methods:[]};const te={title:"UI/Dialog",component:b,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(b,{children:[e.jsx(k,{asChild:!0,children:e.jsx(g,{variant:"outline",children:"Edit Profile"})}),e.jsxs(p,{className:"pd-sm:max-w-[425px]",children:[e.jsxs(l,{children:[e.jsx(m,{children:"Edit profile"}),e.jsx(c,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"pd-grid pd-gap-4 pd-py-4",children:[e.jsxs("div",{className:"pd-grid pd-grid-cols-4 pd-items-center pd-gap-4",children:[e.jsx(f,{htmlFor:"name",className:"pd-text-right",children:"Name"}),e.jsx(u,{id:"name",defaultValue:"Pedro Duarte",className:"pd-col-span-3"})]}),e.jsxs("div",{className:"pd-grid pd-grid-cols-4 pd-items-center pd-gap-4",children:[e.jsx(f,{htmlFor:"username",className:"pd-text-right",children:"Username"}),e.jsx(u,{id:"username",defaultValue:"@peduarte",className:"pd-col-span-3"})]})]}),e.jsx(n,{children:e.jsx(g,{type:"submit",children:"Save changes"})})]})]})};var x,h,N;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="pd-sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(N=(h=s.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};const de=["Default"];export{s as Default,de as __namedExportsOrder,te as default};
