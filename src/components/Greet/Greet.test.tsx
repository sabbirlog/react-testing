import { render, screen } from "@testing-library/react"
import { Greet } from "."

test('renders greet correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/greet/i)
    expect(textElement).toBeInTheDocument()
})