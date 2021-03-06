import { FC } from 'react'
import Link from 'next/link'
import { Logo, Container } from '@components/ui'
import { UserNav } from '@components/common'
import NavbarRoot from './NavbarRoot'
import s from './Navbar.module.css'

const Navbar: FC = () => (
  <NavbarRoot>
    <Container>
      <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              <Logo />
            </a>
          </Link>
        </div>

        <div className="justify-center flex-1 hidden lg:flex">
          <nav className="hidden ml-6 space-x-4 lg:block">
            <Link href="/">
              <a className={s.link}>Accueil</a>
            </Link>
            <Link href="/shop">
              <a className={s.link}>Shop</a>
            </Link>
          </nav>
        </div>

        <div className="flex justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
