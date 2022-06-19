import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Text({ setQrText }) {
  const [timeStart, setTimeStart] = useState("");

  const user = {
    email: "haha",
    number: "010123123",
  };

  function handleSubmit(e) {
    e.preventDefault();

    const timeStartFormatted = timeStart.replace(/-/g, "");

    if (timeStartFormatted == 0) {
      alert("시간 입력 필수");
    } else {
      setQrText(`${user.email}_${user.number}_${timeStartFormatted}`);
    }

    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>예약</Form.Label>
        <Form.Control
          type="time"
          value={timeStart}
          onChange={(e) => setTimeStart(e.target.value)}
        />
      </Form.Group>
      <Button variant="warning" type="submit">
        Generate
      </Button>
    </Form>
  );
}

export default Text;
