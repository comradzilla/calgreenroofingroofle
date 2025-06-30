import Link from "next/link"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAButtonProps extends ButtonProps {
  href: string
  external?: boolean
}

export function CTAButton({ children, className, href, external = false, ...props }: CTAButtonProps) {
  const buttonClasses = cn("font-medium transition-colors", className)

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn("inline-block", buttonClasses)}>
        <Button {...props} className={buttonClasses}>
          {children}
        </Button>
      </a>
    )
  }

  return (
    <Link href={href} className="inline-block">
      <Button {...props} className={buttonClasses}>
        {children}
      </Button>
    </Link>
  )
}
