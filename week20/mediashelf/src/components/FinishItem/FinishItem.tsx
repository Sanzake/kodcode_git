import type { Book, Movie } from '../../config/config'

interface FinishItemProps {
    item: Book | Movie
    onToggle: (itemId: string, isFinished: boolean) => void
}


export default function FinishItem(props: FinishItemProps) {
    

    const changeFinished = (e: React.ChangeEvent<HTMLInputElement>) => {
        const itemId = props.item.id
        const isFinished = e.target.checked

        props.onToggle(itemId, isFinished)
    }
    return (
        <>
        <label htmlFor={`finished${props.item.id}`} style={{marginLeft: "auto"}}>Finished</label>
        <input 
            type="checkbox" 
            id={`finished${props.item.id}`}
            checked={props.item.finished}	
            onChange={changeFinished}
            />
    </>
  )
}
