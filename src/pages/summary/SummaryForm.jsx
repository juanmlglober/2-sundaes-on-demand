import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>No ice cream will actually be delivered</Popover.Body>
  </Popover>
)

const SummaryForm = () => {
  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms and conditions</span>
      </OverlayTrigger>
    </span>
  )

  const [tcChecked, setTcChecked] = useState(true)
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          onChange={(e) => setTcChecked(!e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={tcChecked}>
        Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm
