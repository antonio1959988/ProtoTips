import { formatCurrency } from '../helpers'
import type { MenuItem, OrderItem } from '../types'

type OrderContentProps = {
    item: OrderItem,
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({item, removeItem} : OrderContentProps) {
  return (
    <div className=' flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center'>
    
    <div>
    <p className='text-lg'>{item.name} - {formatCurrency(item.price)}</p>
    <p className='font-black'>
      Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
    </div>
    
    <button className='bg-red-600 h-8 w-8 rounded-full text-white font-black' onClick={() => removeItem(item.id)}>X</button>
    </div>
  )
}
