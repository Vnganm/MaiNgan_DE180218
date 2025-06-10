import React from 'react';
import { Card, Image, Container } from 'react-bootstrap';

const Bai4 = () => {
    return (
        <Container className="my-5">

            <Card style={{ width: '500px' }} className="shadow-sm">
                <Card.Body>
                    {/* Hình ảnh */}
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
                        alt="Card"
                        fluid
                        rounded
                        className="mb-3"
                        style={{ maxHeight: '600px', objectFit: 'contain' }}
                    />


                    <div className="fw-bold" style={{ fontSize: '2rem' }}>Mai Ngân</div>

                    {/* Footer */}
                    <div className="mt-3 pt-2 border-top">
                        <p className="small text-muted">Mobile: 012345678</p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Bai4;