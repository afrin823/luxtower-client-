

const Location = () => {
    return (
        <div className="container bg-base-200 mx-auto p-6">
        <section className="bg-white p-10">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800" data-aos="fade-left">Location and Directions</h2>
  
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Location</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-lg text-gray-600">The Grand Plaza</p>
              <p className="text-lg text-gray-600">1234 Main Street,</p>
              <p className="text-lg text-gray-600">Metropolis, Country</p>
            </div>
          </div>
  
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Getting Here</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-medium text-gray-800">By Car</h4>
                <p className="text-gray-600"><strong>From Downtown:</strong> Head north on Main Street. Continue straight for 2 miles. The Grand Plaza will be on your right.</p>
                <p className="text-gray-600"><strong>From the Airport:</strong> Take the airport exit towards Highway 1. Merge onto Highway 1 and take Exit 12 for Main Street. Turn left onto Main Street and continue for 3 miles. The Grand Plaza will be on your left.</p>
              </div>
  
              <div>
                <h4 className="text-xl font-medium text-gray-800">By Public Transportation</h4>
                <p className="text-gray-600"><strong>Bus:</strong> Take Bus Route 15 and get off at the Main Street Stop. The Grand Plaza is a 5-minute walk from the bus stop.</p>
                <p className="text-gray-600"><strong>Subway:</strong> Take the Blue Line to the Metropolis Central Station. From there, it’s a 10-minute walk to The Grand Plaza.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
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