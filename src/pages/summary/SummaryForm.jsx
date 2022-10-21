import { useState } from "react"

const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true)

  const handleChange = (e) => {
    setDisabled(!e.target.checked)
  }
  
  return (
    <>
      <button disabled={disabled}>my button</button>
      <div>
        <label htmlFor="asd">my checkbox</label>
        <input type="checkbox" id="asd" onChange={handleChange} />
      </div>
    </>
  )
}

export default SummaryForm
