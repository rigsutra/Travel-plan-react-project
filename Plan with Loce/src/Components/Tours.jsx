/* eslint-disable react/prop-types */
import Cards from "./Cards";

// eslint-disable-next-line react/prop-types
const Tours = ({ tours ,removeTours }) => {
  return (
    <div className="container">
      <h1>Plan With Ashish</h1>
      <div className="Cards-container">
       
        {tours.map((tour) => {
          return <Cards key={tour.id} tour={tour} removeTours={removeTours}/>;
        })}
      </div>
    </div>
  );
};

export default Tours;
