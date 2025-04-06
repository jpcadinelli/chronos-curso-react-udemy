
type DefaultInputProps = {
    id: string;
    children: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, children, type }: DefaultInputProps) {
    return<>
        <label htmlFor={ id }>{ children }</label>
        <input id={ id } type={ type } />
    </>
};
