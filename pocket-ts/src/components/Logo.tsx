import Image from 'next/image'
import tollyLogo from '../public/tolly-logo.png'
import { clsx } from 'clsx'

export function Logomark(props: React.ComponentPropsWithoutRef<'div'>) {
  const { className, ...rest } = props
  return (
    <div className={clsx('relative', className)} {...rest}>
      <Image 
        src={tollyLogo} 
        alt="Tolly Logo" 
        width={20} 
        height={20}
        className="object-contain"
      />
    </div>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  const { className, ...rest } = props
  return (
    <div className={clsx('relative', className)} {...rest}>
      <Image 
        src={tollyLogo} 
        alt="Tolly Logo" 
        width={40} 
        height={40}
        className="object-contain"
      />
    </div>
  )
}
