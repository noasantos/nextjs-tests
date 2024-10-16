

export default function page({ params } : {
  params: { productId: string }
}) {
  return (
    <div>Product Detail: {params.productId}</div>
  )
}
