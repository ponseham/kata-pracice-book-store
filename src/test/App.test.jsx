import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe("Book Store", () => {
    test('Show book store header', () => {
        render(<App />)
        expect(screen.getByText('Books Store')).toBeInTheDocument()
    })
});
