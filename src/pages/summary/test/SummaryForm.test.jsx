import { fireEvent, logRoles, render, screen } from "@testing-library/react"
import SummaryForm from "../SummaryForm"

test("Initial conditions", () => {
  render(<SummaryForm />)
  const checkbox = screen.getByRole("checkbox", { name: "" })
  expect(checkbox).not.toBeChecked()
  const confirmButton = screen.getByRole("button", { name: /confirm order/i })
  expect(confirmButton).toBeDisabled()
})

test("Checkbox disabled button on first click and enables on second click", () => {
  render(<SummaryForm />)
  const checkbox = screen.getByRole("checkbox", {
    name: ""
  })
  const confirmButton = screen.getByRole("button", { name: /confirm order/i })
  fireEvent.click(checkbox)
  expect(confirmButton).toBeEnabled()
  fireEvent.click(checkbox)
  expect(confirmButton).toBeDisabled()
})
