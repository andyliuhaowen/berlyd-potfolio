import Link from 'next/link'

class ButtonProps {
  text: string = '';
  href: string = '';
  color: string = '';
}

export default function CustomButton (props: ButtonProps) {
  return (
    <div className={`border-${props.color} text-${props.color} border-2 inline-block my-2`}>
      <Link href={props.href}>
        <div className="m-1 font-bold">
          {props.text}
        </div>
      </Link>
    </div>
  )
}
