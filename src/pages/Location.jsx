

const Location = () => {
    return (
        <div className="container bg-base-200 mx-auto p-6">
        <section className="bg-white p-10">
          <h2 data-aos="fade-right" className="text-4xl font-bold mb-6 text-center animate-bounce border-dotted w-5/12 mx-auto border-y-2 text-gray-800" >Location &nbsp; and &nbsp;Directions</h2>         

          <div className="mb-8 text-center">
       
            <h3 data-aos="fade-right" className="text-2xl font-semibold mx-auto w-2/12 animate-bounce border-dotted border-y-2 border-gray-300 mb-4">Head Office</h3>
            <div className="space-y-4">
              <div>
                <div data-aos="fade-right" className="text-base mb-2 ">
                  LuxTower <br />
                  Savar,Dhaka,Bangaldesh -- 1228 <br />
                  Street No 132
                </div>
                <p data-aos="fade-right" className="text-gray-500 text-base">It sounds like you are describing a manufacturing site for Luxtower, located south of Milan, where the company has established a significant partnership with a historic carpentry workshop. This collaboration likely plays a crucial role in transforming Luxtower designs or materials into high-quality products, combining traditional craftsmanship with modern techniques. If you want a more detailed description or a specific focus, feel free to share more details!</p>
              </div>
  
           
            </div>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
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
        </section>
      </div>
    );
};

export default Location;