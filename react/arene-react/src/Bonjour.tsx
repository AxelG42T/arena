type Props = { readonly name: string }
function Bonjour({ name }: Props) {
return <p>Bonjour {name}</p>
}
export default function App() {
return (
<>
<Bonjour name="Ada" />
<Bonjour name="Linus" />
</>
)
}