const Wrapper = ({children}) => {

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#111",
      // justifyContent: 'center',
      // alignItems: 'center',
      // marginLeft: 'auto'
      }}>
      { children }
    </div>
  )
}

export default Wrapper