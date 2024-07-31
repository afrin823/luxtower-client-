import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const Apperments = () => {
    const [apartment, setApartment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/apartment')
            .then(res => res.json())
            .then(data => {
                const apartmentsItems = data.filter(item => item.code !== 'SUMMER10')
                setApartment(apartmentsItems);
            })
    }, []);
    return (
        <div className="pt-24">
              <Helmet>
                <title>Apperments</title>
            </Helmet>
            <div className="bg-base-200 p-4">
            <h2 className="text-3xl font-bold text-center mb-4">Exclusive Apartment</h2>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {
            apartment.map(item => <div key={apartment._id} className="p-4 bg-white shadow-md rounded-md">
           <img src={item.image} alt="" />
            </div>)
           }
            </div>
        </div>
        </div>
    );
};

export default Apperments;