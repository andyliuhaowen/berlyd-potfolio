import Link from 'next/link'

class ButtonProps {
  text: string = '';
  href: string = '';
  color: string = '';
}

export default function CustomButton (props: ButtonProps) {
  const borderColor = 'border-' + props.color
  const textColor = 'text-' + props.color
  return (
    <div className={[borderColor, textColor, 'border-2', 'inline-block', 'my-2'].join(' ')}>
      <Link href={props.href}>
        <div className="m-1 font-bold">
          {props.text}
        </div>
      </Link>
    </div>
  )
}
