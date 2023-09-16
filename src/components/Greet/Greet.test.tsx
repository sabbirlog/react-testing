import { render, screen } from "@testing-library/react"
import { Greet } from "."

test('renders greet correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/greet/i)
    expect(textElement).toBeInTheDocument()
})

test('renders greet with any name', () => {
    render(<Greet name="sabbir" />)
    const textElement = screen.getByText(`Greet sabbir`)
    expect(textElement).toBeInTheDocument()
})