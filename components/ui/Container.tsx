interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    as?: 'div' | 'section' | 'article' | 'main';
    narrow?: boolean;
}

export default function Container({
    children,
    className = '',
    as: Tag = 'div',
    narrow = false,
}: ContainerProps) {
    return (
        <Tag className={`container${narrow ? ' container--narrow' : ''} ${className}`}>
            {children}
        </Tag>
    );
}
