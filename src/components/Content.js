import React from 'react'

export default function Content({children, content}) {
    return <header className={content}>{children}</header>;
}
Content.defaultProps = {
    content: "defaultContent"
};