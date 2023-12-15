import { MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

//components
import { CartButton } from './AppCart'
import { MobileMenuButton } from './AppMobileMenu'
import { WishlistButton } from './AppWishlist'

export const AppHeader = () => {
  return (
    <header className="flex w-full flex-col items-center">
      <nav className="flex h-auto w-full items-center bg-darkGray px-4 py-4 text-white md:h-16 md:px-14 md:py-0 lg:px-24">
        <div className="flex items-center md:hidden">
          <MobileMenuButton />
          <a href="/">
            <h1 className="font-ransel ml-2 text-2xl tracking-wide">Dripylux</h1>
          </a>
        </div>
        <div className="hidden h-full flex-1 items-center md:flex">
          <a href="/">
            <h1 className="font-ransel mr-4 text-4xl font-bold tracking-wide">Dripylux</h1>
          </a>
          {/* <NavLink
            to={"/women"}
            onClick={() => {
              setOpenCat("women");
            }}
            className="h-full flex items-center justify-center px-8 hover:bg-white hover:text-gray-700 font-bold text-sm"
          >
            WOMEN
          </NavLink>
          <NavLink
            to={"/men"}
            onClick={() => {
              setOpenCat("men");
            }}
            className="h-full flex items-center justify-center px-10 hover:bg-white hover:text-gray-700 font-bold text-smfont-bold text-sm"
          >
            MEN
          </NavLink> */}
          <div className="ml-4 mr-6 flex-1">
            <input
              type="text"
              name="search"
              placeholder="Search for products..."
              className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-sm placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
            />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3 md:gap-6">
          <button className="md:hidden">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>
          <button>
            <UserIcon className="h-6 w-6" />
          </button>
          <WishlistButton />
          <CartButton />
        </div>
      </nav>
      {/* <div className="hidden md:flex items-center justify-center bg-lightGray text-gray-200">
          {openCat === "men" ? (
            <div className="relative flex w-full items-center justify-center gap-4">
              <div className="group">
                <button className="p-2 font-bold">Hello</button>
                <div className="absolute hidden group-hover:block z-10 max-w-5xl left-0 right-0 mx-auto">
                  hello
                </div>
              </div>
            </div>
          ) : openCat === "women" ? (
            <div className="relative flex w-full items-center justify-center gap-4">
              hello
            </div>
          ) : null}
        </div> */}
      <div className="hidden w-full items-center justify-between bg-black tracking-widest text-white md:flex md:px-12 lg:px-20">
        <button className="border-2 border-white px-4 py-1 hover:bg-white hover:text-black">
          WOMEN
        </button>
        <p className="justify-center p-1 text-center">
          NEW HERE? Get 15% off almost on everything!*
          <br />
          with code: <strong>HIFRIEND</strong>
        </p>
        <button className="border-2 border-white px-4 py-1 hover:bg-white hover:text-black">
          MEN
        </button>
      </div>
    </header>
  )
}
