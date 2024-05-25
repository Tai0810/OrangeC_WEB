import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { Link } from 'react-router-dom';

const { Text, Title } = Typography;

export default function Welcome() {
  return (
    <div className='container' style={{ background: '#1D1D1D', width: '100vw', height: '100vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <img src='./images/Group 15app.svg' style={{ height: '200px', width: '100%' }}></img>
        <Text style={{color:'white', fontSize:'24px', marginTop:'50px', marginBottom:'50px', fontWeight:800}}>Chào mừng đến với OrangeC PC</Text>
        <div style={{width:'600px', height:'80px', backgroundColor:'#F24E1E', color:'white', fontSize:'30px', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'10px'}}
      >
         <Link to='/' style={{ fontSize: 30, fontWeight: 800, color: '#FFF', textDecoration:'none',}}>Đăng nhập</Link>
      </div>
      <div style={{width:'600px', height:'80px', backgroundColor:'#242424', color:'white', fontSize:'30px', fontWeight:'700', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'10px', marginTop:'30px'}}
      >
         <Link to='/register' style={{ fontSize: 30, fontWeight: 800, color: '#FFF', textDecoration:'none',}}>Đăng ký</Link>
      </div>
      
    </div>
  )
}
