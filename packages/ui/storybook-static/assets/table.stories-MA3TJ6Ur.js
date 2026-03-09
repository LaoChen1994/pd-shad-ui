import{j as e}from"./jsx-runtime-BYYWji4R.js";import{r as d}from"./index-ClcD9ViR.js";import{c as n}from"./utils-BQHNewu7.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m=d.forwardRef(({className:a,...t},o)=>e.jsx("div",{className:"pd-relative pd-w-full pd-overflow-auto",children:e.jsx("table",{ref:o,className:n("pd-w-full pd-caption-bottom pd-text-sm",a),...t})}));m.displayName="Table";const c=d.forwardRef(({className:a,...t},o)=>e.jsx("thead",{ref:o,className:n("[&_tr]:border-b",a),...t}));c.displayName="TableHeader";const p=d.forwardRef(({className:a,...t},o)=>e.jsx("tbody",{ref:o,className:n("[&_tr:last-child]:border-0",a),...t}));p.displayName="TableBody";const b=d.forwardRef(({className:a,...t},o)=>e.jsx("tfoot",{ref:o,className:n("pd-border-t pd-bg-muted/50 pd-font-medium [&>tr]:last:border-b-0",a),...t}));b.displayName="TableFooter";const i=d.forwardRef(({className:a,...t},o)=>e.jsx("tr",{ref:o,className:n("pd-border-b pd-transition-colors hover:pd-bg-muted/50 data-[state=selected]:bg-muted",a),...t}));i.displayName="TableRow";const s=d.forwardRef(({className:a,...t},o)=>e.jsx("th",{ref:o,className:n("pd-h-12 pd-px-4 pd-text-left pd-align-middle pd-font-medium pd-text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...t}));s.displayName="TableHead";const l=d.forwardRef(({className:a,...t},o)=>e.jsx("td",{ref:o,className:n("pd-p-4 pd-align-middle [&:has([role=checkbox])]:pr-0",a),...t}));l.displayName="TableCell";const T=d.forwardRef(({className:a,...t},o)=>e.jsx("caption",{ref:o,className:n("pd-mt-4 pd-text-sm pd-text-muted-foreground",a),...t}));T.displayName="TableCaption";m.__docgenInfo={description:"",methods:[],displayName:"Table"};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};p.__docgenInfo={description:"",methods:[],displayName:"TableBody"};b.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};s.__docgenInfo={description:"",methods:[],displayName:"TableHead"};i.__docgenInfo={description:"",methods:[],displayName:"TableRow"};l.__docgenInfo={description:"",methods:[],displayName:"TableCell"};T.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const g={title:"Components/Table",component:m},u=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],r={render:()=>e.jsxs(m,{children:[e.jsx(T,{children:"A list of your recent invoices."}),e.jsx(c,{children:e.jsxs(i,{children:[e.jsx(s,{className:"pd-w-[100px]",children:"Invoice"}),e.jsx(s,{children:"Status"}),e.jsx(s,{children:"Method"}),e.jsx(s,{className:"pd-text-right",children:"Amount"})]})}),e.jsx(p,{children:u.map(a=>e.jsxs(i,{children:[e.jsx(l,{className:"pd-font-medium",children:a.invoice}),e.jsx(l,{children:a.paymentStatus}),e.jsx(l,{children:a.paymentMethod}),e.jsx(l,{className:"pd-text-right",children:a.totalAmount})]},a.invoice))}),e.jsx(b,{children:e.jsxs(i,{children:[e.jsx(l,{colSpan:3,children:"Total"}),e.jsx(l,{className:"pd-text-right",children:"$2,500.00"})]})})]})};var h,x,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="pd-w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="pd-text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => <TableRow key={invoice.invoice}>
            <TableCell className="pd-font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="pd-text-right">{invoice.totalAmount}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="pd-text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,g as default};
