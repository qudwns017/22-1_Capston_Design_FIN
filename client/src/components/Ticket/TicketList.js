import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import QRCode from 'react-qr-code';
import { QrReader } from 'react-qr-reader';
import Text from './QRcode/QRcode';
import QRreader from './QRcode/QRreader';
import styles from "./Ticket.module.css";

function QRmake() {

  const [qrText, setQrText] = useState("");

  return (
    <Container className={styles.box}>
      	<h1 className='my-4'>예약하기</h1>
      	{qrText.length > 0 && <QRCode value={qrText} />}
        <Tab.Container defaultActiveKey="text">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
 		                    <Nav.Link eventKey="text">예약시간</Nav.Link>
	                    </Nav.Item>
                      <Nav.Item>
 		                    <Nav.Link eventKey="qrreader">QR인증</Nav.Link>
	                    </Nav.Item>
                    </Nav>
				          </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="text">
    	                  <Text setQrText={setQrText} />
                      </Tab.Pane>      
                      <Tab.Pane eventKey="qrreader">
                        <QRreader/>
                      </Tab.Pane>               
                    </Tab.Content>
				          </Col>
				        </Row>
		    </Tab.Container>
      </Container>
  );
}

export default QRmake;