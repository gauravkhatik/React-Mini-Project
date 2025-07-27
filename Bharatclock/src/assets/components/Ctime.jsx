const Ctime = () => {
  let time = new Date()
return <p>
  This is current time: {time.toLocaleTimeString()} - {time.toLocaleDateString()}
</p>
 
}

export default Ctime
