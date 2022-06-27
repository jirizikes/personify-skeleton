import './App.css';
import { NameInput } from './components/NameInput';
import NameCard from './components/NameCard';

function App() {
  return (
    <>
      <div
        className="bg-text"
        style={{
          zIndex: 10,
        }}
      >
        <header>
          <div className="" style={{ height: '100vh' }}>
            <div className='h-50 w-100' style={{ background: '#5465FF' }}>
              <div className='d-flex align-items-center h-100'>
                <div className='container fluid' >
                  <div className="row justify-content-sm-center text-center py-10">
                    <h1 style={{ color: 'white', fontSize: '5em' }}>Personify</h1>

                  </div>
                </div>
              </div>
            </div>
            <div className='h-50 w-100 d-inline-block' style={{ background: '#BFD7FF' }}>
              <div className='bd-highlight mb-3 d-flex justify-content-center '>
                <div className='container fluid' >
                  <div className="row justify-content-sm-center text-left py-10">
                    <div className="col-sm-7 col-md-5 mb-4 mt-4">
                      <NameInput></NameInput>

                    </div>
                  </div>
                  <div className="row justify-content-sm-center text-left py-10">

                    <div className="col-sm-7 col-md-7">
                      <h2>Results</h2>
                      <NameCard></NameCard>

                    </div>
                  </div>
                </div>
              </div></div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
