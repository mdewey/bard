import CurrentScale from "../components/CurrentScale";
import ScaleSelector from "../components/ScaleSelector"
import SelectedChords from "../components/SelectedChords";


const Home = () => {
  return <>
    <ScaleSelector />
    <CurrentScale />
    <SelectedChords />
  </>
}

export default Home;
