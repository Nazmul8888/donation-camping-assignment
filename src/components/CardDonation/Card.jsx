

const Card = ({card}) => {

    const{name,imgage,deatils, color}= card;

    // Dynamic class combining background color

    return (
        <div className="py-20">
           <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={imgage}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {name}
    </h5>
    <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
      {deatils}
    </p>
  </div>
  
</div>
        </div>
    )
};

export default Card;