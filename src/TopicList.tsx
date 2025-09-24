

export interface topic {
    title: string;
    subject: string;
}

function renderItem(item: topic) {
    const final:string = ", " + item.subject;
    return (
        <li>
            <p>{item.title}<i>{final}</i></p>
        </li>
    )
}

export const TopicList = ({title, topics}: {title:string, topics: topic[]}) => {
    return <>
    <h3>{title}</h3>
        <ul>
            {topics.map(item => renderItem(item))}
        </ul>
    </>
}