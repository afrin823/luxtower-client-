import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";


const Location = () => {
  return (
    //   <div className="container bg-base-200 mx-auto p-6">
    //   <section className="bg-white p-10">
    //     <h2 data-aos="fade-right" className="text-4xl font-bold mb-6 text-center animate-bounce border-dotted w-5/12 mx-auto border-y-2 text-gray-800" >Location &nbsp; and &nbsp;Directions</h2>         

    //     <div className="mb-8 text-center">

    //       <h3 data-aos="fade-right" className="text-2xl font-semibold mx-auto w-2/12 animate-bounce border-dotted border-y-2 border-gray-300 mb-4">Head Office</h3>
    //       <div className="space-y-4">
    //         <div>
    //           <div data-aos="fade-right" className="text-base mb-2 ">
    //             LuxTower <br />
    //             Savar,Dhaka,Bangaldesh -- 1228 <br />
    //             Street No 132
    //           </div>
    //           <p data-aos="fade-right" className="text-gray-500 text-base">It sounds like you are describing a manufacturing site for Luxtower, located south of Milan, where the company has established a significant partnership with a historic carpentry workshop. This collaboration likely plays a crucial role in transforming Luxtower designs or materials into high-quality products, combining traditional craftsmanship with modern techniques. If you want a more detailed description or a specific focus, feel free to share more details!</p>
    //         </div>


    //       </div>
    //     </div>
    //     <div data-aos="fade-left" className="flex justify-center">
    //           <iframe 
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6435114593187!2d90.4102138798014!3d23.79570562356292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c774a2484447%3A0x6424c6b057aff344!2sC%20House%20Milano%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1722250694052!5m2!1sen!2sbd" 
    //               className="w-full" 
    //               height="450" 
    //               style={{ border: 0 }} 
    //               allowFullScreen="" 
    //               loading="lazy" 
    //               referrerPolicy="no-referrer-when-downgrade"
    //               title="Map showing The Lux Tower location"
    //           ></iframe>
    //       </div>
    //   </section>
    // </div>
    <div className="bg-gray-100 py-8">
      <h2 data-aos="fade-right" className="text-4xl font-bold text-center animate-bounce text-gray-800" >Apartment Location</h2>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">

        <div className="flex flex-col justify-between">
          <div className="space-y-2">
          </div>
          <div data-aos="fade-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6435114593187!2d90.4102138798014!3d23.79570562356292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c774a2484447%3A0x6424c6b057aff344!2sC%20House%20Milano%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1722250694052!5m2!1sen!2sbd"
              className="w-full"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing The Lux Tower location"
            ></iframe>
          </div>
        </div>
        <div data-aos="fade-left" className="">

          <p className="text-xl font-bold">Find our apartment at the following coordinates:</p>
          <div className="">
            <p className="text-base"><strong>Address:</strong> 123 Example St, New York, NY, USA</p>
            <p className="text-base"><strong>How to get there:</strong> From the main station, take the subway line 1 and get off at Example Station. It is a 5-minute walk from there.</p>
            <div className="py-4">
            </div>
            <div className="flex items-center gap-1">
              <FaRegClock className="font-bold text-md" /><h2 className="text-xl font-bold py-1">When to visit:</h2>
            </div>
            <h3 className="text-sm"><i>Monday to Friday - 8AM - 5PM</i></h3>
            <h3 className="text-sm"><i>Saturday - 9AM - 7PM</i></h3>
            <h3 className="text-sm"><i>Sunday - 10AM - 10PM</i></h3>
          </div>
          <div className="py-2">
            <div className="flex items-center gap-1"><IoLocationSharp className="text-xl" /> <h2 className="text-xl font-bold py-2">How to Get in Touch</h2></div>
            <p className="text-base">We make to respond to every enquairy within 48 hours</p>
            <p className="text-base mb-1">Please  call us on 013885588 or use the from above.</p>
            <p className="text-gray-500 text-justify">A location is the place where a particular point or object exists. Location is an important term in geography, and is usually considered more precise than place.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;