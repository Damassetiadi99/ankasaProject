'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import gr2 from '../../../Assets/img/gr2.png'


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container className='p-5'>
                <p className='text-primary'>Notifications</p>
                <div className='d-flex justify-content-between'>
                    <h5>Notifications</h5>
                    <button className=' btn btn-white text-primary'>Clear</button>
                </div>

                <div className="card mb-2">
                    <div className="card border-info p-4">
                        <h6>Congratulations</h6>
                        <p>lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                        <p>5 hour ago</p>
                    </div>
                </div>

                <div className="card mb-2">
                    <div className="card border-info p-4">
                        <h6>Congratulations</h6>
                        <p>loremmmmmmmmmmmm loremlorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                        <p>5 hour ago</p>
                    </div>
                </div>


            </Container>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

function ModalNotif() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="white" onClick={() => setModalShow(true)}>
                 <img src='/img/gr2.png' alt=''/>
             </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ModalNotif
