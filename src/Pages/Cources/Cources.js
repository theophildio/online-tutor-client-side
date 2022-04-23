import useCources from '../../Hooks/useCources';
import Ratings from '../Home/Ratings/Ratings';
import Cource from './Cource/Cource';
import './Cources.css';

const Cources = () => {
  const [cources] = useCources();

  return (
    <>
      <section className='cources-container'>
        <h3>Cources</h3>
        <hr />
        <div className="cources">
          {
            cources.map( cource => <Cource
              key={cource._id}
              cource={cource}
            ></Cource>
            )
          }
        </div>
      </section>
      <Ratings></Ratings>
    </>
  );
};

export default Cources;