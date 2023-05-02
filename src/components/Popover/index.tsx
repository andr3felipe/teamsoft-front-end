import { useContext } from 'react'
import { CardBody, CardHead, PopoverContainer } from './styles'
import { CyclesContext, Item } from '../../contexts/CyclesContext'

interface PopoverProps {
  title: string
  ingredients: Item[]
  variant?: boolean
  count: number
  cutlery: boolean
}

export const Popover = ({
  title,
  ingredients,
  count,
  cutlery,
}: PopoverProps) => {
  const { showPopover } = useContext(CyclesContext)

  return (
    <PopoverContainer variant={showPopover}>
      <div>
        <p>Adicionado com Sucesso</p>
      </div>
      <CardHead>
        <p>{`${count}x ${title}`}</p>
      </CardHead>
      <CardBody>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <ul>
          {ingredients?.map((item) => {
            return <li key={item.id}>{`${item.count}x ${item.nm_item}`}</li>
          })}
        </ul>
        <p>{cutlery === true ? 'Talher: Sim.' : 'Talher: Não.'}</p>
      </CardBody>
    </PopoverContainer>
  )
}
