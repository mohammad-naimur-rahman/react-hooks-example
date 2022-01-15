const Button = ({ children, onClick }) => {
  console.log('Rendering button', children)
  return (
    <button className="btn btn-success" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
