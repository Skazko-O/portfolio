const icons = [
    'html5',
    'css3',
    'javascript',
    'typescript',
    'github',
    'react',
    'bootstrap',
    'figma'
];

export default function Tools() {
    return (
        <>
            <div className="flex-box-icons">
                {icons.map((name) => (
                    <svg className="icon" key={name}>
                        <use xlinkHref={`/assets/images/sprite.svg#${name}`} />
                    </svg>
                ))}
            </div>
        </>
    )
}