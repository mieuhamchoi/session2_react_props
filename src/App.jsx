import Parent from "./components/Parent"
import ComA from "./components/ComA"
function App() {
  // function handleHello() {
  //   alert("Hello bạn!")
  // }

  // function handleTest(name, user) {
  //   alert("Hello " + name)
  //   console.log("user", user)
  // }

  // function countValue() {
  //   return 5
  // }
  return (
    <div>
      APP
      {/* <Parent countValue={countValue} name="Cha" onTest={handleTest} onHello={handleHello} count={5} users={["Phước", "Hảo", "Phương"]}/> */}
      <ComA/>
    </div>
  )
}

export default App
