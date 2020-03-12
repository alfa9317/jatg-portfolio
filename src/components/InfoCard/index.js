import React from "react";
import "./style.css";
import { Card, Row, Col } from 'antd';

function InfoCard (props) {
  return (
    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Description:</strong> {props.description}
    //       </li>
    //     </ul>
    //   </div>
    //   <span onClick={() => props.removeFriend(props.id)} className="remove">
    //     𝘅
    //   </span>
    // </div>
        // <div>
        //      <div className="col s12 m7">
        //         <div className="card horizontal">
        //         <div className="card-image">
        //             <img src={props.image} style={{width:'250px', height:'150px'}}/>
        //         </div>
        //         <div className="card-stacked">
        //             <div className="card-content">
        //                 <p>{props.description}</p>
        //             </div>
        //         </div>
        //         <div className="card-action">
        //             <a href="#">This is a link</a>
        //         </div>
        //         </div>
        //     </div>
        // </div>
        <Card title={props.name} align='start' style={{margin:'20px 0 20px 0',boxShadow: '0px 1px 4px 0px #888888'}}extra={<a href={props.url} target="_blank" rel="noopener noreferrer">More</a>}>
            <Row gutter={[16,24]}>
                <Col xs={{span: 24}} sm={{span: 24}} md={{span: 8}} lg={{span: 6}} xl={{span: 6}}>
                    <img alt= 'project' src={props.image} style={{width:'100%', height:'auto'}}/>
                </Col>
                <Col xs={{span: 22}} sm={{span: 22}} md={{span: 12, offset:2}} lg={{span: 15, offset:2}} xl={{span: 15, offset:1}} >
                    <p>{props.description}</p>
                </Col>
            </Row>
        </Card>
  );
}

export default InfoCard;