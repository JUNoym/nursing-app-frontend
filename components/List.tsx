import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <>
      <li key={item.id}>
        <ListItem data={item} />
      </li>
      <p>aaaa</p>
      </>
    ))}
  </ul>
)

export default List
