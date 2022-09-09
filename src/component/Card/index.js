import "./index.css";
import Card1 from "../Card/card1";
import { Link } from "react-router-dom"

function Card() {
  // const item={image:'./anh.png',
  //             description: 'QUY HOẠCH KHU ĐÔ THỊ PHÚ MỸ HƯNG CỦA ĐẠI PHÚ MỸ NHẬN GIẢI THƯỞNG QUỐC TẾ TẠI HOA KỲ',
  //             time:'30/12/2021'
  //             }
  // const numbers=[item, item, item, item]
  // const listItems = numbers.map((number) =>
  // <li>{number}</li>
  // );
  return (
    <div>
      <div className="ct">Chương Trình</div>
      <div className="card345">
        <div className="left">
          <div className="card-first">
            <Link to='/trang-chi-tiet'>
              <Card1 />
            </Link>
          </div>
          <div className="card-second">
            <Link to='/trang-chi-tiet'>
              <Card1 />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="card-third">
            <Link to='/trang-chi-tiet'>
              <Card1 />
            </Link>
          </div>
          <div className="card-fourth">
            <Link to='/trang-chi-tiet'>
              <Card1 />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
