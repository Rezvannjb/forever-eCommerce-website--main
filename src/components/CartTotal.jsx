import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={'مجموع'} text2={'سبد خرید'} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm ">
        <div className="flex justify-between">
          <p>جمع جزء</p>
          <p>
            {' '}
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <div className="flex justify-between">
          <p>هزینه ارسال</p>
          <p>
            {' '}
            {currency} {delivery_fee}.00
          </p>
        </div>
        <div className="flex justify-between">
          <p>مجموع کل</p>
          <p>
            {' '}
            {currency}{' '}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
