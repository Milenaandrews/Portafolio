import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";


const Appbar = () => {

  const links = [
    {
      nombre: "Acerca de mi",
      href: "/about"
    },
    {
      nombre: "Proyectos",
      href: "/projects"
    },
    // {
    //   nombre: "Contacto",
    //   href: "/contacto"
    // }
  ]
  return (
    <Navbar className="bg-background/20">
      {/* Navbar XS */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center" >
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-cyan-400">Milena Andrews</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link className="text-white" href={link.href}>
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}

      </NavbarMenu>

      {/* Navbar XL */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-cyan-400">Milena Andrews</p>
          </Link>
        </NavbarBrand>

      </NavbarContent>


      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link, i) => (
          <NavbarItem key={i}>
            <Link className="text-white" href={link.href}>
              {link.nombre}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>


      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}

export default Appbar