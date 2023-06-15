function CardSection({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div>
      <h4 className="text-cyan-500 font-semibold text-2xl">
        {title}
      </h4>
      <p className="text-zinc-300 text-xl" >
        {children}
      </p>
    </div>
  )
}

export default CardSection