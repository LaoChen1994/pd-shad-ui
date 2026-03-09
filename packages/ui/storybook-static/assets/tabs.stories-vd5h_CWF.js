import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as l}from"./index-ClcD9ViR.js";import{P as x,a as j}from"./index-D2Zpbh75.js";import{c as X}from"./index-CWz5EflU.js";import{R as Y,I as Z,c as E}from"./index-0MWSfDpf.js";import{P as ee}from"./index-B2NcgzwI.js";import{u as ae}from"./index-CZKF78Oq.js";import{u as se}from"./index-B0ATiKj9.js";import{u as re}from"./index-CaubhJIw.js";import{c as y}from"./utils-BQHNewu7.js";import{C as I,a as F,b as _,c as A,d as P,e as L}from"./card-tgHBLhf5.js";import{L as v}from"./label-Bis6IScY.js";import{I as b}from"./input-FmITjYkG.js";import{B as R}from"./button-vk_5zNi2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CE1WDHOu.js";import"./index-Bew1Yeam.js";import"./index-DBcOBWTZ.js";import"./index-kkVLZR_L.js";import"./index-CafsI6Qv.js";import"./index-DusXwgyS.js";import"./index-g81hgHuP.js";import"./index-D1SQP9Z-.js";var T="Tabs",[te]=X(T,[E]),M=E(),[oe,w]=te(T),k=l.forwardRef((a,s)=>{const{__scopeTabs:r,value:t,onValueChange:d,defaultValue:c,orientation:o="horizontal",dir:p,activationMode:m="automatic",...f}=a,i=ae(p),[n,u]=se({prop:t,onChange:d,defaultProp:c??"",caller:T});return e.jsx(oe,{scope:r,baseId:re(),value:n,onValueChange:u,orientation:o,dir:i,activationMode:m,children:e.jsx(x.div,{dir:i,"data-orientation":o,...f,ref:s})})});k.displayName=T;var B="TabsList",$=l.forwardRef((a,s)=>{const{__scopeTabs:r,loop:t=!0,...d}=a,c=w(B,r),o=M(r);return e.jsx(Y,{asChild:!0,...o,orientation:c.orientation,dir:c.dir,loop:t,children:e.jsx(x.div,{role:"tablist","aria-orientation":c.orientation,...d,ref:s})})});$.displayName=B;var G="TabsTrigger",H=l.forwardRef((a,s)=>{const{__scopeTabs:r,value:t,disabled:d=!1,...c}=a,o=w(G,r),p=M(r),m=O(o.baseId,t),f=q(o.baseId,t),i=t===o.value;return e.jsx(Z,{asChild:!0,...p,focusable:!d,active:i,children:e.jsx(x.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":f,"data-state":i?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:m,...c,ref:s,onMouseDown:j(a.onMouseDown,n=>{!d&&n.button===0&&n.ctrlKey===!1?o.onValueChange(t):n.preventDefault()}),onKeyDown:j(a.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&o.onValueChange(t)}),onFocus:j(a.onFocus,()=>{const n=o.activationMode!=="manual";!i&&!d&&n&&o.onValueChange(t)})})})});H.displayName=G;var K="TabsContent",U=l.forwardRef((a,s)=>{const{__scopeTabs:r,value:t,forceMount:d,children:c,...o}=a,p=w(K,r),m=O(p.baseId,t),f=q(p.baseId,t),i=t===p.value,n=l.useRef(i);return l.useEffect(()=>{const u=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(u)},[]),e.jsx(ee,{present:d||i,children:({present:u})=>e.jsx(x.div,{"data-state":i?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":m,hidden:!u,id:f,tabIndex:0,...o,ref:s,style:{...a.style,animationDuration:n.current?"0s":void 0},children:u&&c})})});U.displayName=K;function O(a,s){return`${a}-trigger-${s}`}function q(a,s){return`${a}-content-${s}`}var ne=k,z=$,J=H,Q=U;const W=ne,N=l.forwardRef(({className:a,...s},r)=>e.jsx(z,{ref:r,className:y("pd-inline-flex pd-h-10 pd-items-center pd-justify-center pd-rounded-md pd-bg-muted pd-p-1 pd-text-muted-foreground",a),...s}));N.displayName=z.displayName;const h=l.forwardRef(({className:a,...s},r)=>e.jsx(J,{ref:r,className:y("pd-inline-flex pd-items-center pd-justify-center pd-whitespace-nowrap pd-rounded-sm pd-px-3 pd-py-1.5 pd-text-sm pd-font-medium pd-ring-offset-background pd-transition-all focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2 disabled:pd-pointer-events-none disabled:pd-opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",a),...s}));h.displayName=J.displayName;const C=l.forwardRef(({className:a,...s},r)=>e.jsx(Q,{ref:r,className:y("pd-mt-2 pd-ring-offset-background focus-visible:pd-outline-none focus-visible:pd-ring-2 focus-visible:pd-ring-ring focus-visible:pd-ring-offset-2",a),...s}));C.displayName=Q.displayName;N.__docgenInfo={description:"",methods:[]};h.__docgenInfo={description:"",methods:[]};C.__docgenInfo={description:"",methods:[]};const Pe={title:"UI/Tabs",component:W,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>e.jsxs(W,{defaultValue:"account",className:"pd-w-[400px]",children:[e.jsxs(N,{className:"pd-grid pd-w-full pd-grid-cols-2",children:[e.jsx(h,{value:"account",children:"Account"}),e.jsx(h,{value:"password",children:"Password"})]}),e.jsx(C,{value:"account",children:e.jsxs(I,{children:[e.jsxs(F,{children:[e.jsx(_,{children:"Account"}),e.jsx(A,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(P,{className:"pd-space-y-2",children:[e.jsxs("div",{className:"pd-space-y-1",children:[e.jsx(v,{htmlFor:"name",children:"Name"}),e.jsx(b,{id:"name",defaultValue:"pd-Pedro pd-Duarte"})]}),e.jsxs("div",{className:"pd-space-y-1",children:[e.jsx(v,{htmlFor:"username",children:"Username"}),e.jsx(b,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(L,{children:e.jsx(R,{children:"Save changes"})})]})}),e.jsx(C,{value:"password",children:e.jsxs(I,{children:[e.jsxs(F,{children:[e.jsx(_,{children:"Password"}),e.jsx(A,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(P,{className:"pd-space-y-2",children:[e.jsxs("div",{className:"pd-space-y-1",children:[e.jsx(v,{htmlFor:"current",children:"Current password"}),e.jsx(b,{id:"current",type:"password"})]}),e.jsxs("div",{className:"pd-space-y-1",children:[e.jsx(v,{htmlFor:"new",children:"New password"}),e.jsx(b,{id:"new",type:"password"})]})]}),e.jsx(L,{children:e.jsx(R,{children:"Save password"})})]})})]})};var D,S,V;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="pd-w-[400px]">
      <TabsList className="pd-grid pd-w-full pd-grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="pd-space-y-2">
            <div className="pd-space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="pd-Pedro pd-Duarte" />
            </div>
            <div className="pd-space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="pd-space-y-2">
            <div className="pd-space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="pd-space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
}`,...(V=(S=g.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const Le=["Default"];export{g as Default,Le as __namedExportsOrder,Pe as default};
