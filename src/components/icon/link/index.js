import React from 'react'
import Link from 'next/link'

export default function IconLink(props) {
    const { href, image } = props
    return (
        <div {...props}>
            <Link href={href}>
                {<a target="_blank"><img className="img-fluid" src={`images/${image}`} /></a>}
            </Link>
        </div>
    )
}
