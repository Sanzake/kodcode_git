interface DeleteItemProps {
    itemId: string
    delete: (itemId: string) => void
}

export default function DeleteItem(props: DeleteItemProps) {
  return (
    <button type='button' onClick={() => props.delete(props.itemId)}>
        X
    </button>
  )
}
