import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";


const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("hotels?featured=true&limit=4");
  console.log(data);
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.images[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapest}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
  // return (
  //   <div className="fp">
  //     {loading ? ("loading....") : (
  //     <>
  //     {
  //       data.map((hotel) => (
  //         <div className="fpItem" key={hotel._id}>
  //           <img
  //             src={hotel.images[0]}
  //             alt=""
  //             className="fpImg"
  //           />
  //           <span className="fpName">{hotel.name}</span>
  //           <span className = "fpCity">{hotel.city}</span>
  //           <span className="fpPrice">Starting from ₹{hotel.cheapest}</span>
  //           {hotel.rating && <div className="fpRating">
  //             <button>{hotel.rating}</button>
  //             <span>Excellent!</span>
  //           </div>

  //           }
  //         </div>
  //       ))
  //     }
  //     </>
  //     )}
  //   </div>
  // );
};

export default FeaturedProperties;
