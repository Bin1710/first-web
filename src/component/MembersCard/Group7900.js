import React from 'react';
import './Group7900.css';
import {Link} from 'react-router-dom';
import anh3 from "../../assets/golf-2658119_1920 1.png"

function MemberCards(){
    return (
            <div>
                <div className="container_cardname1">Thành Viên</div>
                
                <div className="cards">
                    <div className="card">                                                                  
                        <Link to="/trang-chi-tiet">
                            <img className="card-item card-img" src={anh3}/>
                            <h1 className="card-item card-title1">Nguyễn Văn A</h1>
                            <h2 className="card-item card-title2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected... </h2>
                        </Link>
                    </div>      
                    <div className="card">                           
                        <Link to="/trang-chi-tiet">
                            <img className="card-item card-img" src={anh3}/>
                            <h1 className="card-item card-title1">Nguyễn Văn B</h1>
                            <h2 className="card-item card-title2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected... </h2>
                        </Link>                       
                    </div>
                    <div className="card">                           
                        <Link to="/trang-chi-tiet">
                            <img className="card-item card-img" src={anh3}/>
                            <h1 className="card-item card-title1">Nguyễn Văn C</h1>
                            <h2 className="card-item card-title2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected... </h2>
                        </Link>                               
                    </div>
                </div>
            </div>
    );
}
export default MemberCards;
          