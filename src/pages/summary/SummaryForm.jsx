import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(true)

  return (
    <Form>
      <Form.Group>
        <Form.Check
          type="checkbox"
          onChange={(e) => setTcChecked(!e.target.checked)}
          label="Terms and Conditions"
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={tcChecked}>
        Confirm Order
      </Button>
    </Form>
  )
}

export default SummaryForm
