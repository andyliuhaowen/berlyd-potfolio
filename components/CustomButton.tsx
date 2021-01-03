import Link from 'next/link'

class ButtonProps {
  text: string = '';
  href: string = '';
  color: string = '';
}

export default function CustomButton (props: ButtonProps) {
  return (
    <div className={'text-' + props.color}>
      <Link href={props.href}>
        {props.text}
      </Link>
    </div>
  )
}
