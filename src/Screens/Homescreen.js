import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Hotels from '../components/Hotels'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import Paginate from '../components/Paginate'
// import ProductCarousel from '../components/ProductCarousel'
// import Meta from '../components/Meta'


const HomeScreen = ({ match ,products }) => {
  //const keyword = match.params.keyword

  //const pageNumber = match.params.pageNumber || 1



  return (
    <>
    
        <>
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                <Hotels product={product} />
              </Col>
            ))}
          </Row>
        
        </>
  
    </>
  )
}

export default HomeScreen