import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const SummaryForm = () => {
  const checkboxLabel = (
    <span>
      I agree to<span style={{ color: "blue" }}>Terms and conditions</span>
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
