import Link from 'next/link'

const footerLinks = {
  help: [
    { name: 'Help', href: '#' },
    { name: 'Tracking order', href: '#' },
    { name: 'Delivery & returns', href: '#' },
    { name: 'DRIPYLUX Premier', href: '#' },
    { name: 'Sitemap', href: '#' },
  ],
  about: [
    { name: 'About us', href: '#' },
    { name: 'Careers at DRIPYLUX', href: '#' },
    { name: 'Corporate responsibility', href: '#' },
  ],
  more: [
    { name: 'Mobile and DRIPPYLUX apps', href: '#' },
    { name: 'Gift vouchers', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Black Friday', href: '#' },
    { name: 'Refer A friend', href: '#' },
  ],
  socials: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Snapchat', href: '#' },
  ],
}

export const AppFooter = () => {
  return (
    <footer className="mt-4 flex w-full flex-col items-center bg-stone-200 text-stone-700 md:mt-12">
      <div className="my-10 grid w-full grid-cols-2 gap-8 border-y-2 px-4 md:max-w-6xl md:grid-cols-4 md:gap-16 md:px-0">
        <div className="flex w-full flex-col items-start">
          <h2 className="text-md mb-4 font-bold uppercase tracking-wider">help & information</h2>
          {footerLinks.help.map((footerLink) => (
            <Link key={footerLink.name} href={footerLink.href} className="mb-2 hover:underline">
              {footerLink.name}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col items-start">
          <h2 className="text-md mb-4 font-bold uppercase tracking-wider">about DRIPYLUX</h2>
          {footerLinks.about.map((footerLink) => (
            <Link key={footerLink.name} href={footerLink.href} className="mb-2 hover:underline">
              {footerLink.name}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col items-start">
          <h2 className="text-md mb-4 font-bold uppercase tracking-wider">more from DRIPYLUX</h2>
          {footerLinks.more.map((footerLink) => (
            <Link key={footerLink.name} href={footerLink.href} className="mb-2 hover:underline">
              {footerLink.name}
            </Link>
          ))}
        </div>
        <div className="flex w-full flex-col items-start">
          <h2 className="text-md mb-4 font-bold uppercase tracking-wider">socials</h2>
          {/* {footerLinks.help.map((footerLink) => (
            <Link key={footerLink.name} href={footerLink.href} className="mb-2 hover:underline">
              {footerLink.name}
            </Link>
          ))} */}
        </div>
      </div>
      <div className="hidden w-full justify-center bg-stone-300 text-black md:flex">
        <div className="flex w-full py-3 text-xs md:max-w-6xl">
          <span className="mr-auto uppercase">2023 DRIPPYLUX</span>
          <div className="flex gap-4">
            <Link href={'#'}>Privacy & Cookies</Link>
            {'|'}
            <Link href={'#'}>Ts&Cs</Link>
            {'|'}
            <Link href={'#'}>Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
