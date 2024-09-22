interface Props{
    title: string;
    subTitle: string | null;
}

const Header = (props: Props) => {
    return (
        <>
            <h1>{props.title}</h1>
            {props.subTitle != null
             && 
            <h2>props.subTitle</h2>}
        </>
    )
}

export default Header