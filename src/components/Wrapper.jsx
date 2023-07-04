const Wrapper = ({children}) => {

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#111",
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '150px'}}>
      { children }
    </div>
  )
}

export default Wrapper