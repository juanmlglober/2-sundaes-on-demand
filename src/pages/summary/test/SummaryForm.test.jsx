import { render } from '@testing-library/react'
import { SummaryForm } from '../SummaryForm'

test("checkbox is unchecked by default", () => {
  render(<SummaryForm />)
})