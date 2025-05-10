import Button from "./components/Button/Button"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import Results from "./components/Results/Results"

function App() {

  return (
    <>
      <div className="flex items-center h-screen w-full bg-sky-200">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <Header />
          <Results />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
