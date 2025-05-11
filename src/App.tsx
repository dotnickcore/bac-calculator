import BACCalculator from './components/BACCalculator/BACCalculator';
import { Card } from './components/Card/Card';
import { Container } from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Results from './components/Results/Results';


function App() {
  return (

      <Container>
        <Card>
          <Header />
          <BACCalculator />
          <Results />
          <Footer />
        </Card>
      </Container>

  );
}

export default App;
