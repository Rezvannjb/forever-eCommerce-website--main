import { useContext } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Orders = () => {
  const { orders, products, currency } = useContext(ShopContext);

  // Function to format the current date
  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Get the current date
  const currentDate = formatDate(new Date());

  return (
    <div className="pt-16 border-t">
      <div className="mb-3 text-2xl">
        <Title text1={'سفارشات'} text2={'من'} />
      </div>

      {orders.length === 0 ? (
        <p className="text-gray-500">شما هیچ سفارشی ندارید.</p>
      ) : (
        <div>
          {orders.map((order, index) => {
            const productData = products.find(
              (product) => product._id === order._id
            );

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between g4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={productData.image[0]}
                    alt=""
                    className="w-16 sm:w-20"
                  />

                  <div>
                    <p className="sm:text-base font-medium">
                      {productData.name}
                    </p>

                    <div className="flex items-center gap-5 mt-2 text-base text-gray-700">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p>تعداد: {order.quantity}</p>
                      <p>سایز: {order.size}</p>
                    </div>
                    <p className="mt-2">
                      تاریخ: <span className="text-gray-400">{currentDate}</span>
                    </p>
                  </div>
                </div>

                <div className="flex justify-between md:w-1/2">
                  <div className="flex items-center gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                    <p className="text-sm md:text-base">آماده ارسال</p>
                  </div>
                  <button className="border px-4 py-2 text-sm font-medium rounded-sm text-gray-700">
                    پیگیری سفارش
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
