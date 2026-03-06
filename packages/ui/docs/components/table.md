# Table 表格

展示多行结构化数据的组件。

## 使用指南

### 基础用法

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "pd-shad-ui"

const invoices = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
]

export default function Example() {
  return (
    <Table>
      <TableCaption>最近的账单列表。</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="pd-w-[100px]">账单号</TableHead>
          <TableHead>状态</TableHead>
          <TableHead>支付方式</TableHead>
          <TableHead className="pd-text-right">金额</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="pd-text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## 组件 API

支持标准 HTML 表格的所有子组件及其属性。
