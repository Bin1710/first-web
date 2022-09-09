import anh from '../../assets/anh.png';
import './card1.css'


function Card1() {
    return (
        <div className='card123'>
                <img src={anh} className='card-left' alt='' ></img>
                <div className='card-right'>
                    <p className='card-date'> 31/12/2021</p>
                    <p className='card-text'>QUY HOẠCH KHU ĐÔ THỊ PHÚ MỸ HƯNG CỦA ĐẠI PHÚ MỸ NHẬN GIẢI THƯỞNG QUỐC TẾ TẠI HOA KỲ</p>
                </div>
        </div>
    )
}
export default Card1;