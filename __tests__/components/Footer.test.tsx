import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>
  }
})

describe('Footer', () => {
  it('renders the footer heading', () => {
    render(<Footer />)
    expect(screen.getByText('Crystal Protection')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /the science/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /for your home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /crystal litter guide/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument()
  })

  it('renders the Purrify partner links', () => {
    render(<Footer />)
    const purrifyLinks = screen.getAllByRole('link', { name: /purrify/i })
    expect(purrifyLinks.length).toBeGreaterThan(0)
    purrifyLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.purrify.ca')
    })
  })

  it('renders the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  it('renders the Technical Partners section', () => {
    render(<Footer />)
    expect(screen.getByText('Technical Partners')).toBeInTheDocument()
  })
})
