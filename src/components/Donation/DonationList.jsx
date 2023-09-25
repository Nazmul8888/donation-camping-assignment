import { useEffect, useState } from "react";


const DonationList = () => {

    const [donationObj, setDonationObj] = useState(null);

  useEffect(() => {
    const existingDonation = JSON.parse(localStorage.getItem('donation'));
    
    setDonationObj(existingDonation);
  }, [])





    console.log('donationObj', donationObj)
    return (
        
        <>

        {donationObj && 
        <>
             <div className="max-w-7xl mx-auto my-10">
        <div className="grid grid-cols-2 gap-4">
                {donationObj.map((donation, index) => (
      <div key={index}>
        {/* Render donation details, adjust this based on your data structure */}
        
<div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={donation.imgage} alt="" />
<div className="flex flex-col justify-between p-4 leading-normal">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{donation.name}</h5>
<p className="mb-3 font-normal text-gray-700 ">{donation.price_price} $</p>
</div>
</div>

        
      </div>
    ))}
        </div>




</div>
        </>
        }
       


        </>

        
    );
};

export default DonationList;