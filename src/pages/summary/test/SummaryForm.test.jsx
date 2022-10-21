import { fireEvent, render, screen } from "@testing-library/react"
import SummaryForm from "../SummaryForm"

test("checkbox is unchecked by default", () => {
  render(<SummaryForm />)
  const myCheckbox = screen.getByRole("checkbox", { name: "my checkbox" })
  expect(myCheckbox).not.toBeChecked()
  const myButton = screen.getByRole("button", { name: "my button" })
  expect(myButton).toBeDisabled()
  fireEvent.click(myCheckbox)
  expect(myCheckbox).toBeChecked()
  expect(myButton).toBeEnabled()
})
