import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Logo from '../Assets/Logo.svg';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='foot'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={Logo} alt="Little Lemon" className="me-3" />
                Little Lemon
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='/home' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='/menu' className='text-reset'>
                  Menu
                </a>
              </p>
              <p>
                <a href='/reservations' className='text-reset'>
                  Reservations
                </a>
              </p>
              <p>
                <a href='/orderOnline' className='text-reset'>
                  Order Online
                </a>
              </p>
              <p>
                <a href='/login' className='text-reset'>
                  Login
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                  1111 This Way, Los Angeles, CA 111111
              </p>
              <p>
                (555)-555-5555
              </p>
              <p>
                littlelemon@yahoo.com
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social Media Links</h6>
              <p>
                @littleLemonParty
              </p>
              <p>
                @littleLemonParty
              </p>
              <p>
                Little Lemon Resurant
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}