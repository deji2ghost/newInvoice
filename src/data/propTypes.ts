export interface CustomSelectProps{
    options: string[],
    className?: string,
    width?: string
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    value: string
}