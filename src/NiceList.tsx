
export interface listItem  {
    title: string;
    duration?: string;
    description?: string;
    course?: boolean;
    stared?: boolean;
    link?: string
    extraDescription?: string;

}

function renderItem(item: listItem) {
    if(item.duration) {
        const strng = item.title + ", " + item.duration;
        return (
            <li>
                <p className="subt-title"> {strng} </p>
                <p className="description">{item.description}</p>
            </li>
        )
    }
    if(item.course) {
        let strng = item.title + ":";
        if(item.stared) {
            strng = "⭐ " + strng;
        }

        return (
            <li>
                <p className="description"><strong>{strng}</strong>{item.description}</p>
            </li>
        );
    }
    if(item.link) {
        return (
            <li>
                <p className="subt-title"> {item.title}</p>
                <p className="description">{item.description} <a href={item.link}>{item.link}</a>  {item.extraDescription}</p>
            </li>
        )
    }
    else {
        return (
            <li>
                <p className="subt-title"> {item.title} </p>
                <p className="description">{item.description}</p>
            </li>
        )
    }

}

export const NiceList = ({title, items, description }: {title: string, items: listItem[], description?:string}) => {
    return <>
        <h3>{title}</h3>
        {description && <p id="descList" className="description">{description}</p>}
        <ul>
            {items.map(item => renderItem(item))}
        </ul>
        </>
}