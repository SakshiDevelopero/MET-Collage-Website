
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./Transport.css";

const Transport = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary">Transportation Services</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4 text-lg text-gray-700">
              MET Bhujbal Knowledge City provides reliable and convenient transportation services for students and staff members. Our fleet of buses covers various routes in and around Nashik city, ensuring safe and comfortable travel to and from the campus.
            </p>
            
            <p className="text-gray-700">
              The transportation service is designed to cater to the needs of day scholars who commute daily to the campus. We prioritize safety, punctuality, and comfort in our transportation services.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Bus Routes</h2>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left bg-gray-100">Route No.</th>
                  <th className="py-3 px-4 border-b text-left bg-gray-100">Starting Point</th>
                  <th className="py-3 px-4 border-b text-left bg-gray-100">Major Stops</th>
                  <th className="py-3 px-4 border-b text-left bg-gray-100">Departure Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Route 1</td>
                  <td className="py-3 px-4 border-b">Nashik Road</td>
                  <td className="py-3 px-4 border-b">CBS, Gadkari Chowk, Indira Nagar</td>
                  <td className="py-3 px-4 border-b">7:30 AM</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Route 2</td>
                  <td className="py-3 px-4 border-b">College Road</td>
                  <td className="py-3 px-4 border-b">Gangapur Road, Canada Corner, CIDCO</td>
                  <td className="py-3 px-4 border-b">7:45 AM</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Route 3</td>
                  <td className="py-3 px-4 border-b">Panchavati</td>
                  <td className="py-3 px-4 border-b">Dwarka, MICO Circle, Satpur</td>
                  <td className="py-3 px-4 border-b">7:15 AM</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Route 4</td>
                  <td className="py-3 px-4 border-b">Mumbai Naka</td>
                  <td className="py-3 px-4 border-b">Gangapur Naka, Untwadi, Mahatma Nagar</td>
                  <td className="py-3 px-4 border-b">7:30 AM</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Route 5</td>
                  <td className="py-3 px-4">Ambad</td>
                  <td className="py-3 px-4">Ambad Link Road, MIDC, Pathardi</td>
                  <td className="py-3 px-4">7:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-8 text-gray-700">
            <strong>Note:</strong> The above schedule is for morning pick-up. Return buses leave the campus at 4:30 PM, 5:30 PM, and 6:30 PM, following the same routes in reverse.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Bus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Comfortable Seating</h3>
              <p className="text-gray-700">
                Our buses are equipped with comfortable seats to ensure a pleasant journey. Each bus has adequate seating capacity to accommodate all registered students.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Safety Measures</h3>
              <p className="text-gray-700">
                Safety is our top priority. All our buses are equipped with first-aid kits, fire extinguishers, and speed governors. Regular maintenance checks are conducted to ensure the vehicles are in good condition.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Experienced Drivers</h3>
              <p className="text-gray-700">
                Our buses are operated by experienced and licensed drivers who are trained in safe driving practices. They are familiar with the routes and ensure timely pickup and drop.
              </p>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Transportation Fee</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <p className="mb-4 text-gray-700">
              The transportation fee varies based on the distance and route. The fee is payable on a semester basis along with the tuition fee. The fee structure for the current academic year is as follows:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b text-left bg-gray-100">Distance Range</th>
                    <th className="py-3 px-4 border-b text-left bg-gray-100">Fee per Semester (in Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Up to 5 km</td>
                    <td className="py-3 px-4 border-b">5,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">5-10 km</td>
                    <td className="py-3 px-4 border-b">7,500</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">10-15 km</td>
                    <td className="py-3 px-4 border-b">10,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Above 15 km</td>
                    <td className="py-3 px-4">12,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">How to Avail Transportation Services</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Registration:</strong> Students who wish to avail transportation services need to register at the Transportation Office.
              </li>
              <li>
                <strong>Form Submission:</strong> Fill out the transportation request form with personal details, pickup location, and contact information.
              </li>
              <li>
                <strong>Fee Payment:</strong> Pay the transportation fee for the semester at the Accounts Office.
              </li>
              <li>
                <strong>ID Card:</strong> Collect the Transportation ID Card, which must be carried while traveling in the college bus.
              </li>
            </ol>
            <p className="text-gray-700">
              The registration process needs to be completed before the start of each academic year or semester.
            </p>
          </div>
          
          <div className="bg-primary text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Transportation Office</h2>
            <p className="mb-4">
              For any queries related to transportation services, route information, or fee details, please contact the Transportation Office.
            </p>
            <p className="mb-2">
              <strong>Office Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM
            </p>
            <p className="mb-1">
              <strong>Email:</strong> transport@metbkc.ac.in
            </p>
            <p>
              <strong>Phone:</strong> +91-241-2345678 (Ext. 567)
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-primary text-white hover:bg-primary-dark">
              Download Bus Schedule
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transport;
