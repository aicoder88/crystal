import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

// Mock next/link
jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>
  }
})

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('Crystal Deodorant')).toBeInTheDocument()
    expect(screen.getByText('Protection Research')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /the science/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /technical analysis/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /crystal litter guide/i })).toBeInTheDocument()
  })

  it('renders the partner portal link', () => {
    render(<Header />)
    const partnerLinks = screen.getAllByRole('link', { name: /partner portal/i })
    expect(partnerLinks.length).toBeGreaterThan(0)
    expect(partnerLinks[0]).toHaveAttribute('href', 'https://www.purrify.ca')
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })

    // Mobile menu should not be visible initially (links are in desktop nav)
    const mobileNavContainer = document.querySelector('.md\\:hidden.py-4')
    expect(mobileNavContainer).not.toBeInTheDocument()

    // Click to open
    fireEvent.click(menuButton)

    // Mobile menu should now be visible
    const mobileNav = document.querySelector('.md\\:hidden.py-4')
    expect(mobileNav).toBeInTheDocument()

    // Click to close
    fireEvent.click(menuButton)

    // Mobile menu should be hidden again
    const mobileNavClosed = document.querySelector('.md\\:hidden.py-4')
    expect(mobileNavClosed).not.toBeInTheDocument()
  })
})
