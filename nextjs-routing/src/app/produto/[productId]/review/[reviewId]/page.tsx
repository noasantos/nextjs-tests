

export default function page({ params } : {
    params: {productId: string, reviewId: string}
}) {
  return (
    <div className="flex flex-col max-w-[400px]">
        <h1>Product: {params.productId}</h1>
        <h2>Review: {params.reviewId}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, unde ducimus. Eum provident nam nostrum sed molestiae fuga illo saepe, quos fugiat necessitatibus voluptatem quis harum. Voluptates provident a facilis.</p>
    </div>
    
  )
}
