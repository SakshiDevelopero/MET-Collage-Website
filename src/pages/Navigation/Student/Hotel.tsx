
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "./Hotel.css";

const Hotel = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-primary">Hostel Facilities</h1>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4 text-lg text-gray-700">
              MET Bhujbal Knowledge City provides comfortable and secure hostel accommodation for boys and girls separately. Our hostels are designed to offer a home away from home for students, with all the necessary amenities and facilities for a conducive living and learning environment.
            </p>
            
            <p className="text-gray-700">
              Living in the hostel gives students an opportunity to experience community living, develop interpersonal skills, and build lasting friendships. It also allows them to focus on their studies without the hassle of daily commuting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">Boys' Hostel</h2>
              <img 
                src="https://placeholder.pics/svg/600x400/DEDEDE/555555/Boys%20Hostel" 
                alt="Boys Hostel" 
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700">
                The Boys' Hostel is located within the campus, providing a safe and convenient accommodation option for male students. It is equipped with modern amenities and is well-maintained to ensure a comfortable stay for the residents.
              </p>
              <div className="mt-4">
                <p className="font-bold mb-2">Capacity:</p>
                <p className="text-gray-700">500 students (in single, double, and triple occupancy rooms)</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-primary">Girls' Hostel</h2>
              <img 
                src="https://placeholder.pics/svg/600x400/DEDEDE/555555/Girls%20Hostel" 
                alt="Girls Hostel" 
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700">
                The Girls' Hostel is also located within the campus, providing a secure and comfortable accommodation option for female students. It is designed with special attention to safety and comfort, ensuring a pleasant stay for the residents.
              </p>
              <div className="mt-4">
                <p className="font-bold mb-2">Capacity:</p>
                <p className="text-gray-700">400 students (in single, double, and triple occupancy rooms)</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Hostel Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Comfortable Rooms</h3>
              <p className="text-gray-700">
                Well-ventilated and spacious rooms with comfortable beds, study tables, chairs, and cupboards. Options for single, double, and triple occupancy rooms are available.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Mess Facility</h3>
              <p className="text-gray-700">
                Hygienic and nutritious food is served in the hostel mess. The menu is planned to provide a balanced diet and cater to diverse tastes. Special dietary requirements are also accommodated upon request.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Wi-Fi Connectivity</h3>
              <p className="text-gray-700">
                High-speed Wi-Fi connectivity is available throughout the hostel premises, allowing students to access online resources, attend virtual classes, and stay connected with their family and friends.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Common Room</h3>
              <p className="text-gray-700">
                Spacious common room equipped with television, indoor games, and comfortable seating arrangements. It serves as a recreational space for students to unwind and socialize.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Laundry Service</h3>
              <p className="text-gray-700">
                Laundry service is available for the hostel residents. Washing machines are also provided for students who prefer to do their laundry themselves.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Security</h3>
              <p className="text-gray-700">
                24/7 security guards, CCTV surveillance, and biometric entry system ensure the safety and security of the hostel residents. Visitors are allowed only during specified hours.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Medical Facility</h3>
              <p className="text-gray-700">
                A first-aid kit is available in the hostel, and medical assistance is provided in case of emergencies. A dispensary is located within the campus for regular medical consultations.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Study Room</h3>
              <p className="text-gray-700">
                Dedicated study rooms are available in the hostel for students who prefer to study in a quiet and focused environment. The study rooms are equipped with proper lighting and furniture.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">Gym & Sports</h3>
              <p className="text-gray-700">
                A mini-gym with basic fitness equipment is available in the hostel. Students also have access to the college sports facilities, including playgrounds, courts, and indoor sports facilities.
              </p>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Hostel Fee Structure</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <p className="mb-4 text-gray-700">
              The hostel fee varies based on the type of accommodation (single, double, or triple occupancy). The fee is payable on a semester basis along with the tuition fee. The fee structure for the current academic year is as follows:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b text-left bg-gray-100">Accommodation Type</th>
                    <th className="py-3 px-4 border-b text-left bg-gray-100">Fee per Semester (in Rs.)</th>
                    <th className="py-3 px-4 border-b text-left bg-gray-100">Mess Fee per Semester (in Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Single Occupancy</td>
                    <td className="py-3 px-4 border-b">30,000</td>
                    <td className="py-3 px-4 border-b">25,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Double Occupancy</td>
                    <td className="py-3 px-4 border-b">25,000</td>
                    <td className="py-3 px-4 border-b">25,000</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Triple Occupancy</td>
                    <td className="py-3 px-4">20,000</td>
                    <td className="py-3 px-4">25,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-700">
              <strong>Note:</strong> A security deposit of Rs. 5,000 is also payable at the time of admission to the hostel. This deposit is refundable at the time of vacating the hostel, subject to deduction for any damages or dues.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-primary">Hostel Admission Process</h2>
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Application:</strong> Students who wish to apply for hostel accommodation need to fill out the hostel application form available at the Hostel Office or downloadable from the college website.
              </li>
              <li>
                <strong>Document Submission:</strong> Submit the completed application form along with required documents (ID proof, address proof, passport-size photographs, etc.) to the Hostel Office.
              </li>
              <li>
                <strong>Allotment:</strong> Hostel rooms are allotted on a first-come, first-served basis, subject to availability. Priority is given to outstation students.
              </li>
              <li>
                <strong>Fee Payment:</strong> Pay the hostel fee and security deposit at the Accounts Office upon receiving the allotment letter.
              </li>
              <li>
                <strong>Registration:</strong> Complete the hostel registration process and collect the room key from the Hostel Warden.
              </li>
            </ol>
            <p className="text-gray-700">
              The hostel admission process begins before the start of each academic year. Students are advised to apply early to secure accommodation.
            </p>
          </div>
          
          <div className="bg-primary text-white p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Hostel Rules and Regulations</h2>
            <p className="mb-4">
              All hostel residents are expected to adhere to the hostel rules and regulations. These rules are designed to ensure the safety, security, and well-being of all residents and to maintain discipline in the hostel.
            </p>
            <p className="mb-2">
              <strong>Some key rules include:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintaining discipline and decorum in the hostel premises.</li>
              <li>Adhering to the hostel timings and entry/exit regulations.</li>
              <li>Respecting the privacy and comfort of fellow residents.</li>
              <li>Proper use and maintenance of hostel facilities and property.</li>
              <li>Prohibition of ragging, smoking, alcohol, and drugs in the hostel premises.</li>
              <li>Visitors are allowed only during specified hours and in designated areas.</li>
              <li>Prior permission is required for overnight stay outside the hostel.</li>
            </ul>
            <p className="mt-4">
              A detailed copy of the hostel rules and regulations is provided to each resident at the time of admission. Violation of these rules may result in disciplinary action, including expulsion from the hostel.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-2xl font-bold mb-4 text-primary">Contact Hostel Administration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold mb-2">Boys' Hostel Warden:</p>
                <p className="mb-1">Mr. Rajesh Sharma</p>
                <p className="mb-1">Email: boyshostel@metbkc.ac.in</p>
                <p>Phone: +91-241-2345678 (Ext. 890)</p>
              </div>
              <div>
                <p className="font-bold mb-2">Girls' Hostel Warden:</p>
                <p className="mb-1">Dr. Anjali Patel</p>
                <p className="mb-1">Email: girlshostel@metbkc.ac.in</p>
                <p>Phone: +91-241-2345678 (Ext. 891)</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-bold mb-2">Hostel Office:</p>
              <p className="mb-1">Working Hours: Monday to Friday, 9:00 AM to 5:00 PM</p>
              <p className="mb-1">Email: hostel@metbkc.ac.in</p>
              <p>Phone: +91-241-2345678 (Ext. 892)</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-primary text-white hover:bg-primary-dark">
              Download Hostel Application Form
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hotel;
