interface TagProps {
    text: string
}

function Tag(props: TagProps): JSX.Element {
    return <div>{props.text}</div>
}

export default Tag
