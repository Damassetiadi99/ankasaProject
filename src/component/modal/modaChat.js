'use client'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
// import p1 from '../../../Assets/img/p1.png'
// import gr5 from '../../../Assets/img/gr5.png'
// import g10 from '../../../Assets/img/g10.png'





function MyModalTicket(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">

            <Modal.Body className="show-grid py-5">
                <Container>
                    <h6 className='text-primary'>CHAT</h6>
                    <div className='d-flex justify-content-between mb-4'>
                        <h3>Chat</h3>
                        <button className=' btn btn-white text-primary'>Filter</button>
                    </div>
                    <div className="card-body ">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img src='/img/p1.png' alt='' />
                                <div className='ms-3 col-12'>
                                    <h6 classname='bg-'>Soham Henry</h6>
                                    <p>Me : Hallo!</p>
                                </div>
                            </div>
                            <div className='text-end'>
                                <p>yesterday</p>
                                <div className=''>
                                    <img src='/img/g10.png' alt='' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="card-body ">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img src='/img/p1.png' alt='' />
                                <div className='ms-3 col-12'>
                                    <h6 classname='bg-'>Soham Henry</h6>
                                    <p>Me : Hallo!</p>
                                </div>
                            </div>
                            <div className='text-end'>
                                <p>yesterday</p>
                                <div className=''>
                                    <img src='/img/g10.png' alt='' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="card-body ">
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img src='/img/p1.png' alt='' />
                                <div className='ms-3 col-12'>
                                    <h6 classname='bg-'>Soham Henry</h6>
                                    <p>Me : Hallo!</p>
                                </div>
                            </div>
                            <div className='text-end'>
                                <p>yesterday</p>
                                <div className=''>
                                    <img src='/img/g10.png' alt='' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr />

                </Container>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

function ModalChat() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button variant="white" onClick={() => setModalShow(true)}>
                <img src='/img/gr5.png' />
            </Button>
            <MyModalTicket show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default ModalChat;