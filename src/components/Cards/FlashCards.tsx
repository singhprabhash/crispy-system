import Image from "next/image";

type Props = {
    date: string,
    title: string,
    src: string,
    alt: string,
    authorPrefix: string,
    authorFullName: string,
    tags: Array<string>
}

export const FlashCards = (props: Props) => {
    return (
        <article className="card">
            <header className="card-header">
                <p>Sep 11th 2020</p>
                <h2>Card Tricks are fun!</h2>
            </header>

            <div className="card-author">
                <a className="author-avatar" href="#">
                    <Image src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="dummy" width={30} height={30} />
                </a>
                <svg className="half-circle" viewBox="0 0 106 57">
                    <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div className="author-name">
                    <div className="author-name-prefix">Pirate</div>
                    Zheng Zhilong
                </div>
            </div>
            <div className="tags">
                <a href="#">html</a>
                <a href="#">css</a>
            </div>
        </article>
    )
}