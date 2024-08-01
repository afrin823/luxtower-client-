import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ApartmentCard from "./ApartmentCard";


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
           
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        apartment.map(item => <ApartmentCard key={apartment._id} item={item} />
                         
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Apperments;