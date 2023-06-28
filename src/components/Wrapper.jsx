const Wrapper = ({children}) => {

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#111"}}>
      { children }
    </div>
  )
}

export default Wrapper