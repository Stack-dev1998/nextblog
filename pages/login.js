import Head from "next/head";
import styles from "../styles/Forms.module.css";
import { Container, Card } from "react-bootstrap";
import Header from "../components/common/publicHeader";
import LoginForm from "../components/common/LoginForm";
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
                <strong>Login Form</strong>
              </Card.Header>
              <Card.Body>
                <LoginForm />
              </Card.Body>
            </Card>
            <br></br>
          </div>
        </div>
      </Container>
    </div>
  );
}
