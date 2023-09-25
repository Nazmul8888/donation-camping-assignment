import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";


const DonationDetails = () => {
    const navigate = useNavigate();
    const { name } = useParams(); 
    const donationDetails = useLoaderData();
  
    const filteredDonation = donationDetails.find(
      donation => donation.name === name
    );

    const [singleDonationObj, setSingleDonationObj] = useState(filteredDonation)

    console.log('singleDonationObj', singleDonationObj)

    function donate(obj) {
        

       // Retrieve the existing donation object from local storage
  const existingDonation = JSON.parse(localStorage.getItem('donation')) || [];

  // Push the new object into the existing donations array
  existingDonation.push(obj);

  console.log('existingDonation', existingDonation);


  localStorage.setItem('donation', JSON.stringify(existingDonation));


  navigate("/donation-list");

//   history.push("/donation-list");
      
        // Save the merged donation object to local storage
      }

    

    return (
        <div className="max-w-7xl mx-auto">

            <div className="relative">
                <img className="max-w-[1320px] mx-auto w-[1300px] " src={singleDonationObj.imgage} alt="" />
                <div className="relative bottom-[95px] h-24 bg-black bg-opacity-30 w-[1300px]">
                </div>
                <button className= "relative bottom-[166px] left-10  bg-red-600 px-10 py-2.5 text-white rounded-lg" onClick={() => donate(singleDonationObj)}>Donate</button>
            </div>
           

            <h1>{singleDonationObj.name}</h1>

            <p>{singleDonationObj.description}</p>

            


            

           
        </div>
    );
};

export default DonationDetails;