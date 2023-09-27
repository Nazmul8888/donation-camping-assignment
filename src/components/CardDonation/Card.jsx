
// This is card section


const Card = ({card}) => {

    const{name,imgage,deatils, name_bg,card_bg, text_button_bg,button_bg,price_price}= card;

    

    return (
        <div className="py-10">
          <div className="card w-96 bg-base-100 shadow-xl" style={{background:`${card_bg}`}}>
        <figure><img src={imgage} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title text-[16px] bg-[${name_bg}] font-medium px-2 w-[60%] text-center " style={{color: `${text_button_bg}`, background: `${name_bg}`}}>{name}</h2>
        <p className="text-[22px] font-semibold">{deatils}</p>
        <p className="text-[20px] font-semibold" style={{color: `${text_button_bg}`}}>{}</p>

        {/* <button className="btn btn-neutral border-none text-white" style={{background: `${button_bg}` }}>bbbb</button> */}
        
      </div>
        </div>
        </div>
    )
};

export default Card;