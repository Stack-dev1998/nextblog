import Head from "next/head";
import styles from "../styles/Forms.module.css";
import { Container, Card } from "react-bootstrap";
import Header from "../components/common/publicHeader";
import SignupForm from "../components/common/SignupForm";
export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div className="d-flex justify-content-center ">
          <div className={styles.forms}>
            <br></br>
            <Card>
              <Card.Header className="text-center">
                <strong>Signup Form</strong>
              </Card.Header>
              <Card.Body>
                <SignupForm />
              </Card.Body>
            </Card>
            <br></br>
          </div>
        </div>
      </Container>
    </div>
  );
}
