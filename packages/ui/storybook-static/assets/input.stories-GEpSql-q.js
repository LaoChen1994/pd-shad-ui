import{j as e}from"./jsx-runtime-BYYWji4R.js";import{I as l}from"./input-FmITjYkG.js";import{L as f}from"./label-Bis6IScY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BQHNewu7.js";import"./index-DusXwgyS.js";import"./index-CE1WDHOu.js";import"./index-g81hgHuP.js";import"./index-Bew1Yeam.js";import"./index-D1SQP9Z-.js";const W={title:"UI/Input",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","file"]},disabled:{control:"boolean"}}},a={args:{type:"email",placeholder:"Email",className:"w-[300px]"}},r={args:{disabled:!0,type:"email",placeholder:"Email",className:"w-[300px]"}},s={render:t=>e.jsxs("div",{className:"pd-grid pd-w-[300px] pd-w-full pd-max-w-sm pd-items-center pd-gap-1.5",children:[e.jsx(f,{htmlFor:"email",children:"Email"}),e.jsx(l,{id:"email",type:"email",placeholder:"Email",...t})]})},p={render:t=>e.jsxs("div",{className:"pd-grid pd-w-[300px] pd-w-full pd-max-w-sm pd-items-center pd-gap-1.5",children:[e.jsx(f,{htmlFor:"picture",children:"Picture"}),e.jsx(l,{id:"picture",type:"file",...t})]})};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "Email",
    className: "w-[300px]"
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var o,c,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    disabled: true,
    type: "email",
    placeholder: "Email",
    className: "w-[300px]"
  }
}`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="pd-grid pd-w-[300px] pd-w-full pd-max-w-sm pd-items-center pd-gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Email" {...args} />
    </div>
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var w,h,b;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div className="pd-grid pd-w-[300px] pd-w-full pd-max-w-sm pd-items-center pd-gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" {...args} />
    </div>
}`,...(b=(h=p.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const _=["Default","Disabled","WithLabel","File"];export{a as Default,r as Disabled,p as File,s as WithLabel,_ as __namedExportsOrder,W as default};
